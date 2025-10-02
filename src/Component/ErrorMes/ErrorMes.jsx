import { ErrorMessage } from "formik";

export default function ErrorMes(name) {
  return (
    <>
      <ErrorMessage name={{ name }}>
        {(msg) => <span className="block text-[var(--Main_Color)]">{msg}</span>}
      </ErrorMessage>
    </>
  );
}
