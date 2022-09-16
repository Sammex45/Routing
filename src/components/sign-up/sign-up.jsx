import React from "react";
import './sign-up.css';
import content from "../../static/index"
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {Link} from 'react-router-dom';



function Signup() {

    const schema = yup.object().shape(
        {
            Fullname: yup.string().required("name is required").min(6),
            email: yup.string().required("Please enter email"),
            password: yup.string().required("Please enter a password").matches(
                /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
            )
        })


    const { register, handleSubmit, formState: { errors } } = useForm(
        
	{
        resolver: yupResolver(schema)
    }
    );

    const onSubmit = (data) => console.log(data)

    return (
        <div className="sign-up">
            <h1>Don't Have an account</h1>
            <h3>Sign up here!</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                {content.inputs.map((input, key) => {
                    return (
                        <div key={key}>
                            <label htmlFor={input.name}>{input.label}</label>
                            <br />
                            
                            <input type={input.type} name={input.name} {...register(input.name)} />
                            <br />
                            <span className="message">{errors[input.name]?.message}</span>
                        </div>
                    )
                })}
                <label for="option">User Type</label>
                <select id="option" >
                    <option value="Developer">Developer</option>
                    <option value="Owner">Owner</option>
                </select>
                <button>SIGN UP</button>
            </form>
            <p>Have an account? <Link to="/signin">sign in</Link></p>
                             <p><Link to="/">Back to Home</Link></p>
        </div>
    )
}
export default Signup;