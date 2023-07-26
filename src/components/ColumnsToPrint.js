import React, { useEffect, useState } from "react";


const ColumnsToPrint = ({ emp }) => {
  const [formattedRequestDate, setFormattedRequestDate] = useState("");
  const [formattedApprovalDate, setFormattedApprovalDate] = useState("");
 

  useEffect(() => {
    if (emp) {
      const formattedRequest = formatDate(emp.requested_date);
      setFormattedRequestDate(formattedRequest);

      const formattedApproval = formatDate(emp.action_date);
      setFormattedApprovalDate(formattedApproval);
    }
  }, [emp]);

  const formatDate = (dateString) => {
    if (!dateString) {
      return "Please Wait !!";
      }
    const dateObj = new Date(dateString);
    if (isNaN(dateObj.getTime())) {
      return "Invalid Date"; 
      }
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    const formattedDate = dateObj.toLocaleString(undefined, options);
    return formattedDate;
  };

  return (
    <tr>
       <th scope="row">{emp.id}</th>
      <td>{emp.emp_Id}</td>
      <td>{emp.first_name}</td>
      <td>{emp.last_name}</td>
      <td>{emp.email}</td>
      <td>{emp.phone}</td>
      <td>{emp.department}</td>
      <td>{emp.position}</td>
      <td>{emp.status}</td>
      {/* <td>{emp.requested_date}</td> */}
      <td>{formattedRequestDate}</td>
      <td>{formattedApprovalDate}</td>
      {/* <td>{emp.action_date}</td> */}
      <td>{emp.remark}</td>
    </tr>
  );
};
export default ColumnsToPrint;