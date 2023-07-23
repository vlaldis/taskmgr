import React from "react";
import "./Popup.css";

interface PopupProps { title: string, children: any, buttonText: string, closePopup: () => any };

export const Popup = ({ title, children, closePopup }: PopupProps) => {
    return (
        <div className="popup-container">
            <div className="popup-body">
                <h1>{title}</h1>
                {children}
                <button onClick={closePopup}></button>
            </div>
        </div>
    );
};