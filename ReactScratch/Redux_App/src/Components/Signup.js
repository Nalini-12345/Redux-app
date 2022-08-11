import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form} from 'formik';
import  {Textfield}  from "./Textfield";
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { updateUser } from "../features/user/userSlice";

export const Signup = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const validate = Yup.object({
        firstName : Yup.string()
        .matches(/^[aA-zZ\s]+$/, "Please enter valid name")
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
        lastName : Yup.string()
        .matches(/^[aA-zZ\s]+$/, "Please enter valid name")
        .max(10, 'Must be 10 characters or less')
        .required('Required'),
        email : Yup.string()
        .email('Email is invalid')
        .required('Email is Required'),
        password : Yup.string()
        .min(6, 'Password must be at least characters')
        .required('Password is Required'),
        confirmPassword : Yup.string()
        .oneOf([Yup.ref('password'), null], 'password must match')
        .required('Confirm Password is Required'),
    })
  return (
    <Formik
        initialValues = {{
            firstName : '',
            lastName : '',
            email : '',
            password : '',
            confirmPassword: ''
        }}
        validationSchema = {validate}
        onSubmit = {values => {
            dispatch(updateUser({ values }));
            navigate("/");
            console.log(values);
            console.log(values.firstName);
        }}
       
        >
        {formik => (
            <div>
                <h1 className="my-4 font-weight-bold-display-">Sign Up</h1>
                {/* {console.log(formik.values)} */}
                <Form>
                    <Textfield label="First Name" name="firstName" type="text" /> 
                    <Textfield label="Last Name" name="lastName" type="text" />
                    <Textfield label="Email" name="email" type="text" />
                    <Textfield label="Password" name="password" type="password" />
                    <Textfield label="Confirm Password" name="confirmPassword" type="password" />
                    <button className="btn btn-dark mt-3" type="submit"> Register </button>
                    <button className="btn btn-danger mt-3 ml-3" type="reset"> Reset </button>
                </Form>
            </div>
        )}
    </Formik>
  )
}
