import Education from "../../Components/Education/Education"
import Experiences from "../../Components/Experiences/Experiences"

const Home = () => {
    
    return (
        <div>

            <div className="mainContainer innerContainer">
                <div className="mainFirstColumn">
                    <div className="mainContent">
                        <h1 className="title">Lautaro Ayosa</h1>
                        <img src={require('../../images/underline.png')} alt="underline"/>
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
                    <img src={require('../../images/me.png')} alt="Me" />
                </div>
            </div>
            <div className="bulletPointsContainer innerContainer">
                <div className="bulletPointsHeader">
                    <h2>I specialize in</h2>
                    <img src={require('../../images/underline.png')} alt="underline"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                </div>
                <div className="bulletPointsContent">
                    <div className="bulletPoint">
                        <div><p>2</p></div>
                        <img src={require('../../images/bulletPoint.png')} alt="Icon placeholder"/>
                        <h4>Mobile Development</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>
                    <div className="bulletPoint">
                        <div><p>1</p></div>
                        <img src={require('../../images/bulletPoint.png')} alt="Icon placeholder"/>
                        <h4>Mobile Development</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>
                    <div className="bulletPoint">
                        <div><p>3</p></div>
                        <img src={require('../../images/bulletPoint.png')} alt="Icon placeholder"/>
                        <h4>Mobile Development</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>
                </div>
            </div>
            
            <Experiences/>
            <Education />
        </div>
    )
}

export default Home