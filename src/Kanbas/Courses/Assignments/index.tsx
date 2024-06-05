import { BsGripVertical } from "react-icons/bs";
import AssignmentsControls from "./AssignmentsControls";
import { PiPlus } from "react-icons/pi";
import { IoEllipsisVertical } from "react-icons/io5";
import AssignmentIcon from "./AssignmentIcon";
import AssignmentControlButtons from "./AssignmentControlButtons";

export default function Assignments() {
    return (
        <div id="wd-assignments" >
            <AssignmentsControls /><br /><br /><br /><br />
            <ul id="wd-assignments" className="list-group rounded-0">
                <li id="wd-assignment" className="list-group-item p-0 mb-5 fs-5 border-gray">
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
                        <li id="wd-assignment-list-item" className="list-group-item p-3 ps-1">
                        <div className="d-flex align-items-start">
                                <span className="mt-2">
                                    <AssignmentIcon />
                                </span>
                                <div id="wd-assignment-details" className="me-4 flex-grow-1">
                                    <div id="wd-assignment-link">
                                        <a id="wd-assignment-link"
                                            href="#/Kanbas/Courses/1234/Assignments/123"
                                            className="text-black fw-semibold link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">
                                            A1 - ENV + HTML
                                        </a>
                                    </div>
                                    <div id="wd-assignment-details">
                                        <span className="text-danger fw-semibold">Multiple Modules</span> | <span className="fw-semibold">Not available unitl</span> May 6 at 12:00am | <span className="fw-semibold">Due</span> May 13 at 11:59pm | 100pts
                                    </div>
                                </div>
                                <div className="float-end mt-4 ms-auto">
                                    <AssignmentControlButtons />
                                </div>
                            </div>
                        </li>
                        <li id="wd-assignment-list-item" className="list-group-item p-3 ps-1">
                            <div className="d-flex align-items-start">
                                <span className="mt-2">
                                    <AssignmentIcon />
                                </span>
                                <div id="wd-assignment-details" className="me-4 flex-grow-1">
                                    <div id="wd-assignment-link">
                                        <a id="wd-assignment-link"
                                            href="#/Kanbas/Courses/1234/Assignments/123"
                                            className="text-black fw-semibold link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">
                                            A2 - CSS + BOOTSTRAP
                                        </a>
                                    </div>
                                    <div id="wd-assignment-details">
                                        <span className="text-danger fw-semibold">Multiple Modules</span> | <span className="fw-semibold">Not available unitl</span> May 13 at 12:00am | <span className="fw-semibold">Due</span> May 20 at 11:59pm | 100pts
                                    </div>
                                </div>
                                <div className="mt-4 ms-auto">
                                    <AssignmentControlButtons />
                                </div>
                            </div>
                        </li>
                        <li id="wd-assignment-list-item" className="list-group-item p-3 ps-1">
                        <div className="d-flex align-items-start">
                                <span className="mt-2">
                                    <AssignmentIcon />
                                </span>
                                <div id="wd-assignment-details" className="me-4 flex-grow-1">
                                    <div id="wd-assignment-link">
                                        <a id="wd-assignment-link"
                                            href="#/Kanbas/Courses/1234/Assignments/123"
                                            className="text-black fw-semibold link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">
                                            A3 - JAVASCRIPT + REACT
                                        </a>
                                    </div>
                                    <div id="wd-assignment-details">
                                        <span className="text-danger fw-semibold">Multiple Modules</span> | <span className="fw-semibold">Not available unitl</span> May 20 at 12:00am | <span className="fw-semibold">Due</span> May 27 at 11:59pm | 100pts
                                    </div>
                                </div>
                                <div className="mt-4 ms-auto">
                                    <AssignmentControlButtons />
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}
