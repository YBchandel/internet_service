
  import axios from 'axios';
  import React, { useRef, useState } from 'react'

  import { Button, Col, Container, Form, FormGroup, Input, Row } from "reactstrap";
  import base_url from '../api/API';
  import { toast } from 'react-toastify';

  import { PrintDashboard } from './PrintDashboard';
  import { ComponentToPrint } from './ComponentToPrint';
  import { useReactToPrint } from 'react-to-print';
  import { Link } from 'react-router-dom';
import { ComponentToShow } from './ComponentToShow';

  // import { ComponentToPrint } from './ComponentToPrint';


  const AdminLogin = () => {
    const [isPrintClicked, setPrintClicked] = useState(false);

    const [isLoggedin, setIsLoggedin] = useState(false);
  
    const [admin, setAdmin] = useState({
  
      admin_Id: '',
  
      decryptedPassword:''
  
  });
  
  
  
  
  const logout = () => {
  
    localStorage.removeItem('token-info');
  
    setIsLoggedin(false);
  
  };
  
  
  
  
  const handleDownload =()=>{
  
    setPrintClicked(true);
  
  }
  
  const changeView =()=>{
  
    setPrintClicked(false);
  
   
  
  }
  
  
  
  
  const handleForm = (e) => {
  
    e.preventDefault();
  
  const count = postDataOnServer(admin);
  
  if(count != null){
  
    setAdmin({})
  
  }
  
  };
  
  // console.log(employee);
  
  const postDataOnServer = (data) => {
  
    axios.post(`${base_url}/Admin/login`, data).then(
  
      (response) => {
  
        console.log(response);
  
        toast.success("Login successfully!")
  
        localStorage.setItem('token-info', JSON.stringify(admin));
  
        setIsLoggedin(true)  
  
      },
  
      (error) => {
  
        console.log(error);
  
        toast.error("Invalid Credintials")
  
      }
  
    );
  
  };
  
  
  
  
   const componentRef = useRef();
  
   const handlePrint = useReactToPrint({
  
     content: () => componentRef.current,
  
   });
    
    return (
      <div>

      {!isLoggedin ? (
      
          <>
        
      
            <div >
          
      
              <Row >
      
                <Col sm="4" xs="6"></Col>
      
                <Col className=" pt-3 pb-2 " style={{ marginTop: "10%" }} sm="4" xs="6">
      
                  <Form onSubmit={handleForm}>
                  <h2>Admin Login</h2>
      
                    <FormGroup>
      
                      <Input
      
                        placeholder="Admin Id"
      
                        type="text"
      
                        onChange={(e) => {
      
                          setAdmin({ ...admin, admin_Id: e.target.value });
      
                        }}
      
                        value={admin.admin_Id}
      
                      />
      
                    </FormGroup>
      
                    <FormGroup>
                      
      
                      <Input
      
                        placeholder="Password"
      
                        type="password"
      
                        onChange={(e) => {
      
                          setAdmin({ ...admin, decryptedPassword: e.target.value });
      
                        }}
      
                        value={admin.decryptedPassword}
      
      
      
                      />
      
                    </FormGroup>
      
      
      
      
      
                    <Button type="submit">Login</Button>
                    <Link
            to={`/`}
            class="btn btn-outline-success " style={{marginLeft:'10%'}}
            type="button"
          >
            Home
          </Link>
      
                  </Form>
      
                </Col>
      
                <Col sm="4"></Col>
      
              </Row>
      
            </div>
      
          </>
      
        ) : (
      
          <>
          
          <div style={{marginTop:'2%'}}  >
          <Link
            to={`/`}
            class="btn btn-outline-success me-2"
            type="button"
          >
            Home
          </Link>
          <button type="button" class="btn btn-outline-secondary me-2"  onClickCapture={logout}>Logout</button>
          
          
                {isPrintClicked?(<button  class="btn btn-outline-secondary me-3 " onClick={handlePrint}>Download</button>):null}

                {!isPrintClicked? ( <button class="btn btn-outline-secondary me-3 " onClick={handleDownload} style={{marginRight:'4%'}} >Print Preview</button>):null}

               {isPrintClicked? (<button class="btn btn-outline-secondary me-3 " onClick={changeView} >Dashboard</button>):null}

               

               

             

                

           

              {isPrintClicked ? (<ComponentToPrint ref={componentRef}  />  )

              :(<ComponentToShow ref={componentRef}/>)}                

              

</div>

               
          
            {/* <button onClickCapture={logout}>logout user</button> */}
          
            <PrintDashboard />
            
      
          
      
          </>
      
        )}
        </div>
    )
  }


  export default AdminLogin
