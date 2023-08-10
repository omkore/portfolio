import React, { useState } from 'react'
import "./Services.css"
const Services = () => {

    const [toggleState,setToggleState] = useState(0);
    const toggleTab = (index)=>{
        setToggleState(index);
    }

  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What i Offer</span>
        <div className="services__container container grid">

            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services_icon"></i>
                    <h3 className="services__title">
                        Web <br />Developer
                    </h3>
                </div>

                <span className="services__button" onClick={()=>toggleTab(1)}>
                    View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 1 ? "services__modal active__modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={()=>toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Web Developer</h3>
                        <p className="services__modal-description">
                        As a Full Stack Developer, I'm your one-stop-shop for all things web-related. From brainstorming and wireframing, to coding and deployment, I've got you covered. I thrive on challenges, and my goal is to transform your ideas into visually stunning and highly functional digital masterpieces.
                        </p>
                        <br />
                        <ul className="services__modal-services grid">

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">i develop the user interface.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Web page development.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">i create ux element interactions.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">i position your company band.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Design and Mockups of products for companies.</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services_icon"></i>
                    <h3 className="services__title">UI/UX <br /> Designers</h3>
                </div>
                <span className="services__button" onClick={()=>toggleTab(2)}>View More
                <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 2 ? "services__modal active__modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={()=>toggleTab(0)}  className="uil uil-times services__modal-close"></i>
                        <h3 className="services__modal-title">UI/UX Designer</h3>
                        <p className="services__modal-description">
                        My eye for design and keen understanding of user behavior enable me to craft user-centric experiences. I specialize in creating interfaces that not only look aesthetically pleasing but also provide intuitive and enjoyable journeys for users, enhancing overall engagement and satisfaction.
                        </p>
                        <ul className="services__modal-services grid">

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">i develop the user interface.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">product designs with great ui and ux.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">i create ux element interactions.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">i position your company band.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Design and Mockups of products for companies.</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-video services_icon"></i>
                    <h3 className="services__title">Video <br /> Editor</h3>
                </div>
                <span className="services__button" onClick={()=>toggleTab(3)}>View More
                <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 3 ? "services__modal active__modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={()=>toggleTab(0)} className="uil uil-times services__modal-close"></i>
                        <h3 className="services__modal-title">Video Editor</h3>
                        <p className="services__modal-description">
                        My proficiency in video editing allows me to weave stories through visuals. Whether it's creating compelling marketing videos, educational content, or captivating short films, I leverage my editing skills to transform raw footage into polished masterpiece.
                        </p>
                        <ul className="services__modal-services grid">

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">i can color grade and sound syncing to your videos.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">i can create social media reels.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">i can create proffesional videos.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">i can create tutorial videos.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">And more like gaming, travelling, vlogging, poadcast, and cinematic also.</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Services