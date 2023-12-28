import { Link } from "react-router-dom";
import { useState,useEffect } from 'react';
const AdmissionForm = ((props) => {
    const [reCaptchaCompleted, setReCaptchaCompleted] = useState(false);

    const [uploadStatus, setUploadStatus] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [message, setMessage] = useState('');
    const [image, setImage] = useState("");
    const [photo, setPhoto] = useState("");
    const [name, setName] = useState("");
    const [fatherName, setFatherName] = useState("");
    const [motherName, setMotherName] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [dob, setDob] = useState("");
    const [course, setCourse] = useState("");
    const [category, setCategory] = useState("");
    const clrform = (() => {
        setImage('');
        setPhoto('');
        setName('');
        setFatherName('');
        setMotherName('');
        setGender('');
        setAddress('');
        setMobileNumber('');
        setDob('');
        setCourse('');
        setCategory('');
        uploadStatus(false);
    })
    const postForm = () => {
        fetch('http://localhost:3000/studentRegistration', {
            method: 'post',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                photo, name, fatherName, motherName, gender, address, mobileNumber, dob, course, category
            })
        }).then(res => res.json())
            .then((data) => {
                setMessage(data.message)
            }).catch((error) => {
                setMessage(error);
            })

    }
    const [checkboxChecked, setCheckboxChecked] = useState(false);

    const uploadPhoto = () => {
        if (image) {
            const data = new FormData()
            data.append("file", image)
            data.append("upload_preset", "hridesh99!")
            data.append("cloud_name", "draowpiml")
            fetch('https://api.cloudinary.com/v1_1/draowpiml/image/upload', {
                method: 'post',
                body: data
            }).then(res => res.json())
                .then(data => {
                    if (!data.error) {
                        setPhoto(data.url);
                        setUploadStatus(true);
                    }
                })
                .catch((error) => {
                    setMessage(error)
                })
        }
    }

    // start captcha 
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.google.com/recaptcha/api.js';
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);

        script.onload = () => {
            window.grecaptcha.render('g-recaptcha', {
                sitekey: '6LeSkxwpAAAAAJr0__9WFMn2k3bJ9EW1eT52aaqm',
                callback: () => {
                    console.log('reCAPTCHA completed!');
                    setReCaptchaCompleted(true);
                },
            });
        };

        return () => {
            document.head.removeChild(script);
        };
    }, []);


    
// end captcha 

    const [AdmBg, setAdmBg] = useState('var(--admHeadColor)')
    const [AdmText, setAdmText] = useState('maroon')
    const [AmdBodyColor, setAmdBodyColor] = useState('#B2CBFF')


    const [AdmFooterBg, setAdmFooterBg] = useState('var(--admHeadColor)')
    const [AdmFooterText, setAdmFooterText] = useState('maroon')
    const DarkMode = () => {
        if (AdmBg === 'var(--cardHeadColorDark)') {
            setAdmBg('var(--admHeadColor)')
            setAdmText('maroon')
            setAmdBodyColor('#B2CBFF')

            setAdmFooterBg('var(--admHeadColor)')
            setAdmFooterText('maroon')

        }
        else {
            setAdmBg('var(--cardHeadColorDark)')
            setAdmText('white')
            setAmdBodyColor('gray')


            setAdmFooterBg('var(--cardHeadColorDark)')
            setAdmFooterText('white')
        }
    }
    return (
        <>
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
            <div className="row d-flex mx-0 px-0 align-items-center justify-content-center " style={{ marginTop: '4rem' }}>
                <div className="col-12 fw-bolder text-center pt-4 shadow-sm border-bottom "
                    style={{ color: AdmText, background: AdmBg }}>
                    <h3 className="fs-1  "> <b>CANDIDATE REGISTRATION FORM FOR NEW ADMISSION</b> </h3>
                    <p className="fs-5 body-text-secondary">
                        <marquee behavior="alternate" direction=""> ऑनलाइन पंजीकरण करने हेतु पंजीकरण फॉर्म </marquee>
                    </p> <Link to="/Verification" className="blink"><b> <img src="images/icon/update.gif" width="30px"
                        alt="Updates" /> अपनी प्रमाणपत्र की स्थिति जानने के लिए क्लिक करें </b></Link>
                </div>
            </div>
            <div style={{ background: AmdBodyColor }} className={props.className} >
                <div className="mainRegContainer" >
                    <div className="row  d-flex align-items-center justify-content-center mx-0 px-0">
                        <div className="col-12  " style={{ color: 'maroon', borderTop: 'var(--my-border)' }}>
                            <div className="row">
                                <div className="col">
                                {/* <RealTimeClock /> */}
                                </div>
                            </div>
                            <div className="row ">
                               <div className="col-12 pt-5 text-center">
                                    <h1 className="fw-bolder" style={{ color: 'maroon' }} id="RegHead"> Student Addmission form </h1>
                                </div>
                            </div>
                            <hr />
                            <div className="row g-3 needs-validation " id="formText">
                                <div className="col-md-4"> <label htmlFor="formFileSm" className="form-label">Upload your Photo <span
                                    className="text-body-secondary"> / अपनी फ़ोटो अपलोड करें</span>
                                    <font color="red"> * </font>
                                </label>
                                    <div className="input-group mb-3"> <i className="bi bi-image input-group-text "></i> <input
                                        className="form-control form-control-sm py-2 " id="formFileSm" type="file"
                                        onChange={(event) => { setImage(event.target.files[0]); setUploadStatus(false) }} />
                                        {uploadStatus ? <span>Uploaded</span> : <button className="btn btn-primary btn-small"
                                            onClick={() => { uploadPhoto() }}>Upload Now</button>}
                                    </div>
                                </div>
                                <div className="col-md-4"> <label htmlFor="validationCustom01" className="form-label">Name of Student <span
                                    className="text-body-secondary"> / छात्र का नाम</span>
                                    <font color="red"> * </font>
                                </label>
                                    <div className="input-group mb-3"> <i className="bi bi-person-bounding-box input-group-text "></i>
                                        <input type="text" className="form-control"
                                            placeholder=" छात्र का नाम दर्ज करें" value={name} onChange={(event) => { setName(event.target.value) }} required /> </div>
                                </div>
                                <div className="col-md-4"> <label htmlFor="validationCustom02" className="form-label"> Father's Name <span
                                    className="text-body-secondary">/ पिता का नाम</span>
                                    <font color="red"> * </font>
                                </label>
                                    <div className="input-group mb-3"> <i className="bi bi-person-fill input-group-text "></i> <input
                                        type="text" className="form-control"
                                        placeholder=" पिता का नाम दर्ज करें" value={fatherName} onChange={(event) => { setFatherName(event.target.value) }} required /> </div>
                                </div>
                                <div className="col-md-4"> <label htmlFor="validationCustom02" className="form-label"> Mother's Name <span
                                    className="text-body-secondary">/ माता का नाम</span>
                                    <font color="red"> * </font>
                                </label>
                                    <div className="input-group mb-3"> <i className="bi bi-person-fill input-group-text "></i> <input
                                        type="text" className="form-control"
                                        placeholder="माता का नाम  दर्ज करें" value={motherName} onChange={(event) => { setMotherName(event.target.value) }} required /> </div>
                                </div>
                                <div className="col-md-4 "> <label htmlFor="validationCustom03  " className="form-label  ">Gender <span
                                    className="text-body-secondary"> / लिंग</span>
                                    <font color="red"> * </font>
                                </label>
                                    <div className="border d-flex align-items-center justify-content-evenly  h-50 bg-light"
                                        style={{ borderRadius: '10px' }}>
                                        <div className="d-flex align-items-center "> <input
                                            className="form-check-input  border border-secondary  " type="radio" name="gender"
                                            onChange={() => { setGender('male') }} required />
                                            <label className="form-check-label rounded rounded-pill " >
                                                &nbsp;
                                                Male
                                                <span className="text-body-secondary rounded rounded-pill">
                                                    /
                                                    पुरुष
                                                </span>
                                            </label>
                                        </div>
                                        |
                                        <div className="d-flex align-items-center">
                                            <input className="form-check-input  border border-secondary" name='gander' type="radio" value={gender} onChange={() => { setGender('female') }}
                                                required />
                                            <label className="form-check-label  " >
                                                &nbsp;
                                                Female
                                                <span className="text-body-secondary">
                                                    /
                                                    महिला</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="col-md-4">
                                    <label htmlFor="adhar" className="form-label">Adhar
                                        <span className="text-body-secondary">/
                                            मोबाइल</span>
                                        <font color="red">
                                            *
                                        </font>
                                    </label>
                                    <div className="input-group mb-3">
                                        <i className="bi bi-telephone-fill input-group-text "></i>
                                        <input type="password" className="form-control" placeholder="Adhar नंबर दर्ज करें" />
                                    </div>
                                </div> */}
                                <div className="col-md-4">
                                    <label htmlFor="Adhar" className="form-label">Complete
                                        Address
                                        <span className="text-body-secondary">/
                                            पूरा
                                            पता</span>
                                        <font color="red">
                                            *
                                        </font>
                                    </label>
                                    <div className="input-group mb-3">
                                        <i className="bi bi-geo-alt-fill input-group-text "></i>
                                        <input type="text" className="form-control" placeholder="पता दर्ज करें" value={address} onChange={(event) => { setAddress(event.target.value) }} required />
                                    </div>
                                </div>

                                {/* <div className="col-md-4">
                                    <label htmlFor="validationCustom03" className="form-label">E-mail
                                        <span className="text-body-secondary">/
                                            इमेल</span>
                                    </label>
                                    <div className="input-group mb-3">
                                        <i className="bi bi-envelope-fill input-group-text "></i>
                                        <input type="text" className="form-control" placeholder="ई. मेल आई.डी. दर्ज करें"
                                        />
                                    </div>
                                </div> */}
                                <div className="col-md-4">
                                    <label htmlFor="validationCustom03" className="form-label">Mobile
                                        <span className="text-body-secondary">/
                                            मोबाइल</span>
                                        <font color="red">
                                            *
                                        </font>
                                    </label>
                                    <div className="input-group mb-3">
                                        <i className="bi bi-telephone-fill input-group-text "></i>
                                        <input type="password" className="form-control" placeholder="मोबाइल नंबर दर्ज करें" value={mobileNumber} onChange={(event) => { setMobileNumber(event.target.value) }} required />
                                    </div>
                                </div>
                                <div className="col-md-4 "> <label htmlFor="validationCustom03" className="form-label">Date Of Birth ( DOB )
                                    <span className="text-body-secondary"> / जन्म तिथि</span>
                                    <font color="red"> * </font>
                                </label>
                                    <div className="input-group mb-3"> <i className="bi bi-calendar-day-fill input-group-text "></i> <input
                                        type="date" className="form-control" placeholder="जन्म तिथि दर्ज करें" value={dob} onChange={(event) => { setDob(event.target.value) }} required /> </div>
                                </div>
                                <div className="col-md-4"> <label htmlFor="validationCustom04" className="form-label">Course
                                    <span className="text-body-secondary">/
                                        कोर्स</span>
                                    <font color="red">
                                        *
                                    </font>
                                </label>
                                    <div className="input-group mb-3">
                                        <i className="bi bi-book-half input-group-text "></i>
                                        <select className="form-select  bg-light " id="validationCustom04" onChange={(event) => { setCourse(event.target.value) }} required>
                                            <option className="text-danger fw-bold" selected disabled>
                                                ---All
                                                Course--- </option>
                                            <option value="CCA"> CCA </option>
                                            <option value="CAC"> CAC </option>
                                            <option value="CCC"> CCC </option>
                                            <option value="O 'LEVEL"> O 'LEVEL </option>
                                            <option value="CHN"> CHN </option>
                                            <option value="DDTP"> DDTP </option>
                                            <option value="CDTP"> CDTP </option>
                                            <option value="ADIT"> ADIT </option>
                                            <option value="DIT"> DIT </option>
                                            <option value="DCAD"> DCAD </option>
                                            <option value="DBI"> DBI </option>
                                            <option value="ADCA+"> ADCA+ </option>
                                            <option value="ADCA"> ADCA </option>
                                            <option value="DCA"> DCA </option>
                                            <option value="DCAA"> DCAA </option>
                                            <option value="PGDCA"> PGDCA </option>
                                            <option value="TALLY"> TALLY </option>
                                            <option value="HTML"> HTML </option>
                                            <option value="CSS"> CSS </option>
                                            <option value="Bootstrap"> Bootstrap </option>
                                            <option value="JavaScript"> JavaScript </option>
                                            <option value="Python"> Python </option>
                                            <option value="JQuery"> JQuery </option>
                                            <option value="C LANGUAGE"> C LANGUAGE </option>
                                            <option value="C++"> C++ </option>
                                        </select>
                                        <div className="invalid-feedback"> Please select a valid state.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4"> <label htmlFor="validationCustom05" className="form-label">Category <span
                                    className="text-body-secondary">/ श्रेणी</span>
                                    <font color="red"> * </font>
                                </label>
                                    <div className="input-group mb-3"> <i className="bi bi-people-fill input-group-text  "></i>
                                        <select className="form-select  bg-light " id="validationCustom05 rounded rounded-pill" value={category} required onChange={(event) => { setCategory(event.target.value) }}>
                                            <option className="text-danger"> --Select Category-- </option>
                                            <option value="general"> GENERAL </option>
                                            <option value="obc"> OBC </option>
                                            <option value="sc"> SC </option>
                                            <option value="st"> ST </option>
                                            <option value="other"> OTHER </option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-md-8 bg-primary"> 
                                
        <div className="g-recaptcha" data-sitekey="6LeSkxwpAAAAAJr0__9WFMn2k3bJ9EW1eT52aaqm"></div>
                                
                                   </div>

                            </div>
                            <div className="col-12  px-1 py-3 my-4"
                                style={{ background: AdmFooterBg, color: AdmFooterText }} id="declarationBg">

                                <div className="form-check">
                                    <div className="bg-success-subtle text-danger p-2 rounded rounded-pill d-inline">
                                        <label className="form-check-label h5" htmlFor="invalidCheck">
                                            <input
                                                type="checkbox"
                                                className="validCheck"
                                                required
                                                onChange={(e) => setCheckboxChecked(e.target.checked)}
                                            />
                                            <span className="icon"> </span>
                                            <span style={{ fontSize: '1.2rem !important' }}>Declaration</span>
                                            <span className="text-body-secondary"> / घोषणा </span>
                                        </label>
                                    </div>
                                    <p className="my-2" id="declarationTextOne"> i here by Declare that all the
                                        information provided by me in this form is correct and best to my knowlede , i know that
                                        my details can be used for the markting purpose by the institute . I further Declare
                                        that i do not have any objection if i receive calls, E-mail and SMS for the advertising
                                        purpose by the institute. </p>
                                    <p id="declarationTextTwo"> <small>मैं यहां घोषणा करता हूं कि इस
                                        फॉर्म में मेरे द्वारा प्रदान की गई सभी जानकारी सही है और मेरे ज्ञान के लिए सबसे
                                        अच्छी है, मुझे पता है कि मेरे विवरण का उपयोग संस्थान द्वारा अंकन उद्देश्य के लिए
                                        किया जा सकता है। मैं आगे कहता हूं कि अगर मुझे संस्थान द्वारा विज्ञापन उद्देश्य के
                                        लिए कॉल, ई-मेल और एसएमएस प्राप्त होते हैं तो मुझे कोई आपत्ति नहीं है।</small> </p>
                                </div>
                                <div className="col-12 ms-2">
                                    {submit ? (
                                        <button className="btn btn-succuss ms-3" id="checkBtn" type="button">
                                            Submitted Successfully
                                        </button>
                                    ) : (
                                        <button
                                            className="btn btn-primary ms-3"
                                            id="checkBtn"
                                            type="button"
                                            onClick={() => {
                                                if (checkboxChecked) {
                                                    postForm();
                                                }
                                            }}
                                            disabled={!checkboxChecked}
                                        >
                                            Submit
                                        </button>
                                    )}
                                    <div className="text-danger d-inline px-1">{message}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </ div>
        </>
    )
})
export default AdmissionForm;


