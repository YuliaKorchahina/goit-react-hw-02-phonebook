export const ContactsList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name }) => (
        <li key={id} {...contacts}>
          {name}
        </li>
      ))}
    </ul>
  );
};
