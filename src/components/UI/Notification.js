import "./notification.css";

const Notification = (props) => {
    return (
        <div className={`notification ${props.data.status}`}>
            <p>{props.data.msg}</p>
            <button>Okay</button>
        </div>
    )
}

export default Notification;