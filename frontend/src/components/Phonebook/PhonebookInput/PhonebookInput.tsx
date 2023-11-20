import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { debounce } from "lodash";
import { useCallback, useMemo, useState } from "react";
import { getContactsByLastname } from "../../../services/contactServices";

export function PhonebookInput({ setContacts }) {
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearch = useMemo(
    () =>
      debounce(async (term) => {
        try {
          const results = await getContactsByLastname(term);
          setContacts(results);
          console.log(results);
        } catch (error) {
          console.error("Error fetching search results:", error);
        }
      }, 300),
    [setContacts]
  );

  const handleChange = useCallback(
    (e) => {
      setSearchTerm(e.target.value);
      debouncedSearch(e.target.value);
    },
    [debouncedSearch]
  );

  return (
    <div>
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <FontAwesomeIcon className="my-auto text-gray" icon={faAddressBook} />
        </span>
        <input
          type="search"
          className="py-2 text-sm border border-gray-200 rounded pl-10 w-full"
          placeholder="Search by last name"
          value={searchTerm}
          onChange={handleChange}></input>
      </div>
    </div>
  );
}
