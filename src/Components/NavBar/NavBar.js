import { NavLink } from "react-router-dom"

const NavBar = () => {

    const NavItems = [
        {
            title: "About",
            url: "/about"
        },
        {
            title: "Experience",
            url: "/experience"
        },
        {
            title: "Education",
            url: "/education"
        }
    ]

    return (
        <nav>
            <div>
                <h4>
                    <NavLink 
                    className='navLink' 
                    to='/'>
                        Logo
                    </NavLink>
                </h4>
                
                <ul>
                    {NavItems.map((item, i) => {
                        return (
                            <li key={i}>
                                <NavLink 
                                to={item.url}
                                className={({ isActive }) => isActive ? 'navLink activeClassName' : 'navLink'}>
                                    {item.title}
                                </NavLink>
                            </li>
                    )})}
                </ul>
            </div>
            <div>
                <button className="buttonPrimary">Download resume</button>
                <button className="buttonSecondary">Contact</button>
            </div>
        </nav>
    )
}

export default NavBar