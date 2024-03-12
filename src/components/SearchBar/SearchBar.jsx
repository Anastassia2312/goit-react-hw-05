import { Field, Form, Formik } from "formik";
import { useSearchParams } from "react-router-dom";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [params, setParams] = useSearchParams();
  const value = params.get("query") ?? "";

  const changeFilter = (newFilter) => {
    params.set("query", newFilter);
    setParams(params);
  };
  return (
    <Formik
      initialValues={{ topic: value }}
      onSubmit={(values, actions) => {
        onSearch(values.topic);
        changeFilter(values.topic);
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <Field className={css.input} name="topic" />
        <button className={css.button} type="submit">
          Search
        </button>
      </Form>
    </Formik>
  );
}
