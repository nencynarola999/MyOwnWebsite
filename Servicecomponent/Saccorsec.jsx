import React, { useEffect } from 'react'
import { Accordion } from 'react-bootstrap'
import Aos from 'aos'
import { FaArrowAltCircleDown, FaPlus } from 'react-icons/fa'

const Saccorsec = () => {
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
        <div className='container-fluid p-0 g-0'>
            <div className="saccormaindiv" data-aos="fade-right" data-aos-duration="1500">
                <div className="saccorimage ">
                    <div className="saccorimage2">
                    </div>
                    <div className="saccorimage3">
                        <p>BEST ARCHITECTURE</p>
                        <h2>ARCHITECTURE DID EXPECT <span>STRATEGIST</span></h2>
                        <Accordion >
                            {
                                array?.map((x, i) => {
                                    return <Accordion.Item eventKey={x?.eventkey} key={i}>
                                        <Accordion.Header>{x?.heading} </Accordion.Header>

                                        <Accordion.Body>{x?.p}</Accordion.Body>
                                    </Accordion.Item>
                                })
                            }
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Saccorsec