
const SingleEducation = (props) => {

    return (
        <div className="item-container">
            <div className="item-number"><p>0{props.number + 1}</p></div>
            <div className="item">
                <h4 className="item-title">{props.singleEducation.title}</h4>
                <p className="item-institution">at <a href={props.singleEducation.website} target="_blank" rel="noreferrer" >{props.singleEducation.institution}</a></p>
                <p></p>
                <div className="item-data">
                    <p className="item-data_date">{props.singleEducation.start_date} - {props.singleEducation.end_date}</p>
                    <p className="item-data_duration">{props.singleEducation.duration ? ` (${props.singleEducation.duration})` : "" }</p>
                </div>
                <p className="item-description">
                    {props.singleEducation.description}
                </p>
            </div>
        </div>
    )
}

export default SingleEducation