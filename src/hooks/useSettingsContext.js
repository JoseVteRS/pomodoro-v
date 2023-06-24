import { useContext } from "react";
import { SettingsContext } from "../context/setting-context";

export const useSettingsContext = () => {
    return useContext(SettingsContext);
}