import React from "react";
import './sign-in.css';
import {Link} from 'react-router-dom';


function Signin(){

    return(
        <div className="sign-in">
        <h1>Have an account Already</h1>
        <h3>sign in here!</h3>
        
        <form>
                <label for="email">Email</label>
                <input name="email" type="email" />

                <label for="password">Password</label>
                <input name="password" type="password" />

                <label for="text">Project Name</label>
                <input name="text" type="text" />

                <button>SIGN IN</button>
            </form>
            <p>Don't have an account?<Link to="/signup">sign up</Link></p>
                                    <p><Link to="/">Back to Home</Link></p>
        </div>
    );
}

export default Signin;