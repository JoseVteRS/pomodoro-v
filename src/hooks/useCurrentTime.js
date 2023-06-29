import { useEffect, useMemo, useState } from "react";


export const useCurrentTime = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalID);
        };
    }, []);

    const timeStr = useMemo(() => {
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        return [hours, minutes, seconds].map(item => item.toString().padStart(2, '0')).join(':');
    }, [date]);

    return timeStr;

}