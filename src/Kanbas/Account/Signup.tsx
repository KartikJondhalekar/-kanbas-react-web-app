import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";

export default function Signup() {
    const [user, setUser] = useState<any>({});
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const signup = async () => {
        try {
            const currentUser = await client.signup(user);
            dispatch(setCurrentUser(currentUser));
            navigate("/Kanbas/Account/Profile");
        }
        catch (error: any) {
            setError(error.response.data.message);
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center" style={{ height: 100 }}>
                <div className="col-md-4">
                    <div id="wd-signup-screen" className="text-center">
                        <h1 className="text-danger">Sign up</h1>
                        {error && <div className="alert alert-danger">{error}</div>}
                        <input value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })}
                            id="wd-username" className="form-control mb-2" placeholder="username" />
                        <input value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} type="password"
                            id="wd-password" className="form-control mb-2" placeholder="password" />
                        <button onClick={signup} id="wd-signup-btn" className="btn btn-danger w-100 mb-2"> Sign up </button><br />
                        <Link to="/Kanbas/Account/Signin" id="wd-signin-link">Sign in</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

