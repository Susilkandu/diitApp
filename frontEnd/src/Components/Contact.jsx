import { Link } from "react-router-dom"
import { useState } from "react";

function Contact() {

    const [contactData, setcontactData] = useState('var(--mainBgcolor)');
    const [contactBg, setcontactBg] = useState('url(images/vender/enquiryBg.png)')
    const [DiplomaText, setDiplomaText] = useState('black');
    const [contactBorder, setcontactBorder] = useState('transparent')

    const [visitBg, setvisitBg] = useState('white')
    const [visitTitle, setvisitTitle] = useState('white');
    const [visitText, setvisitText] = useState('black');
    const [visitborder, setvisitborder] = useState('transparent')

    const [callBg, setcallBg] = useState('white')
    const [callText, setcallText] = useState('black');
    const [callTitle, setcallTitle] = useState('white');
    const [callborder, setcallborder] = useState('transparent')

    const [mailBg, setmailBg] = useState('white')
    const [mailText, setmailText] = useState('black');
    const [mailTitle, setmailTitle] = useState('white');
    const [mailborder, setmailborder] = useState('transparent')

    const [formBg, setformBg] = useState('white');
    const [formText, setformText] = useState('#202020')

    const DarkMode = () => {
        if (contactData === 'black') {
            setcontactData('var(--mainBgcolor)')
            setDiplomaText('#212329')
            setcontactBg('url(images/vender/enquiryBg.png)')
            setcontactBorder('transparent')

            setvisitBg('white')
            setvisitText('#212329')
            setvisitTitle('white')
            setvisitborder('transparent')

            setcallBg('white')
            setcallText('#212329')
            setcallTitle('white')
            setcallborder('transparent')

            setmailBg('white')
            setmailText('#212329')
            setmailTitle('white')
            setmailborder('transparent')

            setformBg('white')
            setformText('#202020')
        }
        else {
            setcontactBg('url(images/vender/testimonial.png)')
            setcontactBorder('1px solid #303030')
            setcontactData('black')
            setDiplomaText('white')

            setvisitBg('var(--MyDarkGrayBg)')
            setvisitText('white')
            setvisitTitle('yellow')
            setvisitborder('1px solid gray')

            setcallBg('var(--MyDarkGrayBg)')
            setcallText('white')
            setcallTitle('yellow')
            setcallborder('1px solid gray')

            setmailBg('var(--MyDarkGrayBg)')
            setmailText('white')
            setmailTitle('yellow')
            setmailborder('1px solid gray')

            setformBg('url(images/vender/testimonial.png)')
            setformText('white')
        }
    }

    return (
        <div style={{ background: contactData, color: DiplomaText }}  >
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
            <div className="container-fluid mx-0 px-0">
                <div className="row w-100 mx-0 px-0">
                    <div className="col-12 mx-0 px-0">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56717.06933081362!2d83.65242092167965!3d27.318920499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399419806e859715%3A0x542e82fbb42e0941!2sDRISHTEE%20INSTITUTE%20OF%20INFORMATION%20TECHNOLOGY%20NICHLAUL!5e0!3m2!1sen!2sin!4v1697193938273!5m2!1sen!2sin"
                            width="100%" height="600" style={{ border: '0' }} allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-12 py-4  d-flex justify-content-center flex-column align-items-center"
                        style={{ background: contactBg, border: contactBorder }} id="ContactHeader">
                        <span className=" w-100 d-block  text-center ">
                            <div data-aos="fade-down">
                                <h1 className=" fw-bolder text-warning" style={{ textShadow: '5px 5px 5px black' }}>
                                    CONTACT-US
                                </h1>
                            </div>
                        </span>
                        <div data-aos="fade-up">
                            <h5 className="text-primary fw-bolder d-flex my-4 pb-4">
                                <Link to="/Home" className="nav-link fw-bolder text-info ">
                                    <i className="fa fa-home "></i> HOME </Link>
                                &nbsp; <span className="text-light">/ CONTACT US</span>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="row m-0 p-0 d-flex align-items-start justify-content-center my-5 fw-bolder">
                    <div className="card p-0 m-0 my-2 col-md-4 transparentTableData border border-0  ">
                        <div className="row m-0 p-0 d-flex justify-content-center">
                            <div className="col-11 rounded rounded-25  m-0 p-0 ZoomCard  myshadow " data-aos="zoom-in"
                                style={{ background: 'white', border: visitborder }}>
                                <div className="card-header  text-white text-center"
                                    style={{ background: 'var(--cardHeadColor )', color: 'white' }}>
                                    <div data-aos="fade" style={{ color: visitTitle }}> <i className="fa fa-home fs-2 "></i>
                                        <h1 className="fw-bold "><b>VISIT-AT</b></h1>
                                    </div>
                                </div>
                                <div className="card-body fw-normal " style={{ background: visitBg, color: visitText }}>
                                    <p> <i className="bi bi-geo-alt-fill text-danger"></i> Paragpur raod Near Ramharsh Inter Collage
                                        Nichlaul Maharajganj U.P.</p>
                                    <p> <i className="bi bi-geo-alt-fill text-danger"></i> Main market Road in front of Rauniyar
                                        chitra mandir Thoothibari Maharajganj U.P.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card p-0 m-0 my-2 col-md-4 transparentTableData border border-0  ">
                        <div className="row m-0 p-0 d-flex justify-content-center">
                            <div className="col-11 rounded rounded-25  m-0 p-0 ZoomCard  myshadow " data-aos="zoom-in"
                                style={{ background: 'white', border: callborder }}>
                                <div className="card-header text-white text-center" style={{ background: 'var(--cardHeadColor )' }}>
                                    <div data-aos="fade" style={{ color: callTitle }}> <i className="bi bi-telephone-fill    fs-2"></i>
                                        <h1 className="fw-bold"><b>CALL-US</b></h1>
                                    </div>
                                </div>
                                <div className="card-body fw-normal " style={{ background: callBg, color: callText }}>
                                    <p title="Mr. Ajay Tiwari"> <i className="bi bi-telephone text-danger "></i> 9918151032 </p>
                                    <br />
                                    <p title="Mr Santosh Singh Chauhan"> <i className="bi bi-telephone text-danger "></i> 7398889347
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card p-0 m-0 my-2 col-md-4 transparentTableData border border-0  " >
                        <div className="row m-0 p-0 d-flex justify-content-center" >
                            <div className="col-11 rounded rounded-25  m-0 p-0 ZoomCard  myshadow " data-aos="zoom-in"
                                style={{ background: 'white', border: mailborder }}>
                                <div className="card-header text-white text-center" style={{ background: 'var(--cardHeadColor )' }}>
                                    <div data-aos="fade" style={{ color: mailTitle }}> <i className="bi bi-envelope-fill   fs-2"></i>
                                        <h1 className="fw-bold" ><b>E:Mail-US</b></h1>
                                    </div>
                                </div>
                                <div className="card-body fw-normal " style={{ background: mailBg, color: mailText }}>
                                    <p title="Mr. Ajay Tiwari"> <i className="bi bi-send text-danger"></i>
                                        &nbsp;  ajaytiwari4@gmail.com
                                    </p>
                                    <br />
                                    <p title="Mr Santosh Singh Chauhan">
                                        <i className="bi bi-send text-danger"></i>
                                        &nbsp;   Drishteeeducation@yahoo.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-12 m-0 p-0 h-100" data-aos="zoom-in"
                    data-aos-duration="500" style={{
                        background: formBg,
                        color: formText
                    }}>
                    <form class="row px-0 mx-0 border  contactForm"
                        data-aos="fade-left" action="https://formspree.io/f/xyyqogrb" method="POST">
                        <h3 class="p-2 px-0 mx-0 text-white fw-bolder text-center text-uppercase"
                            style={{ background: 'var(--cardHeadColor)' }}> Contact Form </h3>
                        <div class="col-md-6 position-relative my-3 ">
                            <label class="form-label fw-medium  ">First
                                Name <font color="orangered">*</font> </label>
                            <input type="text" class="form-control rounded rounded-0 p-2 bg-light" name="fName" onkeyup="OnlyLetters(this)"
                                placeholder="First Name " required />
                        </div>
                        <div class="col-md-6  position-relative my-3 ">
                            <label class="form-label fw-medium">Last
                                Name <font color="orangered">*</font> </label>
                            <input type="text" class="form-control rounded rounded-0 p-2  bg-light" name="LName" onkeyup="OnlyLetters(this)"
                                placeholder="Last Name" required />
                        </div>
                        <div class="col-md-6 position-relative my-3 ">
                            <label class="form-label fw-medium ">Mobile
                                Number<font color="orangered"> *</font> </label>
                            <input type="tel" class="form-control rounded rounded-0  p-2 bg-light" name="contact" onkeyup="contact(this)"
                                placeholder="Enter Your Mobile " required />
                        </div>
                        <div class="col-md-6 position-relative my-3 ">
                            <label class="form-label fw-medium ">E:Mail   </label>
                            <input type="email" class="form-control rounded rounded-0 p-2  bg-light" name="email"
                                placeholder="Enter Your  E:mail " />
                        </div>
                        <div class="col-md-12 position-relative my-3 ">
                            <label class="form-label fw-medium ">Subject <font color="orangered"> *</font> </label>
                            <input type="email" name="subject" class="form-control rounded rounded-0  p-2 bg-light "
                                placeholder="Enter Your Subject's" required />
                        </div>
                        <div class="col-md-12 position-relative  ">
                            <label for="exampleFormControlTextarea1" class="form-label fw-medium">  Message <font color="orangered"> *
                            </font> </label>
                            <textarea class=" form-control rounded rounded-0 bg-light" name="message" id="exampleFormControlTextarea1" rows="7"
                                placeholder="Type Your Message Here *"></textarea>
                        </div>
                        <div class="col-12 my-3 text-center">
                            <button class="btn btn-primary rounded rounded-10  fw-medium" name="submit" id="playbutton" type="button">
                                <i class="bi bi-send-fill "></i>
                                Submit</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );

}
export default Contact