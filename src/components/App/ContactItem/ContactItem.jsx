import { ButtonDelete, Item } from './ContactItem.styled';
const ContactItem = ({ name, number }) => {
  return (
    <Item>
      <span>{name}:</span> <span>{number}</span>{' '}
      <ButtonDelete>Delete</ButtonDelete>
    </Item>
  );
};
export default ContactItem;
