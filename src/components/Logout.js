
// import axios from 'axios';
// import React, { useState } from 'react'

// import { Button, Col, Form, FormGroup, Input, Row } from "reactstrap";
// import base_url from '../api/API';
// import { toast } from 'react-toastify';
// import Dashboard from './Dashboard';
// const Logout = () => {
//     const [isLoggedin, setIsLoggedin] = useState(false);

//     const [admin, setAdmin] = useState({
  
//       admin_Id: '',
  
//       decryptedPassword: ''
  
//     });
  
  
  
  
//     const logout = () => {
  
//       localStorage.removeItem('token-info');
  
//       setIsLoggedin(false);
  
//     };
  
  
  
  
  
//     const handleForm = (e) => {
  
//       e.preventDefault();
  
//       const count = postDataOnServer(admin);
  
//       if (count != null) {
  
//         setAdmin({})
  
//       }
  
//     };
  
//     // console.log(employee);
  
//     const postDataOnServer = (data) => {
  
//       axios.post(`${base_url}/Admin/login`, data).then(
  
//         (response) => {
  
//           console.log(response);
  
//           toast.success("Login successfully!")
  
//           localStorage.setItem('token-info', JSON.stringify(admin));
  
//           setIsLoggedin(true)
  
//         },
  
//         (error) => {
  
//           console.log(error);
  
//           toast.error("Invalid Credintials")
  
//         }
  
//       );
  
//     };
  
//   return (
//     <div>

//     {!isLoggedin ? (
    
//         <>
      
    
//           <div>
    
//             <Row >
    
//               <Col sm="4" xs="6"></Col>
    
//               <Col className=" pt-3 pb-2 " style={{ marginTop: "10%" }} sm="4" xs="6">
    
//                 <Form onSubmit={handleForm}>
    
//                   <FormGroup>
    
//                     <Input
    
//                       placeholder="Admin Id"
    
//                       type="text"
    
//                       onChange={(e) => {
    
//                         setAdmin({ ...admin, admin_Id: e.target.value });
    
//                       }}
    
//                       value={admin.admin_Id}
    
//                     />
    
//                   </FormGroup>
    
//                   <FormGroup>
    
//                     <Input
    
//                       placeholder="Password"
    
//                       type="password"
    
//                       onChange={(e) => {
    
//                         setAdmin({ ...admin, decryptedPassword: e.target.value });
    
//                       }}
    
//                       value={admin.decryptedPassword}
    
    
    
//                     />
    
//                   </FormGroup>
    
    
    
    
    
//                   <Button type="submit">Submit</Button>
    
//                 </Form>
    
//               </Col>
    
//               <Col sm="4"></Col>
    
//             </Row>
    
//           </div>
    
//         </>
    
//       ) : (
    
//         <>
        
    
        
//           {/* <button onClickCapture={logout}>logout user</button> */}
//          <div className="justify-content-end">
//           <button type="button" class="btn btn-warning " style={{marginTop:'1%'}} onClickCapture={logout}>Logout</button>
//           </div>
//           <Dashboard />
    
         
    
//         </>
    
//       )}
//       </div>
//   )
// }


// export default Logout
