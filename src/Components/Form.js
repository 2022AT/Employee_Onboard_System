import React, { useState } from 'react'
import { Formik } from 'formik';
import Axios from 'axios';
import Onboard from './Images/Onboard.jpeg';
import './Form.css'
export default function Form() {
   const [formdata, SetFormData] = useState({
      aITId: "",
      emp_Name: "",
      emp_Address: "",
      emp_Contact: "",
      emp_Gender: "",
      emp_Country: "",
      emp_Language: "",
      emp_NickName: "",
      emp_Email: "",
      emp_Password: "",
      emp_Department: "",
      emp_JoiningDate: "",
      emp_ReportingManager: "",
      emp_Status: "",
   });

   const handleChange = (event) => {
      SetFormData({ ...formdata, [event.target.name]: event.target.value });
   };

   const onSubmit = (e) => {
      e.preventDefault();
      Axios.post('http://localhost:8080/employee', formdata).then((res) => alert('successfull')).catch((err) => alert('unsuccessfull'))
   }

   return (
      // <>
      <Formik>
         {(Form) => (
            <form >
               <div className='container p-2'>
                  <h1>New Employee Onboarding</h1>
                  <div className='container mb-5 ml-5'>
                     <div className="row">
                        <div className='col-md-6'>
                           <div className="card paint-card">
                              <div className="card-body">
                                 

                                 <div className="form-group row" >
                                    <label className="col-form-label">AIT Id</label>
                                    <input onChange={handleChange} name='aITId' type='text' />
                                 </div>

                                 <div className="form-group row" >
                                    <label className="col-form-label">Name</label>
                                    <input onChange={handleChange} type='text' name='emp_Name' />
                                 </div>

                                 <div className="form-group row" >
                                    <label className="col-form-label">Address</label>
                                    <input onChange={handleChange} type='text' name='emp_Address' />
                                 </div>

                                 <div className="form-group row" >
                                    <label className="col-form-label">Contact</label>
                                    <input onChange={handleChange} type='text' name='emp_Contact' />
                                 </div>

                                 <div className="form-group row" >
                                    <label className="col-form-label">Gender</label>
                                    <div className="col-sm-9" id="required" name="emp_Gender">
                                       <input type="radio" name="emp_Gender" onChange={handleChange} value="Male" />Male
                                       <input type="radio" name="emp_Gender" onChange={handleChange} value="Female" />Female
                                    </div>
                                 </div>

                                 <div className="form-group row" >
                                    <label className="col-sm-3 col-form-label">Country</label>
                                    <select id="country" onChange={handleChange} name="emp_Country">
                                       <option value="">Select</option>
                                       <option value="India">India</option>
                                       <option value="USA">USA</option>
                                    </select>
                                 </div>

                                 <div className="form-group row" >
                                    <label className="col-form-label">Languages</label>
                                    <input onChange={handleChange} type='text' name='emp_Language' />
                                 </div>

                                 <div className="form-group row" >
                                    <label className="col-form-label">Nick Name</label>
                                    <input onChange={handleChange} type='text' name='emp_NickName' />
                                 </div>

                                 <div className="form-group row" >
                                    <label className="col-form-label">Email</label>
                                    <input onChange={handleChange} type='text' name='emp_Email' />
                                 </div>

                                 <div className="form-group row" >
                                    <label className="col-form-label">Password</label>
                                    <input onChange={handleChange} type='text' name='emp_Password' />
                                 </div>

                                 <div className="form-group row" >
                                    <label className="col-form-label">Department</label>
                                    <select id="country" onChange={handleChange} name="emp_Department">
                                       <option value="">Select</option>
                                       <option value="IT">IT</option>
                                       <option value="HR">HR</option>
                                       <option value="Admin">Admin</option>
                                    </select>
                                 </div>

                                 <div className="form-group row" >
                                    <label className="col-form-label">JoiningDate</label>
                                    <input onChange={handleChange} type='date' name='emp_JoiningDate' />
                                 </div>

                                 <div className="form-group row" >
                                    <label className="col-form-label">Reporting manager</label>
                                    <input onChange={handleChange} type='text' name='emp_ReportingManager' />
                                 </div>

                                 <div className="form-group row" >
                                    <label className="col-form-label">Status</label>
                                    <select id="status" onChange={handleChange} name="emp_Status">
                                       <option value="">Select</option>
                                       <option value="active">Active</option>
                                       <option value="decative">Deactive</option>
                                    </select>
                                 </div>

                                 <div className="col-md-12">
                                    <button onClick={onSubmit} type="submit" className="btn btn-primary">Submit</button>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className='col-md-6'>
                           <img src={Onboard} />
                        </div>

                     </div>
                  </div>
                  <div class="footer">
                     <p>Copyright @Ait Global india pvt Ltd</p>
                  </div>
               </div>

            </form>


         )
         }
      </Formik>
   )
}