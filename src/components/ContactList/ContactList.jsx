import { useDispatch, useSelector } from 'react-redux';
import s from './ContactList.module.css';
import { remove } from 'redux/contacts/contactsSlice';

const ContactList = () => {

  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const filterContacts = () => {
    return contacts.filter(el => el.name.toLowerCase().includes(filter));
  };

  const filteredContacts = filterContacts();

  return (
    <>
      <ul className={s.contactList}>
        {filteredContacts.map(({ name, number, id }) => (
          <li key={id} className={s.contactItem}>
            <p className={s.text}>{name}:</p>
            <p className={s.text}>{number}</p>
            <button
              className={s.contactBtn}
              onClick={() => dispatch(remove(id))}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
