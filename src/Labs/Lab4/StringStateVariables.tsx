import { useState } from "react";
export default function StringStateVariables() {
    const [firstName, setFirstName] = useState("John");
    return (
        <>
            <div className="w-50">
                <h2>String State Variables</h2>
                <p>{firstName}</p>
                <input
                    className="form-control"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <hr />
        </>
    );
}

