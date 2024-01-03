import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { FaFacebook, FaGooglePlus, FaKey } from 'react-icons/fa'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { GrMail } from 'react-icons/gr'
import Navbar1 from './navbar'
import Aos from 'aos'

const Login = () => {
  useEffect(() => {
    Aos.init();
  }, [])
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
      <Navbar1 />
      <div className="container-fluid  g-0">
        <div className="loginmaindiv" data-aos="zoom-in" data-aos-duration="1500">
          <div className="loginmaindiv2 container  g-0">
            <div className="row">
              <div className="col-3 d-none d-lg-block  p-0">
                <img src="/1.png" alt="" width="100%" />
              </div>
              <div className="col-12 col-lg-9  p-0 m-0 g-0">
                <div className="formset">
                  <h2 className='fs-1'>Log in</h2>
                  <p >Get in securly with an existing online profile</p><br />
                  <span className="d-flex">
                    <Link href="https://www.facebook.com/" legacyBehavior><a target="_blank" className="linkset1" ><FaFacebook className='fs-3' /><span className='ms-2'> Log In</span></a></Link>
                    <Link href="https://www.google.com/" legacyBehavior><a target="_blank" className="linkset2"><FaGooglePlus className='fs-3' /> <span className='ms-2'>Google+</span></a></Link>
                  </span>
                  <span>_____________ <sub>OR</sub> _____________ </span><br />
                  <div className="">
                    <Form noValidate validated={validated} onSubmit={handleSubmit} className='m-0'>
                      <Form.Group controlId="validationCustomUsername">
                        <InputGroup hasValidation>
                          <InputGroup.Text id="inputGroupPrepend" className="inputtext"><GrMail /></InputGroup.Text>
                          <Form.Control
                            type="email"
                            placeholder="Email Address"
                            aria-describedby="inputGroupPrepend"
                            required
                            className='fs-6'
                          />
                          <Form.Control.Feedback type="invalid" className='fs-6'>
                            Please choose a username.
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>
                      <br />
                      <Form.Group controlId="validationCustomUsername">
                        <InputGroup hasValidation>
                          <InputGroup.Text id="inputGroupPrepend" className="inputtext"><FaKey /></InputGroup.Text>
                          <Form.Control
                            type="password"
                            placeholder="Password"
                            aria-describedby="inputGroupPrepend"
                            required
                            className='fs-6'
                          />
                          <Form.Control.Feedback type="invalid" className='fs-6'>
                            Please choose a username.
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>
                      <br />
                      <Button type="submit" className='w-100'>Submit form</Button>
                    </Form>
                  </div><br />
                  <p>Don't have an account? <span className='text-decoration-underline ms-1 loginlastcolor fs-5'><Link href="/register">Sign Up</Link></span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Login