const Home = () => {
    
    return (
        <div>

            <div className="mainContainer">
                <div className="mainFirstColumn">
                    <div className="mainContent">
                        <h1 className="title">Lautaro Ayosa</h1>
                        <img alt="underline placeholder"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                        <a className="buttonPrimary" href='/#'>Download Resume</a>
                    </div>
                    <div className="qualificationsContainer">
                        <div className="qualification">
                            <h1>+2</h1>
                            <p>Years of<br/> Experience</p>
                        </div>
                        <div className="qualification">
                            <h1>1</h1>
                            <p>Company<br/> Successfully founded</p>
                        </div>
                    </div>
                </div>
                <div className="mainSecondColumn">
                    <img src={require("../../static/images/me.png")} alt="Me" />
                </div>
            </div>
            <div className="bulletPointsContainer">
                <div className="bulletPointsHeader">
                    <h2>I specialize in</h2>
                    <img alt="underline placeholder"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                </div>
                <div className="bulletPointsContent">
                    <div className="bulletPoint">
                        <img alt="Icon placeholder"/>
                        <h4>Mobile Development</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>
                    <div className="bulletPoint">
                        <img alt="Icon placeholder"/>
                        <h4>Mobile Development</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>
                    <div className="bulletPoint">
                        <img alt="Icon placeholder"/>
                        <h4>Mobile Development</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>
                </div>
            </div>
            <div className="experienceContainer">
                <div className="experienceFirstColumn">
                    <img alt="Placeholder"/>
                </div>
                <div className="experienceSecondColumn">
                    <div className="experienceHeader">
                        <h2>Experience</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                    </div>
                    <div className="experienceContent">
                        <div className="experience">
                            <div className="experienceNumber"><p>01</p></div>
                            <div className="experienceContentInner">
                                <h4>Co-Founder & CTO</h4>
                                <div>
                                    <p>11/2021 - Present</p>
                                    <p>Bicicleteria All Bike</p>
                                </div>
                                <p>Created, updated and maintained the core business website and associated content. Responsible for designing and implementing the commercial strategy and of doing the monthly financial analysis of the company, and more...</p>
                            </div>
                            
                        </div>
                        <div className="experience">
                            <div className="experienceNumber"><p>01</p></div>
                            <div className="experienceContentInner">
                                <h4>Co-Founder & CTO</h4>
                                <div>
                                    <p>11/2021 - Present</p>
                                    <p>Bicicleteria All Bike</p>
                                </div>
                                <p>Created, updated and maintained the core business website and associated content. Responsible for designing and implementing the commercial strategy and of doing the monthly financial analysis of the company, and more...</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home