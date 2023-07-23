import React from "react";
import "./Popup.css";

interface PopupProps { title: string, children: any, buttonText: string, closed: boolean, closePopup: () => Promise<void> };

export const Popup = ({ title, children, buttonText, closed, closePopup }: PopupProps) => {
    if (closed) return <></>

    return (
        <div className="popup-container">
            <div className="popup-body">
                <h1>{title}</h1>
                {children}
                <button onClick={closePopup}>{buttonText}</button>
            </div>
        </div>
    );
};