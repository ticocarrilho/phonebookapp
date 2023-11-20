import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAddressBook, faPlus, 
} from "@fortawesome/free-solid-svg-icons";
import { ContactModal } from '../../ContactModal/ContactModal';
import { useModal } from '../../../hooks/useModal';
import { addContact } from '../../../services/contactServices';
import toast from 'react-hot-toast';

export function PhonebookHeader({ refreshCallback }) {
  const { isModalOpen, openModal, handleClose } = useModal();


  const handleAdd = (contact) => {
    addContact(contact)
      .then(() => {
        refreshCallback();
        toast.success("Contact Added.");
      })
      .finally(() => handleClose());
  };

  return (
    <>
      <div className="flex flex-row gap-3 justify-center text-3xl font-medium">
        <FontAwesomeIcon className="my-auto" icon={faAddressBook} />
        <p>Phone Book App</p>
      </div>
      <div className="flex flex-row justify-between">
        <p className="font-semibold text-2xl">Contacts</p>
        <button onClick={openModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <FontAwesomeIcon className="my-auto text-gray" icon={faPlus} />
        </button>
      </div>
      <ContactModal isAddModalOpen={isModalOpen} handleAction={handleAdd} handleClose={handleClose} mode="Add"></ContactModal>
    </>
  );
}