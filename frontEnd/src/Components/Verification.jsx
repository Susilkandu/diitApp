import React, { useState } from 'react';

import html2pdf from 'html2pdf.js';
const PrintComponent = () => {
    const printData = () => {
        const data = document.getElementById('VerificationBody').innerHTML;
        const PrintResult = document.getElementById('PrintResult').innerHTML;
        document.getElementById('VerificationBody').innerHTML = PrintResult;
        window.print();
        document.getElementById('VerificationBody').innerHTML = data;
        html2pdf()
            .from(PrintResult)
            .save();
    };

    const [VerificationBgColor, setVerificationBgColor] = useState('white')
    const DarkMode = () => {
        if (VerificationBgColor === 'black') {
            setVerificationBgColor('var(--mainBgcolor)')

        }
        else {

            setVerificationBgColor('gray')
        }
    }



    return (
        <div style={{ margin: '4.3rem 0', background: VerificationBgColor }} id="VerificationBody">
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
                    <a className="nav-link active text-white " id="myH2" aria-current="page" href="tel:+919918151032" title="Call-now">
                        <img className='img-fluid' />919918151032
                        &nbsp;&nbsp;</a>
                    <a className="nav-link text-white " id="myH3" aria-current="page" href="#" title="E:Mail-Us">
                        <img className='img-fluid' />
                        ajtiwari4@gmail.com
                        &nbsp;&nbsp;</a>
                </div>
            </div>
            <div className="row mx-0 px-0 justify-content-center" style={{ fontFamily: "'Poppins', sans-serif" }} >

                <div className="col-md-5  col-sm-12 my-4 ">
                    <div style={{ background: 'white' }}>
                        <form className="row g-4 m-0  m-auto text-center myshadow border border-light  " id="verifyParentBg"
                        >
                            <div className="col-12 m-0 p-0 " style={{ border: '1px solid #012C5', background: 'var(--card-bg)' }}>

                                <div className="container text-center m-0 h4 fw-bold text-uppercase " style={{ color: 'rgb(255, 255, 255)' }}>
                                    <b style={{ letterSpacing: '1px', color: 'white' }}>
                                        Verify Your <font color="red">Certificate</font>
                                    </b>
                                </div>
                            </div>
                            <div className="col-md-12 position-relative ">
                                <label className="form-label text-primary d-block fs-4 fw-bolder  text-uppercase"> Registration
                                    No. </label>
                                <div className="input-group  rounded rounded-0  ">
                                    <span className="input-group-text bg-primary-subtle rounded rounded-0 img-fluid">
                                        <img src="images/icon/user.png" width="30" alt="" /></span>
                                    <input type="number" className="form-control  rounded rounded-0  "
                                        placeholder="Enter Registration No. " />
                                </div>
                            </div>
                            <div className="col-md-12 pb-2 text-center">
                                <button type="button" className="btn btn-primary text-white 
                                yellow-btn border border-white fw-bold" > <i
                                        className="fa fa-search"></i> Search</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-12 py-3 myshadow position-relative bg-white
                 border border-secondary-subtle  " id='DisplayNone'
                >
                    <div id="PrintResult">
                        <div className="m-1 px-2 certificate" style={{ background: '#00062B', border: "15px solid #00062B" }}>
                            <div className="header row bg-white d-flex py-1">

                                <div className="col-3 HeaderLeft">
                                    <img src="images/vender/logo.png" width={90} alt="DIIT" />
                                </div>
                                <div className="col-5 text-center HeadeCenter">
                                    <div className="row d-flex justify-content-end ">
                                        <div className="col-8  title">
                                            <h1 className='fw-bolder m-0 p-0'>Drishtee</h1>
                                            <p className='p-0 m-0' style={{ color: 'maroon' }} >An ISO 9001-2008 Certified Institute</p>
                                        </div>
                                        <div className="col-4">
                                            <img src="images/vender/abhay.jpg" width={90} alt="DIIT" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 HeaderRight text-end ">
                                    <p>Reg Under Society act 21, 1860 govt, of india</p>
                                    <p>Reg NO : 72/2013-14</p>
                                </div>
                            </div>
                            <div className="caption text-center " style={{ background: '#00062B', color: 'white', fontFamily: "'Poppins', sans-serif" }}>
                                <h1 className='p-0 m-0'>Certificate of Course Completion</h1>
                            </div>
                            <div className="row p-1 px-3 bg-white text-center">
                                <div className="col ">
                                    <p className='m-0 p-0'> This Certified is awarded to Mr/Miss <span style={{ color: 'red', fontSize: '1rem', fontWeight: 'bold' }}> Amit Kumar Singh</span></p>
                                    on the successfully Completion of a <span><b> 06 month (230 Hrs.)</b></span> course , titled
                                    <h3 style={{ color: 'red', fontWeight: 'bold' }}> Diploma in Computer Application & Accounting</h3>
                                    <p>  with grade & percentage <span style={{ color: 'red' }}> Execellent & 88% </span>
                                        , Examination conducted on at all-indiabasis at <span style={{ color: 'red' }}> Maharajganj / U.P.</span> </p>

                                    <div className='AllCoursseContent m-0'>

                                        <ul className='px-lg-3 d-flex flex-wrap p-0  m-0'>
                                            <p className='m-0 p-0 pe-2 '> <b>Modulus Covered:</b> </p>
                                            <li>MS. Windows</li>
                                            <li>MS. Word</li>
                                            <li>MS. PowerPoint</li>
                                            <li>MS. Excel</li>
                                            <li>MS. Access</li>
                                            <li>Tally 9.2 with inventory & Taxation</li>
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>JavaScript</li>
                                            <li>Bootstrap</li>
                                        </ul>

                                        <table className='w-100 table-responsive m-0 p-0'>
                                            <tr className='m-0 p-0'>
                                                <td className='m-0 p-0   text-start' ><img src="images/vender/signature.png" alt="Sign" /><p className='m-0 p-0'>Chif Exam Controller</p></td>
                                                <td className='m-0 p-0' colSpan={3}>Date of issue: <b><span> 05 FEB 2020</span></b></td>
                                            </tr>
                                            <tr style={{ fontWeight: 'bold', borderTop: '1px solid blue', borderBottom: '1px solid blue' }}>
                                                <td className='m-0 ' colSpan={2}>Student Reg No.: <span className='text-danger'> DIIT124 / DCAA / 786</span></td>
                                                <td className='m-0 ' colSpan={2}>Center Code : DIIT124</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div className="col  text-center mt-1">
                                        <p className='border border-1 border-warning-subtle bg-warning-subtle d-inline-block p-1 px-4'>Grade Mark : Exellent (81% - 100%), &nbsp;Very Good (71% - 80), &nbsp; Good (61% - 70%), &nbsp; Satisfactory (50% - 60%)</p>
                                    </div>
                                    <div className="col fw-normal text-center mb-1">
                                        <h5 className='m-0 p-0' style={{ color: 'maroon', fontSize: '1.4rem', fontWeight: 'medium' }} > DRISHTEE INSTITUTE OF INFORMATION TECHNOLOGY</h5>
                                        <p className='m-0 p-0'>(A UNIT OF DRISHTEE EDUCATIONAL & WELFARE SOCIETY)</p>
                                        <p className='m-0 p-0'><b>Corporate Office : </b> Gayatri nagar, Kurghat, Gorakhpur District: Gorakhpur(273001) &nbsp;&nbsp;&nbsp; https://www.drishteeindia.com </p>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
                    <button className=" btn btn-sm btn-primary yellow-btn" onClick={printData}>
                        <i className="fa fa-download"></i>  Download
                    </button>
                </div>
            </div>
        </div>
    );
};
export default PrintComponent;
