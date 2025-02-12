import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { TbShoppingCartFilled } from "react-icons/tb";
import { Form,Formik } from "formik";
import FormInput from './FormInput';
import {FormikInput} from './Input';

function ForgotPassword() {
  const schema = Yup.object().shape({
    email: Yup.string().email().required("Enter your email")
  });
  function callApi(){
    console.log("Sending data");
  }
  const initialValues= {
      email: ''
    };

  return (
    <div className="flex flex-col items-center justify-center grow bg-indigo-300 px-4 py-6">
      <Formik initialValues= {initialValues} 
        onSubmit ={callApi}
        validationSchema= {schema}
        validateOnMount>
        <Form
        className="flex flex-col items-center gap-6 justify-center bg-blue-400 p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <TbShoppingCartFilled className="text-white text-9xl mb-4" />
          <FormInput
            label= "Email"
            id = "email"
            type="email"
            name='email'
            required
            autoComplete = "email"
            placeholder="E-MAIL"
          />
        <button
          type="submit"
          className="bg-blue-600 outline-none sm:w-52 w-32 py-2 rounded-md text-white hover:bg-blue-700 transition-colors disabled:bg-gray-300"
        >
          Proceed
        </button>
        <div className="text-gray-700">
          <Link to={"/SignUp"} className="text-blue-600 underline hover:font-semibold"> Create new Account </Link>
        </div>
          <div className="text-gray-700">
            <Link to={"/login"} className="text-blue-600 underline hover:font-semibold"> Back to Login </Link>
          </div>
      </Form>
      </Formik>
    </div>
  );
}

export default ForgotPassword;