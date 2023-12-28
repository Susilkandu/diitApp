// import React, { useState, useEffect } from 'react';

// const YourComponent = () => {
//     const [checkboxChecked, setCheckboxChecked] = useState(false);
//     const [reCaptchaCompleted, setReCaptchaCompleted] = useState(false);
//     const [submit, setSubmit] = useState(false);
//     const [message, setMessage] = useState('');

//     useEffect(() => {
//         const script = document.createElement('script');
//         script.src = 'https://www.google.com/recaptcha/api.js';
//         script.async = true;
//         script.defer = true;
//         document.head.appendChild(script);

//         script.onload = () => {
//             window.grecaptcha.render('g-recaptcha', {
//                 sitekey: '6LeSkxwpAAAAAJr0__9WFMn2k3bJ9EW1eT52aaqm',
//                 callback: () => {
//                     console.log('reCAPTCHA completed!');
//                     setReCaptchaCompleted(true);
//                 },
//             });
//         };

//         return () => {
//             document.head.removeChild(script);
//         };
//     }, []);

//     const postForm = () => {
//         // Add your logic to submit the form data
//         // For example, you can make an API call here

//         // Update state variables accordingly
//         setSubmit(true);
//         setMessage('Submitted Successfully');
//     };

//     return (
//         <div className="col-12 px-1" style={{ marginTop: '10rem' }}>
//             <div className="form-check">
//                 <div

//                 >


//                 </div>
//                 <div className="bg-success-subtle text-danger p-2 rounded rounded-pill d-inline">
//                     <label className="form-check-label h5" htmlFor="invalidCheck">
//                         <input
//                             type="checkbox"
//                             className="validCheck"
//                             required
//                             onChange={(e) => setCheckboxChecked(e.target.checked)}
//                         />
//                         <span className="icon"> </span>
//                         <span style={{ fontSize: '1.2rem !important' }}>Declaration</span>
//                         <span className="text-body-secondary"> / घोषणा </span>
//                     </label>
//                 </div>
//             </div>
//             <div className="col-12 ms-2" >
//                 <div className="g-recaptcha" id="g-recaptcha"
//                     data-sitekey="6LeSkxwpAAAAAJr0__9WFMn2k3bJ9EW1eT52aaqm"
//                     onChange={(ex) => setReCaptchaCompleted(ex.target.checked)}></div>

//                 {submit ? (
//                     <button className="btn btn-success ms-3" id="checkBtn" type="button">
//                         Submitted Successfully
//                     </button>
//                 ) : (
//                     <button
//                         className="btn btn-primary ms-3"
//                         id="checkBtn"
//                         type="button"
//                         onClick={() => {
//                             if (checkboxChecked  reCaptchaCompleted) {
//                                 postForm();
//                             }
//                         }}
//                         disabled={!checkboxChecked && !reCaptchaCompleted}
//                     >
//                         Submit
//                     </button>
//                 )}
//                 <div className="text-danger d-inline px-1">{message}</div>
//             </div>
//         </div>
//     );
// };

// export default YourComponent;

