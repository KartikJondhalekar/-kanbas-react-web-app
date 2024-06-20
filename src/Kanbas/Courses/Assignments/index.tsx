import { BsGripVertical } from "react-icons/bs";
import AssignmentsControls from "./AssignmentsControls";
import { PiPlus } from "react-icons/pi";
import { IoEllipsisVertical } from "react-icons/io5";
import AssignmentIcon from "./AssignmentIcon";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { Link, useParams } from "react-router-dom";
import * as db from "../../Database"

export default function Assignments() {
    const { cid } = useParams();
    console.log(cid);
    const assignments = db.assignments;
    return (
        <div id="wd-assignments" >
            <AssignmentsControls /><br /><br /><br /><br />
            <div id="wd-assignments" className="list-group rounded-0">
                <div id="wd-title" className="p-3 ps-2 bg-secondary ">
                    <h4 id="wd-assignments-title" className="mt-2">
                        <BsGripVertical className="me-2 fs-3" />
                        ASSIGNMENTS
                        <span className="float-end">
                            <span className="border border-2 border-light-subtle rounded-5 p-3 me-4 fs-5">
                                40% of Total
                            </span>
                            <PiPlus className="fs-4 me-2" />
                            <IoEllipsisVertical className="fs-4" />
                        </span>
                    </h4>
                </div>
                <ul id="wd-assignment-list" className="list-group rounded-0 border-start border-3 border-success">
                    {assignments.filter((assignment: any) => assignment.course === cid)
                        .map((assignment: any) => (
                            <li id="wd-assignment-list-item" className="list-group-item p-3 ps-1 ">
                                <div className="d-flex align-items-start">
                                    <span className="mt-2">
                                        <AssignmentIcon />
                                    </span>
                                    <div id="wd-assignment-details" className="me-4 flex-grow-1">
                                        <div id="wd-assignment-link">
                                            <Link to={`${assignment._id}`} className="text-black fw-semibold link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">
                                                {assignment.title}
                                            </Link>
                                        </div>
                                        <div id="wd-assignment-details">
                                            <span className="text-danger fw-semibold">Multiple Modules</span> | <span className="fw-semibold">Not available until</span> {assignment.available} | <span className="fw-semibold">Due</span> {assignment.due} | {assignment.points}pts
                                        </div>
                                    </div>
                                    <div className="float-end mt-4 ms-auto">
                                        <AssignmentControlButtons />
                                    </div>
                                </div>
                            </li>
                        ))}
                </ul>
            </div>
        </div >
    );
}
