import React, { useState } from 'react'
import { FullScreenIcon } from './Icons'
import { FullScreenExitIcon } from './Icons/full-screen-exit-icon'

export const ButtonFullScreen = () => {
    const [isFullScreen, setIsFullScreen] = useState(false)
    const handleFullScreen = () => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
            setIsFullScreen(false)
        } else {
            document.documentElement.requestFullscreen();
            setIsFullScreen(true)
        }
    }

    return (
        <button onClick={handleFullScreen} >
            {
                isFullScreen ? (
                    <FullScreenExitIcon className="fill-primary w-12 h-12" />

                ) : (
                    <FullScreenIcon className="fill-primary w-12 h-12" />
                )
            }
        </button>
    )
}
