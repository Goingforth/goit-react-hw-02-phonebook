import { List } from './List.styled';
import ContactItem from 'components/App/ContactItem/ContactItem';
const ContactList = ({ contacts }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id} name={name} number={number} />
      ))}
    </List>
  );
};
export default ContactList;
