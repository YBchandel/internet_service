import React from "react";
import DownloadDashboard from "./DownloadDashboard";
// import Dashboard from "./Dashboard";
// import EmployeeRow from "./EmployeeRow";




export const ComponentToPrint = React.forwardRef((props, ref) => {
    return (
      <div ref={ref}><DownloadDashboard/></div>
    );
  });