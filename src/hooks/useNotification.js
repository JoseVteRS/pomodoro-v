import { useEffect } from "react";
import { MESSAGES } from "../config/texts";

export const useNotification = () => {

    useEffect(() => {
        if (!("Notification" in window)) {

            alert("This browser does not support desktop notification");
        } else if (Notification.permission === "granted") {


            if (seconds === 0) {
                const notification = new Notification(MESSAGES.notification.break);
            }

        } else if (Notification.permission !== "denied") {

            Notification.requestPermission().then((permission) => {

                if (permission === "granted") {
                    if (seconds === 0) {
                        const notification = new Notification(MESSAGES.notification.break);
                    }

                }
            });
        }
    }, [seconds])


}