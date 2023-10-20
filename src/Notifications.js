import { useEffect } from "react";
import SingleNotification from "./SingleNotification";

const Notifications = ({notifications, setNotifications}) => {
    useEffect(() => {
        setNotifications([
            {
             user: 'Mark Webber',
             avatar: './images/avatar-mark-webber.webp',
             action: 'react',
             message: 'reacted to your recent post',
             content: 'My first tourment today!',
             read: false,
             time: '1m ago',
             id: 7
            },
            {
             user: 'Angela Gray',
             avatar: './images/avatar-angela-gray.webp',
             action: 'follow',
             message: 'followed you',
             content: '',
             read: false,
             time: '5m ago',
             id: 6
            },
            {
             user: 'Jacob Thompson',
             avatar: './images/avatar-jacob-thompson.webp',
             action: 'join',
             message: 'has joined your group',
             content: 'Chess Club',
             read: false,
             time: '1 day ago',
             id: 5
            },
            {
             user: 'Rizky Hasanuddin',
             avatar: './images/avatar-rizky-hasanuddin.webp',
             action: 'private-message',
             message: 'sent you a private message',
             content: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
             read: true,
             time: '5 days ago',
             id: 4
            },
            {
             user: 'Kimberly Smith',
             avatar: './images/avatar-kimberly-smith.webp',
             action: 'comment',
             message: 'commented on your picture',
             content: '',
             picture: './images/image-chess.webp',
             read: true,
             time: '1 week ago',
             id: 3
            },
            {
             user: 'Nathan Peterson',
             avatar: './images/avatar-nathan-peterson.webp',
             action: 'react',
             message: 'reacted to your recent post',
             content: '5 end-game strategies to increase your win rate',
             read: true,
             time: '2 weeks ago',
             id: 2
            },
            {
             user: 'Anna Kim',
             avatar: './images/avatar-anna-kim.webp',
             action: 'left',
             message: 'left the group',
             content: 'Chess Club',
             read: true,
             time: '2 weeks ago',
             id: 1
            },
         ]);
    }, [])
    return (
        <main>
            {notifications.map(notification => (
                <SingleNotification notification={notification} key={notification.id}/>
            ))}
        </main>
    )
}

export default Notifications
