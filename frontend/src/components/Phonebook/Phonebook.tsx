import { PhonebookList } from './PhonebookList/PhonebookList';
import { PhonebookHeader } from './PhonebookHeader/PhonebookHeader';
import { PhonebookInput } from './PhonebookInput/PhonebookInput';
import { useEffect, useState } from 'react';
import { getContacts } from '../../services/contactServices';

export function Phonebook() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getAndSetContacts();
  }, []);

  const getAndSetContacts = () => {
    getContacts().then((contacts) => setContacts(contacts));
  };

  return (
    <div className="flex flex-col gap-3">
      <PhonebookHeader refreshCallback={getAndSetContacts}></PhonebookHeader>
      <PhonebookInput setContacts={setContacts}></PhonebookInput>
      <PhonebookList refreshCallback={getAndSetContacts} contacts={contacts}></PhonebookList>
    </div>
  );
}