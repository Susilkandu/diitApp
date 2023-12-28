import { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import '../App.css'
import { Link } from "react-router-dom";
import { UniversalContext } from '../context/universal';
function Header() {
   const { setAdminLogin } = useContext(UniversalContext);
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const navigate = useNavigate();
   const fetchLoginAdmin = (async () => {
      if (email && password) {
         fetch("http://localhost:3000/admin/login", {
            method: "post",
            headers: {
               "Content-Type": "application/json"
            },
            body: JSON.stringify({
               email, password
            })
         }).then(res => res.json())
            .then((data) => {
               if (!data.error) {
                  localStorage.setItem('aJwt', data.token)
                  toast.success('Logged In')
                  setAdminLogin(true);
                  navigate('/Admin');
               }
               else {
                  toast.error(data.error);
               }
            })
            .catch((error) => {
               console.log(error);
            })
      }
   })
   return (
      <>


         <nav className="navbar navbar-expand-lg fixed-top py-0" style={{ background: 'var(--darkRed)' }} id="TopNavBar">
            <div className="container-fluid fw-medium text-uppercase ">
               <a className="navbar-brand p-0" href="#">
                  <img src="images/icon/logo.png" className="img-fluid" width={42} alt="DIIT" />
               </a>
               <button className="navbar-toggler small " type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon small text-light"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav m-auto px-lg-5 my-0 py-0 w-100 d-flex justify-content-between  align-items-center">
                     <li className="nav-item">
                        <Link to="/Home" className="nav-link"> <i className="fa fa-home"></i> Home</Link>
                     </li>
                     <li className="nav-item">
                        <Link to="/About" className="nav-link">  <i className="fa fa-address-card"></i> About</Link>
                     </li>

                     <li className="nav-item dropdown my-dropdown-toggle  text-white" aria-expanded="false">
                        <Link to="/Course" className="nav-link   dropdown-toggle" role="button" data-bs-toggle="dropdown"
                           aria-expanded="false"> <i className="fa fa-book"></i> Course </Link>
                        <ul className="dropdown-menu rounded rounded-0  " id="CourseListNav">
                           <table>
                              <tr>
                                 <td><Link className="dropdown-item px-2 " to="/Course/Diploma">Computer Diploma</Link> </td>
                              </tr>
                              <tr>
                                 <td><Link className="dropdown-item px-2 " to="/Course/ComputerLanguage">Computer Language</Link></td>
                              </tr>
                              <tr>
                                 <td><Link className="dropdown-item px-2 " to="/Course/GraphicsDesign">Graphics Design</Link> </td>
                              </tr>
                              <tr>
                                 <td><Link className="dropdown-item px-2 " to="/Course/WebDevelopment">Web Development</Link> </td>
                              </tr>
                              <tr>
                                 <td><Link className="dropdown-item px-2 " to="/Course/ComputerRepairing">Computer Repairing</Link> </td>
                              </tr>
                              <tr>
                                 <td><Link className="dropdown-item px-2 " to="/Course/NielitCourse">NIELIT/DEEOACC Courses</Link></td>
                              </tr>
                           </table>
                        </ul>
                     </li>
                     <li className="nav-item">
                        <Link to="/Branch" className="nav-link"><i className="fa fa-anchor"></i> Branch</Link>
                     </li>
                     <li className="nav-item dropdown text-white "> <Link className="nav-link  dropdown-toggle " to="/StudentZone" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false"> <i className='fa fa-mortar-board d '></i> Student-zone
                     </Link>
                        <ul className="dropdown-menu p-0 m-0" id="studentZoneNav">
                           <table>
                              <tr>
                                 <td>
                                    <Link className="dropdown-item p-2 " to="/AdmissionForm">New
                                       Admission</Link>
                                 </td>
                              </tr>
                              <tr>
                                 <td>
                                    <Link className="dropdown-item p-2 " to="/Verification">Verify
                                       Your
                                       Certificate</Link>
                                 </td>
                              </tr>
                           </table>
                        </ul>
                     </li>
                     <li className="nav-item">
                        <Link to="/Contact" className="nav-link"><i className="fa fa-phone"></i> Contact</Link>
                     </li>
                     <li className="nav-item">
                        <button className="btn btn-small p-0 border border-0 myDisplayflexRow flex-column" type="button"
                           data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrollingRight"
                           aria-controls="offcanvasScrollingRight">
                           <img src="images/team/team-1.png" className="rounded rounded-circle" width="35" />
                        </button>
                     </li>
                  </ul>
               </div>
            </div>

         </nav>
         <div className="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
            id="offcanvasScrollingRight" aria-labelledby="offcanvasScrollingLabel">

            <div className="offcanvas-header bg-primary border-bottom">

               <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
                  <img src="images/team/team-1.png" width="40" className="rounded-circle " />&nbsp;<span className='fw-bolder text-white'>Ajay Tiwari</span>
               </h5>
               <button type="button" className="btn btn-outline-dark" data-bs-dismiss="offcanvas" aria-label="Close">x</button>
            </div>
            <div className="offcanvas-body myshadow m-0 p-0">
               <div className="row bg-primary mx-0 px-0">
                  <div className="col-12 p-0 m-0 d-flex text-white fw-bolder text-center align-items-center justify-content-center">
                     <h1 className=' p-0 m-0'><b className=' p-0 m-0'>Admin Portal</b></h1>
                  </div>
                  <hr className="border border-secondary" />
               </div>
               <div className="row mx-0 px-0 py-1 my-1">
                  <div className="col-12">
                     <ul className="nav nav-pills mb-3 d-flex" id="pills-tab" role="tablist">
                        <li className="nav-item d-flex" role="presentation">

                           <button className="nav-link small " id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#Profile"
                              type="button" role="tab" > <i className="fa fa-user"
                                 aria-hidden="true"> </i> Profile
                           </button>
                           <button className="nav-link small" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#SettingAccount"
                              type="button" role="tab" > <i className="fa fa-gear amtWheel"></i> Log In
                           </button>

                        </li>

                     </ul>
                     <div className="tab-content" id="pills-tabContent">

                        <div className="tab-pane fade " id="SettingAccount" role="tabpanel" aria-labelledby="pills-home-tab"
                           tabindex="0">
                           <div className='d-flex align-content-center justify-content-center flex-column'>
                              <div className="mb-3">
                                 <input type='email' value={email} className="form-control" placeholder='Enter Your id' aria-describedby="emailHelp" onChange={(event) => { setEmail(event.target.value) }} />
                              </div>
                              <div className="mb-3">

                                 <input type="password" value={password} placeholder='Enter Your Password' className="form-control" onChange={(event) => { setPassword(event.target.value) }} />
                              </div>

                              <button type="button" className="btn bg-primary text-white fw-bold" onClick={() => { fetchLoginAdmin() }}> <i className="fa fa-sign-in"></i> Log in </button>
                           </div>
                        </div>

                        <div className="tab-pane fade " id="Profile" role="tabpanel" aria-labelledby="pills-home-tab"
                           tabindex="0">
                           <table class="table">
                              <thead>
                                 <tr>
                                    <th scope="col" className='text-primary'>Name</th>
                                    <th scope="col">Ajay Tiwari</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <th className='text-primary'>Address</th>
                                    <td>Harredih Mohalla Nichlaul</td>
                                 </tr>
                                 <tr>
                                    <th className='text-primary'>Contact</th>
                                    <td>+919918151032</td>
                                 </tr>
                                 <tr>
                                    <th className='text-primary'>Profession</th>
                                    <td>Lawyer</td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default Header;



