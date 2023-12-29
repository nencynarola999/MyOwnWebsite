import React, { useEffect } from 'react'
import { Accordion } from 'react-bootstrap'
import Aos from 'aos'

const Smaindivsec = () => {

    useEffect(() => {
        Aos.init();
    }, [])
    let array = [
        {
            eventkey: "1",
            heading: "CORE ARCHITETURE",
            p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur.Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum."
        },
        {
            eventkey: "2",
            heading: "RESTAURANTS",
            p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur.Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum."
        },
        {
            eventkey: "3",
            heading: "HOSPITAL",
            p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur.Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum."
        },
        {
            eventkey: "4",
            heading: "RESTAURANTS",
            p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur.Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum."
        },
    ]
    return (
        <div className='container-fluid g-0'>
            <div className="Smaindiv">
                <div className="container g-0">
                    <div className="row row-cols-1 row-cols-lg-2 g-0">
                        <div className="col" data-aos="fade-down-right" data-aos-duration="1500">
                            <div className="Simg1">
                                <div className="Simg2"></div>
                                <div className="Simg3"></div>
                            </div>
                        </div>
                        <div className="col" data-aos="fade-down-left" data-aos-duration="1500">
                            <div className="Saccorsec">
                                <h6>BEST ARCHITECTURE</h6>
                                <h2>ARCHITECTURE
                                    DID EXPECT <span> STRATEGIST</span></h2>
                                <Accordion >
                                    {
                                        array?.map((x, i) => {
                                            return <Accordion.Item eventKey={x?.eventkey} key={i}>
                                                <Accordion.Header>{x?.heading}</Accordion.Header>
                                                <Accordion.Body>{x?.p}</Accordion.Body>
                                            </Accordion.Item>
                                        })
                                    }
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Smaindivsec