import React from "react";
import { Link ,Navigate} from "react-router-dom";
import * as Yup from "yup";
import { TbShoppingCartFilled } from "react-icons/tb";
import { Formik,Form } from "formik";
import axios from 'axios'
import FormInput from './FormInput';
import {FormikInput} from './Input';

function login({setUser,user}) {

  const schema = Yup.object().shape({
    email: Yup.string().email().required("Enter your email"),
    password: Yup.string().min(8).required("Enter your password")
  });
  if(user){
    console.log("In login page user",user);
     return (<Navigate to="/"/>)
  }
  function callApi(values){
      axios
        .post("https://myeasykart.codeyogi.io/login",
           {email:values.email,
            password:values.password}
          ).then(res=>{
            const {user,token} = res.data;
            localStorage.setItem("token" ,token)
            setUser(user); 
        });
    }

 const initialValues = {email: '',password: ''}

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
          <FormInput
            label = "password"
            id = "password"
            type="password"
            name='password'
            required
            autoComplete = "password"
            placeholder="PASSWORD"
          />
        <button
          type="submit"
          className="bg-blue-600 outline-none sm:w-52 w-32 py-2 rounded-md text-white hover:bg-blue-700 transition-colors disabled:bg-gray-300"
        >
          LOGIN
        </button>
        <div className=" text-sm">
          <Link to={"/forgotPassword"} className="text-blue-600 hover:underline">
            Forgot password?
          </Link>
        </div>
        <div className="text-gray-700">
          Don't have an account? 
          <Link to={"/SignUp"} className="text-blue-600 underline hover:font-semibold"> Sign up </Link>
        </div>
      </Form>
      </Formik>
      </div>
  );
}

export default login;