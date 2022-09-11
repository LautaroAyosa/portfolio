import SingleEducation from './SingleEducation/SingleEducation'

const Education = () => {
    
    const education = [
        {
            title: "Full Stack Web Developer",
            institution: "Henry",
            website: "https://soyhenry.com",
            isFinished: "Finished",
            start_date: "November 2020",
            end_date: "March 2021",
            duration: "5-6 months",
            description: "",
            certificate: ""
        },
        {
            title: "Automotive Industry Engineer",
            institution: "Universidad Tecnológica Nacional (UTN)",
            website: "https://www.frgp.utn.edu.ar/",
            isFinished: "Incomplete, looking to continue it",
            start_date: "March 2018",
            end_date: "",
            duration: "",
            description: "",
            certificate: ""
        },
        {
            title: "SSD - Business Management",
            institution: "Instituto Nuestra Señora de las Nieves",
            website: "http://www.lasnieves.edu.ar/",
            isFinished: "Finished",
            start_date: "March 2012",
            end_date: "December 2016",
            duration: "5 years",
            description: "",
            certificate: ""
        }
    ]
    
    return (
        <div>
            {education.map((singleEducation, i) => {
                return <SingleEducation key={i} singleEducation={singleEducation} />
            })}
        </div>
    )
}

export default Education