import { Button, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Form, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Nav, Navbar, Table } from "reactstrap";
import EmployeeRow from "./EmployeeRow";
import base_url from '../api/API'
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import AdminLogin from "./AdminLogin";
const Dashboard = () => {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const [filteredData, setFilteredData] = useState([]);
  // const [data, setData] = useState([]);
  const [chooseStatus, setChooseStatus] = useState({ status: "" });

  
  const toggle = (emp_Id) => {
    setModal(!modal);
    setSelectedUserId(emp_Id);
 
  };

  const [updateEmp, setUpdateEmp] = useState({
    status: "",
    remark: "",
  });
  

  useEffect(() => {
    fetchData();
  }, []);

  

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const results = data.filter((emp) =>
      emp.emp_Id.toLowerCase().includes(query)
    );
    setSearchResults(results);
  };

  

  const handleUpdateUser = async () => {
    try {
      await axios.put(`${base_url}/Employee/${selectedUserId}`, updateEmp);
      fetchData();
      toggle(null);
      toast.success("Request updated")
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong")
    }
  };
  useEffect(() => {
   
    fetchStatus(chooseStatus.status);
  }, [chooseStatus.status]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${base_url}/Employee`);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchStatus = async (status = "") => {
    try {
      if (status) {
        const response = await axios.get(
          `${base_url}/Employee/GetByStatus/${status}`
        );
        setFilteredData(response.data);
        console.log(response.data);
      } else {
        // If the status is not selected (empty string), fetch all employees
        setData([]); // Clear existing data to avoid displaying old data
        fetchData();
      }
    } catch (error) {
      console.error(error);
    }
  };
//------------------------------------------sort table ----------------------------------------------------



  return (
    <>





        {/* <div >
          <button type="button" class="btn btn-warning " style={{marginTop:'1%'}} onClickCapture={logout}>Logout</button>
          </div> */}



    <div class="input-group justify-content-end ml-7">
      
  <div class="form-outline" style={{marginRight:'2%',position: "absolute",marginTop :'-3%'}}>
    <input type="search" id="form1" class="form-control" placeholder="Employee ID" value={searchQuery}
          onChange={handleSearch} />
   
  </div>
  
</div>

    
<div class=" table table-bordered mb-4" >

      <table style={{marginTop:'3%'}} >
        <thead>
          
          <th scope="col"> Id</th>
            <th scope="col">Employee Id</th> 
            <th scope="col">FirstName</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Department</th>
            <th scope="col">Position</th>
            <div>
              <th scope="col"class=" dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" 
               onChange={(e) => {
                setChooseStatus({ ...chooseStatus, status: e.target.value });
              }}
              value={chooseStatus.status}
              >Status</th>
              <ul class=" dropdown-menu dropdown-menu-dark " aria-labelledby="dropdownMenu">
                 <li><a class="dropdown-item" >Approved</a></li>
                 <li><a class="dropdown-item" >Rejected</a></li>
                 <li><a class="dropdown-item" >Pending</a></li>
    
              </ul>
              </div>
            
  
            <th scope="col">Requested Date</th>
            <th scope="col">Approval Date</th>
            <th scope="col">Remark</th>
            <th scope="col">Action</th>
          
        </thead>
        {searchResults.length > 0
            ? searchResults.map((emp) => (
                <EmployeeRow
                  key={emp.id}
                  emp={emp}
                  onUpdate={toggle}
                />
              ))
            : data.map((emp) => (
                <EmployeeRow
                  key={emp.id}
                  emp={emp}
                  onUpdate={toggle}
                />
              ))}
              </table>

      <Modal isOpen={modal} toggle={() => toggle(null)}>
        <ModalHeader toggle={() => toggle(null)}>Update Status</ModalHeader>
        <ModalBody>
          <Form>
            <Col>
              <Label className="form-label">Status</Label>
              <select class="form-select"
                onChange={(e) => {
                  setUpdateEmp({ ...updateEmp, status: e.target.value });
                }}
                value={updateEmp.status}
               
              > <option>Approved</option>
             
              <option>Rejected</option>
              
                </select>
              {/* //------------------------ */}

              {/* //------------------------------ */}
            </Col>
            <Col>
              <Label className="form-label">Remark</Label>
              <Input
                type="text"
                className="form-control"
                onChange={(e) => {
                  setUpdateEmp({ ...updateEmp, remark: e.target.value });
                }}
                value={updateEmp.remark}
              />
            </Col>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleUpdateUser}>
            Save
          </Button>{" "}
          <Button color="secondary" onClick={() => toggle(null)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      
</div>
</>
  );
};

export default Dashboard;