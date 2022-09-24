
const Experience = (props) => {

    return (
        <div>
            <div className="experience">
                <div className="experienceNumber"><p>0{props.number + 1}</p></div>
                <div className="experienceContentInner">
                    <h4>{props.experience.title}</h4>
                    <div>
                        <p>{props.experience.start_date} - {props.experience.end_date ? props.experience.end_date : 'Present'}</p>
                        <p>{props.experience.company.name}</p>
                    </div>
                    <ul>
                        {props.experience.content.map((item, i) => {
                            return <li key={i}>{item}</li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Experience