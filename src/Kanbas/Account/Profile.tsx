import * as client from "./client";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";

export default function Profile() {
    const [profile, setProfile] = useState<any>({});
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const signout = async () => {
        await client.signout();
        dispatch(setCurrentUser(null));
        navigate("/Kanbas/Account/Signin");
    };

    const fetchProfile = async () => {
        try {
            const account = await client.profile();
            setProfile({ ...account, dob: account?.dob?.split("T")[0] });
        }
        catch (err: any) {
            navigate("/Kanbas/Account/Signin");
        }
    };
    useEffect(() => { fetchProfile(); }, []);

    return (
        <div id="wd-profile-screen" className="container text-center">
            <h1 className="text-danger">Profile</h1>
            {profile && (
                <div className="row justify-content-center align-items-center" style={{ height: 100 }}>
                    <div className="col-md-4">
                        <input id="wd-username" className="form-control mb-2" value={profile.username} placeholder="Username"
                            onChange={(e) => setProfile({ ...profile, username: e.target.value })} />
                        <input id="wd-password" className="form-control mb-2" value={profile.password} placeholder="Password"
                            onChange={(e) => setProfile({ ...profile, password: e.target.value })} />
                        <input id="wd-firstname" className="form-control mb-2" value={profile.firstName} placeholder="First Name"
                            onChange={(e) => setProfile({ ...profile, firstName: e.target.value })} />
                        <input id="wd-lastname" className="form-control mb-2" value={profile.lastName} placeholder="Last Name"
                            onChange={(e) => setProfile({ ...profile, lastName: e.target.value })} />
                        <input id="wd-dob" className="form-control mb-2" value={profile.dob}
                            onChange={(e) => setProfile({ ...profile, dob: e.target.value })} type="date" />
                        <input id="wd-email" className="form-control mb-2" value={profile.email} placeholder="Email"
                            onChange={(e) => setProfile({ ...profile, email: e.target.value })} />
                        <select id="wd-role" className="form-select mb-2" onChange={(e) => setProfile({ ...profile, role: e.target.value })}>
                            <option value="USER">User</option>            <option value="ADMIN">Admin</option>
                            <option value="FACULTY">Faculty</option>      <option value="STUDENT">Student</option>
                        </select>
                        <button onClick={signout} className="wd-signout-btn btn btn-danger w-100">
                            Sign out
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
