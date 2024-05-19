export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name"><h3>Assignment Name</h3></label>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description" cols={50} rows={10}>
                The assignment is available online Submit a link to the landing page of
                your Web application running on Netlify. The landing page should include the
                following: Your full name and section Links to each of the lab assignments,
                Link to the Kanbas application Links to all relevant source code repositories.
                The Kanbas application should include a link to navigate back to the landing page.
            </textarea>
            <br /><br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} /><br /><br />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
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
                        </select><br /><br />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
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
                        </select><br /><br />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option selected value="ONLINE">
                                Online
                            </option>
                            <option value="INPERSON">
                                In Person
                            </option>
                            <option value="PRESENTATION">
                                Presentation
                            </option>
                        </select><br /><br />

                        <label>Online Entry Options</label><br />

                        <input type="checkbox" name="wd-online-entry" id="wd-text-entry" />
                        <label htmlFor="wd-text-entry">Text Entry</label><br />

                        <input type="checkbox" name="wd-online-entry" id="wd-website-url" />
                        <label htmlFor="wd-website-url">Website URL</label><br />

                        <input type="checkbox" name="wd-online-entry" id="wd-media-recordings" />
                        <label htmlFor="wd-media-recordings">Media Recordings</label><br />

                        <input type="checkbox" name="wd-online-entry" id="wd-student-annotation" />
                        <label htmlFor="wd-student-annotation">Student Annotation</label><br />

                        <input type="checkbox" name="wd-online-entry" id="wd-file-upload" />
                        <label htmlFor="wd-file-upload">File Uploads</label><br /><br />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        Assign
                    </td>
                    <td>
                        <label htmlFor="wd-assign-to">Assign to</label><br />
                        <input type="text" id="wd-assign-to" value={"Everyone"} /><br /><br />

                        <label htmlFor="wd-due-date">Due</label><br />
                        <input type="date" id="wd-due-date" value="2024-05-13" /><br /><br />

                        <label htmlFor="wd-available-from">Available from</label> 
                        <label htmlFor="wd-available-until">&nbsp; &nbsp; &nbsp;Until</label><br />

                        <input type="date" id="wd-available-from" value="2024-05-06" />
                        <input type="date" id="wd-available-until" value="2024-05-20" /><br />
                    </td>
                </tr>
                <tr>
                    <td align="right" colSpan={3}>
                        <hr />
                        <button id="wd-edit-cancel">Cancel</button>
                        <button id="wd-edit-save">Save</button>
                    </td>
                </tr>
            </table>
        </div >
    );
}

