import { NavLink } from "react-router-dom"

const Footer = () => {


    return (
        <div className="footerContainer">
            <div className="footerMapsContainer">
                <iframe 
                title="Google Maps" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.44366957959!2d-58.503338038068236!3d-34.61566245875921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1663964201454!5m2!1ses-419!2sar" 
                className="footerMaps" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"/>
                <div>
                </div>
            </div>
            <div className="footerContent">
                <div className="footerFormContainer">
                    <div className="footerInformation">
                        <div>
                            <h2>Get in Touch</h2>
                            <a href="mailto:lautaroayosa@gmail.com">lautaroayosa@gmail.com</a>
                            <a href="https://wa.me/5491164579588">+54 9 11 6457-9588</a>
                        </div>
                        <div>
                            <h4>Quick Access</h4>
                            <NavLink to='/about'>About</NavLink>
                            <NavLink to='/experience'>Experience</NavLink>
                            <NavLink to='/education'>Education</NavLink>
                        </div>
                    </div>
                    <form>
                        <h2>Send a Message</h2>
                        <input name="name" placeholder="Name" type='text' />
                        <input name="company" placeholder="Company" type='text' />
                        <input className="fullRow" name="email" placeholder="Email" type='text' />
                        <textarea placeholder="Message"/>
                        <button type='submit' className="buttonPrimary">Send Message</button>
                    </form>
                </div>
                <div className="footerFindMeContainer">
                    <h4>FIND ME</h4>
                    <div className="footerFindMeIcons">
                        <a href="https://github.com/lautaroayosa" target='_blank' rel="noreferrer"><i class="fa-brands fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/lautaroayosa" target='_blank' rel="noreferrer"><i class="fa-brands fa-linkedin"></i></a>
                        <a href="https://wa.me/5491164579588" target='_blank' rel="noreferrer"><i class="fa-brands fa-whatsapp"></i></a>
                        <a href="mailto:lautaroayosa@gmail.com" target='_blank' rel="noreferrer"><i class="fa-solid fa-at"></i></a>
                    </div>
                </div>
            </div>
            <div className="footerCopyright">
                <p>Copyright ©2022 All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer