
const SingleEducation = (props) => {

    return (
        <div>
            <div>
                <h3>{props.singleEducation.title}</h3>
                <a href={props.singleEducation.website} target="_blank" rel="noreferrer">{props.singleEducation.institution}</a>
                <p></p>
                <p>
                    {props.singleEducation.start_date} - {props.singleEducation.end_date}
                    {props.singleEducation.duration ? ` (${props.singleEducation.duration})` : "" }
                </p>
            </div>
            <div>
                <p>
                    {props.singleEducation.description}
                </p>
            </div>
        </div>
    )
}

export default SingleEducation