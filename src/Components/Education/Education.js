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
            description: "With +700 hours of practice based programming and real proyects. Learnt the following technologies: JS, React, React Native, Node.js, SQL, Typescript, Redux, Express, ES6, CSS, SASS, AJAX, Data Structure and Algorithms.",
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
            description: "Mechanical Engineering mixed with Industrial Engineering and a specialization on the Automotive Industry.",
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
        <div className="two_columns innerContainer"> 
            <div className="two_columns-body">
                <div className="two_columns-body-header">
                    <h2>Education</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                </div>
                <div className="two_columns-body-content">
                    {education.map((singleEducation, i) => {
                        return <SingleEducation key={i} number={i} singleEducation={singleEducation} />
                    })}
                </div>
            </div>
            <div className="two_columns-image_right">
                <img src={require('../../images/bookshelves-education.jpg')} alt="Bookshelves"/>
            </div>
        </div>
    )
}

export default Education