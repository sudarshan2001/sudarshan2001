import React, { useState } from 'react';
import './Protofilo.css';
import sudarshanImage from './sudarshan.jpg';
import projectimage1 from './Project1.jpg';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Card from 'react-bootstrap/Card';
import { HiMiniCheckBadge } from "react-icons/hi2";
import { FaUserGraduate } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoReorderThreeOutline } from "react-icons/io5";



export default function Protofilo() {
    const scrollToContact = () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    };
    const [visible, setvisible] = useState(false)
    const handlethreebarcontainer = () => {
        setvisible(!visible);
    }
    return (
        <div className='Protofilo'>
            <div className='navbarcontainer'>
                <div className='Name'>
                    <h3>SUDARSHAN</h3>
                </div>
                <div className='navlist'>
                    <ul><a href='#About'>About</a></ul>
                    <ul><a href='#Experience'>Experience</a></ul>
                    <ul><a href='#Projects'>Projects</a></ul>
                    <ul><a href='#contact'>Contact</a></ul>

                </div>
                <div className='navtabend'>
                    <div className='threebarcontainer' >

                        <IoReorderThreeOutline style={{ fontSize: '40px' }} onClick={handlethreebarcontainer} />

                    </div>
                    {visible && (
                        <div className='threeoutlinecontainer'>
                            <Card className='threeoutlinecard'>
                                <ul><a href='#About'>About</a></ul>
                                <ul><a href='#Experience'>Experience</a></ul>
                                <ul><a href='#Projects'>Projects</a></ul>
                                <ul><a href='#contact'>Contact</a></ul>

                            </Card>
                        </div>

                    )}

                </div>



            </div>
            <div className='bodycontainer'>

                <div className='DetailsContainer'>
                    <div className='Photo'>

                        <img src={sudarshanImage} alt='img' />


                    </div>
                    <div className='InfoContainer'>
                        <p>Hello I'm</p>
                        <h2>Sudarshan</h2>
                        <p1>Aspiring Data Scientist / Machine Learning Intern</p1>

                        <div className='twoButtonsContainer'>

                            <a href='/resume.pdf' download>
                                <button>Download CV</button>
                            </a>

                            <button className='btncontinfo' onClick={scrollToContact}>Contact Info</button>

                        </div>

                        <div className='twoiconcontainer'>
                            <a href='https://www.linkedin.com/in/sudarshan-kumaran-90a312233/'>  <FaLinkedin style={{ fontSize: '30px', color: 'black' }} /></a>
                            <a href='https://github.com/sudarshan2001/sudarshan2001'><FaGithub style={{ fontSize: '30px', color: 'black' }} /></a>

                        </div>

                    </div>


                </div>



                <div className='AboutContainer' id='About'>
                    <div>
                        <h1>About Me</h1>
                    </div>
                    <div className='ExandEduContainer'>
                        <Card className='ExperienceCard'>
                            <HiMiniCheckBadge />
                            <h2>Experience</h2>
                            <span style={{ display: 'flex', flexDirection: 'column' }}>
                                <p>Machine Learning Intern</p>
                                <p1>Shiash Info Solutions Private Limited, Chennai, TamilNadu.</p1>
                                <p2>[5th August 2024] – Present</p2>
                            </span>

                        </Card>
                        <Card className='EducationCard'>

                            <FaUserGraduate />

                            <h2>Education</h2>

                            <p>B.E in Mechanical Engineering</p>

                        </Card>
                    </div>

                    <div className='Abouttext'>
                        A versatile and technically skilled individual with proven abilities in problem-solving, project management,
                        and analytical thinking. Transitioning to the IT sector, I am excited to bring my strong communication skills,
                        technical aptitude, and dedication to continuous learning to a role where I can contribute to cutting-edge
                        projects. My goal is to leverage my ability to analyze data, develop solutions, and drive innovation in a rapidly
                        evolving technological landscape.
                    </div>


                </div>



                <div className='ExperinceContainer' id='Experience'>
                    <div className='ExpTitle'>
                        <h1>Experience</h1>
                    </div>
                    <Card className='ExperinceCard'>
                        <Card.Title className='excardtitle'>
                            <p>Machine Learning Intern</p>
                            <p1> Shiash Info Solutions Private Limited, Chennai, TamilNadu.</p1>
                        </Card.Title>
                        <hr />
                        <Card.Body>

                            <ul className="roman-list">
                                <li className='one'>Collaborate with a cross-functional team to develop machine learning models for predictive analysis.</li>
                                <li>Conduct data preprocessing, feature engineering, and model validation.</li>
                                <li>Utilize Python and TensorFlow to implement machine learning algorithms.</li>
                                <li>Contribute to the deployment of models in a production environment.</li>
                            </ul>

                        </Card.Body>

                    </Card>

                </div>

                <div className='ProjectContainer' id='Projects'>
                    <div className='Protitle'>
                        <h1>Projects</h1>
                    </div>
                    <div className='ProjectCardContainer'>
                        <Card>

                            <Card.Body>

                                <img className='projectimage1' src={projectimage1} alt='projectimg'></img>

                            </Card.Body>
                            <Card.Footer className='projectcardFooter'>
                                <p> YouTube Data Harvesting and Warehousing using SQL and Streamlit</p>
                                <p1>Data Science Project</p1>
                            </Card.Footer>
                        </Card>
                    </div>
                </div>


                <div className='ContactContainer' id='contact'>
                    <div className='conttitle'>
                        <h2>Contact</h2>
                    </div>
                    <Card className='ContactCard'>
                        <div>

                            <h5> <IoMdMail /> &nbsp;Sudarshankumaran2001@gmail.com</h5>

                        </div>
                        <div>
                            <h5><FaLinkedin />&nbsp;linkedin</h5>
                        </div>

                    </Card>

                </div>


                <footer className='Footer'>
                    <p>CopyRight &copy; 2024 @Rohit. All Rights Reserved</p>
                    <p>For More Info &nbsp; <span>Contact: chrohithkumar2001@gmail.com</span></p>
                </footer>


            </div>

        </div>
    )
}
