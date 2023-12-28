import { useState } from "react";
import React, { useEffect, useRef } from 'react';
function About() {
    const timersRef = useRef([]);
    useEffect(() => {
        const counter = (id, start, end, duration) => {
            let obj = document.getElementById(id),
                current = start,
                range = end - start,
                increment = end > start ? 1 : -1,
                step = Math.abs(Math.floor(duration / range)),
                timer = setInterval(() => {
                    current += increment;
                    obj.textContent = current;
                    if (current === end) {
                        clearInterval(timer);
                    }
                }, step);
            timersRef.current.push(timer);
        };
        counter("count1", 0, 200, 6000, 1);
        counter("count2", 0, 20, 6000, 1);
        counter("count3", 0, 20, 6000, 1);
        return () => {
            timersRef.current.forEach(clearInterval);
        };
    }, []);
    const [AboutBackground, setAboutBackground] = useState(' #E8EAED')
    const [MissionLeftChildA, setMissionLeftChildA] = useState('white')
    const [MissionLeftChildB, setMissionLeftChildB] = useState('white')
    const [MissionRightA, setMissionRightA] = useState('white')
    const [MissionBorderA, setMissionBorderA] = useState('transparent')
    const [LeftMissionA, setLeftMissionA] = useState('transparent')
    const [MissionTextA, setMissionTextA] = useState('black')
    const [MissionLeftTextA, setMissionLeftTextA] = useState('black')
    const [MissionLeftTextB, setMissionLeftTextB] = useState('black')
    const [aboutMainBg, setaboutMainBg] = useState('white')
    const [aboutMainBorder, setaboutMainBorder] = useState('transparent')
    const [rightInfoParentBorder, setrightInfoParentBorder] = useState('transparent')
    const [AboutTextColor, setAboutTextColor] = useState('black')
    const [rightInfoParent, setrightInfoParent] = useState('white')
    const [rightInfoParentFirstChild, setrightInfoParentFirstChild] = useState('black')
    const [rightInfoParentSecondChild, setrightInfoParentSecondChild] = useState('black')
    const [rightInfoParentThirdChild, setrightInfoParentThirdChild] = useState('black')
    const [rightInfoParentFourChild, setrightInfoParentFourChild] = useState('black')
    const [rightInfoParentFiveChild, setrightInfoParentFiveChild] = useState('black')
    const [rightInfoParentSixChild, setrightInfoParentSixChild] = useState('black')
    const [leftAccordionOne, setleftAccordionOne] = useState('white')
    const [leftAccordionTwo, setleftAccordionTwo] = useState('white')
    const [leftAccordionThree, setleftAccordionThree] = useState('white')
    const [leftAccordionFour, setleftAccordionFour] = useState('white')
    const [AccordionA, setAccordionA] = useState('black')
    const [AccordionB, setAccordionB] = useState('black')
    const [AccordionC, setAccordionC] = useState('black')
    const [AccordionD, setAccordionD] = useState('black')

    const [certificateOne, setcertificateOne] = useState('white')
    const [certificateTwo, setcertificateTwo] = useState('white')
    const [certificateThree, setcertificateThree] = useState('white')
    const [certificateFour, setcertificateFour] = useState('white')

    const [certificateOneText, setcertificateOneText] = useState('black')
    const [certificateTwoText, setcertificateTwoText] = useState('black')
    const [certificateThreeText, setcertificateThreeText] = useState('black')
    const [certificateFourText, setcertificateFourText] = useState('black')

    const [BookCard, setBookCard] = useState('white')
    const [ComputerCard, setComputerCard] = useState('white')
    const [Establishment, setEstablishment] = useState('white')
    const [BookCardText, setBookCardText] = useState('black')
    const [ComputerCardText, setComputerCardText] = useState('black')
    const [EstablishmentText, setEstablishmentText] = useState('black')
    const DarkMode = () => {
        if (AboutBackground === 'black') {
            setAboutBackground('var(--mainBgcolor)')
            setaboutMainBg('white')
            setaboutMainBorder('transparent')
            setAboutTextColor('black')
            setMissionLeftChildA('white')
            setMissionBorderA('transparent')
            setLeftMissionA('transparent')
            setMissionLeftChildB('white')
            setMissionLeftTextA('black')
            setMissionLeftTextB('black')
            setMissionRightA('white')
            setMissionTextA('black')
            setrightInfoParent('white')
            setrightInfoParentBorder('transparent')
            setrightInfoParentFirstChild('black')
            setrightInfoParentSecondChild('black')
            setrightInfoParentThirdChild('black')
            setrightInfoParentFourChild('black')
            setrightInfoParentFiveChild('black')
            setrightInfoParentSixChild('black')
            setrightInfoParent('white')
            setleftAccordionOne('white')
            setleftAccordionTwo('white')
            setleftAccordionThree('white')
            setleftAccordionFour('white')
            setAccordionA('black')
            setAccordionB('black')
            setAccordionC('black')
            setAccordionD('black')
            setBookCard('white')
            setComputerCard('white')
            setEstablishment('white')
            setBookCardText('black')
            setComputerCardText('black')
            setEstablishmentText('black')
            setcertificateOne('white')
            setcertificateTwo('white')
            setcertificateThree('white')
            setcertificateFour('white')
            setcertificateOneText('black')
            setcertificateTwoText('black')
            setcertificateThreeText('black')
            setcertificateFourText('black')
        }
        else {
            setAboutBackground('black')
            setAboutTextColor('white')
            setaboutMainBg('var(--MyDarkGrayBg)')
            setaboutMainBorder('1px solid gray')
            setMissionBorderA('1px solid gray')
            setLeftMissionA('1px solid gray')
            setMissionLeftTextA('white')
            setMissionLeftTextB('white')
            setMissionLeftChildA('var(--MyDarkGrayBg)')
            setMissionLeftChildB('var(--MyDarkGrayBg)')
            setMissionRightA('var(--MyDarkGrayBg)')
            setMissionTextA('white')
            setrightInfoParent('black')
            setrightInfoParentBorder('1px solid gray')
            setrightInfoParentFirstChild('white')
            setrightInfoParentSecondChild('white')
            setrightInfoParentThirdChild('white')
            setrightInfoParentFourChild('white')
            setrightInfoParentFiveChild('white')
            setrightInfoParentSixChild('white')
            setrightInfoParent('black')
            setleftAccordionOne('black')
            setleftAccordionTwo('black')
            setleftAccordionThree('black')
            setleftAccordionFour('black')
            setAccordionA('white')
            setAccordionB('white')
            setAccordionC('white')
            setAccordionD('white')
            setBookCard('var(--MyDarkGrayBg)')
            setComputerCard('var(--MyDarkGrayBg)')
            setEstablishment('var(--MyDarkGrayBg)')
            setBookCardText('white')
            setComputerCardText('white')
            setEstablishmentText('white')
            setcertificateOne('var(--MyDarkGrayBg)')
            setcertificateTwo('var(--MyDarkGrayBg)')
            setcertificateThree('var(--MyDarkGrayBg)')
            setcertificateFour('var(--MyDarkGrayBg)')
            setcertificateOneText('white')
            setcertificateTwoText('white')
            setcertificateThreeText('white')
            setcertificateFourText('white')
        }
    }
    return (
        <div style={{ background: AboutBackground, color: AboutTextColor }} className="pb-5"  >
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
            <div style={{ borderRadius: '0 !important', margin: '4rem 0 0 0' }}>
                <div className="card-footer d-flex align-items-center justify-content-center p-1 "
                    style={{ background: 'var(--lightBlack)' }}>
                    <marquee className="text-white fw-medium " direction="left" onmouseover="this.stop();"
                        onmouseout="this.start();"> ISO 9001 : 2008 द्वारा प्रमाणित &amp; भारत सरकार द्वारा पंजीकृत संस्था
                        || DOEACC द्वारा पंजीकृत संस्था हर कोर्स पूरा करने पर फ्री प्रमाणपत्र || योग्य एवं अनुभवी
                        प्रशिक्षकों द्वारा प्रशिक्षण || प्रमाण पत्र को इंटरनेट से जानने योग्य सुविधा, इत्यादी........
                    </marquee>
                </div>
                <div className="row m-0 p-0 myshadow" style={{ background: aboutMainBg, border: aboutMainBorder }} >
                    <div className="col-12 py-4 ">
                        <div className="row">
                            <div className="col-md-6 pb-2 " data-aos="zoom-in" data-aos-duration="700"> <img src="images/vender/main-bg.jpg"
                                className="w-100 p-0 m-0 border border-0 img-thumbnail" /> </div>
                            <div className="col-md-6 " d="AboutColorMain" data-aos="zoom-in" data-aos-duration="700">
                                <h3 className="card-title  fw-medium pt-3 " style={{ color: 'red' }}> Drishtee Institute Information
                                    Of Technology </h3> <small className="fw-bolder " style={{ color: 'green' }}> A Complete I.T.
                                        Institute. </small>
                                <p className="card-text p-4" data-aos="zoom-in" data-aos-duration="900"> <span
                                    className=" text-danger">Drishtee Institute Of Information Technology </span> In
                                    Nichlaul Is One Of The Leading Businesses In The Computer I.T Training Institutes. Also
                                    Known For Computer Training Institutes,Computer Training Institutes For <span
                                        className="text-success fw-medium "> CCC, PGDCA, C Programming, C++, Python , HTML, CSS,
                                        Bootstrap, JavaScript, W3-CSS, SASS, JQuery, PHP, VB.NET, Hardware Networking,
                                        Software Development, web Development </span> and Much More. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-group m-0 p-0 my-2 ">
                    <div className="card border-0 rounded-0 mx-4 myshadow ">
                        <div className="card-body m-0 p-0" data-aos="fade-down" style={{ border: LeftMissionA }} data-aos-duration="300" id="MissionLeft">
                            <ol className="list-group border-0  list-group-numbered "
                            >
                                <li className="list-group-item border-0 d-flex justify-content-between align-items-start"
                                    style={{ background: MissionLeftChildA, color: MissionLeftTextA }} >
                                    <div className=" me-auto">
                                        <div className="fw-bold text-primary "> <p className="px-1">Our Vision</p></div>
                                        <p className="m-0 p-0"> Our vision is to
                                            improve the youth of
                                            rural India, by giving them
                                            high class training atmosphere at very affordable cost.
                                            We work on the philosophy of “SHINING INDIA”, which can be
                                            achieved by developing only rural India.
                                            We are committed to impart quality computer education
                                            among the students.</p>
                                    </div>
                                </li>
                                <li className="list-group-item border-0 d-flex justify-content-between align-items-start"
                                    style={{ background: MissionLeftChildB, color: MissionLeftTextB }} >
                                    <div className="me-auto">
                                        <div className="fw-bold  text-primary"><p className="px-1"> Our Mission</p></div>
                                        <p className="m-0 p-0"> DIIT are committed
                                            to impart
                                            Professional education by
                                            inculcating three basic values
                                            among the youth-----
                                            “Building National Character,
                                            quality education and developing
                                            Management Skills”. </p>
                                        <span className="text-danger"> We believe in doing & learning .</span>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div className="card border-0 mx-4 rounded-0 myshadow">
                        <div className="card-body " style={{
                            background: MissionRightA, color: MissionTextA,
                            border: MissionBorderA
                        }}>
                            <h5 className="card-title text-primary "> THE REASONS ARE HERE………………………….</h5>
                            <p className="m-0 p-0" data-aos="fade-down">
                                An ISO 9001:2008 Certified institute by BSI.
                                Online examination facility and quick result.
                                Training on Live project.
                                High class technology.
                                Hi-tech lab.
                                Govt. recognize institute.
                                Affordable fees.
                                Free bags, books, and I-cards to each admission.
                                Monthly test facility, to understand the grasping power of students.
                                Tie- ups with Global companies.
                                Microsoft certified courses and study materials.
                                Conducted by well experienced I.T. professionals.
                                100 % job oriented Courses.
                                Free English speaking and personality development class.
                                Classes by well experienced and qualified trainers.
                                …………………………. & many more reasons to Join Drishtee.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row p-0 m-0">
                <div className="col-md-8 m-0 p-0 ">
                    <div className="card m-2">
                        <div className="accordion bg-white myshadow " id="accordionExample">
                            <div className="accordion-item  ">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button rounded rounded-0 bg-primary"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        {/* Our Aim */}
                                    </button>
                                </h2>
                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show "
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body" style={{ background: leftAccordionOne, color: AccordionA }}>
                                        We will provide high and quality education for all very nominal
                                        fees to maximize the value of our students, as well as the
                                        community we serve in the progress and development of the nation.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item transparentTableData ">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed "
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo"
                                    >
                                        {/* Our Mission 2 */}
                                    </button>
                                </h2>
                                <div
                                    id="collapseTwo"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body" style={{ background: leftAccordionTwo, color: AccordionB }}>
                                        To be leader in the development of I.T. oriented Quality education
                                        and Training and be the Country’s premier organization for
                                        examination and certification in the field of IT.{" "}
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item transparentTableData">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed "
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree"
                                        aria-expanded="false"
                                        aria-controls="collapseThree"
                                    >
                                        {/* Our Mission 2 */}
                                    </button>
                                </h2>
                                <div
                                    id="collapseThree"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body" style={{ background: leftAccordionThree, color: AccordionC }}>
                                        All the training programs are designed and developed by the team
                                        of experts as per the industry input. It is our utmost
                                        satisfaction when our student is placed in various companies and
                                        firms on completion of his/her.{" "}
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item transparentTableData  ">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed "
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour"
                                        aria-expanded="false"
                                        aria-controls="collapseThree"
                                    >
                                        {/* Our Mission 2 */}
                                    </button>
                                </h2>
                                <div
                                    id="collapseFour"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body" style={{ background: leftAccordionFour, color: AccordionD }}>
                                        Our vision is to improve the youth of rural India, by giving them
                                        high class training atmosphere at very affordable cost. We work on
                                        the philosophy of “SHINING INDIA”, which can be achieved by
                                        developing only rural India. We are committed to impart quality
                                        computer education among the students.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 m-0 p-0">
                    <div
                        className="card  m-2 myshadow  rounded rounded-0 "
                        style={{
                            background: rightInfoParent, border: rightInfoParentBorder
                        }}>
                        <div className="card-body p-0 m-0">
                            <div
                                className="card-header fs-4"
                                style={{ background: "var(--d-blue)" }}
                            >
                                <div className="fw-bold text-white" data-aos="fade-right">
                                    {" "}
                                    <i className="bi bi-card-list  fst-normal text-uppercase text-warning">
                                        {" "}
                                    </i>
                                    Basic Information :
                                </div>
                            </div>
                        </div>
                        <ul className="list-group list-group-flush text-start  basicStuctureShadow">
                            <li
                                className="list-group-item transparentTableData "
                                style={{ color: rightInfoParentFirstChild }}
                                data-aos="fade-right"
                            >
                                <img src="images/icon/homeTwo.png" width="20px" alt="" />
                                Address:
                                <strong className='px-1'>Paragpur Road near Ramharsh inter collage </strong>
                            </li>
                            <li
                                className="list-group-item transparentTableData"
                                style={{ color: rightInfoParentSecondChild }}
                                data-aos="fade-right"
                            >
                                <i className="bi bi-map-fill text-success mx-1" />
                                City:
                                <strong className='px-1'>Nichlaul</strong>
                            </li>
                            <li
                                className="list-group-item transparentTableData"
                                style={{ color: rightInfoParentThirdChild }}
                                data-aos="fade-right"
                            >
                                <i className="bi bi-globe-central-south-asia text-success mx-1" > </i>
                                District:
                                <strong className='px-1'>Maharajganj</strong>
                            </li>
                            <li
                                className="list-group-item transparentTableData"
                                style={{ color: rightInfoParentFourChild }}
                                data-aos="fade-right"
                            >
                                <i className="bi bi-pin-map-fill text-danger mx-1 " />
                                State:
                                <strong className='px-1'>Uttar Pradesh</strong>
                            </li>
                            <li
                                className="list-group-item transparentTableData"
                                style={{ color: rightInfoParentFiveChild }}
                                data-aos="fade-right"
                            >
                                <i className="fa fa-book text-primary mx-1  " />
                                Library:
                                <strong className='px-1'>Yes</strong>
                            </li>
                            <li
                                className="list-group-item transparentTableData"
                                style={{ color: rightInfoParentSixChild }}
                                data-aos="fade-right"
                            >
                                <i className="bi bi-bank2 fw-bold text-success mx-1" />
                                Establishment(in year):
                                <strong className='px-1'>20+</strong>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container-fluid my-4 py-4">
                <div className="row  m-auto ">
                    <span className="w-100 text-center ">
                        <h2 style={{ color: 'red' }}>Our Affiliations</h2>
                        <p className="pb-0 mb-0" style={{ color: 'orangered' }}>Drishtee is registered under the following
                            organization.</p>
                    </span>
                    <div className="row row-cols-1 row-cols-md-4 pt-0 mt-0 row-cols-sm-1  g-2">
                        <div className="col">
                            <div className="card p-0 m-0 myshadow" style={{ background: certificateOne, color: certificateOneText }}>
                                <img src="images/thumbnails/Certificate1.png" data-aos="fade-up" data-aos-duration="1200"
                                    className="card-img-top" alt="..." />
                                <div className="card-body p-0 p-2  m-0 ">
                                    <p className="card-text  ">
                                        <div data-aos="fade-right" data-aos-duration="400"> <small>Registered under the society
                                            Act ,21, 1860,
                                            Government Of India having registration number 72/2013-2014.</small> </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card p-0 m-0 myshadow " style={{ background: certificateTwo, color: certificateTwoText }}>
                                <img src="images/thumbnails/Certificate3.png" data-aos="fade-up" data-aos-duration="1200"
                                    className="card-img-top" alt="..." />
                                <div className="card-body p-0  p-2  m-0 ">
                                    <p className="card-text  ">
                                        <div data-aos="fade-right" data-aos-duration="700"> <small>Certified by BSI, as an ISO
                                            9001:2008
                                            certified
                                            institute, for International
                                            standard,
                                            quality training, having Certificate number MSYS/0485/15.</small> </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card p-0 m-0  myshadow" style={{ background: certificateThree, color: certificateThreeText }}>
                                <img src="images/thumbnails/Certificate2.png" data-aos="fade-up" data-aos-duration="1200"
                                    className="card-img-top" alt="..." />
                                <div className="card-body p-0 p-2 m-0 ">
                                    <p className="card-text  ">
                                        <div data-aos="fade-right" data-aos-duration="1000"><small> Registered with NIELIT(
                                            Formerly DOEACC)
                                            Government
                                            Of
                                            India, as a
                                            facilitation
                                            centre
                                            for CCC & O level. Having accreditation number 88001055. </small></div>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card p-0 m-0 myshadow" style={{ background: certificateFour, color: certificateFourText }}>
                                <img src="images/thumbnails/Certificate4.png" data-aos="fade-up" data-aos-duration="1200"
                                    className="card-img-top" alt="..." />
                                <div className="card-body p-0 p-2 m-0 ">
                                    <p className="card-text  ">
                                        <div data-aos="fade-right" data-aos-duration="1300"> <small>Registered with Algol
                                            Universal Trust, as an
                                            associate
                                            of KSOU(Karnataka state
                                            open
                                            university), for University level courses such as, BCA,BSC,MCA,MSC, etc, having
                                            reg. No. -
                                            KSOU/AUT/980-A</small> </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-group my-4 text-center rounded-0 ">
                <div className="card myshadow  rounded rounded-0 mx-2" style={{ background: BookCard, color: BookCardText }} data-aos="fade-up" data-aos-duration="200">
                    <div className="card-body ">
                        <h1 className="  w-75 m-auto mt-1 py-5 fw-bolder  text-white counter"
                            style={{ background: 'var(--computerBgCard)' }}> <b id="count1" >200</b></h1>
                        <h5 className="card-title">Books in Library</h5>
                    </div>
                </div>
                <div className="card myshadow rounded rounded-0 mx-2"
                    style={{ background: ComputerCard, color: ComputerCardText }} data-aos="fade-up" data-aos-duration="500">
                    <div className="card-body  ">
                        <h1 className=" w-75 m-auto mt-1 py-5 fw-bolder  text-white counter"
                            style={{ background: 'var(--BooksBgCard)' }}> <b id="count2" >20</b></h1>
                        <h5 className="card-title">Computers</h5>
                    </div>
                </div>
                <div className="card myshadow rounded rounded-0 mx-2"
                    style={{ background: Establishment, color: EstablishmentText }}
                    data-aos="fade-up" data-aos-duration="700">
                    <div className="card-body  ">
                        <h1 className="w-75 m-auto mt-1 py-5 fw-bolder text-white counter"
                            style={{ background: 'var(--EstablishmentBgCard)' }}> <b id="count3" >20</b></h1>
                        <h5 className="card-title">Establishment(in year): 20+</h5>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default About