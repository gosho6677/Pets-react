const ErrorBox = ({ error, setError }) => {

    const notificationHandler = () => {
        setError('');
    };

    return (
        <div onClick={notificationHandler} id="notifications">
            <div id="errorBox" className="notification">
                <span>{error}</span>
            </div>
        </div>
    );
};

export default ErrorBox;