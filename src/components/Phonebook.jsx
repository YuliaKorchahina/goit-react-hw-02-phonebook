import { Formik, Field } from 'formik';
import { FormField, Form, ErrorMessage } from './FormStyle.styled';
import { nanoid } from 'nanoid';
// import * as Yup from 'yup';
const initialValues = {
  name: '',
};

export const Phonebook = ({ onSave }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        onSave({
          ...values,
          id: nanoid(),
        });
        actions.resetForm();
      }}
    >
      <Form>
        <FormField>
          Name
          <Field
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" component="span" />
        </FormField>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
