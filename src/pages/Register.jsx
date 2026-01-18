import { useState } from "react";
import { register } from "../services/authService";

export default function Register() {
    const [form, setForm] = useState({
        username: "",
        password: "",
        email: "",
        firstName: "",
        lastName: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleRegister = async () => {
        try {
            await register(form);
            alert("Register success");
            window.location.href = "/";
        } catch (err) {
            alert("Register failed");
        }
    };

    return (
        <div>
            <h2>Register</h2>

            <input name="username" placeholder="Username" onChange={handleChange} />
            <input name="password" type="password" placeholder="Password" onChange={handleChange} />
            <input name="email" placeholder="Email" onChange={handleChange} />
            <input name="firstName" placeholder="First Name" onChange={handleChange} />
            <input name="lastName" placeholder="Last Name" onChange={handleChange} />

            <button onClick={handleRegister}>Register</button>
        </div>
    );
}
