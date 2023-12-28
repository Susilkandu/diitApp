import { Link } from "react-router-dom"
import { useState } from "react";
export default function WebDevelopment() {
    const [DiplomaData, setDiplomaData] = useState('var(--mainBgcolor)')
    const [DiplomaText, setDiplomaText] = useState('#212329')
    const [DiplomaTitle, setDiplomaTitle] = useState('white')
    const [cwdCourseBg, setcwdCourseBg] = useState('white')
    const [cwdCourseBgBorder, setcwdCourseBgBorder] = useState('transparent')
    const [WebLeftCourse, setWebLeftCourse] = useState('white')
    const [featureBg, setfeatureBg] = useState('white')
    const [featureBgText, setfeatureBgText] = useState('#212329')
    const [featureBorder, setfeatureBorder] = useState('transparent')
    const [QUESTION, setQUESTION] = useState('white')
    const [QUESTIONTBorder, setQUESTIONBorder] = useState('#212329')
    const [dwdCourseBg, setdwdCourseBg] = useState('white')
    const [dwdCourseBgBorder, setdwdCourseBgBorder] = useState('transparent')
    const DarkMode = () => {
        if (DiplomaData === 'black') {
            setDiplomaData('var(--mainBgcolor)')
            setDiplomaText('#212329')
            setDiplomaTitle('white')
            setcwdCourseBg('white')
            setcwdCourseBgBorder('transparent')
            setdwdCourseBg('white')
            setdwdCourseBgBorder('transparent')
            setWebLeftCourse('white')
            setfeatureBg('white')
            setfeatureBgText('#212329')
            setfeatureBorder('transparent')
            setQUESTION('white')
            setQUESTIONBorder('transparent')
        }
        else {
            setDiplomaData('black')
            setDiplomaText('white')
            setDiplomaTitle('var(--MyDarkGrayBg)')
            setcwdCourseBg('var(--MyDarkGrayBg)')
            setcwdCourseBgBorder('1px solid gray')
            setdwdCourseBg('var(--MyDarkGrayBg)')
            setdwdCourseBgBorder('1px solid #202020')
            setWebLeftCourse('var(--MyDarkGrayBg)')
            setfeatureBg('var(--MyDarkGrayBg)')
            setfeatureBgText('white')
            setfeatureBorder('1px solid #202020')
            setQUESTION('var(--MyDarkGrayBg)')
            setQUESTIONBorder('1px solid #202020')
        }
    }
    return (
        <div style={{ background: DiplomaData, color: DiplomaText }} >
            <div className="d-flex align-items-center justify-content-between fixed-top "
                style={{ background: 'var(--topNavBgColor)', width: '100vw !important', fontSize: '0.7rem' }}  >
                <div className="changer-container d-flex align-items-center justify-content-center TopWelcomeNavLeft ">
                    <button className="changer-btn" style={{ background: 'transparent !important' }}>
                        <input type="checkbox" id="switch" className="checkbox d-none w-50" onClick={DarkMode} />
                        <label htmlFor="switch" className="toggle">
                            <p className="m-0 p-0 switchChild">
                                <i className="bi bi-sun-fill " style={{ color: 'orangered' }} title="Light Mode"></i>
                                <i className="bi bi-moon-stars-fill text-white " title="Night Mode"></i>
                            </p>
                        </label>
                    </button>
                </div>
                <div className="TopWelcomeCenter d-flex align-items-center">
                    <marquee scrollamount="8" width="100%">
                        <b className="text-light text-uppercase" >
                            <big style={{ letterSpacing: '1px' }}> Welcome to DRISHTEE COMPUTER CENTER</big>
                        </b>
                    </marquee>
                </div>
                <div className="ms-auto d-flex align-items-center justify-content-end TopWelcomeNavRight ">
                    <Link className="nav-link active text-white " id="myH2" aria-current="page" to="tel:+919918151032" title="Call-now">
                        <img className='img-fluid' />919918151032
                        &nbsp;&nbsp;</Link>
                    <Link className="nav-link text-white " id="myH3" aria-current="page" to="#" title="E:Mail-Us">
                        <img className='img-fluid' />
                        ajtiwari4@gmail.com
                        &nbsp;&nbsp;</Link>
                </div>
            </div>
            <div className="container-fluid text-center p-0 pt-3  border-bottom  myshadow" style={{
                background: DiplomaTitle,
                marginTop: '3.7rem'
            }}
                id="doeaccHead">
                <div className="col-md-12 text-uppercase">
                    <h1 className="fw-bolder">
                        <font color="red"> Web Development</font> COURSE
                    </h1>
                    <small className="d-flex px-2"> <a href="/" className="nav-link"><i className="fa fa-home"> </i> / </a> &nbsp;
                        DOEACC
                        Courses </small>
                </div>
            </div>
            <div className="container-fluid DoeaccCourseContainer">
                <div className="row myPaddingMargin p-0 m-0">
                    <div className="row my-2 p-0 ">
                        <div className="col-md-12 m-0 p-0">
                            <div className="row">
                                <div className="col-md-3 mx-0 px-0">
                                    <h5 className="p-0 m-0  myshadow" id="AskQuestions"
                                        style={{ background: QUESTION, color: 'white', border: QUESTIONTBorder }}>
                                        <Link to="../Contact"
                                            className="nav-link d-flex  justify-content-center p-2  hoverTextBlue blink">ASK
                                            A QUESTION &nbsp; &nbsp; <i className="bi bi-person-circle text-danger"></i></Link> </h5>
                                </div>
                                <div className="col-md-9 myshadow d-flex align-items-center " style={{
                                    background: featureBg,
                                    color: featureBgText,
                                    border: featureBorder
                                }} id="WebMarquee">
                                    <div className="card-footer  d-flex align-items-center justify-content-center p-1 ">
                                        <marquee className=" fw-medium " direction="left"  > ISO 9001 :
                                            2008
                                            द्वारा प्रमाणित &amp; भारत सरकार द्वारा पंजीकृत
                                            संस्था
                                            || DOEACC द्वारा पंजीकृत संस्था हर कोर्स पूरा करने पर फ्री प्रमाणपत्र || योग्य एवं अनुभवी
                                            प्रशिक्षकों द्वारा प्रशिक्षण || प्रमाण पत्र को इंटरनेट से जानने योग्य सुविधा,
                                            इत्यादी........
                                        </marquee>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 myshadow d-flex align-items-start" style={{ background: WebLeftCourse }} id="WebLeftCourse">
                        <table style={{ position: 'absolute' }}>
                            <tr>
                                <th className="col-12 px-4  bg-warning  w-100 myshadow">Get More Info........</th>
                            </tr>
                        </table>
                        <table style={{ fontSize: '0.95rem' }} className="mt-5 DoeaccCourseLeftTable">
                            <tr>
                                <th colSpan="2">DOEACC Course:</th>
                            </tr>
                            <tr>
                                <td><span className="rounded rounded-circle bg-secondary-subtle p-1"> 01 </span></td>
                                <td> <small className="text-md hoverTextOrange"> DOEACC Certificate Courses on Computer Concepts
                                    (CCC)
                                </small> </td>
                            </tr>
                            <tr>
                                <td><span className="rounded rounded-circle bg-secondary-subtle p-1"> 02 </span></td>
                                <td> <small className="text-md hoverTextOrange"> DOEACC O Level Course </small></td>
                            </tr>
                            <tr>
                                <td><span className="rounded rounded-circle bg-secondary-subtle p-1"> 03 </span></td>
                                <td> <small className="text-md hoverTextOrange"> DOEACC A Level Course </small> </td>
                            </tr>
                            <tr>
                                <th colSpan="2">DIPLOMA Course:</th>
                            </tr>
                            <tr>
                                <td><span className="rounded rounded-circle bg-secondary-subtle p-1"> 01 </span></td>
                                <td> <small className="text-md hoverTextOrange"> Advance Diploma in Computer Application+ (ADCA+)
                                </small>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="rounded rounded-circle bg-secondary-subtle p-1"> 02 </span></td>
                                <td> <small className="text-md hoverTextOrange"> Advance Diploma in Computer Application (ADCA)
                                </small>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="rounded rounded-circle bg-secondary-subtle p-1"> 03 </span></td>
                                <td> <small className="text-md hoverTextOrange"> Diploma in Banking Insurance (DBI) </small> </td>
                            </tr>
                            <tr>
                                <td><span className="rounded rounded-circle bg-secondary-subtle p-1"> 04 </span></td>
                                <td> <small className="text-md hoverTextOrange">Diploma in Web Development (DWD) </small></td>
                            </tr>
                            <tr>
                                <td><span className="rounded rounded-circle bg-secondary-subtle p-1"> 05 </span></td>
                                <td> <small className="text-md hoverTextOrange"> Diploma in Computer Application (DCA) </small>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="rounded rounded-circle bg-secondary-subtle p-1"> 06 </span></td>
                                <td> <small className="text-md hoverTextOrange"> Diploma in Desktop Publishing (DDTP) </small></td>
                            </tr>
                            <tr>
                                <td><span className="rounded rounded-circle bg-secondary-subtle p-1"> 07 </span></td>
                                <td> <small className="text-md hoverTextOrange"> Certificate in Hardware & Networking (CHN) </small>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="rounded rounded-circle bg-secondary-subtle p-1"> 08 </span></td>
                                <td> <small className="text-md hoverTextOrange"> Certificate in Accounting Cource (CAC) </small>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="rounded rounded-circle bg-secondary-subtle p-1"> 09 </span></td>
                                <td> <small className="text-md hoverTextOrange">Certificate in Desktop Publishing (CDTP) </small>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="rounded rounded-circle bg-secondary-subtle p-1"> 10 </span></td>
                                <td> <small className="text-md hoverTextOrange"> Advanced Diploma Information Technology (ADIT)
                                </small>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="rounded rounded-circle bg-secondary-subtle p-1"> 11 </span></td>
                                <td> <small className="text-md hoverTextOrange"> Certificate in Computer Application (CCA) </small>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="rounded rounded-circle bg-secondary-subtle p-1"> 12 </span></td>
                                <td> <small className="text-md hoverTextOrange"> Diploma in Information Technology (DIT) </small>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="rounded rounded-circle bg-secondary-subtle p-1">13</span></td>
                                <td> <small className="text-md hoverTextOrange">Diploma in Computer Application & Designing (DCAD)
                                </small> </td>
                            </tr>
                        </table>
                    </div>
                    <div className="col-md-10 mx-0 ">
                        <div className="diplomaTable  pb-3">
                            <div className=" my-2 myshadow " id="MainWebBg"
                                style={{ background: cwdCourseBg, border: cwdCourseBgBorder }}>
                                <div data-aos="fade-down ">
                                    <table className="table table-bordered border-primary table-sm table-hover">
                                        <tr className="headText">
                                            <th colSpan="3"> Certificate in Web Designing (CWD)</th>
                                        </tr>
                                        <tr className="my-row-color">
                                            <th colSpan="2" style={{ borderRight: 'none' }}> COURSE CONTENTS </th>
                                            <th style={{ borderLeft: 'none' }}> DURATION: 6 MONTHS </th>
                                        </tr>
                                        <tr>
                                            <td className="text-danger" colSpan="4" >
                                                HTML
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="transparentTableData">Web Programming Introduction </td>
                                            <td className="transparentTableData">HTML-Introduction </td>
                                            <td className="transparentTableData"> Basic Formatting Tags </td>
                                        </tr>
                                        <tr>
                                            <td className="transparentTableData"> Grouping Using Div Span</td>
                                            <td className="transparentTableData"> Lists </td>
                                            <td className="transparentTableData"> Images </td>
                                        </tr>
                                        <tr>
                                            <td className="transparentTableData"> Hyperlink </td>
                                            <td className="transparentTableData">Table</td>
                                            <td className="transparentTableData"> Headers</td>
                                        </tr>
                                        <tr>
                                            <td className="transparentTableData"> Semantic Elements</td>
                                            <td className="transparentTableData"> Forms </td>
                                            <td className="transparentTableData"> Media </td>
                                        </tr>
                                        <tr>
                                            <td className="fw-medium text-danger" colSpan="4">
                                                JavaScript</td>
                                        </tr>
                                        <tr>
                                            <td className="transparentTableData"> Overview </td>
                                            <td className="transparentTableData">Syntax & Comment</td>
                                            <td className="transparentTableData">Variable </td>
                                        </tr>
                                        <tr>
                                            <td className="transparentTableData"> Operator </td>
                                            <td className="transparentTableData">Data Types</td>
                                            <td className="transparentTableData">Functios</td>
                                        </tr>
                                        <tr>
                                            <td className="transparentTableData"> Object </td>
                                            <td className="transparentTableData">Event</td>
                                            <td className="transparentTableData">Strings</td>
                                        </tr>
                                        <tr>
                                            <td className="transparentTableData">Date & Date Methods</td>
                                            <td className="transparentTableData">Math</td>
                                            <td className="transparentTableData">Loop</td>
                                        </tr>
                                        <tr>
                                            <td className="transparentTableData">Maps</td>
                                            <td className="transparentTableData">Errors</td>
                                            <td className="transparentTableData">Date & Date Methods</td>
                                        </tr>
                                        <tr>
                                            <td className="transparentTableData">Math</td>
                                            <td className="transparentTableData">Loops</td>
                                            <td className="transparentTableData text-danger bg-body-tertiary"> Assignment</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-medium text-danger" colSpan="4">
                                                ADOBE
                                                PHOTOSHOP </td>
                                        </tr>
                                        <tr>
                                            <td className="transparentTableData">Introduction</td>
                                            <td className="transparentTableData">Rectangular & All Tool</td>
                                            <td className="transparentTableData">Editing Photo in camera raw</td>
                                        </tr>
                                        <tr>
                                            <td className="transparentTableData">Free Transform, Scale,
                                                Rotate Etc.</td>
                                            <td className="transparentTableData"> Auto Blend Layers & more..</td>
                                            <td className="transparentTableData">Adjustments,
                                                Exposure, Curves
                                                Color Balance</td>
                                        </tr>
                                        <tr>
                                            <td className="transparentTableData">Layer Mask</td>
                                            <td className="transparentTableData"> 3d object creation </td>
                                            <td className="transparentTableData text-danger bg-body-tertiary"> Project Work ( Web
                                                Designing ) </td>
                                        </tr>
                                    </table>
                                </div>
                                <div className="row">
                                    <div className="col mx-2">
                                        <h5 className="textColorOne">What is a Certificate in Web Designing Course? </h5>
                                        <p id="TextCaptionTwo" className="hoverTextOrange"> Certificate in Web Designing is a
                                            certification
                                            course for students who are seeking to learn the fundamentals of web designing after
                                            completing their 10+2. This is a 2- 6 months long course where the students are taught
                                            about
                                            some basic tools and Web coding languages that are useful for web designing. Certificate
                                            courses in web designing are important for students willing to seek a career as a web
                                            designer.</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" my-2 myshadow" id="MainDwdBg"
                                style={{ background: dwdCourseBg, border: dwdCourseBgBorder }}>
                                <div data-aos="fade-down ">
                                    <table className="table table-bordered border-primary  table-sm table-hover">
                                        <tr className="headText">
                                            <th colSpan="3"> Diploma in Web Designing (DWD)</th>
                                        </tr>
                                        <tr className="my-row-color">
                                            <th colSpan="2" style={{ borderRight: 'none' }}> COURSE CONTENTS </th>
                                            <th style={{ borderLeft: 'none' }}> DURATION: 12 MONTHS </th>
                                        </tr>
                                        <tr>
                                            <td className="fw-medium text-danger" colSpan="4"> M.S. Office</td>
                                        </tr>
                                        <tr>
                                            <td className="transparentTableData">Fundamental of Computer </td>
                                            <td className="transparentTableData">Ms. Windows</td>
                                            <td className="transparentTableData">Ms Word </td>
                                        </tr>
                                        <tr>
                                            <td className="transparentTableData">Ms Excel </td>
                                            <td className="transparentTableData">Ms Powerpoint </td>
                                            <td className="transparentTableData">Ms Access </td>
                                        </tr>
                                        <tr>
                                            <td className="transparentTableData">Internet </td>
                                            <td className="transparentTableData"> Email </td>
                                            <td className="transparentTableData text-danger bg-body-tertiary"> Assignment</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-medium text-danger" colSpan="4">
                                                HTML
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="transparentTableData">web Programming Introduction </td>
                                            <td className="transparentTableData">HTML-Introduction </td>
                                            <td className="transparentTableData"> Basic Formatting Tags </td>
                                        </tr>
                                        <tr>
                                            <td className="transparentTableData"> Grouping Using Div Span</td>
                                            <td className="transparentTableData"> Lists </td>
                                            <td className="transparentTableData"> Images </td>
                                        </tr>
                                        <tr>
                                            <td className="transparentTableData"> Hyperlink </td>
                                            <td className="transparentTableData">Table</td>
                                            <td className="transparentTableData"> Headers</td>
                                        </tr>
                                        <tr>
                                            <td className="transparentTableData"> Semantic Elements</td>
                                            <td className="transparentTableData"> Forms </td>
                                            <td className="transparentTableData"> Images </td>
                                        </tr>
                                        <tr>
                                            <td className="transparentTableData"> Graphics</td>
                                            <td className="transparentTableData"> Media </td>
                                            <td className="transparentTableData"> APIs </td>
                                        </tr>
                                        <tr>
                                            <td className="fw-medium text-danger" colSpan="4">
                                                CSS
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="transparentTableData">Introduction </td>
                                            <td className="transparentTableData">Selector </td>
                                            <td className="transparentTableData">Background Cursor </td>
                                        </tr>
                                        <tr>
                                            <td className="transparentTableData">Text Fonts</td>
                                            <td className="transparentTableData">Box Model </td>
                                            <td className="transparentTableData">Display Positioning </td>
                                        </tr>
                                        <tr>
                                            <td className="transparentTableData"> Floats</td>
                                            <td className="transparentTableData">Transforms (2D 3D) </td>
                                            <td className="transparentTableData">Animations </td>
                                        </tr>
                                        <tr>
                                            <td className="transparentTableData"> Display</td>
                                            <td className="transparentTableData">Flex Box </td>
                                            <td className="transparentTableData">CSS Grid </td>
                                        </tr>
                                        <tr>
                                            <td className="transparentTableData">CSS Transitions</td>
                                            <td className="transparentTableData">Media Query </td>
                                            <td className="transparentTableData text-danger bg-body-tertiary"> Project Work ( Web
                                                Designing )
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="fw-medium text-danger" colSpan="4">
                                                JavaScript</td>
                                        </tr>
                                        <tr>
                                            <td className="transparentTableData"> Overview </td>
                                            <td className="transparentTableData">Syntax & Comment</td>
                                            <td className="transparentTableData">Variable </td>
                                        </tr>
                                        <tr>
                                            <td className="transparentTableData"> Operator </td>
                                            <td className="transparentTableData">Data Types</td>
                                            <td className="transparentTableData">Functios</td>
                                        </tr>
                                        <tr>
                                            <td className="transparentTableData"> Object </td>
                                            <td className="transparentTableData">Event</td>
                                            <td className="transparentTableData">Strings</td>
                                        </tr>
                                        <tr>
                                            <td className="transparentTableData">Math</td>
                                            <td className="transparentTableData">Loop</td>
                                            <td className="transparentTableData">RegXp</td>
                                        </tr>
                                        <tr>
                                            <td className="transparentTableData">Maps</td>
                                            <td className="transparentTableData">Errors</td>
                                            <td className="transparentTableData text-danger bg-body-tertiary"> Assignment</td>
                                        </tr>
                                        <tr>
                                            <td style={{ background: 'var( --course-bg) !important' }} className="fw-medium" colSpan="4">
                                                ADOBE
                                                PHOTOSHOP </td>
                                        </tr>
                                        <tr>
                                            <td className="transparentTableData">Introduction</td>
                                            <td className="transparentTableData">Rectangular & All Tool</td>
                                            <td className="transparentTableData">Editing Photo in camera raw</td>
                                        </tr>
                                        <tr>
                                            <td className="transparentTableData">Free Transform, Scale,
                                                Rotate Etc.</td>
                                            <td className="transparentTableData"> Auto Blend Layers & more..</td>
                                            <td className="transparentTableData">Adjustments,
                                                Exposure, Curves
                                                Color Balance</td>
                                        </tr>
                                        <tr>
                                            <td className="transparentTableData">Layer Mask</td>
                                            <td className="transparentTableData"> 3d object creation </td>
                                            <td className="transparentTableData text-danger bg-body-tertiary"> Project Work ( Web
                                                Designing ) </td>
                                        </tr>
                                    </table>
                                </div>
                                <div className="row">
                                    <div className="col mx-2">
                                        <h5 className="textColorOne">What is a Certificate in Web Designing Course? </h5>
                                        <p id="TextCaptionTwoDwd" className="hoverTextOrange"> Certificate in Web Designing is a
                                            certification
                                            course for students who are seeking to learn the fundamentals of web designing after
                                            completing their 10+2. This is a 2- 6 months long course where the students are taught
                                            about
                                            some basic tools and Web coding languages that are useful for web designing. Certificate
                                            courses in web designing are important for students willing to seek a career as a web
                                            designer.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        </div >
    )
}