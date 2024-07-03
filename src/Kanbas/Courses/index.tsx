import { Navigate, Route, Routes, useLocation, useParams } from "react-router";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { RxHamburgerMenu } from "react-icons/rx";
import Grades from "./Grades";

export default function Courses({ courses }: { courses: any[]; }) {
    const { pathname } = useLocation();
    const { cid } = useParams();
    const course = courses.find((course) => course._id === cid);
    return (
        <div id="wd-courses">
            <div className="ps-1 d-flex">
                <h2 className="text-danger">
                    <RxHamburgerMenu className="me-5 mb-1 fs-1" />
                    {course && course.name} <span className="text-black"> &gt; {pathname.split("/")[4]}</span>

                </h2>
            </div>
            <hr />
            <div className="d-flex">
                <div className="d-none d-md-block">
                    <CoursesNavigation />
                </div>
                <div className="flex-fill p-5 container-fluid">
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Piazza" element={<h1>Piazza</h1>} />
                        <Route path="Zoom" element={<h1>Zoom</h1>} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Assignments/:aid" element={<AssignmentEditor />} />
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
