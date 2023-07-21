import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Nav, Navbar} from 'reactstrap'
import GetStatus from './GetStatus'


const NavBar = () => {
  return (
    <div>
      <Container>
        <Navbar>
        <Nav class="navbar navbar-light bg-light justify-content-end">
          <GetStatus />
        <Link
          to={`/admin-login`}
          class="btn btn-outline-success me-2"
          type="button"
        >
          Admin Logn
        </Link>

      </Nav>
     
      </Navbar>
      </Container>
    </div>
  )
}

export default NavBar
