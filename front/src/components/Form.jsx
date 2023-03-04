import React from "react";
import validate from "./validation";

export default function Form({login}) {
    const [userData, setUserData] = React.useState({ username: '', password: '' });
    const [errors, setErrors] = React.useState({ username: '', password: '' });
    const handleInputChange = ({target}) => {
        setUserData({...userData, [target.name]: target.value});
        setErrors(validate({...userData}))
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        login(userData)
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input name='username' type= 'text' value={userData.username} onChange={handleInputChange}></input>
            {errors.username && <p>{errors.username}</p>}
            <label>Password</label>
            <input name='password' type= 'text' value={userData.password} onChange={handleInputChange}></input>
            {errors.password && <p>{errors.password}</p>}
            <button type="submit">LOGIN</button>
        </form>
    )
};