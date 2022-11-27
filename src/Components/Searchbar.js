import React, { useEffect, useState } from 'react'

function Searchbar() {
  const [data, setData] = useState([]);
  const [searchApiData, setSearchApiData] = useState([]);
  const [filterVal, SetFilterVal] = useState("");
  useEffect(() => {
    const fetchData = () => {
      fetch('http://localhost:8080/employee')
        .then(resp => resp.json())
        .then(json => {
          setData(json)
          setSearchApiData(json)
        })
    }

    fetchData();
  }, [])
  const handleFilter = (e) => {
    if (e.target.value === '') {
      setData(searchApiData)
    } else {
      const filterResult = searchApiData.filter(item => item.emp_Name.toLowerCase().includes(e.target.value.toLowerCase()))
      if(filterResult.length < 0){
        setData(filterResult)
      }else{
        setData([{"emp_Name":"No Data"}])
      }
      setData(filterResult)
    }
    SetFilterVal(e.target.value)
  }
  return (
    <div className='Heading'>
       <h1>Employee List</h1>
    <div className='searchbar'>
      <div className='Box'style={{ margin: "30px 35%" }}>
        <input placeholder='search by name' value={filterVal} onInput={(e) => handleFilter(e)} />
      </div>
      <div className='container p-5'>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Employee Id</th>
              <th>AIT Id</th>
              <th>Name</th>
              <th>Address</th>
              <th>Contact</th>
              <th>Gender</th>
              <th>Country</th>
              <th>Language</th>
              <th>NickName</th>
              <th>Email</th>
              <th>Password</th>
              <th>Department</th>
              <th>Joining Date</th>
              <th>Reporting Manager</th>
              <th>Employee Status</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map(item => {
                return (
                  <tr>
                    <td>{item.emp_Id}</td>
                    <td>{item.aITId}</td>
                    <td>{item.emp_Name}</td>
                    <td>{item.emp_Address}</td>
                    <td>{item.emp_Contact}</td>
                    <td>{item.emp_Gender}</td>
                    <td>{item.emp_Country}</td>
                    <td>{item.emp_Language}</td>
                    <td>{item.emp_NickName}</td>
                    <td>{item.emp_Email}</td>
                    <td>{item.emp_Password}</td>
                    <td>{item.emp_Department}</td>
                    <td>{item.emp_JoiningDate}</td>
                    <td>{item.emp_ReportingManager}</td>
                    <td>{item.emp_Status}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
      </div>
      </div>
      )
}

      export default Searchbar;

