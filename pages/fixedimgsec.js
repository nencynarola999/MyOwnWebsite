import React from 'react'
import { Carousel } from 'react-bootstrap'

const Fixedimgsec = () => {
    let array = [
        {
            ptext: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus sunt, quam voluptatem eos exercitationem laudantium molestias quia harum distinctio quis?",
            img: "/face1.webp",
            h5: "JOHN DEO",
            h6: "Techincal Support - Olker"
        },
        {
            ptext: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus sunt, quam voluptatem eos exercitationem laudantium molestias quia harum distinctio quis?",
            img: "/face2.webp",
            h5: "JOHN DEO",
            h6: "Techincal Support - Olker"
        },
        {
            ptext: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus sunt, quam voluptatem eos exercitationem laudantium molestias quia harum distinctio quis?",
            img: "/face3.webp",
            h5: "JOHN DEO",
            h6: "Techincal Support - Olker"
        },
        {
            ptext: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus sunt, quam voluptatem eos exercitationem laudantium molestias quia harum distinctio quis?",
            img: "/face4.webp",
            h5: "JOHN DEO",
            h6: "Techincal Support - Olker"
        },
    ]
    return (
        <div className='container-fluid p-0 g-0'>
            <div className="fixedimg">
                <div className="fix2">
                    <div className="container text-center p-0">
                        <h2>WHAT'S CUSTOMER SAY?</h2>
                        <h4>--- o ---</h4>
                        <Carousel >
                            {
                                array?.map((x, i) => {
                                    return <Carousel.Item className="sec" key={i}>
                                        <p>{x?.ptext}</p>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <img
                                                src={x?.img}
                                                alt="First slide"
                                                width="80px"
                                                height="80px"
                                                className='rounded-circle'
                                            />
                                            <div>
                                                <h5>{x?.h5}</h5>
                                                <h6>{x?.h6}</h6>
                                            </div>
                                        </div>
                                    </Carousel.Item>
                                })
                            }
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fixedimgsec