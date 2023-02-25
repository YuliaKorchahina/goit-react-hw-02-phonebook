export const ContactsList = ({ contacts }) => {
  return (
    <ul>
      <li>Eden Clements</li>
      {contacts.map(({ id, name, number }) => (
        <li key={id} >
          {name} : {number}
        </li>
      ))}
    </ul>
  );
};