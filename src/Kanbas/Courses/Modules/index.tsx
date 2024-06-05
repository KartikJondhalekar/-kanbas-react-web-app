import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";

export default function Modules() {
    return (
        <div id="wd-modules">
            <ModulesControls /><br /><br /><br /><br />
            <ul id="wd-modules" className="list-group rounded-0">
                <li id="wd-module" className="list-group-item p-0 mb-5 fs-5 border-gray">
                    <div id="wd-title" className="p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda
                        <ModuleControlButtons />
                    </div>
                    <ul id="wd-lessons" className="list-group rounded-0 border-start border-3 border-success">
                        <li id="wd-lesson" className="list-group-item p-3 ps-1">
                            <span id="wd-title">
                                <BsGripVertical className="me-2 fs-3" />
                                LEARNING OBJECTIVES
                                <LessonControlButtons />
                            </span>
                        </li>
                        <li id="wd-content-item" className="list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            Introduction to the course
                            <LessonControlButtons />
                        </li>
                        <li id="wd-content-item" className="list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            Learn what is Web Development
                            <LessonControlButtons />
                        </li>
                        <li id="wd-lesson" className="list-group-item p-3 ps-1">
                            <span id="wd-title">
                                <BsGripVertical className="me-2 fs-3" />
                                READING
                                <LessonControlButtons />
                            </span>
                        </li>
                        <li id="wd-content-item" className="list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            Full Stack Developer - Chapter 1 - Introduction
                            <LessonControlButtons />
                        </li>
                        <li id="wd-content-item" className="list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            Full Stack Developer - Chapter 2 - Creating User
                            <LessonControlButtons />
                        </li>
                        <li id="wd-lesson" className="list-group-item p-3 ps-1">
                            <span id="wd-title">
                                <BsGripVertical className="me-2 fs-3" />
                                SLIDES
                                <LessonControlButtons />
                            </span>
                        </li>
                        <li id="wd-content-item" className="list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            Introduction to Web Development
                            <LessonControlButtons />
                        </li>
                        <li id="wd-content-item" className="list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            Creating an HTTP server with Node.js
                            <LessonControlButtons />
                        </li>
                        <li id="wd-content-item" className="list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            Creating a React Application
                            <LessonControlButtons />
                        </li>
                    </ul>
                </li>
                <li id="wd-module" className="list-group-item p-0 mb-5 fs-5 border-gray">
                    <div id="wd-title" className="p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        Week 1, Lecture 2 - Formatting User Intergaces with HTML
                        <ModuleControlButtons />
                    </div>
                    <ul id="wd-lessons" className="list-group rounded-0 border-start border-3 border-success">
                        <li id="wd-lesson" className="list-group-item p-3 ps-1">
                            <span id="wd-title">
                                <BsGripVertical className="me-2 fs-3" />
                                LEARNING OBJECTIVES
                                <LessonControlButtons />
                            </span>
                        </li>
                        <li id="wd-content-item" className="list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            Learn how to create user interfaces with HTML
                            <LessonControlButtons />
                        </li>
                        <li id="wd-content-item" className="list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            Deploy the assignment to Netlify
                            <LessonControlButtons />
                        </li>
                        <li id="wd-lesson" className="list-group-item p-3 ps-1">
                            <span id="wd-title">
                                <BsGripVertical className="me-2 fs-3" />
                                SLIDES
                                <LessonControlButtons />
                            </span>
                        </li>
                        <li id="wd-content-item" className="list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            Introduction to HTML and the DOM
                            <LessonControlButtons />
                        </li>
                        <li id="wd-content-item" className="list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            Formatting Web content with Headings
                            <LessonControlButtons />
                        </li>
                        <li id="wd-content-item" className="list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            Formatting content with Lists and Tables
                            <LessonControlButtons />
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

