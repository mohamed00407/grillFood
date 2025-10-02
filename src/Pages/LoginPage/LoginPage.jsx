import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

import ErrorMes from "./../../Component/ErrorMes/ErrorMes";
import axios from "axios";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router";
import Home from "../Home/Home";
import { backEndApi } from "../../Shop";

export default function LoginPage() {
  const navigate = useNavigate();
  const handleLogin = async (values) => {
    const data = {
      identifier: values.email,
      password: values.password,
    };
    try {
      const res = await axios.post(`${backEndApi}auth/local`, data);
      let token = res.data.jwt;
      console.log(res);
      localStorage.setItem("token", token);
      toast.success("Login Success");
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      toast.success("Login Failed");
      console.log(error);
    }
  };
  const validFromYup = Yup.object({
    email: Yup.string().required(),
    password: Yup.string().required(),
  });

  return (
    <>
      <div className="bg-stone-100 min-h-screen flex items-center justify-center py-12">
        <div className="bg-white p-8 sm:p-12 rounded-lg shadow-md max-w-sm w-[1000px] text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Log in to your account
          </h2>
          <Formik
            onSubmit={handleLogin}
            initialValues={{ email: "", password: "" }}
            validationSchema={validFromYup}
          >
            <Form>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                className="w-full px- py-3 mb-4  rounded-md bg-gray-100 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></Field>
              <ErrorMes name={"email"} />
              <Field
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 mb-4 rounded-md bg-gray-100 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></Field>
              <ErrorMes name={"password"} />
              <div className="mb-4">
                <p>
                  <a href="#">Forgot Your Password</a>
                </p>
              </div>
              <button
                className="bg-[var(--Main-Color)] w-full px-4 py-3"
                type="submit"
              >
                Sign In
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}
