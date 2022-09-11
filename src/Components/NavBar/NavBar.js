import { NavLink } from "react-router-dom"

const NavBar = () => {

    const NavItems = [
        {
            title: "Home",
            url: "/"
        },
        {
            title: "About",
            url: "/about"
        },
        {
            title: "Education",
            url: "/Education"
        }
    ]

    return (
        <nav style={{display: "flex", backgroundColor: "grey"}}>
            <ul style={{display: "flex"}}>
                {NavItems.map((item, i) => {
                    return (
                        <li key={i}>
                            <NavLink 
                            to={item.url}
                            className={isActive => "nav-link" + (!isActive ? " unselected" : "")}>
                                {item.title}
                            </NavLink>
                        </li>
                )})}
            </ul>
        </nav>
    )
}

export default NavBar