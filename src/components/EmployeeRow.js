import React, { useEffect, useState } from "react";
// import { Button, Dropdown } from "reactstrap";

const EmployeeRow = ({ emp, onUpdate }) => {
  // const [formattedRequestDate, setFormattedRequestDate] = useState("");
  // const [formattedApprovalDate, setFormattedApprovalDate] = useState("");

  // useEffect(() => {
  //   if (emp) {
  //     const formattedRequest = formatDate(emp.requested_date);
  //     setFormattedRequestDate(formattedRequest);

  //     const formattedApproval = formatDate(emp.action_date);
  //     setFormattedApprovalDate(formattedApproval);
  //   }
    
  // }, [emp]);

  // const formatDate = (dateString) => {
  //   const dateObj = new Date(dateString);
  //   const options = {
  //     year: "numeric",
  //     month: "long",
  //     day: "numeric",
  //     hour: "numeric",
  //     minute: "numeric",
  //     hour12: true,
  //   };
  //   const formattedDate = dateObj.toLocaleString(undefined, options);
  //   return formattedDate;
  // };

  return (
    
    <tr >
       <th scope="row">{emp.id}</th>
      <td>{emp.emp_Id}</td>
      <td>{emp.first_name}</td>
      <td>{emp.last_name}</td>
      <td>{emp.email}</td>
      <td>{emp.phone}</td>
      <td>{emp.department}</td>
      <td>{emp.position}</td>
       <td>{emp.status}</td> 



      <td>{emp.requested_date}</td>
      <td>{emp.action_date}</td>
      <td>{emp.remark}</td>
      <td>
        {/* <button type="button" class="btn btn-warning" onClick={() => onUpdate(emp.id)}>Update</button> */}
        <button type="button" class="btn btn-outline-danger"onClick={() => onUpdate(emp.id)}>Update</button>
      </td>
    </tr>
  );
};
export default EmployeeRow;