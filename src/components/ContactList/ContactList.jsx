import { List } from './List.styled';
const ContactList = ({ contacts }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
        </li>
      ))}
    </List>
  );
};
export default ContactList;
