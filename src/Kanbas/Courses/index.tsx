import { Navigate, Route, Routes } from "react-router";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { RxHamburgerMenu } from "react-icons/rx";
import { PiGreaterThan } from "react-icons/pi";
import { useLocation } from "react-router";
import Grades from "./Grades";

export default function Courses() {
    const pathname = useLocation().pathname.split('/');
    return (
        <div id="wd-courses">
            <div className="ps-1 d-flex">
                <h2 className="text-danger">
                    <RxHamburgerMenu className="me-5 mb-1 fs-1" />
                    Course 1234
                </h2>
                <PiGreaterThan className="fs-6 mt-3 mx-3 fw-lighter" />
                <span className="fs-4 mt-1 fw-lighter">
                    { pathname[pathname.length - 1] } 
                </span>
            </div>
            <hr />
            <div className="d-flex">
                <div className="d-none d-md-block">
                    <CoursesNavigation />
                </div>
                <div className="flex-fill container">
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Piazza" element={<h1>Piazza</h1>} />
                        <Route path="Zoom" element={<h1>Zoom</h1>} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Assignments/:id" element={<AssignmentEditor />} />
                        <Route path="Quizzes" element={<h1>Quizzes</h1>} />
                        <Route path="Grades" element={<Grades />} />
                        <Route path="People" element={<h1>People</h1>} />
                        <Route path="Settings" element={<h1>Settings</h1>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
