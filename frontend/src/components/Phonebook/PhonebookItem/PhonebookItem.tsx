import { faPen, faPhone, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useModal } from "../../../hooks/useModal";
import { ContactModal } from "../../ContactModal/ContactModal";
import toast from "react-hot-toast";
import { deleteContact, editContact } from "../../../services/contactServices";
import { DeleteModal } from "../../DeleteModal/DeleteModal";

export function PhonebookItem({ contact, refreshCallback }) {
  const { isModalOpen: isDeleteModalOpen, openModal: openDeleteModal, handleClose: handleDeleteClose } = useModal();
  const { isModalOpen: isEditModalOpen, openModal: openEditModal, handleClose: handleEditClose } = useModal();


  const handleEdit = (editedContact) => {
    editContact(contact._id, editedContact )
      .then(() => {
        refreshCallback();
        handleEditClose();
        toast.success("Contact Edited.");
      })
      .finally(() => handleEditClose())
  };

  const handleDelete = () => {
    deleteContact(contact._id).then(() => {
      refreshCallback();
      toast.success("Contact Deleted.");
    })
    .finally(() => handleDeleteClose());
  };

  return (
    <>
      <div className="flex flex-col bg-white p-4">
        <div className="flex flex-row justify-between gap-3 flex-wrap">
          <span className="overflow-hidden whitespace-nowrap text-ellipsis w-full basis-4/5">{`${contact.firstName} ${contact.lastName}`}</span>
          <button
            onClick={() => openEditModal()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded basis-1/12">
            <FontAwesomeIcon className="my-auto text-gray" icon={faPen} />
          </button>
          <button
            onClick={() => openDeleteModal()}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded basis-1/12">
            <FontAwesomeIcon className="my-auto text-gray" icon={faTrashCan} />
          </button>
        </div>
        <div className="flex flex-row text-gray-400 gap-3">
          <FontAwesomeIcon className="my-auto text-gray" icon={faPhone} />
          <span>{contact.phone}</span>
        </div>
      </div>
      <ContactModal
        isAddModalOpen={isEditModalOpen}
        handleAction={handleEdit}
        handleClose={handleEditClose}
        mode="Edit"
        contact={contact}></ContactModal>
      <DeleteModal
        isDeleteModalOpen={isDeleteModalOpen}
        handleDelete={handleDelete}
        handleClose={handleDeleteClose}></DeleteModal>
    </>
  );
}
