import { Link } from "react-router-dom"
import { useState } from "react";

function ComputerLanguage() {

    const [DiplomaData, setDiplomaData] = useState('var(--mainBgcolor)')
    const [DiplomaText, setDiplomaText] = useState('#212329')
    const [mainContainer, setmainContainer] = useState('white')
    const [DiplomaTitle, setDiplomaTitle] = useState('white')
    const [mainContainerBorder, setmainContainerBorder] = useState('transparent')


    const DarkMode = () => {
        if (DiplomaData === 'black') {
            setDiplomaData('var(--mainBgcolor)')
            setDiplomaText('#212329')
            setmainContainer('white')
            setDiplomaTitle('white')
            setmainContainerBorder('transparent')
        }
        else {
            setDiplomaData('black')
            setDiplomaText('white')
            setDiplomaTitle('var(--MyDarkGrayBg)')
            setmainContainer('var(--MyDarkGrayBg)')
            setmainContainerBorder('1px solid gray')

        }
    }


    return (
        <div style={{ background: DiplomaData, color: DiplomaText }} >
            <div className="py-3">

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

                <div className="container-fluid row  text-center px-0 mx-0 py-2  myshadow" style={{
                    background: DiplomaTitle,
                    marginTop: '2.7rem'
                }} id="mainDiplomaContainer">
                    <div className="col-md-12 mx-0 px-0">
                        <h1 className="fw-bolder">Computer <font color="red"> Languages </font>
                        </h1> <small className="d-flex px-2"> <a href="index.html" className="nav-link"><i className="fa fa-home">
                        </i> / </a> &nbsp; Computer Languages</small>
                    </div>
                </div>
                <div className=" mx-md-5 py-4  mx-1 mt-3 " style={{ background: mainContainer, border: mainContainerBorder }} >
                    <div className="diplomaTable pb-3 my-2">
                        <div className="container-fluid" data-aos="fade-down">
                            <table className="table table-hover table-bordered border-primary               table-lg table-hover"
                                style={{ border: '1px solid skyblue' }}>
                                <tr className="headText">
                                    <th colspan="4"> C Language </th>
                                </tr>
                                <tr className="my-row-color">
                                    <th colspan="3"> COURSE CONTENTS </th>
                                    <th> DURATION: 3 MONTHS </th>
                                </tr>
                                <tr>
                                    <td  className="transparentTableData">Overview of SDLC </td>
                                    <td  className="transparentTableData">MS Dos </td>
                                    <td  className="transparentTableData">Windows Operating System </td>
                                    <td  className="transparentTableData">Flowchart </td>
                                </tr>
                                <tr>
                                    <td className="transparentTableData">MS DOS &amp; DOS Commands  </td>
                                    <td className="transparentTableData">Project &amp; Lab Work</td>
                                    <td className="transparentTableData">C Fundamenlats </td>
                                    <td className="transparentTableData">Variable &amp; Constant</td>
                                </tr>
                                <tr>
                                    <td className="transparentTableData">Data Type </td>
                                    <td className="transparentTableData">C Input/Output</td>
                                    <td className="transparentTableData">Arrays &amp; String </td>
                                    <td className="transparentTableData">Lab Work </td>
                                </tr>
                                <tr>
                                    <td className="transparentTableData">Control statement &amp; Decision-Making </td>
                                    <td className="transparentTableData"> Memory Management  </td>
                                    <td className="transparentTableData">File Handling </td>
                                    <td className="transparentTableData text-danger bg-body-tertiary">Project- work </td>
                                </tr>
                            </table>
                        </div>
                        <div className="container-fluid my-4 " data-aos="fade-down">
                            <table className="table table-bordered border-primary  table-lg table-hover" style={{
                                border: '1px solid skyblue'
                            }}>
                                <tr className="headText">
                                    <th colspan="4"> C++ Language</th>
                                </tr>
                                <tr className="my-row-color">
                                    <th colspan="2"> COURSE CONTENTS </th>
                                    <th> DURATION: 3 MONTHS </th>
                                </tr>
                                <tr>
                                    <td  className="transparentTableData"> Overview of C++ </td>
                                    <td  className="transparentTableData"> Decision Making </td>
                                    <td  className="transparentTableData">Loops </td>
                                </tr>
                                <tr>
                                    <td className="transparentTableData">Functions </td>
                                    <td className="transparentTableData">Array and Strings</td>
                                    <td className="transparentTableData">Pointers and References</td>
                                </tr>
                                <tr>
                                    <td className="transparentTableData">Structures, Unions and Enumerations</td>
                                    <td className="transparentTableData">Object-Oriented Programming</td>
                                    <td className="transparentTableData text-danger bg-body-tertiary">Project- work </td>

                                </tr>
                            </table>
                        </div>
                        <div className="container-fluid my-4" data-aos="fade-down">
                            <table className="table table-bordered border-primary  table-lg table-hover" style={{
                                border: '1px solid skyblue'
                            }}>
                                <tr className="headText" style={{ textAlign: 'center' }}>
                                    <th colspan="4"> Python Programming </th>
                                </tr>
                                <tr className="my-row-color">
                                    <th colspan="2"> COURSE CONTENTS </th>
                                    <th> DURATION: 6 MONTHS </th>
                                </tr>
                                <tr>
                                    <td className="transparentTableData"
                                        style={{ background: "var( --course-bg) !important" }}
                                        colSpan={4}
                                    >
                                        Module-1 <span className="transparentTableData text-danger"> Python Basics</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="transparentTableData"> Overview of Python </td>
                                    <td className="transparentTableData">Data Structure &amp; Data type </td>
                                    <td className="transparentTableData"> Input &amp; Output </td>
                                </tr>
                                <tr>
                                    <td className="transparentTableData"
                                        style={{ background: "var( --course-bg) !important" }}
                                        colSpan={4}
                                    >
                                        Module-2 <span className="transparentTableData text-danger">Python Program Flow</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="transparentTableData">Indentation </td>
                                    <td className="transparentTableData">The If statement and its’ related statement </td>
                                    <td className="transparentTableData">The while loop </td>
                                </tr>
                                <tr>
                                    <td className="transparentTableData">The For loop </td>
                                    <td className="transparentTableData">The range statement </td>
                                    <td className="transparentTableData">Break &amp;Continue </td>
                                </tr>
                                <tr>
                                    <td className="transparentTableData"
                                        style={{ background: 'gray' }}
                                        colSpan={4}>Module-3 <span className="transparentTableData text-danger"> Functions&amp; Modules</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td id="AdcaTextThirthy" className="transparentTableData">introduction </td>
                                    <td id="AdcaTextFourty" className="transparentTableData">Components and Events </td>
                                </tr>
                                <tr>
                                    <td className="transparentTableData"
                                        style={{ background: "var( --course-bg) !important" }}
                                        colSpan={4}>
                                        Module-4 <span className="transparentTableData text-danger"> Writing GUIs in Python (Tkinter)</span>
                                    </td>
                                </tr>
                            </table>
                        </div>

                    </div>
                </div>

            </div>

        </div>)
}
export default ComputerLanguage