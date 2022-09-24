import Experience from './Experience/Experience'


const Experiences = () => {
    
    const experiences = [
        {
            title: "Co-Founder & CTO",
            company: {
                name: "All Bike",
                img: ""
            },
            start_date: "01-11-2021",
            end_date: "",
            content: [
                "Co-founder of All Bike, an e-commerce business for bike parts and accessories.",
                "Created company website. Responsible for maintaining all aspects from design updates to pricing, weekly.",
                "Responsible for the implementation and continuous improvement of All Bike commercial strategy.",
                "Complete regular financial analysis of company performance.",
                "Create all content for social media platforms. Design 3-4 weekly promotional ads to maintaining social media presence.",
                "Optimization of Google & Facebook Ads."
            ]
        },
        {
            title: "Freelance Web Developer",
            company: {
                name: "",
                img: ""
            },
            start_date: "01-10-2021",
            end_date: "",
            content: [
                "Work independently to obtain international clients for web design.",
                "Designed and re-launched 3 websites."
            ]
        },
        {
            title: "Lead Programmer",
            company: {
                name: "Proyecto Color SRL",
                img: ""
            },
            start_date: "15-04-2021",
            end_date: "30-06-2022",
            content: [
                "Created 6 websites for new branches of the business.",
                "Updated and maintained core business website and associated content.",
                "Proposed opportunities for additional revenue streams, receiving approval.",
                "Maximized the efficiency of the software & server budget, reducing annual spend by 90%.",
                "Troubleshoot technical issues with software providers."
            ]
        }
    ]
    
    return (
        <div className="experienceContainer">
            <div className="experienceFirstColumn">
                <img src='/images/greyComputer-experience.jpg' alt="Placeholder"/>
            </div>
            <div className="experienceSecondColumn">
                <div className="experienceHeader">
                    <h2>Experience</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                </div>
                <div className="experienceContent">
                {experiences.map((experience, i) => {
                    return <Experience key={i} number={i} experience={experience} />
                })}
                </div>
            </div>
        </div>
    )
}

export default Experiences