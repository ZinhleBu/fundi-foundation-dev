import React from "react";


function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}
                ><i className="fa fa-times" aria-hidden="true"></i></button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup;

