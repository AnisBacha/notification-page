import { useEffect, useState } from "react";
const Header = ({notifications, setNotifications}) => {
    const [readCount, setReadCount] = useState(0);
    const handleClick = () => {
        setNotifications(prevNotifications => 
            prevNotifications.map(notification => ({ ...notification, read: true }))
        );
        setReadCount(0)
    }
    useEffect( () => {
        notifications.map(notification => {
            if(!notification.read)  setReadCount(prev => prev + 1);
        });
    }, [notifications])
    return (
        <header className="header">
            <h1 className="header__h1">Notification <span className="header__span">{readCount}</span></h1>
            <p className="header__p" onClick={handleClick}>Mark all as read</p>
        </header>
    )
}

export default Header
