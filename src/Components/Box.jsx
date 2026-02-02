function Box (props) {
    return (
        <div className="box">
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )
}

export default Box