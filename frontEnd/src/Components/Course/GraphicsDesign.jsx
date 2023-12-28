import { Link } from "react-router-dom"
import { useState } from "react";


export default function ComputerLanguage() {



    const [DiplomaData, setDiplomaData] = useState('var(--mainBgcolor)')
    const [DiplomaText, setDiplomaText] = useState('#212329')
    const [mainContainer, setmainContainer] = useState('white')
    const [DiplomaTitle, setDiplomaTitle] = useState('white')
    const [mainContainerBorder, setmainContainerBorder] = useState('transparent')
    const [DiplomaTitleBorder, setDiplomaTitleBorder] = useState('transparent')


    const DarkMode = () => {
        if (DiplomaData === 'black') {
            setDiplomaData('var(--mainBgcolor)')
            setDiplomaText('#212329')
            setmainContainer('white')
            setDiplomaTitle('white')
            setDiplomaTitleBorder('transparent')
            setmainContainerBorder('transparent')
        }
        else {
            setDiplomaData('black')
            setDiplomaText('white')
            setDiplomaTitle('var(--MyDarkGrayBg)')
            setmainContainer('var(--MyDarkGrayBg)')
            setDiplomaTitleBorder('1px solid #212329')
            setmainContainerBorder('1px solid #212329')

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
                    border: DiplomaTitleBorder,
                    marginTop: '2.7rem'
                }} id="mainDiplomaContainer">
                    <div className="col-md-12 mx-0 px-0">
                        <h1 className="fw-bolder">Graphics <font color="red"> Design </font>
                        </h1> <small className="d-flex px-2"> <a href="index.html" className="nav-link"><i className="fa fa-home">
                        </i> / </a> &nbsp; Graphics Design</small>
                    </div>
                </div>
                <div className=" mx-md-5 py-4  mx-1 mt-3 " style={{ background: mainContainer, border: mainContainerBorder }} >
                    <div className="diplomaTable pb-3 my-2">
                        <div className="container-fluid" data-aos="fade-down">
                            <table className="table table-hover table-bordered border-primary table-lg table-hover"
                                style={{ border: '1px solid skyblue' }}>
                                <tr className="headText">
                                    <th colspan="4"> DDTP ( Diploma in Desktop Publishing) </th>
                                </tr>
                                <tr className="my-row-color">
                                    <th colspan="3"> COURSE CONTENTS </th>
                                    <th> DURATION: 6 MONTHS </th>
                                </tr>
                                <tr>
                                    <td className="text-danger" colspan="4">Module-1</td>
                                </tr>
                                <tr>
                                    <td className="transparentTableData">Computer Fundamantal  </td>
                                    <td className="transparentTableData">MS Dos </td>
                                    <td className="transparentTableData"> Windows Operating System </td>
                                    <td className="transparentTableData"> Microsoft Word </td>
                                </tr>
                                <tr>
                                    <td className="transparentTableData"> Microsoft Excel </td>
                                    <td className="transparentTableData">Microsoft PowerPoint</td>
                                    <td className="transparentTableData"> Microsoft Access </td>
                                    <td className="transparentTableData">Computer Network & Internet</td>
                                </tr>
                                <tr>
                                    <td className="text-danger" colspan="4">Module-2</td>
                                </tr>
                                <tr>
                                    <td className="transparentTableData">Photoshop </td>
                                    <td className="transparentTableData">Pagemaker</td>
                                    <td className="transparentTableData">Corel-Draw </td>
                                    <td className="transparentTableData">Lab Work </td>
                                </tr>

                            </table>
                        </div>
                    </div>

                    <div className="diplomaTable pb-3 my-2">
                        <div className="container-fluid" data-aos="fade-down">
                            <table className="table table-hover table-bordered border-primary table-lg table-hover"
                                style={{ border: '1px solid skyblue' }}>
                                <tr className="headText">
                                    <th colspan="3"> CDTP (Certificate in Desktop Publishing)) </th>
                                </tr>
                                <tr className="my-row-color">
                                    <th colspan="2"> COURSE CONTENTS </th>
                                    <th> DURATION: 3 MONTHS </th>
                                </tr>
                                <tr>
                                    <td className="text-danger" colspan="4">Module-1</td>
                                </tr>
                                <tr>
                                    <td className="transparentTableData">Introduction to DTP </td>
                                    <td className="transparentTableData">Photoshop </td>
                                    <td className="transparentTableData">Pagemaker</td>
                                </tr>
                                <tr>

                                    <td className="transparentTableData">Corel-Draw </td>
                                    <td className="transparentTableData text-danger bg-body-tertiary">Lab Work </td>
                                    <td className="transparentTableData text-danger bg-body-tertiary">Project Work</td>

                                </tr>

                            </table>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}
