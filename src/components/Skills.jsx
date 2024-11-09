import React from 'react';
import profile from '../images/profile.png';
import '../css/skills.css';

const Skills = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="skills row mx-auto">
                        {/* Left Side */}
                        <div className="s-left col-md-6" data-aos="fade-up">
                            <img src={profile} alt="Profile" />
                        </div>

                        {/* Right Side */}
                        <div className="s-right col-md-6" data-aos="fade-left">
                            <h3>Skills</h3>
                            <span>I'm a versatile developer with expertise across a range of technologies. My skills span front-end and back-end development, cloud computing, DevOps practices, and design tools. I specialize in creating scalable applications and efficient workflows using modern tools and frameworks</span>
                            <div className="row mt-4">
                                <div className="col-md-6">
                                    <label className="mb-3 fw-bold">Figma</label>
                                    <div className="progress">
                                        <div className="progress-bar" style={{ width: '75%' }} role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="75">75%</div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label className="mb-3 fw-bold">React</label>
                                    <div className="progress">
                                        <div className="progress-bar" style={{ width: '70%' }} role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="70">70%</div>
                                    </div>
                                </div>
                                <div className="col-md-6 mt-3">
                                    <label className="mb-3 fw-bold">Node.js</label>
                                    <div className="progress">
                                        <div className="progress-bar" style={{ width: '60%' }} role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="60">60%</div>
                                    </div>
                                </div>
                                <div className="col-md-6 mt-3">
                                    <label className="mb-3 fw-bold">
                                        Cloud Tech <span className="subscript">(K8s, Docker, AWS)</span>
                                    </label>
                                    <div className="progress">
                                        <div className="progress-bar" style={{ width: '80%' }} role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="80">80%</div>
                                    </div>
                                </div>
                                <div className="col-md-6 mt-3">
                                    <label className="mb-3 fw-bold">Python</label>
                                    <div className="progress">
                                        <div className="progress-bar" style={{ width: '80%' }} role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="80">80%</div>
                                    </div>
                                </div>
                                <div className="col-md-6 mt-3">
                                    <label className="mb-3 fw-bold">CI/CD Tools</label>
                                    <div className="progress">
                                        <div className="progress-bar" style={{ width: '60%' }} role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="60">60%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills;