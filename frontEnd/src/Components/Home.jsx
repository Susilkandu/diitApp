import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react';
import Typed from 'typed.js';
import { toast } from 'react-toastify';
import { UniversalContext } from "../context/universal";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
function Home() {
    const navigate = useNavigate();
    const [notice, setNotice] = useState([]);
    const [fullName, setFullName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [query, setQuery] = useState('');
    const { adminLogin } = useContext(UniversalContext);
    const aToken = localStorage.getItem('aJwt');
    const clrqury = (() => {
        setFullName('');
        setMobile('');
        setEmail('');
        setTitle('');
        setQuery('');
    })
    const getAllNotice = (async () => {
        await fetch("http://localhost:3000/admin/getAllNotice").then(res => res.json())
            .then((data) => {
                setNotice(data);
                clrqury();
            }).catch((error) => {
                console.log(error);
            });
    });
    const sendQuery = (async () => {
        if (fullName && mobile && email && title && query) {
            await fetch("http://localhost:3000/queryNow", {
                method: 'post',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ fullName, mobile, email, title, query })
            }).then(res => res.json())
                .then((res) => {
                    if (res.mError) {
                        toast.error('Some Error Occured');
                    }
                    else {
                        toast.success('Query has been Sent');
                    }
                }).catch((error) => {
                    console.log(error)
                })
        }
    })
    useEffect(() => {
        if (aToken) {
            navigate('/Admin');
        }
        getAllNotice();
    }, [])

    useEffect(() => {
        const typed = new Typed('#element', {
            strings: ['<span class="hideFont">“<b style="color:red !important;">Drishtee</b> envisions a world where all communities are empowered to achieve shared prosperity.”</span>'],
            typeSpeed: 55,
            loop: true,
        });
        return () => {
            typed.destroy();
        };
    }, []);


    const [HomeBgColor, setHome] = useState('var(--mainBgcolor)');
    const [HomeTextColor, setHomeTextColor] = useState('black');
    const [aboutBgMainText, setaboutBgMainText] = useState('black');
    const [featureBgColor, setfeatureBgColor] = useState('white');
    const [featureTextColor, setfeatureTextColor] = useState('black');
    const [carouselExampleIntervalBg, setcarouselExampleIntervalBg] = useState('url(images/vender/enquiryBg.png)')
    const [liveCards, setliveCards] = useState('blue')
    const [liveChildOne, setliveChildOne] = useState('white')
    const [liveChildOneText, setliveChildOneText] = useState('black')
    const [liveChildTwo, setliveChildTwo] = useState('white')
    const [liveChildTwoText, setliveChildTwoText] = useState('black')
    const [liveChildThree, setliveChildThree] = useState('white')
    const [liveChildThreeText, setliveChildThreeText] = useState('black')
    const [liveChildFour, setliveChildFour] = useState('white')
    const [liveChildFourText, setliveChildFourText] = useState('black')
    const DarkMode = () => {
        if (HomeBgColor === 'black') {
            setHome('var(--mainBgcolor)')
            setHomeTextColor('black')
            setaboutBgMainText('black')
            setfeatureBgColor('white')
            setfeatureTextColor('black')
            setcarouselExampleIntervalBg('url(images/vender/enquiryBg.png)')
            setliveCards('blue')
            setliveChildOne('white')
            setliveChildOneText('black')
            setliveChildTwo('white')
            setliveChildTwoText('black')
            setliveChildThree('white')
            setliveChildThreeText('black')
            setliveChildFour('white')
            setliveChildFourText('black')

        }
        else {
            setHome('black')
            setHomeTextColor('white')
            setaboutBgMainText('white')
            setfeatureBgColor("var(--MyDarkGrayBg)")
            setfeatureTextColor('white')
            setcarouselExampleIntervalBg('url(images/vender/testimonial.png)')
            setliveCards('var(--MyDarkGrayBg)')
            setliveChildOne('black')
            setliveChildOneText('yellow')
            setliveChildTwo('black')
            setliveChildTwoText('yellow')
            setliveChildThree('black')
            setliveChildThreeText('yellow')
            setliveChildFour('black')
            setliveChildFourText('yellow')


        }
    }

    return (
        <div style={{ background: HomeBgColor, color: HomeTextColor }} id="Home" >
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

            <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade  " data-bs-ride="carousel">
                <div className="carousel-inner MainCarousel">
                    <div className="carousel-item active">
                        <img src='images/mainSlider/slider1.png' className="w-100" />
                    </div>
                    <div className="carousel-item">
                        <img src='images/mainSlider/slider2.png' className="w-100" />
                    </div>
                    <div className="carousel-item">
                        <img src='images/mainSlider/slider3.png' className="w-100" />
                    </div>
                    <div className="carousel-item">
                        <img src='images/mainSlider/slider4.png' className="w-100" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>
            <section className="fw-medium " id="MarqueeWelcomeHome">
                <marquee behavior="alternate" scrollamount="15"> Welcome to India No.1 Education Brand in India a
                    <span className="text-danger"> DRISHTEE COMPUTER CENTER </span>   </marquee>
                <marquee className="HindiFont" direction="left"> ISO 9001 :
                    2008 द्वारा प्रमाणित &amp; भारत सरकार द्वारा पंजीकृत संस्था || DOEACC द्वारा पंजीकृत संस्था || हर कोर्स पूरा
                    करने पर फ्री प्रमाणपत्र || योग्य एवं अनुभवी प्रशिक्षकों द्वारा प्रशिक्षण || प्रमाण पत्र को इंटरनेट से जानने
                    सुविधा, इत्यादी........
                    <img src="images/icon/gifPic.gif" height={10} />
                </marquee>
            </section >
            <div className="card w-100 rounded-0 mb-4 fw-normal border-top-0 border-end-0 border-start-0 border-bottom border-dark-subtle  border-2"
                style={{ background: 'var(--mainBgColor)', color: aboutBgMainText }}  >
                <div className="row g-0 m-3 mb-0">
                    <div className="col-12 w-100">
                        <div className="row py-5 px-4 text-white d-flex align-items-center justify-content-center "
                            style={{ background: "#012C57" }} id="ActionCall">
                            <div className="col-md-10">
                                <h2 className="fw-bolder"> Call To Action </h2>
                                <span className=" lh-sm ">Drishtee Institute of Information Technology inaugurated at a new
                                    place
                                    Paragpur Road, next to Life Care Pharma, near Ramharsha Inter College, Nichaul,
                                    Maharajganj</span>
                            </div>
                            <div className="col-md-2"> <a To="contact.html"><button
                                className="btn btn-outline-light fw-medium border border-2 mt-4">Call
                                To
                                Action</button></a>
                            </div>
                        </div>
                        <p className="py-3">
                            <b style={{ color: 'rgb(1, 143, 1)' }}> Where Dreams come true </b> Drishtee Institute Of information
                            Technology
                            aims to impart Government approved & recognized courses in the field of computer
                            application.....DIIT is a
                            modern educational Institute setup to inculcate in its students values & attitude that will help
                            them to keep
                            up global perspective and work towards achieving high career grow. <b style={{ color: 'red' }}> Drishtee
                                Institute Of Information Technology in Nichlaul</b> , Maharajganj is a reliable name in the
                            industry as they
                            aim to deliver the best experience to their customers. This has helped them build up a loyal
                            customer base.
                            They started their journey in 2005 and ever since, they have ensured that the customer remains at
                            the centre
                            of their business operations and philosophy. As they are located in a favourable neighbourhood,
                            exactly at
                            Paragpur Road, in side of Ramharsh inter collage, Nichlaul-273304 , it is easy to locate Drishtee
                            Institute Of
                            Information Technology on the . For any kind of assistance or questions, it is best to contact them
                            directly
                            during their business hours.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container-fluid my-4 py-4" id="CourseContainer" >
                <div className="row text-center">
                    <div className="col-12 " >
                        <h1 className="fw-bolder text-danger " id="courseTitle">TOP
                            COURSE</h1>
                    </div>
                </div>
                <div className="card-group ">
                    <div className="card p-1 m-3  cardBoxShadow" style={{ background: '#fff' }} data-aos="zoom-in">
                        <img src="images/vender/adca.png" className="img-fluid card-img-top img-size" />
                        <div className="card-body">
                            <b className="card-title">ADCA+</b>
                        </div>
                    </div>
                    <div className="card p-1 m-3 cardBoxShadow" style={{ background: '#fff' }} data-aos="zoom-in">
                        <img src="images/vender/web.png" className="img-fluid card-img-top img-size" />
                        <div className="card-body">
                            <b className="card-title ">Web
                                Development</b>
                        </div>
                    </div>
                    <div className="card p-1 m-3 cardBoxShadow" style={{ background: '#fff' }} data-aos="zoom-in">
                        <img src="images/vender/python-training.jpg" className="img-fluid card-img-top img-size" />
                        <div className="card-body">
                            <b className="card-title ">Python
                                Programming
                            </b>
                        </div>
                    </div>
                    <div className="card p-1 m-3 cardBoxShadow" style={{ background: '#fff' }} data-aos="zoom-in">
                        <img src="images/vender/soft.png" className="img-fluid card-img-top img-size" />
                        <div className="card-body">
                            <b className="card-title ">Software Development</b>
                        </div>
                    </div>
                    <div className="card-group ">
                        <div className="card p-1 m-3 cardBoxShadow" style={{ background: '#fff' }} data-aos="zoom-in">
                            <img src="images/vender/o-level.png" className="img-fluid card-img-top img-size" />
                            <div className="card-body">
                                <b className="card-title ">O
                                    Level</b>
                            </div>
                        </div>
                        <div className="card p-1 m-3 cardBoxShadow" style={{ background: '#fff' }} data-aos="zoom-in">
                            <img src="images/vender/office.png" className="img-fluid card-img-top img-size" />
                            <div className="card-body">
                                <b className="card-title">Microsoft
                                    Office
                                </b>
                            </div>
                        </div>
                        <div className="card p-1 m-3 cardBoxShadow" style={{ background: '#fff' }} data-aos="zoom-in">
                            <img src="images/vender/ccc.jpg" className="img-fluid card-img-top img-size" />
                            <div className="card-body">
                                <b className="card-title">
                                    CCC</b>
                            </div>
                        </div>
                        <div className="card p-1 m-3 cardBoxShadow" style={{ background: '#fff' }} data-aos="zoom-in">
                            <img src="images/vender/hardware.png" className="img-fluid card-img-top img-size" />
                            <div className="card-body">
                                <b className="card-title ">CHN</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="carouselExampleInterval"
                style={{ background: carouselExampleIntervalBg, border: 'var(--borderColor)' }}
                className="carousel slide text-center " data-bs-ride="carousel">
                <span className=" w-100 d-block text-center p-2">
                    <h4 className="text-uppercase fw-bolder pt-4" style={{ color: 'white' }}
                        id="TestimonialHead"> What our
                        DIIT
                        students
                        are saying about us </h4>
                </span>
                <div className="container m-auto">
                    <div className="carousel-inner pb-4 my-4" id="TestimonialChild">
                        <div className="carousel-item active" data-bs-interval="3000">
                            <img className="rounded-circle cardBoxShadow "
                                src={"images/vender/abhay.jpg"} alt="DIIT Student" style={{ width: "150px" }} />
                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-8">
                                    <span className="fw-bold">
                                        <h4 className="m-0 p-0 text-danger">
                                            Abhay
                                            Gauatam
                                        </h4>
                                        <font color="yellow">
                                            Web Designer
                                        </font>
                                    </span>
                                    <p id="PortfolioText1">
                                        <i className="bi bi-quote fs-2 " style={{ color: "maroon" }}></i> <br />
                                        <span className="fw-normal text-white" id="testimoniaFirstText">It is my immense luck and fortune to
                                            be the
                                            part of Drishtee computer
                                            center where
                                            I can grow. The teacher leaves no stone unturned to shape one's future. Huge respect, love
                                            and
                                            devotion
                                            for entire faculty members and all batchs. It's their efforts that make me to count myself
                                            into
                                            better
                                            professionals.</span>
                                        <br />
                                        <i className="fa fa-quote-right" aria-hidden="true" style={{ color: 'maroon' }}></i>
                                    </p>
                                </div>
                            </div>
                            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                                <li>
                                    <i className="bi bi-star-fill"></i>
                                </li>
                                &nbsp;
                                <li>
                                    <i className="bi bi-star-fill"></i>
                                </li>
                                &nbsp;
                                <li>
                                    <i className="bi bi-star-fill"></i>
                                </li>
                                &nbsp;
                                <li>
                                    <i className="bi bi-star-fill"></i>
                                </li>
                                &nbsp;
                                <li>
                                    <i className="bi bi-star-fill"></i>
                                </li>
                                &nbsp;
                            </ul>
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img className="rounded-circle shadow-1-strong" src={"images/vender/adca.png"} alt="DIIT Student" style={{ width: '150px' }} />
                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-8">
                                    <span className="fw-bold">
                                        <h4 className=" m-0 p-0 text-danger">
                                            Abhay
                                            Gauatam
                                        </h4>
                                        <font color="yellow">
                                            Web Designer
                                        </font>
                                    </span>
                                    <p id="PortfolioText2">
                                        <i className="bi bi-quote fs-2 " style={{ color: 'maroon' }}></i> <br />
                                        <span className="fw-normal text-white" id="testimoniaSecondText">It is my immense luck and fortune
                                            to
                                            be the
                                            part of Drishtee computer
                                            center where
                                            I can grow. The teacher leaves no stone unturned to shape one's future. Huge respect, love
                                            and
                                            devotion
                                            for entire faculty members and all batchs. It's their efforts that make me to count myself
                                            into
                                            better
                                            professionals.
                                        </span> <br />
                                        <i className="fa fa-quote-right" aria-hidden="true" style={{ color: 'maroon' }}></i>
                                    </p>
                                </div>
                            </div>
                            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                                <li> <i className="bi bi-star-fill"></i> </li> &nbsp;
                                <li>
                                    <i className="bi bi-star-fill"></i>
                                </li>
                                &nbsp;
                                <li>
                                    <i className="bi bi-star-fill"></i>
                                </li>
                                &nbsp;
                                <li>
                                    <i className="bi bi-star-fill"></i>
                                </li>
                                &nbsp;
                                <li>
                                    <i className="bi bi-star-fill"></i>
                                </li>
                                &nbsp;
                            </ul>
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img className="rounded-circle shadow-1-strong" src={"images/vender/adca.png"} alt="DIIT Student" style={{ width: '150px' }} />
                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-8">
                                    <span className="fw-bold">
                                        <h4 className=" m-0 p-0 text-danger"> Abhay Gauatam </h4>
                                        <font color="yellow">Web Designer </font>
                                    </span>
                                    <p id="PortfolioText3"> <i className="bi bi-quote fs-2 " style={{ color: 'maroon' }}></i> <br />
                                        <span className="fw-normal text-white" id="testimoniaThirdText">It is my immense luck and fortune
                                            to be the
                                            part of Drishtee computer
                                            center where
                                            I can grow. The teacher leaves no stone unturned to shape one's future. Huge respect, love
                                            and
                                            devotion
                                            for entire faculty members and all batchs. It's their efforts that make me to count myself
                                            into
                                            better
                                            professionals.</span> <br />
                                        <i className="fa fa-quote-right" aria-hidden="true" style={{ color: 'maroon' }}></i>
                                    </p>
                                </div>
                            </div>
                            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                                <li>
                                    <i className="bi bi-star-fill"></i>
                                </li>
                                &nbsp;
                                <li>
                                    <i className="bi bi-star-fill"></i>
                                </li>
                                &nbsp;
                                <li>
                                    <i className="bi bi-star-fill"></i>
                                </li>
                                &nbsp;
                                <li>
                                    <i className="bi bi-star-fill"></i>
                                </li>
                                &nbsp;
                                <li>
                                    <i className="bi bi-star-fill"></i>
                                </li>
                                &nbsp;
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid py-4 text-center " id="">
                <h2 className="py-4 text-danger">
                    Features And Updates
                </h2>

                <center className="hideFont fw-medium" id="FeatureTextFirst">
                    <span id="element"></span>

                </center>
                <p align="center" className="showFont" id="FeatureTextSecond">
                    “
                    <b style={{ color: 'red' }}>Drishtee</b> envisions a world where all communities are empowered to achieve shared
                    prosperity.“
                </p>
                <div className="container-fluid pt-0">
                    <div className="row">
                        <div className="col-md-6 my-1 p-0 px-1 ">
                            <div className="card cardBoxShadow border-0" style={{ background: featureBgColor, color: featureTextColor }} id="openingHour">
                                <div className="card-header h4 text-white text-uppercase text-start"
                                    style={{ background: 'var(--cardHeadColor)' }}>
                                    <div data-aos="fade-right"><i className="fa fa-line-chart text-warning"></i> Opening
                                        hours</div>
                                </div>
                                <div className="card-body cardBoxShadow" id="FeaturesTableColor">
                                    <table className="table table-bordered border-info table-hover border-opacity-50 "
                                    >
                                        <tbody className="fw-normal " style={{ textAlign: 'start' }}>
                                            <tr>
                                                <td className="transparentTableData">
                                                    <img src="images/icon/arrow.png" className="img-fluid" width="30px" /> Monday :
                                                </td>
                                                <td className="transparentTableData"> 07am - 07pm </td>
                                            </tr>
                                            <tr>
                                                <td className="transparentTableData">
                                                    <img src="images/icon/arrow.png" className="img-fluid" width="30px" />Tuesday </td>
                                                <td className="transparentTableData"> 07am - 07pm </td>
                                            </tr>
                                            <tr>
                                                <td className="transparentTableData">
                                                    <img src="images/icon/arrow.png" className="img-fluid" width="30px" />
                                                    Wednesday
                                                    :
                                                </td>
                                                <td className="transparentTableData">
                                                    07am
                                                    -
                                                    07pm
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="transparentTableData">
                                                    <img src="images/icon/arrow.png" className="img-fluid" width="30px" />
                                                    Thursday
                                                    :
                                                </td>
                                                <td className="transparentTableData">
                                                    07am
                                                    -
                                                    07pm
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="transparentTableData">
                                                    <img src="images/icon/arrow.png" className="img-fluid" width="30px" />
                                                    Friday
                                                    :
                                                </td>
                                                <td className="transparentTableData">
                                                    07am
                                                    -
                                                    07pm
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="transparentTableData"><img src="images/icon/arrow.png" className="img-fluid" width="30px" />
                                                    Saturday
                                                    :
                                                </td>
                                                <td className="transparentTableData">
                                                    07am
                                                    -
                                                    07pm
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="transparentTableData">
                                                    <img src="images/icon/arrow.png" className="img-fluid" width="30px" />
                                                    Sunday
                                                    :
                                                </td>
                                                <td className="transparentTableData fw-bolder">
                                                    <font color="red">
                                                        Closed
                                                    </font>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 my-1 p-0 px-1">
                            <div className="card cardBoxShadow border-0" style={{ background: featureBgColor, color: featureTextColor }} id="NotishBoard">
                                <div className="card-header h4 text-white text-start" style={{ background: "var(--cardHeadColor )" }}>
                                    <div data-aos="fade-right"> <i className="bi bi-bell-fill text-warning "></i> NOTICE BOARD</div>
                                </div>
                                <div className="card-body fw-normal FeatureCard2 my-0 py-0">
                                    <marquee direction="up" scrollamount="3" behavior="scroll">
                                        <small>[1].
                                            Course certified by Microsoft.
                                            <img src="images/icon/gifPic.gif" className="img-fluid" width="40px" />
                                        </small>
                                        <hr width="90%" />
                                        <small>[2].
                                            CCC
                                            free
                                            on
                                            ADCA
                                            course</small>
                                        <img src="images/icon/gifPic.gif" className="img-fluid" width="40px" />
                                        <hr width="90%" /> <small>[5]. Free English Speaking & Personality Development classNames</small>
                                        <img src="images/icon/gifPic.gif" className="img-fluid" width="40px" />
                                        <hr width="90%" /> <small className="HindiFont">[6]. प्रत्येक पाठ्यक्रम के पूरा होने पर नि: शुल्क
                                            प्रमाण
                                            पत्र। </small>
                                        <img src="images/icon/gifPic.gif" className="img-fluid" width="40px" />
                                        <hr width="90%" />
                                        <small>[7].
                                            GOVT. recognized institute
                                        </small>
                                        <hr width="90%" />
                                    </marquee>
                                </div>
                                <marquee className="py-2" behavior="scroll" direction="left"  >
                                    <Link to="/Verification" className="blink"><b>
                                        अपनी प्रमाणपत्र की स्थिति जानने के लिए क्लिक करें </b></Link>
                                </marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid px-0 my-1 skyblue2" id="MyGallary">
                <div className="text-center " style={{ background: 'var(--aboutBgColor)' }}>
                    <div className="text-center text-warning h2 py-4 "> <i className="fa fa-picture-o text-white "
                        aria-hidden="true"></i>
                        PHOTO <font color="white">GALLERY </font>
                    </div>
                    <ul className="nav nav-pills pb-4 text-center d-flex justify-content-center" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link fw-normal border border-white p-2 mx-1 active " id="pills-home-tab"
                                data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                                aria-selected="true"><small>
                                    All
                                    Picture
                                </small></button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link fw-normal border border-white
     p-2 mx-1" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab"
                                aria-controls="pills-profile" aria-selected="false"><small>
                                    Classes</small></button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link fw-normal border border-white 
     p-2 mx-1" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab"
                                aria-controls="pills-contact" aria-selected="false"><small>
                                    Rewards
                                </small></button>
                        </li>
                    </ul>
                </div>
                <div className="tab-content " id="pills-tabContent">
                    <div className="tab-pane fade show active transparentTableData" id="pills-home" role="tabpanel"
                        aria-labelledby="pills-home-tab" tabIndex="0">
                        <div className="card-group ZoomGallaryPic transparentTableData">
                            <div className="card m-2 p-0 myshadow transparentTableData " data-aos="zoom-in">
                                <img src="images/vender/dance1.jpg" className="card-img-top" />
                            </div>
                            <div className="card m-2 p-0 myshadow transparentTableData" data-aos="zoom-in">
                                <img src="images/vender/parti2.png" className="card-img-top" />
                            </div>
                            <div className="card m-2 p-0 myshadow transparentTableData " data-aos="zoom-in">
                                <img src="images/vender/opening2.png" className="card-img-top" />
                            </div>
                            <div className="card m-2 p-0 myshadow transparentTableData " data-aos="zoom-in">
                                <img src="images/vender/gift.jpg" className="card-img-top" />
                            </div>
                        </div>
                        <div className="card-group ZoomGallaryPic ">
                            <div className="card m-2 p-0 myshadow transparentTableData" data-aos="zoom-in">
                                <img src="images/vender/sir_1.png" className="card-img-top" />
                            </div>
                            <div className="card m-2 p-0 myshadow transparentTableData" data-aos="zoom-in">
                                <img src="images/vender/parti.png" className="card-img-top" />
                            </div>
                            <div className="card m-2 p-0 myshadow transparentTableData" data-aos="zoom-in">
                                <img src="images/vender/sanjana.jpg" className="card-img-top" />
                            </div>
                            <div className="card m-2 p-0 myshadow transparentTableData" data-aos="zoom-in">
                                <img src="images/vender/all_std2.png" className="card-img-top" />
                            </div>
                        </div>
                        <div className="card-group ZoomGallaryPic ">
                            <div className="card m-2 p-0 myshadow transparentTableData" data-aos="zoom-in">
                                <img src="images/vender/pray.png" className="card-img-top" />
                            </div>
                            <div className="card m-2 p-0 myshadow transparentTableData" data-aos="zoom-in">
                                <img src="images/vender/Tparty.png" className="card-img-top" />
                            </div>
                            <div className="card m-2 p-0 myshadow transparentTableData" data-aos="zoom-in">
                                <img src="images/vender/std2.jpg" className="card-img-top" />
                            </div>
                            <div className="card m-2 p-0 myshadow transparentTableData" data-aos="zoom-in">
                                <img src="images/vender/reward1.png" className="card-img-top" />
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"
                        tabIndex="0">
                        <div className="card-group ">
                            <div className="card m-2 p-0 myshadow transparentTableData ">
                                <img src="images/vender/std1.png" className="card-img-top" />
                            </div>
                            <div className="card m-2 p-0 myshadow transparentTableData ">
                                <img src="images/vender/std19.jpg" className="card-img-top" />
                            </div>
                            <div className="card m-2 p-0 myshadow transparentTableData ">
                                <img src="images/vender/diitclass2.jpg" className="card-img-top" />
                            </div>
                            <div className="card m-2 p-0 myshadow transparentTableData ">
                                <img src="images/vender/lab2.jpg" className="card-img-top" />
                            </div>
                        </div>
                        <div className="card-group ">
                            <div className="card m-2 p-0 myshadow transparentTableData ">
                                <img src="images/vender/presentation1.png" className="card-img-top" />
                            </div>
                            <div className="card m-2 p-0 myshadow transparentTableData ">
                                <img src="images/vender/dance1.jpg" className=" card-img-top" />
                            </div>
                            <div className="card m-2 p-0 myshadow transparentTableData ">
                                <img src="images/vender/dance3.jpg" className=" card-img-top" />
                            </div>
                            <div className="card m-2 p-0 myshadow transparentTableData ">
                                <img src="images/vender/dance4.jpg" className="card-img-top" />
                            </div>
                        </div>
                        <div className="card-group ">
                            <div className="card m-2 p-0 myshadow transparentTableData ">
                                <img src="images/vender/presentation2.png" className="card-img-top" />
                            </div>
                            <div className="card m-2 p-0 myshadow transparentTableData ">
                                <img src="images/vender/std2.jpg" className="card-img-top" />
                            </div>
                            <div className="card m-2 p-0 myshadow transparentTableData ">
                                <img src="images/vender/presentation2.png" className="card-img-top" />
                            </div>
                            <div className="card m-2 p-0 myshadow transparentTableData ">
                                <img src="images/vender/presentation2.png" className="card-img-top" />
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"
                        tabIndex="0">
                        <div className="card-group ">
                            <div className="card m-2 p-0 myshadow transparentTableData ">
                                <img src="images/vender/reward1.png" className="card-img-top" />
                            </div>
                            <div className="card m-2 p-0 myshadow transparentTableData ">
                                <img src="images/vender/reward2.png" className="card-img-top" />
                            </div>
                            <div className="card m-2 p-0 myshadow transparentTableData ">
                                <img src="images/vender/reward4.png" className="card-img-top" />
                            </div>
                            <div className="card m-2 p-0 myshadow transparentTableData ">
                                <img src="images/vender/reward5.png" className="card-img-top" />
                            </div>
                        </div>
                        <div className="card-group ">
                            <div className="card m-2 p-0 myshadow transparentTableData ">
                                <img src="images/vender/reward7.png" className="card-img-top" />
                            </div>
                            <div className="card m-2 p-0 myshadow transparentTableData ">
                                <img src="images/vender/rwd2.png" className="card-img-top" />
                            </div>
                            <div className="card m-2 p-0 myshadow transparentTableData ">
                                <img src="images/vender/sir_1.png" className="card-img-top" />
                            </div>
                            <div className="card m-2 p-0 myshadow transparentTableData ">
                                <img src="images/vender/presentation2.png" className="card-img-top" />
                            </div>
                        </div>
                        <div className="card-group ">
                            <div className="card m-2 p-0 myshadow transparentTableData ">
                            
                                <img src="images/vender/sanjana.jpg" className="card-img-top" />
                            </div>
                            <div className="card m-2 p-0 myshadow transparentTableData ">
                                <img src="images/vender/rwd1.jpg" className="card-img-top" />
                            </div>
                            <div className="card m-2 p-0 myshadow transparentTableData ">
                                <img src="images/vender/sm.png" className="card-img-top" />
                            </div>
                            <div className="card m-2 p-0 myshadow transparentTableData ">
                            <img src="images/vender/std2.jpg" className="card-img-top" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-group py-5 fixed-position "
                id="liveCards" style={{ background: liveCards }}>
                <span className=" w-100 d-block text-center 
 h2 fw-bolder" style={{ color: 'yellow' }}>
                    <p id="LiveWork"> WHY CHOOSE DRISHTEE </p>
                    <center>
                        <small className="h6 fw-normal">We
                            are modern and inviting institute that are perfectly suited for students, and we are providing all the
                            educational materials here.</small>
                        <hr size="5" color="yellow" width="20%" />
                    </center>
                </span>
                <div className="card text-center m-1 border-secondary-subtle myshadow"
                    style={{ background: liveChildOne, color: liveChildOneText }} data-aos="fade-up"
                    data-aos-duration="300">
                    <img className="card-img-top mt-2 rounded mx-auto d-block" src="images/icon/projector.png" style={{ width: '70px' }} />
                    <div className="card-body">
                        <h5 className="card-title fw-bolder" id="liveHead1" style={{ color: 'blue' }}>
                            Live Projects </h5>
                        <p className="card-text " id="liveText1"> To work on real time projects. </p>
                    </div>
                </div>
                <div className="card text-center m-1 border-secondary myshadow"
                    style={{ background: liveChildTwo, color: liveChildTwoText }} data-aos="fade-up"
                    data-aos-duration="600">
                    <img className="card-img-top mt-2 rounded mx-auto d-block" src="images/icon/trainers.png" style={{ width: '70px' }} />
                    <div className="card-body">
                        <h5 className="card-title fw-bolder" id="liveHead2" style={{ color: 'blue' }}>
                            Expert Trainers </h5>
                        <p className="card-text " id="liveText2"> Learn from certified & experienced trainers . </p>
                    </div>
                </div>
                <div className="card text-center m-1 border-secondary myshadow" style={{ background: liveChildThree, color: liveChildThreeText }} data-aos="fade-up"
                    data-aos-duration="900">
                    <img className="card-img-top mt-2 rounded mx-auto d-block" src="images/icon/course2.png" style={{ width: '70px' }} />
                    <div className="card-body">
                        <h5 className="card-title fw-bolder" id="liveHead3" style={{ color: 'blue' }}> Globally Recognized Certificates </h5>
                        <p className="card-text " id="liveText3"> Our Certificates are valued by top corporates .
                        </p>
                    </div>
                </div>
                <div className="card m-1 text-center border-secondary myshadow" style={{ background: liveChildFour, color: liveChildFourText }} data-aos="fade-up"
                    data-aos-duration="1200">
                    <img className="card-img-top mt-2 rounded mx-auto d-block" src="images/icon/practical.gif" style={{ width: '70px' }} />
                    <div className="card-body">
                        <h5 className="card-title fw-bolder" id="liveHead4" style={{ color: 'blue' }}> Hands on Training </h5>
                        <p className="card-text " id="liveText4"> 100% Practical based training model. </p>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row  ">
                    <div className="col-12 " id="RegistrationContainer">
                        <div className="row my-4">
                            <div className="col-md-8 d-flex justify-content-center align-content-center m-auto p-2 " id='h88'>
                                <div className="row">

                                    <div className="col-12">
                                        {
                                            notice.map((data) => {
                                                return (
                                                    <div className="conatainer" data-aos="fade-right" data-aos-duration="1500" id={data._id}>
                                                        <h1>
                                                            <font color="red ">{data.title}</font>

                                                        </h1>
                                                        <div className="container text-white">
                                                            {data.nMessage}
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-4 py-4" style={{ overflowX: 'hidden' }}>
                                <div className="row p-0 border m-0 text-white " id="Myform" data-aos="fade-left" >
                                    <h1 className="p-4 fw-bolder text-center text-uppercase " id="signUpNow" style={{ background: 'orangered' }}>
                                        Enquiry Now
                                    </h1>
                                    <div className=" col-md-12 position-relative my-2 b">
                                        <div className="input-group has-validation">
                                            <input type="text" className="form-control" placeholder="Full Name" value={fullName} onChange={(event) => { setFullName(event.target.value) }}
                                                required />
                                        </div>
                                    </div>
                                    <div className="col-md-12 position-relative my-2 ">
                                        <div className="input-group has-validation ">
                                            <input type="tel" className="form-control" placeholder="Enter Your Mobile" value={mobile} onChange={(event) => { setMobile(event.target.value) }} />
                                        </div>
                                    </div>
                                    <div className="col-md-12 position-relative my-2 ">
                                        <div className="input-group has-validation">
                                            <input type="email" className="form-control "
                                                placeholder="Enter Your E-mail" value={email} onChange={(event) => { setEmail(event.target.value) }} />
                                        </div>
                                    </div>
                                    <div className=" col-md-12 position-relative my-2 b">
                                        <div className="input-group has-validation">
                                            <input type="text" className="form-control" placeholder=" Enter Title "
                                                value={title} required onChange={(event) => { setTitle(event.target.value) }} />
                                        </div>
                                    </div>
                                    <div className="col-md-12 position-relative">
                                        <textarea className="form-control" rows="3"
                                            placeholder="Type Your Enquir*" value={query} onChange={(event) => { setQuery(event.target.value) }}></textarea>
                                    </div>
                                    <div className="col-12 my-1 text-center">
                                        <button className="btn fw-medium text-white hoverBtn" style={{ background: 'orangered' }}>
                                            <i className="bi bi-send-fill " onClick={() => { sendQuery() }}></i>Send </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default Home;