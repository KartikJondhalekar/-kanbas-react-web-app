import * as client from "./client";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";

export default function Profile() {
    const [profile, setProfile] = useState<any>({});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [change, setChange] = useState(false);

    const signout = async () => {
        await client.signout();
        dispatch(setCurrentUser(null));
        navigate("/Kanbas/Account/Signin");
    };

    const saveChanges = async () => {
        await client.updateProfile(profile);
        setChange(false);
        setProfile(profile);
        dispatch(setCurrentUser(profile));
    };

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const account = await client.profile();
                setProfile({ ...account, dob: account?.dob?.split("T")[0] });
                dispatch(setCurrentUser(account));
            }
            catch (err: any) {
                console.log(err.response.data.message);
                navigate("/Kanbas/Account/Signin");
            }
        };
        fetchProfile();
    }, [navigate, dispatch]);

    return (
        <div id="wd-profile-screen" className="container text-center">
            <h1 className="text-danger">Profile</h1>
            {profile && (
                <div className="row justify-content-center align-items-center" style={{ height: 100 }}>
                    <div className="col-md-6">
                        <input id="wd-username" className="form-control mb-2" value={profile.username} placeholder="Username"
                            onChange={(e) => { setProfile({ ...profile, username: e.target.value }); setChange(true); }} />
                        <input id="wd-password" className="form-control mb-2" value={profile.password} placeholder="Password"
                            onChange={(e) => { setProfile({ ...profile, password: e.target.value }); setChange(true); }} />
                        <input id="wd-firstname" className="form-control mb-2" value={profile.firstName} placeholder="First Name"
                            onChange={(e) => { setProfile({ ...profile, firstName: e.target.value }); setChange(true); }} />
                        <input id="wd-lastname" className="form-control mb-2" value={profile.lastName} placeholder="Last Name"
                            onChange={(e) => { setProfile({ ...profile, lastName: e.target.value }); setChange(true); }} />
                        <input id="wd-dob" className="form-control mb-2" value={profile.dob}
                            onChange={(e) => { setProfile({ ...profile, dob: e.target.value }); setChange(true); }} type="date" />
                        <input id="wd-email" className="form-control mb-2" value={profile.email} placeholder="Email"
                            onChange={(e) => { setProfile({ ...profile, email: e.target.value }); setChange(true); }} />
                        <select id="wd-role" className="form-select mb-2" disabled={true} value={profile.role}>
                            <option value="USER">User</option>
                            <option value="FACULTY">Faculty</option>
                        </select>
                        {change && <button onClick={saveChanges} className="wd-save-btn btn btn-success w-100 mb-2">Save changes</button>}
                        <button onClick={signout} className="wd-signout-btn btn btn-danger w-100">
                            Sign out
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
