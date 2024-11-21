import React from "react";
import "./Notifications.css";

const Notifications = () => {
    return (
        <div className="notif-card">
            <div className="notif-item">
                <p>Votre professeur a répondu à votre message</p>
                <div className="time">
                    <p>il y a 1h</p>
                </div>
            </div>
            <div className="notif-item">
                <p>Votre professeur a publié une nouvelle chapitre</p>
                <div className="time">
                    <p>il y a 2h</p>
                </div>
            </div>
            <div className="notif-item">
                <p>Un nouveau programme a été créé</p>
                <div className="time">
                    <p>il y a 3h</p>
                </div>
            </div>
        </div>
    )
}

export default Notifications;