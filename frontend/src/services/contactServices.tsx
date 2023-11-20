import toast from "react-hot-toast";

export async function getContacts() {
  try {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/contacts`);
    if (!res.ok) throw new Error(res.status.toString());
    return await res.json();
  } catch (error) {
    toast.error("Error loading contacts.");
    throw error;
  }
}

export async function getContactsByLastname(lastname: string) {
  try {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/contacts/${lastname}`);
    if (!res.ok) throw new Error(res.status.toString());
    return await res.json();
  } catch (error) {
    toast.error("Error loading contacts.");
    throw error;
  }
}

export async function deleteContact(id: string) {
  try {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/contacts/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error(res.status.toString());
    return await res.json();
  } catch (error) {
    toast.error("Error deleting contact.");
    throw error;
  }
}

export async function editContact(id, editedContact) {
  try {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/contacts/${id}`, {
      method: "PUT",
      body: JSON.stringify(editedContact),
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) throw new Error(res.status.toString());
    return await res.json();
  } catch (error) {
    toast.error("Error editing contact.");
    throw error;
  }
}

export async function addContact(contact) {
  try {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/contacts`, {
      method: "POST",
      body: JSON.stringify(contact),
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) throw new Error(res.status.toString());
    return await res.json();
  } catch (error) {
    toast.error("Error creating contact.");
    throw error;
  }
}
