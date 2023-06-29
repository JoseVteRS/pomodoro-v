import { useContext } from "react";
import { TimerContext } from "../context/TimerContext";

export const useTimeContext = () => {
    return useContext(TimerContext);
}