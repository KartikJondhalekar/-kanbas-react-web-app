import { useLocation, useNavigate, useParams } from "react-router-dom";
import * as db from "../../Database";
import ConvertStringToDate from "../../Utilities/ConvertStringToDate";
// import DateConverter from "../../Utilities/DateConverter";

export default function AssignmentEditor() {
    const { aid } = useParams();
    const { pathname } = useLocation();
    const assignment = db.assignments.filter((assignment: any) => assignment._id === aid).at(0);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(pathname.slice(0, pathname.length - aid!.length));
    };

    return (
        <div id="wd-assignments-editor" >
            <label htmlFor="wd-name" className="form-label">Assignment Name</label>
            <input id="wd-name" className="form-control mb-3" value={assignment?.title} />
            <div>
                <textarea id="wd-description" className="form-control mb-3" style={{ height: "200px" }} >
                    {assignment?.description}
                </textarea>
            </div>

            <div className="d-block">
                <div className="mb-3 row">
                    <label htmlFor="wd-points" className="col-sm-4 col-form-label text-sm-end">
                        Points
                    </label>
                    <div className="col-sm-8 float-end">
                        <input id="wd-points" className="form-control" value={assignment?.points} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="wd-group" className="col-sm-4 col-form-label text-sm-end">
                        Assignment Group
                    </label>
                    <div className="col-sm-8 float-end">
                        <select id="wd-group" className="form-select">
                            <option selected value="ASSIGNMENTS">
                                ASSIGNMENTS
                            </option>
                            <option value="QUIZZES">
                                QUIZZES
                            </option>
                            <option value="EXAMS">
                                EXAMS
                            </option>
                            <option value="PROJECT">
                                PROJECT
                            </option>
                        </select>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="wd-display-grade-as" className="col-sm-4 col-form-label text-sm-end">
                        Display Grade as
                    </label>
                    <div className="col-sm-8 float-end">
                        <select id="wd-display-grade-as" className="form-select">
                            <option selected value="PERCENTAGE">
                                Percentage
                            </option>
                            <option value="MARKS">
                                Marks
                            </option>
                            <option value="PERCENTILE">
                                Percentile
                            </option>
                            <option value="LETTER">
                                Letter
                            </option>
                        </select>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="wd-submission-type" className="col-sm-4 col-form-label text-sm-end">
                        Submission Type
                    </label>
                    <div className="col-sm-8 float-end">
                        <div className="border rounded-2 p-3">
                            <div>
                                <select id="wd-submission-type" className="form-select mb-3">
                                    <option selected value="ONLINE">
                                        Online
                                    </option>
                                    <option value="INPERSON">
                                        In Person
                                    </option>
                                    <option value="PRESENTATION">
                                        Presentation
                                    </option>
                                </select>
                            </div>
                            <div className="fw-bold mb-3 fs-6">
                                Online Entry Options
                            </div>
                            <div className="btn-group-vertical">
                                <div>
                                    <input type="checkbox" name="wd-online-entry" id="wd-text-entry" className="form-check-input" />
                                    <label htmlFor="wd-text-entry" className="form-label ps-2">Text Entry</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="wd-online-entry" id="wd-website-url" className="form-check-input" />
                                    <label htmlFor="wd-website-url" className="form-label ps-2">Website URL</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="wd-online-entry" id="wd-media-recordings" className="form-check-input" />
                                    <label htmlFor="wd-media-recordings" className="form-label ps-2">Media Recordings</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="wd-online-entry" id="wd-student-annotation" className="form-check-input" />
                                    <label htmlFor="wd-student-annotation" className="form-label ps-2">Student Annotation</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="wd-online-entry" id="wd-file-upload" className="form-check-input" />
                                    <label htmlFor="wd-file-upload" className="form-label ps-2">File Uploads</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-3 row">
                <span className="col-sm-4 col-form-label text-sm-end">
                    Assign
                </span>
                <div className="col-sm-8 float-end">
                    <div className="border rounded-1 p-3">
                        <div className="mb-3">
                            <label htmlFor="wd-assign-to" className="form-label fw-bold fs-6">Assign to</label>
                            <input type="text" id="wd-assign-to" value={"Everyone"} className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="wd-due-date" className="form-label fw-bold fs-6">Due</label>
                            <ConvertStringToDate dateString={assignment!.due} />
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <label htmlFor="wd-available-from" className="form-label fw-bold fs-6">Available from</label>
                                <ConvertStringToDate dateString={assignment!.available} />
                            </div>
                            <div className="col-6">
                                <label htmlFor="wd-available-until" className="form-label fw-bold fs-6">Until</label>
                                <ConvertStringToDate dateString={assignment!.until} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div>
                <hr />
                <button id="wd-edit-save" className="float-end btn btn-danger mx-1" onClick={handleClick}>Save</button>
                <button id="wd-edit-cancel" className="float-end btn btn-secondary mx-1" onClick={handleClick}>Cancel</button>
            </div>
        </div >
    );
}

