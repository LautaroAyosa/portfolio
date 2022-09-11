
const Contact = () => {

    const contactInfo = [
        {
            title: "LinkedIn",
            url: "https://linkedin.com/in/lautaroayosa",
            icon: ""
        },
        {
            title: "Github",
            url: "https://github.com/lautaroayosa",
            icon: ""
        },
        {
            title: "Email",
            url: "mailto:lautaroayosa@gmail.com",
            icon: ""
        },
        {
            title: "Phone",
            url: "https://wa.me/5491164579588",
            icon: ""
        }
    ]


    return (
        <ul>
            {contactInfo.map((contact, i) => 
                <li key={i}>
                    <a href={contact.url} target='_blank' rel='noreferrer'>
                        <i className={contact.icon}></i>
                    </a>
                </li>
            )}
        </ul>
    )
}

export default Contact