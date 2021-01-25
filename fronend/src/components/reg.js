import axios from "axios";
import React, { useState } from "react";
import "../primitive.css";
import { navigate } from "@reach/router"

const Reg = props => {

  const initialState = {
    username: '',
    email: '',
    password: ''
  }

  const [user, setUser] = useState(initialState)

  const handleChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  const submitForm = (event) => {
    console.log(user);
    event.preventDefault();

    axios.post("http://localhost:5000/api/register", user).then(res => {
      console.log(res);
      if (res.status == 201) {
        alert("Registration Successful, Please Login");
        navigate(`/login`);
      }
    });
  }

  const resetForm = () => {
    this.setState(this.initialState)
  }

  return (
    <div className="medium-container">
      <form onSubmit={submitForm} onReset={resetForm}>
        <label>Username</label>
        <input type="text" name="username" id="uername" value={user.username} onChange={handleChange} required />
        <label>Email</label>
        <input type="text" name="email" id="email" value={user.email} onChange={handleChange} required />
        <label>Password</label>
        <input type="password" name="password" id="password" value={user.password} onChange={handleChange} required /><br />
        <button type="submit" className="button">Register</button>&nbsp;&nbsp;&nbsp;
        <button type="reset" className="button muted-button">Cancel</button>
      </form>
    </div>
  );
};

export default Reg;
