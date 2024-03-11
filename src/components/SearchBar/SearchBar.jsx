import { Field, Form, Formik } from "formik";

export default function SearchBar({ onSearch }) {
  return (
    <Formik
      initialValues={{ topic: "" }}
      onSubmit={(values, actions) => {
        onSearch(values.topic);
        actions.resetForm();
      }}
    >
      <Form>
        <Field name="topic" />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
}
