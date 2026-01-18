import { useEffect, useState } from "react";
import { login } from "../services/authService";
import keycloak from "../services/keycloakService";

export default function Login() {
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        keycloak.init({
            onLoad: "check-sso",
            pkceMethod: "S256"
        }).then(authenticated => {
            if (authenticated) {
                localStorage.setItem("token", keycloak.token);
                window.location.href = "/home";
            }
        });
    }, []);

    const handleLogin = async () => {
        try {
            const res = await login(identifier, password);
            localStorage.setItem("token", res.data.accessToken);
            alert("Login success");
            window.location.href = "/home";
        } catch (err) {
            alert("Login failed");
        }
    };

    const loginWithGoogle = () => {
        keycloak.login({
            idpHint: "google"
        });
    };

    return (
        <div>
            <h2>Login</h2>

            <input
                placeholder="Username or Email"
                onChange={(e) => setIdentifier(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleLogin}>Login</button>

            <hr />

            <button onClick={loginWithGoogle}>
                Login with Google
            </button>

            <p>
                <a href="/register">Register</a>
            </p>
        </div>
    );
}
