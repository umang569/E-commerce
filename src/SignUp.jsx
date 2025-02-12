import React from "react";
import { Link ,Navigate} from "react-router-dom";
import * as Yup from "yup";
import { TbShoppingCartFilled } from "react-icons/tb";
import { Form,Formik } from "formik";
import FormInput from './FormInput';
import {FormikInput} from './Input';
import axios from 'axios';

function SignUp({setUser,user}) {
  const schema = Yup.object().shape({
    email: Yup.string().email().required("Enter your email")
  });
  if(user){
    console.log("In login page user",user);
     return (<Navigate to="/"/>)
  }
  function callApi(values){
    axios
      .post("https://myeasykart.codeyogi.io/signup",
         {fullName:values.UserName,
          email:values.email,
          password:values.password}
        ).then(res=>{
            const {user,token} = res.data;
            localStorage.setItem("token" ,token)
            setUser(user); 
            console.log("Signin Success");
        }).catch(err=>{
          console.log(err);
        })
  }
  const initialValues= {
      UserName:'',
      email: '',
      password: ''
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
              label="UserName"
              id="UserName"
              type="text"
              name='UserName'
              required
              autoComplete = "UserName"
              placeholder="USERNAME"
          />
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
          Register
        </button>
        <div className="text-gray-700">
          Already have an account? 
          <Link to={"/login"} className="text-blue-600 underline hover:font-semibold"> Login In </Link>
        </div>
      </Form></Formik>
    </div>
  );
}

export default SignUp;