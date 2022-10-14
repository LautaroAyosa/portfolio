
const Experience = (props) => {

    return (
        <div className="item-container">
            <div className="item-number"><p>0{props.number + 1}</p></div>
            <div className="item">
                <h4 className="item-title">{props.experience.title}</h4>
                <div className="item-data">
                    <p className="item-data_date">{props.experience.start_date} - {props.experience.end_date ? props.experience.end_date : 'Present'}</p>
                    <p className="item-data_company">{props.experience.company.name}</p>
                </div>
                <p className="item-description">
                    {props.experience.content}
                </p>
            </div>
        </div>
    )
}

export default Experience