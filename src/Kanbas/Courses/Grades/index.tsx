import { CiFilter, CiSearch } from "react-icons/ci";
import GradeControls from "./GradeControls";
import { IoSendSharp } from "react-icons/io5";

export default function Grades() {
    return (
        <div id="wd-grade">
            <GradeControls /><br /><br /><br /><br />
            <div id="wd-grades-search-filters" className="row">
                <div className="col-sm-6 mb-3">
                    <label id="wd-student-name" htmlFor="student-name" className="form-label fw-semibold">
                        Student Names
                    </label>
                    <div className="input-group me-2">
                        <span className="input-group-text bg-white fs-3 rounded-start">
                            <CiSearch />
                        </span>
                        <input type="text" placeholder="Search Students" className="form-control border-start-0" />
                    </div>
                </div>
                <div className="col-sm-6 mb-3">
                    <label id="wd-assignment-name" htmlFor="assignment-name" className="form-label fw-semibold">
                        Assignment Names
                    </label>
                    <div className="input-group me-2">
                        <span className="input-group-text bg-white fs-3 rounded-start">
                            <CiSearch />
                        </span>
                        <input type="text" placeholder="Search Assignments" className="form-control border-start-0" />
                    </div>
                </div>
                <div id="wd-grades-apply-filter" className="mb-3">
                    <button id="wd-grade-filter-btn" className="btn btn-secondary">
                        <CiFilter className="fs-4 me-1" />
                        Apply Filters
                    </button>
                </div>
            </div>
            <div id="wd-grades-table" className="table-responsive">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th className="align-middle" style={{ minWidth: '200px' }}>Student Name</th>
                            <th className="align-middle text-center" style={{ minWidth: '200px' }}>A1 SETUP<br />Out of 100</th>
                            <th className="align-middle text-center" style={{ minWidth: '200px' }}>A2 HTML<br />Out of 100</th>
                            <th className="align-middle text-center" style={{ minWidth: '200px' }}>A3 CSS<br />Out of 100</th>
                            <th className="align-middle text-center" style={{ minWidth: '200px' }}>A4 BOOTSTRAP<br />Out of 100</th>
                            <th className="align-middle text-center" style={{ minWidth: '200px' }}>A5 JAVASCRIPT<br />Out of 100</th>
                            <th className="align-middle text-center" style={{ minWidth: '200px' }}>A6 REACT<br />Out of 100</th>
                            <th className="align-middle text-center" style={{ minWidth: '200px' }}>A7 NODE<br />Out of 100</th>
                            <th className="align-middle text-center" style={{ minWidth: '200px' }}>A8 MONGODB<br />Out of 100</th>
                            <th className="align-middle text-center" style={{ minWidth: '200px' }}>Q1<br />Out of 100</th>
                            <th className="align-middle text-center" style={{ minWidth: '200px' }}>Q2<br />Out of 100</th>
                            <th className="align-middle text-center" style={{ minWidth: '200px' }}>Q3<br />Out of 100</th>
                            <th className="align-middle text-center" style={{ minWidth: '200px' }}>Q4<br />Out of 100</th>
                            <th className="align-middle text-center" style={{ minWidth: '200px' }}>Q5<br />Out of 100</th>
                            <th className="align-middle text-center" style={{ minWidth: '200px' }}>Q6<br />Out of 100</th>
                            <th className="align-middle text-center" style={{ minWidth: '200px' }}>Q7<br />Out of 100</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-danger">Jane Adams</td>
                            <td className="align-middle text-center">100%</td>
                            <td className="align-middle text-center">96.67%</td>
                            <td className="align-middle text-center">92.18%</td>
                            <td className="align-middle text-center">66.22%</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                        </tr>
                        <tr>
                            <td className="text-danger">Christina Allen</td>
                            <td className="align-middle text-center">100%</td>
                            <td className="align-middle text-center">100%</td>
                            <td className="align-middle text-center">100%</td>
                            <td className="align-middle text-center">100%</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                        </tr>
                        <tr>
                            <td className="text-danger">Samreen Ansari</td>
                            <td className="align-middle text-center">100%</td>
                            <td className="align-middle text-center">100%</td>
                            <td className="align-middle text-center">100%</td>
                            <td className="align-middle text-center">100%</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                        </tr>
                        <tr>
                            <td className="text-danger">Han Bao</td>
                            <td className="align-middle text-center">100%</td>
                            <td className="align-middle text-center">100%</td>
                            <td className="align-middle text-center">88.03%</td>
                            <td className="align-middle text-center d-flex">
                                <input type="number" min={0.00} max={100.00} value={98.99} className="form-control text-center" /><IoSendSharp className="border rounded-1 border-1 fs-1 p-1"/>
                            </td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                        </tr>
                        <tr>
                            <td className="text-danger">Mahi Sai Srinivas Bobbili</td>
                            <td className="align-middle text-center">100%</td>
                            <td className="align-middle text-center">96.67%</td>
                            <td className="align-middle text-center">98.37%</td>
                            <td className="align-middle text-center">100%</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                        </tr>
                        <tr>
                            <td className="text-danger">Siran Cao</td>
                            <td className="align-middle text-center">100%</td>
                            <td className="align-middle text-center">100%</td>
                            <td className="align-middle text-center">100%</td>
                            <td className="align-middle text-center">100%</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                            <td className="align-middle text-center">NA</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}