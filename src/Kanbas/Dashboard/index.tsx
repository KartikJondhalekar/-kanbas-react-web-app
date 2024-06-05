export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published" className="ps-4">Published Courses (11)</h2> <hr />
            <div id="wd-dashboard-courses" className="row ps-4">
                <div className="row row-cols-1 row-cols-md-5 g-4 mb-4">
                    <div id="wd-dashboard-course" className="col" style={{ width: "280px" }}>
                        <div className="card h-100 d-flex flex-column" >
                            <img className="rounded-top-1" src="/images/reactjs.jpg" alt="CS1234 React JS" style={{ height: "146px" }} />
                            <div className="card-body p-2" >
                                <a id="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/1234/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS1234 React JS
                                </a>
                                <p id="wd-dashboard-course-title" className="card-text">
                                    Full Stack software developer
                                </p>
                            </div>
                            <div className="card-footer bg-white p-2" style={{ borderTop: "none" }}>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary">Go</a>
                            </div>
                        </div>
                    </div>
                    <div id="wd-dashboard-course" className="col" style={{ width: "280px" }}>
                        <div className="card h-100 d-flex flex-column" >
                            <img className="rounded-top-1" src="/images/webdev.jpg" alt="CS5610 Web Development" style={{ height: "146px" }} />
                            <div className="card-body p-2" >
                                <a id="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/1234/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS5610 Web Development
                                </a>
                                <p id="wd-dashboard-course-title" className="card-text">
                                    Full Stack Web Developer
                                </p>
                            </div>
                            <div className="card-footer bg-white p-2" style={{ borderTop: "none" }}>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary">Go</a>
                            </div>
                        </div>
                    </div>
                    <div id="wd-dashboard-course" className="col" style={{ width: "280px" }}>
                        <div className="card h-100 d-flex flex-column" >
                            <img className="rounded-top-1" src="/images/cloudcomp.jpg" alt="CS6620 Fundamentals of Cloud Computing" style={{ height: "146px" }} />
                            <div className="card-body p-2" >
                                <a id="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/1234/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS6620 Fundamentals of Cloud Computing
                                </a>
                                <p id="wd-dashboard-course-title" className="card-text">
                                    Amazon Web Servies
                                </p>
                            </div>
                            <div className="card-footer bg-white p-2" style={{ borderTop: "none" }}>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary">Go</a>
                            </div>
                        </div>
                    </div>
                    <div id="wd-dashboard-course" className="col" style={{ width: "280px" }}>
                        <div className="card h-100 d-flex flex-column" >
                            <img className="rounded-top-1" src="/images/dbms.jpg" alt="CS5200 Database Management" style={{ height: "146px" }} />
                            <div className="card-body p-2" >
                                <a id="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/1234/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS5200 Database Management
                                </a>
                                <p id="wd-dashboard-course-title" className="card-text">
                                    Database Management
                                </p>
                            </div>
                            <div className="card-footer bg-white p-2" style={{ borderTop: "none" }}>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary">Go</a>
                            </div>
                        </div>
                    </div>
                    <div id="wd-dashboard-course" className="col" style={{ width: "280px" }}>
                        <div className="card h-100 d-flex flex-column" >
                            <img className="rounded-top-1" src="/images/algo.jpg" alt="CS5800 Algorithms" style={{ height: "146px" }} />
                            <div className="card-body p-2" >
                                <a id="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/1234/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS5800 Algorithms
                                </a>
                                <p id="wd-dashboard-course-title" className="card-text">
                                    Algorithms
                                </p>
                            </div>
                            <div className="card-footer bg-white p-2" style={{ borderTop: "none" }}>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary">Go</a>
                            </div>
                        </div>
                    </div>
                    <div id="wd-dashboard-course" className="col" style={{ width: "280px" }}>
                        <div className="card h-100 d-flex flex-column" >
                            <img className="rounded-top-1" src="/images/ood.jpg" alt="CS5004 OOD" style={{ height: "146px" }} />
                            <div className="card-body p-2" >
                                <a id="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/1234/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS5004 OOD
                                </a>
                                <p id="wd-dashboard-course-title" className="card-text">
                                    Object Oriented Design
                                </p>
                            </div>
                            <div className="card-footer bg-white p-2" style={{ borderTop: "none" }}>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary">Go</a>
                            </div>
                        </div>
                    </div>
                    <div id="wd-dashboard-course" className="col" style={{ width: "280px" }}>
                        <div className="card h-100 d-flex flex-column" >
                            <img className="rounded-top-1" src="/images/dsa.png" alt="CS5008 DSA" style={{ height: "146px" }} />
                            <div className="card-body p-2" >
                                <a id="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/1234/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS5008 DSA
                                </a>
                                <p id="wd-dashboard-course-title" className="card-text">
                                    Data Structures & Algorithms
                                </p>
                            </div>
                            <div className="card-footer bg-white p-2" style={{ borderTop: "none" }}>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary">Go</a>
                            </div>
                        </div>
                    </div>
                    <div id="wd-dashboard-course" className="col" style={{ width: "280px" }}>
                        <div className="card h-100 d-flex flex-column" >
                            <img className="rounded-top-1" src="/images/ds.png" alt="CS5002 DS" style={{ height: "146px" }} />
                            <div className="card-body p-2" >
                                <a id="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/1234/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS5002 DS
                                </a>
                                <p id="wd-dashboard-course-title" className="card-text">
                                    Discrete Structures
                                </p>
                            </div>
                            <div className="card-footer bg-white p-2" style={{ borderTop: "none" }}>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary">Go</a>
                            </div>
                        </div>
                    </div>
                    <div id="wd-dashboard-course" className="col" style={{ width: "280px" }}>
                        <div className="card h-100 d-flex flex-column" >
                            <img className="rounded-top-1" src="/images/python1.png" alt="CS5000 Intensive Foundations of CS" style={{ height: "146px" }} />
                            <div className="card-body p-2" >
                                <a id="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/1234/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS5000 Intensive Foundations of CS
                                </a>
                                <p id="wd-dashboard-course-title" className="card-text">
                                    Fundamentals of Programming
                                </p>
                            </div>
                            <div className="card-footer bg-white p-2" style={{ borderTop: "none" }}>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary">Go</a>
                            </div>
                        </div>
                    </div>
                    <div id="wd-dashboard-course" className="col" style={{ width: "280px" }}>
                        <div className="card h-100 d-flex flex-column" >
                            <img className="rounded-top-1" src="/images/python.jpg" alt="CS5002 Recitation for CS5000" style={{ height: "146px" }} />
                            <div className="card-body p-2" >
                                <a id="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/1234/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS5002 Recitation for CS5000
                                </a>
                                <p id="wd-dashboard-course-title" className="card-text">
                                    Labs for CS5000
                                </p>
                            </div>
                            <div className="card-footer bg-white p-2" style={{ borderTop: "none" }}>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary">Go</a>
                            </div>
                        </div>
                    </div>
                    <div id="wd-dashboard-course" className="col" style={{ width: "280px" }}>
                        <div className="card h-100 d-flex flex-column">
                            <img className="rounded-top-1" src="/images/ds1.jpg" alt="CS5003 Recitation for CS5002" style={{ height: "146px" }} />
                            <div className="card-body p-2" >
                                <a id="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/1234/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS5003 Recitation for CS5002
                                </a>
                                <p id="wd-dashboard-course-title" className="card-text">
                                    Labs for CS5002
                                </p>
                            </div>
                            <div className="card-footer bg-white p-2" style={{ borderTop: "none" }}>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary">Go</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

