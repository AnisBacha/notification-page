const SingleNotification = ({notification}) => {
    return (
        <section className={`notification read-${notification.read}`}>
            <img src={require(`${notification.avatar}`)} alt="avatar" width={'90'} height={'90'}/>
            <div className="notification__body">
                <div className="notification__body-info">
                    <span className="notification__user">
                        {notification.user}
                    </span> &nbsp;
                    <span className="notification__message">
                        {notification.message} &nbsp;
                    </span>
                    {notification.action === 'private-message' && (
                        <p className="notification__time">{notification.time}</p>
                    )}
                    <span className={`notification__content notification__${notification.action}`}>
                        {notification.content}
                    </span>
                    {notification.read === false && ( <div className="red-dot"></div> )}
                    {notification.action !== 'private-message' && (
                        <p className="notification__time">{notification.time}</p>
                    )}
                </div>
                {notification.action === 'comment' && (
                    <img className='comment-picture' src={require(`${notification.picture}`)} alt='comment picture' />
                )}
                
            </div>
            
            
        </section>
    )
}
    
export default SingleNotification
