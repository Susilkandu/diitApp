import { Link } from "react-router-dom"
import { useState } from "react";


function Diploma() {

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
            marginTop: '3.8rem'
        }} id="mainDiplomaContainer">
            <div className="col-md-12 mx-0 px-0">
                <h1 className="fw-bolder">All <font color="red"> Diploma Course </font>
                </h1> <small className="d-flex px-2"> <a href="index.html" className="nav-link"><i className="fa fa-home">
                </i> / </a> &nbsp; Diploma Courses </small>
            </div>
        </div>
        <div className=" mx-md-5 py-4  mx-1 mt-3 " style={{ background: mainContainer, border: mainContainerBorder }} >
            <div className="diplomaTable pb-3 my-2">
                <div className="container-fluid" data-aos="fade-down">
                    <table className="table table-hover table-bordered border-primary               table-lg table-hover"
                        style={{ border: '1px solid skyblue' }}>
                        <tr className="headText">
                            <th colspan="5"> ADCA<sup className="transparentTableData m-0 p-0 text-white">+</sup> ( Advance
                                Diploma in Computer Application) </th>
                        </tr>
                        <tr className="my-row-color">
                            <th colspan="3"> COURSE CONTENTS </th>
                            <th> DURATION: 18 MONTHS </th>
                        </tr>
                        <tr>
                            <td id="TextOne" className="transparentTableData">Fundamental of Computer </td>
                            <td id="TextTwo" className="transparentTableData">MS Dos </td>
                            <td id="TextThree" className="transparentTableData">Windows Operating System </td>
                            <td id="TextFour" className="transparentTableData">Microsoft Office </td>
                        </tr>
                        <tr>
                            <td id="TextFive" className="transparentTableData">Tally & inventory with GST </td>
                            <td id="TextSix" className="transparentTableData">Photoshop </td>
                            <td id="TextSeven" className="transparentTableData">Pagemaker </td>
                            <td id="TextEight" className="transparentTableData">Corel-Draw </td>
                        </tr>
                        <tr>
                            <td id="TextNine" className="transparentTableData">C language </td>
                            <td id="TextTen" className="transparentTableData"> C++ language </td>
                            <td id="TextEleven" className="transparentTableData">HTML </td>
                            <td id="TextTwelv" className="transparentTableData">CSS </td>
                        </tr>
                        <tr>
                            <td id="TextThirty" className="transparentTableData">JavaScript </td>
                            <td id="TextFrty" className="transparentTableData">Internet & E-Mail </td>
                            <td id="TextFifty" className="transparentTableData">Hardware </td>
                            <td className="transparentTableData text-danger bg-body-tertiary">Project- work </td>
                        </tr>
                    </table>
                </div>
                <div className="container-fluid my-4 " data-aos="fade-down">
                    <table className="table table-bordered border-primary  table-lg table-hover" style={{
                        border: '1px solid skyblue'
                    }}>
                        <tr className="headText">
                            <th colspan="5"> DBI ( Diploma in Banking Insurance) </th>
                        </tr>
                        <tr className="my-row-color">
                            <th colspan="3"> COURSE CONTENTS </th>
                            <th> DURATION: 6 MONTHS </th>
                        </tr>
                        <tr>
                            <td id="DbiTextOne" className="transparentTableData"> Overview of Banking </td>
                            <td id="DbiTextTwo" className="transparentTableData"> Overview of retail Banking </td>
                            <td id="DbiTextThree" className="transparentTableData">Profission skills </td>
                            <td id="DbiTextFour" className="transparentTableData">Salles Planning & Adiminitration </td>
                        </tr>
                        <tr>
                            <td id="DbiTextFive" className="transparentTableData">Salles skills & Technique </td>
                            <td id="DbiTextSix" className="transparentTableData">Realationship buinding & team management
                            </td>
                            <td id="DbiTextSeven" className="transparentTableData">Internet Banking & Activities </td>
                            <td id="DbiTextEight" className="transparentTableData">Non Transactional task </td>
                        </tr>
                        <tr>
                            <td id="DbiTextNine" className="transparentTableData">Viewing recent Transaction </td>
                            <td id="DbiTextTen" className="transparentTableData">Viewing Account Balance </td>
                            <td id="DbiTextEleven" className="transparentTableData">Ordering chequebooks </td>
                            <td id="DbiTextTwelv" className="transparentTableData">Downloading perodic account statement
                            </td>
                        </tr>
                        <tr>
                            <td id="DbiTextThirthy" className="transparentTableData">Downloading application </td>
                            <td id="DbiTextFourty" className="transparentTableData"> M-Banking </td>
                            <td id="DbiTextFifty" className="transparentTableData"> E-Banking </td>
                            <td id="DbiTextSixty" className="transparentTableData">Lab & Project - work </td>
                        </tr>
                    </table>
                </div>
                <div className="container-fluid my-4" data-aos="fade-down">
                    <table className="table table-bordered border-primary  table-lg table-hover" style={{
                        border: '1px solid skyblue'
                    }}>
                        <tr className="headText" style={{ textAlign: 'center' }}>
                            <th colspan="5"> ADCA (Advance Diploma in Computer Application) </th>
                        </tr>
                        <tr className="my-row-color">
                            <th colspan="3"> COURSE CONTENTS </th>
                            <th> DURATION: 15 MONTHS </th>
                        </tr>
                        <tr>
                            <td id="AdcaTextOne" className="transparentTableData">Fundamental of Computer </td>
                            <td id="AdcaTextTwo" className="transparentTableData">MS Dos </td>
                            <td id="AdcaTextThree" className="transparentTableData">Windows Operating System </td>
                            <td id="AdcaTextFour" className="transparentTableData">Microsoft Office </td>
                        </tr>
                        <tr>
                            <td id="AdcaTextFive" className="transparentTableData">Tally & inventory </td>
                            <td id="AdcaTextSix" className="transparentTableData">GST </td>
                            <td id="AdcaTextSeven" className="transparentTableData">Photoshop </td>
                            <td id="AdcaTextEight" className="transparentTableData">Pagemaker </td>
                        </tr>
                        <tr>
                            <td id="AdcaTextNine" className="transparentTableData">Corel-Draw </td>
                            <td id="AdcaTextTen" className="transparentTableData">C language </td>
                            <td id="AdcaTextEleven" className="transparentTableData"> C++ language </td>
                            <td id="AdcaTextTwelv" className="transparentTableData">HTML </td>
                        </tr>
                        <tr>
                            <td id="AdcaTextThirthy" className="transparentTableData">JavaScript </td>
                            <td id="AdcaTextFourty" className="transparentTableData">Internet & E-Mail </td>
                            <td id="AdcaTextFifty" className="transparentTableData">Hardware </td>
                            <td className="transparentTableData text-danger bg-body-tertiary">Project- work </td>
                        </tr>
                    </table>
                </div>
                <div className="container-fluid  my-4" data-aos="fade-down">
                    <table className="table table-bordered border-primary  table-lg table-hover" style={{
                        border: '1px solid skyblue'
                    }}>
                        <tr className="headText">
                            <th colspan="5"> Diploma in Web Development </th>
                        </tr>
                        <tr className="my-row-color">
                            <th colspan="3"> COURSE CONTENTS </th>
                            <th> DURATION: 12 MONTHS </th>
                        </tr>
                        <tr>
                            <td id="DwdTextOne" className="transparentTableData"> HTML </td>
                            <td id="DwdTextTwo" className="transparentTableData"> CSS </td>
                            <td id="DwdTextThree" className="transparentTableData"> SCSS </td>
                            <td id="DwdTextFour" className="transparentTableData"> SASS </td>
                        </tr>
                        <tr>
                            <td id="DwdTextFive" className="transparentTableData"> Bootstrap </td>
                            <td id="DwdTextSix" className="transparentTableData"> JavaScript </td>
                            <td id="DwdTextSeven" className="transparentTableData">TypeScript </td>
                            <td className="transparentTableData text-danger bg-body-tertiary">Project Work </td>
                        </tr>
                    </table>
                </div>
                <div className="container-fluid  my-4" data-aos="fade-down">
                    <table className="table table-bordered border-primary  table-lg table-hover" style={{
                        border: '1px solid skyblue'
                    }}>
                        <tr className="headText">
                            <th colspan="5"> DCA ( Diploma in Computer Application) </th>
                        </tr>
                        <tr className="my-row-color">
                            <th colspan="3"> COURSE CONTENTS </th>
                            <th> DURATION: 12 MONTHS </th>
                        </tr>
                        <tr>
                            <td id="DcaTextOne" className="transparentTableData">Fundamental of Computer </td>
                            <td id="DcaTextTwo" className="transparentTableData">MS DOS </td>
                            <td id="DcaTextThree" className="transparentTableData">Windows Operating System </td>
                            <td id="DcaTextFour" className="transparentTableData">Microsoft Office </td>
                        </tr>
                        <tr>
                            <td id="DcaTextFive" className="transparentTableData">Tally & inventory with GST </td>
                            <td id="DcaTextSix" className="transparentTableData">Photoshop </td>
                            <td id="DcaTextSeven" className="transparentTableData">Pagemaker </td>
                            <td id="DcaTextEight" className="transparentTableData">Corel-Draw </td>
                        </tr>
                        <tr>
                            <td id="DcaTextNine" className="transparentTableData">Internet & E:mail </td>
                            <td id="DcaTextTen" className="transparentTableData">Syber Security With A.I. </td>
                            <td id="DcaTextEleven" className="transparentTableData">C language </td>
                            <td id="DcaTextTwelv" className="transparentTableData">C++ language </td>
                        </tr>
                    </table>
                </div>
                <div className="container-fluid   my-4" data-aos="fade-down">
                    <table className="table table-bordered border-primary  table-lg table-hover" style={{
                        border: '1px solid skyblue'
                    }}>
                        <tr className="headText">
                            <th colspan="5"> DDTP ( Diploma in Desktop Publishing) </th>
                        </tr>
                        <tr className="my-row-color">
                            <th colspan="3"> COURSE CONTENTS </th>
                            <th> DURATION: 6 MONTHS </th>
                        </tr>
                        <tr>
                            <td id="DdtpTextOne" className="transparentTableData">Computer Fundamental </td>
                            <td id="DdtpTextTwo" className="transparentTableData">MS Dos </td>
                            <td id="DdtpTextThree" className="transparentTableData">Windows Operating System </td>
                            <td id="DdtpTextFour" className="transparentTableData">MS Office </td>
                        </tr>
                        <tr>
                            <td id="DdtpTextFive" className="transparentTableData">Tally & inventory with GST </td>
                            <td id="DdtpTextSix" className="transparentTableData">Photoshop </td>
                            <td id="DdtpTextSeven" className="transparentTableData">Pagemaker </td>
                            <td id="DdtpTextEight" className="transparentTableData">Corel-Draw </td>
                        </tr>
                    </table>
                </div>
                <div className="container-fluid   my-4" data-aos="fade-down">
                    <table className="table table-bordered border-primary  table-lg table-hover" style={{
                        border: '1px solid skyblue'
                    }}>
                        <tr className="headText">
                            <th colspan="3"> CHN (Certificate in Hardware & Networking) </th>
                        </tr>
                        <tr className="my-row-color">
                            <th colspan="2"> COURSE CONTENTS </th>
                            <th style={{ textAlign: 'center' }}> DURATION: 3 MONTHS </th>
                        </tr>
                        <tr>
                            <td id="ChnTextOne" className="transparentTableData">OverView of M.S. Office </td>
                            <td id="ChnTextTwo" className="transparentTableData">Introduction to Operating System </td>
                            <td id="ChnTextThree" className="transparentTableData">Operating System Installation </td>
                        </tr>
                        <tr>
                            <td id="ChnTextFour" className="transparentTableData">Software Installation </td>
                            <td id="ChnTextFive" className="transparentTableData">Computer Assembling </td>
                            <td id="ChnTextSix" className="transparentTableData">Trubleshooting of Computer </td>
                        </tr>
                    </table>
                </div>
                <div className="container-fluid  my-4 " data-aos="fade-down">
                    <table className="table table-bordered border-primary  table-lg table-hover" style={{
                        border: '1px solid skyblue'
                    }}>
                        <tr className="headText">
                            <th colspan="2"> CAC (Certificate in Accounting Cource ) </th>
                        </tr>
                        <tr className="my-row-color">
                            <th colspan=""> COURSE CONTENTS </th>
                            <th style={{ textAlign: 'center' }}> DURATION: 3 MONTHS </th>
                        </tr>
                        <tr>
                            <td id="CacTextOne" className="transparentTableData">OverView of Accounting </td>
                            <td id="CacTextTwo" className="transparentTableData">Tally with inventory & taxation with GST
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="container-fluid  my-4" data-aos="fade-down">
                    <table className="table table-bordered border-primary  table-lg table-hover" style={{
                        border: '1px solid skyblue'
                    }}>
                        <tr className="headText">
                            <th colspan="4"> CDTP (Certificate in Desktop Publishing) </th>
                        </tr>
                        <tr className="my-row-color">
                            <th colspan="3"> COURSE CONTENTS </th>
                            <th style={{ textAlign: 'center' }}> DURATION: 3 MONTHS </th>
                        </tr>
                        <tr>
                            <td id="CdtpTextOne" className="transparentTableData">Introduction to DTP </td>
                            <td id="CdtpTextTwo" className="transparentTableData">Photoshop </td>
                            <td id="CdtpTextThree" className="transparentTableData">Pagemaker </td>
                            <td id="CdtpTextFour" className="transparentTableData">Corel Draw </td>
                        </tr>
                    </table>
                </div>
                <div className="container-fluid  my-4 " data-aos="fade-down">
                    <table className="table table-bordered border-primary  table-lg table-hover" style={{
                        border: '1px solid skyblue'
                    }}>
                        <tr className="headText">
                            <th colspan="3"> ADIT (Advanced Diploma Information Technology) </th>
                        </tr>
                        <tr className="my-row-color">
                            <th colspan="2"> COURSE CONTENTS </th>
                            <th style={{ textAlign: 'center' }}> DURATION: 12 MONTHS </th>
                        </tr>
                        <tr>
                            <td id="AditTextOne" className="transparentTableData">Computer Fundamantal </td>
                            <td id="AditTextTwo" className="transparentTableData">Microsoft Office </td>
                            <td id="AditTextThree" className="transparentTableData">Operating System(G.U.I & C.U.I) </td>
                        </tr>
                        <tr>
                            <td id="AditTextFour" className="transparentTableData">Internet </td>
                            <td id="AditTextFive" className="transparentTableData"> MY SQL </td>
                            <td id="AditTextSix" className="transparentTableData">C Language </td>
                        </tr>
                        <tr>
                            <td id="AditTextSeven" className="transparentTableData">C++ </td>
                            <td id="AditTextEight" className="transparentTableData">C# </td>
                            <td id="AditTextNine" className="transparentTableData">HTML </td>
                        </tr>
                        <tr>
                            <td id="AditTextTen" className="transparentTableData">CSS </td>
                            <td id="AditTextEleven" className="transparentTableData">JavaScript </td>
                            <td id="AditTextTwelv" className="transparentTableData">Data Base </td>
                        </tr>
                        <tr>
                            <td id="AditTextThirty" className="transparentTableData">VB.net </td>
                            <td id="AditTextFourty" className="transparentTableData">ASP.net </td>
                            <td className="transparentTableData text-danger bg-body-tertiary">Project work </td>
                        </tr>
                    </table>
                </div>
                <div className="container-fluid  my-4" data-aos="fade-down">
                    <table className="table table-bordered border-primary  table-lg table-hover" style={{
                        border: '1px solid skyblue'
                    }}>
                        <tr className="headText">
                            <th colspan="3"> CCA (Certificate in Computer Application ) </th>
                        </tr>
                        <tr className="my-row-color">
                            <th colspan="2"> COURSE CONTENTS </th>
                            <th> DURATION: 3 MONTHS </th>
                        </tr>
                        <tr>
                            <td id="CcaTextOne" className="transparentTableData"> Computer Fundamantal </td>
                            <td id="CcaTextTwo" className="transparentTableData">Introduction to Microsoft </td>
                            <td id="CcaTextThree" className="transparentTableData"> Microsoft Windows </td>
                        </tr>
                        <tr>
                            <td id="CcaTextFour" className="transparentTableData"> Microsoft Word </td>
                            <td id="CcaTextFive" className="transparentTableData"> Microsoft Excel </td>
                            <td id="CcaTextSix" className="transparentTableData"> Microsoft Powerpoint </td>
                        </tr>
                    </table>
                </div>
                <div className="container-fluid  my-4" data-aos="fade-down">
                    <table className="table table-bordered border-primary  table-lg table-hover" style={{
                        border: '1px solid skyblue'
                    }}>
                        <tr className="headText">
                            <th colspan="3"> DIT (Diploma in Information Technology ) </th>
                        </tr>
                        <tr className="my-row-color">
                            <th colspan="2"> COURSE CONTENTS </th>
                            <th> DURATION: 6 MONTHS </th>
                        </tr>
                        <tr>
                            <td id="DitTextOne" className="transparentTableData"> Computer Fundamantal </td>
                            <td id="DitTextTwo" className="transparentTableData">MS DOS </td>
                            <td id="DitTextThree" className="transparentTableData"> WINDOWS Operating System </td>
                        </tr>
                        <tr>
                            <td id="DitTextFour" className="transparentTableData"> Microsoft Windows </td>
                            <td id="DitTextFive" className="transparentTableData"> Microsoft Word </td>
                            <td id="DitTextSix" className="transparentTableData"> Microsoft Excel </td>
                        </tr>
                        <tr>
                            <td id="DitTextSeven" className="transparentTableData"> Microsoft Powerpoint </td>
                            <td id="DitTextEight" className="transparentTableData">Computer Network & Internet </td>
                            <td className="transparentTableData text-danger bg-body-tertiary">Lab & Project </td>
                        </tr>
                        <tr>
                            <td id="DitTextNine" className="transparentTableData">Information Technology </td>
                            <td id="DitTextTen" className="transparentTableData">Object Oriented Programming in C++ </td>
                            <td className="transparentTableData text-danger bg-body-tertiary">Project Work </td>
                        </tr>
                    </table>
                </div>
                <div className="container-fluid  my-4" data-aos="fade-down">
                    <table className="table table-bordered border-primary  table-lg table-hover" style={{
                        border: '1px solid skyblue'
                    }}>
                        <tr className="headText">
                            <th colspan="3"> DCAD (Diploma in Computer Application & Designing) </th>
                        </tr>
                        <tr className="my-row-color">
                            <th colspan="2"> COURSE CONTENTS </th>
                            <th> DURATION: 12 MONTHS </th>
                        </tr>
                        <tr>
                            <td style={{ background: 'var(--course-bg) !important' }} colspan="4"> Module-1 </td>
                        </tr>
                        <tr>
                            <td id="DcadTextOne" className="transparentTableData"> Computer Fundamantal </td>
                            <td id="DcadTextTwo" className="transparentTableData">MS DOS </td>
                            <td id="DcadTextThree" className="transparentTableData"> Windows Operating System </td>
                        </tr>
                        <tr>
                            <td id="DcadTextFour" className="transparentTableData"> Microsoft Word </td>
                            <td id="DcadTextFive" className="transparentTableData"> Microsoft Excel </td>
                            <td id="DcadTextSix" className="transparentTableData"> Microsoft Powerpoint </td>
                        </tr>
                        <tr>
                            <td id="DcadTextSeven" className="transparentTableData"> Microsoft Access </td>
                            <td id="DcadTextEight" className="transparentTableData">Computer Network & Internet </td>
                            <td className="transparentTableData text-danger bg-body-tertiary"> Project Work </td>
                        </tr>
                        <tr>
                            <td style={{ background: 'var( --course-bg) !important' }} colspan="4"> Module-2 </td>
                        </tr>
                        <tr>
                            <td id="DcadTextNine" className="transparentTableData">Photoshop </td>
                            <td id="DcadTextTen" className="transparentTableData">Pagemaker </td>
                            <td id="DcadTextEleven" className="transparentTableData">Corel-Draw </td>
                        </tr>
                        <tr>
                            <td id="DcadTextTwelv" className="transparentTableData">HTML </td>
                            <td id="DcadTextThirty" className="transparentTableData">CSS </td>
                            <td className="transparentTableData text-danger bg-body-tertiary"> Project Work ( Web Designing
                                ) </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>)
}
 export default Diploma