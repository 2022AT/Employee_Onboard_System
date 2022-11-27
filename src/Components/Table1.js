import MUIDataTable from "mui-datatables";
import React from 'react'
function Table1() {
  
 
const columns = [
 {
  name: "aITId",
  label: "AIT Id",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "emp_Name",
  label: "Name",
  options: {
   filter: true,
   sort: true,
  }
 },
 {
  name: "emp_Address",
  label: "Address",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "emp_Contact",
  label: "Contact",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "emp_Gender",
  label: "Gender",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "emp_Country",
  label: "Country",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "emp_Language",
  label: "Language",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "emp_NickName",
  label: "NickName",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "emp_Email",
  label: "Email",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "emp_Password",
  label: "Password",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "emp_Department",
  label: "Department",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "emp_JoiningDate",
  label: "Joining Date",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "emp_ReportingManager",
  label: "Reporting Manager",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "emp_Status",
  label: "Employee Status",
  options: {
   filter: true,
   sort: false,
  }
 },
];
const data = [
  ["Ait-101", "Pooja", "Pune", "88888","F","India","English","Puja","Puja@gmail.com","123","IT","10/10/2022","ABC","Active"],
  ["John Walsh", "Test Corp", "Hartford", "CT"],
  ["Bob Herm", "Test Corp", "Tampa", "FL"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
 ];
 

const options = {
  download: false,
  print: false ,
  filter: false, 
  checkBox: false ,
  filterType: 'dropdown',
  responsive: 'scrollMaxHeight',
  selectableRows: 'single',
  
  disableToolbarSelect: true,
  onRowsSelect: (rowData) => {
    //this.setState({isSelectedActive: true});
  }
};
return (

    
<MUIDataTable
  title={"Employee List"}
  data={data}
  columns={columns}
  options={options}
/>
 )
}

export default Table1 