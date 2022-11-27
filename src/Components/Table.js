import React, { useEffect, useState } from 'react'
import Axios from 'axios';

import './Table.css'
import Searchbar from './Searchbar';

export default function Table() {
    const [tabledata, SetTableData] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:8080/employee').then((res) => SetTableData(res.data)).catch((err) => alert('unsuccessfull'))
    }, [])
    return (
        
            <div className='container p-5'>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">S.No.</th>
                            <th scope="aITId">AIT Id</th>
                            <th scope="emp_Name">Name</th>
                            <th scope="emp_Address">Address</th>
                            <th scope="emp_Contact">Contact</th>
                            <th scope="emp_Gender">Gender</th>
                            <th scope="emp_Country">Country</th>
                            <th scope="emp_Language">Language</th>
                            <th scope="emp_NickName">NickName</th>
                            <th scope="emp_Email">Email</th>
                            <th scope="emp_Password">Password</th>
                            <th scope="emp_Department">Department</th>
                            <th scope="emp_JoiningDate">Joining Date</th>
                            <th scope="emp_ReportingManager">Reporting Manager</th>
                            <th scope="emp_Status">Employee Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tabledata.map((element, i = 0) => {
                                return (
                                    <>
                                        <tr key={element.emp_Id}>
                                            <td>{i + 1}</td>
                                            <td>{element.aITId}</td>
                                            <td>{element.emp_Name}</td>
                                            <td>{element.emp_Address}</td>
                                            <td>{element.emp_Contact}</td>
                                            <td>{element.emp_Gender}</td>
                                            <td>{element.emp_Country}</td>
                                            <td>{element.emp_Language}</td>
                                            <td>{element.emp_NickName}</td>
                                            <td>{element.emp_Email}</td>
                                            <td>{element.emp_Password}</td>
                                            <td>{element.emp_Department}</td>
                                            <td>{element.emp_JoiningDate}</td>
                                            <td>{element.emp_ReportingManager}</td>
                                            <td>{element.emp_Status}</td>
                                        </tr>
                                    </>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        

    )
}

