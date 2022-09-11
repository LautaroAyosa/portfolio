
const Experience = (props) => {

    return (
        <div>
            <h4>{props.experience.title}</h4>
            <div>
                <p>{props.experience.company.img}</p>
                <p>{props.experience.company.name}</p>
            </div>
            <div>
                <p>{props.experience.start_date} - </p>
                <p>{props.experience.end_date ? props.experience.end_date : 'Present'}</p>
            </div>
            <div>
                <ul>
                    {props.experience.content.map((item, i) => {
                        return <li key={i}>{item}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Experience