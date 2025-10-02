import React, { useState } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { backEndApi } from "./../../Shop/index";
import { Navigate } from "react-router";
// Assuming backEndApi is correctly defined

// --- 1. Define Yup Validation Schema ---
const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("First Name is required"),
  // lastName: Yup.string()
  //   .min(2, "Too Short!")
  //   .max(50, "Too Long!")
  //   .required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function RegisterPage() {
  const [status, setStatus] = useState({ error: null, success: false });

  // --- 2. Handle Form Submission ---
  const handleRegister = async (values, { setSubmitting, resetForm }) => {
    setStatus({ error: null, success: false });

    try {
      // Strapi requires 'username'. We use the email for simplicity.
      const payload = {
        username: values.username,
        email: values.email,
        password: values.password,
        // These are custom fields; ensure your Strapi User model is extended
        // firstName: values.firstName,
        // lastName: values.lastName,
      };

      const res = await axios.post(`${backEndApi}auth/local/register`, payload);

      console.log("Registration Success:", res.data);
      setStatus({ error: null, success: true });
      // Optionally clear the form after successful submission
      resetForm();

      // After success, you would typically:
      // 1. Store the token: localStorage.setItem('jwt', res.data.jwt);
      // 2. Redirect: navigate('/dashboard');
      localStorage.setItem("token", res.data.jwt);
      setTimeout(() => {
        Navigate("/");
      }, 1000);
    } catch (err) {
      // Extract the error message from the Strapi response
      const msg =
        err.response?.data?.error?.message ||
        "Registration failed due to a server error.";
      setStatus({ error: msg, success: false });
      console.error("Registration Error:", err);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-stone-50 p-6">
      <div className="bg-white p-10 shadow-lg rounded-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Create account
        </h2>

        {/* Status Messages */}
        {status.success && (
          <div className="mb-4 p-3 text-green-700 bg-green-100 border border-green-200 rounded">
            Success! Your account has been created.
          </div>
        )}
        {status.error && (
          <div className="mb-4 p-3 text-red-700 bg-red-100 border border-red-200 rounded">
            Error: {status.error}
          </div>
        )}

        {/* --- 3. Formik Setup --- */}
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={handleRegister}
        >
          {({ isSubmitting, isValid, dirty }) => (
            <Form className="space-y-4">
              {/* First Name Field */}
              <Field
                type="text"
                name="username"
                placeholder="username"
                className="w-full p-3 border border-gray-300 rounded focus:ring-orange-500 focus:border-orange-500"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500 text-sm"
              />

              {/* Last Name Field */}
              {/* <Field
                type="text"
                name="lastName"
                placeholder="Last name"
                className="w-full p-3 border border-gray-300 rounded focus:ring-orange-500 focus:border-orange-500"
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-red-500 text-sm"
              /> */}

              {/* Email Field */}
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded focus:ring-orange-500 focus:border-orange-500"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />

              {/* Password Field */}
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="w-full p-3 border border-gray-300 rounded focus:ring-orange-500 focus:border-orange-500"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm"
              />

              {/* CREATE Button */}
              <button
                type="submit"
                disabled={isSubmitting || !isValid || !dirty}
                className="w-full py-3 mt-6 text-white font-semibold rounded-lg bg-orange-600 hover:bg-orange-700 transition duration-150 disabled:bg-gray-400"
              >
                {isSubmitting ? "CREATING..." : "CREATE"}
              </button>
            </Form>
          )}
        </Formik>

        <div className="text-center mt-6">
          <a
            href="#"
            className="text-sm text-gray-600 hover:text-orange-600 underline"
          >
            Return to store
          </a>
        </div>
      </div>
    </div>
  );
}
