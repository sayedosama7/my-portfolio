import React from 'react';

const Notification = () => {

    function createCustomAlert(txt) {
        var alertContainer = document.createElement("div");
        alertContainer.id = "alertCont";
        alertContainer.className = "alertBox";
        
        var btnClose = document.createElement("span");
        btnClose.className = "alertClose";
        btnClose.innerHTML = '<i class="fas fa-times"></i>';
        btnClose.onclick = function () {
            document.body.removeChild(document.getElementById("alertCont"));
        }

        alertContainer.appendChild(btnClose);

        var notificationSign = document.createElement("span");
        notificationSign.className = "notification-sign";
        notificationSign.innerHTML = '<i class="far fa-bell"></i>';

        alertContainer.appendChild(notificationSign);

        var alertTitle = document.createElement("h1");
        alertTitle.textContent = "sayed osama";

        alertContainer.appendChild(alertTitle);

        var alertbody = document.createElement("p");
        alertbody.textContent = txt;

        alertContainer.appendChild(alertbody);

        document.body.appendChild(alertContainer);

        var autoAction = setTimeout(function () {
            // console.log("Element to be removed:", document.getElementById("alertCont"));
            document.body.removeChild(document.getElementById("alertCont"));
        }, 5000);

        alertContainer.onmouseover = function () {
            clearTimeout(autoAction);
        };
    }

    window.alert = function (txt) {
        createCustomAlert(txt);
    }

    alert("welcome to my portfolio");

    return (
        <div>
            <div className="container-fluid">
                {/* Content Goes Here */}
            </div>
        </div>
    )
}

export default Notification;
