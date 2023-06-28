import { useState } from "react"



export const useFullScreen = () => {
    const [fullScreen, setFullScreen] = useState(false)

    const handleFullScreen = () => {
        setFullScreen(!fullScreen)
    }

    return { fullScreen, handleFullScreen }
}