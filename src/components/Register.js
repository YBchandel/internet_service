import axios from "axios";
import React, { useEffect, useState } from "react";
import base_url from "../api/API";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardText,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Nav,
  Navbar,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";
//import { toast } from "react-toastify";
//import { Link } from "react-router-dom";

const Register = () => {
  const [employee, setEmployee] = useState({});
  const [data, setData] = useState([]);
  const [emp_Id, setEmpId] = useState('');
  const [showResults, setShowResults] = useState(false)
  //----------------------------------------------phone validation not used
  // const [phoneNumber, setPhoneNumber] = useState('');
  // const handleChange = (event) => {
  //   const { value } = event.target;
  //   // Use a regular expression to allow only digits and limit the length to 10 digits
  //   const formattedPhoneNumber = value.replace(/\D/g, '').slice(0, 10);
  //   setPhoneNumber(formattedPhoneNumber);
  // }
  const handleEmployeeIdChange = (e) => {

    const empIdValue = e.target.value;
    const numericEmpId = empIdValue.replace(/\D/g, "");
    if (numericEmpId.length <= 8) {
      setEmployee({ ...employee, emp_Id: numericEmpId });
    }
  };

  // const handleEmployeeIdSearch = (e) => {

  //   const empIdValue = e.target.value;
  //   const numericEmpId = empIdValue.replace(/\D/g, "");
  //   if (numericEmpId.length <= 8) {
  //     setEmpId({ ...emp_Id, emp_Id: numericEmpId });
  //   }
  // };




  const handlePhoneChange = (e) => {

    const phoneValue = e.target.value;

    const numericPhone = phoneValue.replace(/\D/g, "");

    if (numericPhone.length <= 10) {

      setEmployee({ ...employee, phone: numericPhone });

    }

  };
  //------------------------------------------------------------


  const handleForm = (e) => {
    e.preventDefault();

    if (employee.phone.length !== 10) {

      toast.error("Phone number must be 10")

    }

    if (employee.emp_Id.length !== 8) {

      toast.error("Enter 8 digit Employee Id")

    }

    if (employee.phone.length == 10 && employee.emp_Id.length == 8) {

      const count = postDataOnServer(employee);

      if (count != null) {

        setEmployee({});

      }

    }
  };
  // console.log(employee);
  const postDataOnServer = (data) => {
    axios.post(`${base_url}/Employee`, data).then(
      (response) => {
        console.log(response);
        toast.success("Registered successfully!");
      },
      (error) => {
        console.log(error);
        if (employee.phone.length !== 10) {
          toast.error("Number Must be 10 Degit !");
        }
      }
    );
  };


  const fetchData = async () => {
    try {
      const response = await axios.get(`${base_url}/Employee/${emp_Id}`);
      setData(response.data);
      console.log(response.data);
      setShowResults(true)
    } catch (error) {
      console.error(error);
    }
  };




  // const loginValidation = values => {
  //   const errors = {}
  //   if (!values.phone) {
  //     errors.email = 'Required'
  //   } else if (![0-9] {10}$.test(values.phone)) {
  //     errors.email = 'Invalid email address'
  //   }
  //   return errors
  // }
  //---------------------------------------date format
  const [formattedRequestDate, setFormattedRequestDate] = useState("");
  const [formattedApprovalDate, setFormattedApprovalDate] = useState("");

  useEffect(() => {
    if (data) {
      const formattedRequest = formatDate(data.requested_date);
      setFormattedRequestDate(formattedRequest);

      const formattedApproval = formatDate(data.action_date);
      setFormattedApprovalDate(formattedApproval);
    }
  }, [data]);

  const formatDate = (dateString) => {
    if (!dateString) {
      return "Please Wait !!"; // Or any other meaningful default value you prefer
    }

    const dateObj = new Date(dateString);
    if (isNaN(dateObj.getTime())) {
      return "Invalid Date"; // Handle invalid date strings, if necessary
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
    //----------------------------------------------------
  }

  return (
    <>
    

{/* //***************************************************************************/ }
      <Container>
        <Navbar>
          <Nav class="navbar navbar-light bg-light justify-content-end">

            <Link 
              to={`/admin-login`}
              class="btn btn-outline-success me-2"
              type="button"
            >
              Admin Login
            </Link>

            <h2 class=" justify-content-center" style={{position: "absolute",marginLeft :'37%' }} >Register Employee</h2>
           


          </Nav>
          
        </Navbar>
      </Container>
      
{/* //********************************************************Register*******************/ }
      <div class="" style={{marginRight:'5%', marginLeft:'5%',marginBottom: '2%'}}>
        
        <Container>
          
          <Row xs="2">
            <Col sm="4" xs="6"></Col>

            <Col className="shadow-lg p-3 mb-5 bg-white rounded" sm="4" xs="6" style={{ marginTop: "1%" }}>
              <Form onSubmit={handleForm}>
                <FormGroup>
                  <Label >First Name</Label>
                  <Input
                    name="First Name"
                    onChange={(e) => {
                      setEmployee({ ...employee, first_name: e.target.value });
                    }}
                    value={employee.first_name}
                    required
                    placeholder="First Name"
                    type="text"
                  />
                
                  <Label > Last Name</Label>
                  <Input
                    name=" Last Name"
                    onChange={(e) => {
                      setEmployee({ ...employee, last_name: e.target.value });
                    }}
                    value={employee.last_name}
                    required
                    placeholder=" Last Name"
                    type="text"
                  />
                
                  <Label >Employee Id</Label>
                  <Input name="Employee Id"
                    onChange={handleEmployeeIdChange}
                    value={employee.emp_Id}
                    required
                    placeholder="Employee Id"
                    type="text"
                  />
                
                  <Label >Phone</Label>

                  <Input
                    name="Phone"
                    onChange={handlePhoneChange}
                    value={employee.phone}
                    required
                    placeholder="Phone"
                    type="number"



                  />
                
                  <Label >Email Id</Label>
                  <Input
                    name="Email Id"
                    onChange={(e) => {
                      setEmployee({ ...employee, email: e.target.value });
                    }}
                    value={employee.email}
                    required
                    placeholder="Email Id"
                    type="email"
                  />
                
                  <Label >Department</Label>
                  <Input
                    name="Department"
                    onChange={(e) => {
                      setEmployee({ ...employee, department: e.target.value });
                    }}
                    value={employee.department}
                    required
                    placeholder="Department"
                    type="text"
                  />
                
                  <Label > Position</Label>
                  <Input
                    name=" Position"
                    onChange={(e) => {
                      setEmployee({ ...employee, position: e.target.value });
                    }}
                    value={employee.position}
                    required
                    placeholder=" Position"
                    type="text"
                  />
                </FormGroup>

                <Button type="submit"



                >Submit</Button>
                
              </Form>
            </Col>

{/* //********************************************************Search By ID*******************/ }
            <Col sm="4">
              <Container>
                <div className="d-flex justify-content-end mb-3 mt-2" style={{}}>
                  <Input
                    type="text"
                    placeholder="Check Status"
                    onChange={(e) => { setEmpId(e.target.value) }}
                    className="w-30 me-2"
                  />
                  <Button onClick={fetchData} >Search</Button>
                </div>
                {showResults ?
                  <div >
                    <Card
                      className="my-2 "
                      color="primary"
                      outline
                      style={{
                        width: "18rem",
                      }}
                    >
                      <CardHeader tag="h5">Employee Status
                        <a class="btn btn-primary btn-close " href="/" role="button" style={{ marginLeft: '29%' }}></a></CardHeader>

                      {/* <Link class="btn-close" to={'/'}  role="button" disabled aria-label="Close"></Link> */}
                      {/* <button type="button" class="btn-close" aria-label="Close"></button> */}

                    
                      <CardBody>
                        <CardText>Employee Id : {data.emp_Id}</CardText>
                        <CardText>First Name : {data.first_name}</CardText>
                        <CardText>Last Name : {data.last_name}</CardText>
                        <CardText>Status : {data.status}</CardText>
                        <CardText>
                          Requested Date : {formattedRequestDate}
                        </CardText>
                        {data.status === "Rejected" ? (

                          <CardText>Rejected Date: {formattedApprovalDate}</CardText>

                        ) : (

                          formattedApprovalDate !== null && formattedApprovalDate !== " " && (

                            <CardText>Approval Date: {formattedApprovalDate}</CardText>

                          )

                        )}


                        {/* <CardText>Approval Date : {formattedApprovalDate}</CardText> */}
                        <CardText>Remark : {data.remark}</CardText>
                      </CardBody>
                      
                    </Card>
                  </div>
                  : null}
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Register;
