import { PhonebookItem } from "../PhonebookItem/PhonebookItem";

const PhonebookListTable = (phonebookList) => {
  return <div className="flex flex-col divide-y divide-gray-300 border-gray-300 rounded border-[1px]">
    {phonebookList}
  </div>
}

export function PhonebookList({ contacts, refreshCallback }) {

  const phonebookList = contacts.map((contact: any) => {
    return (
      <PhonebookItem
        key={contact._id}
        contact={contact}
        refreshCallback={refreshCallback}></PhonebookItem>
    );
  });
  return (
    <>
        {contacts && contacts.length > 0 ? PhonebookListTable(phonebookList) : <p className="text-center">No contact found.</p>}
    </>
  );
}
