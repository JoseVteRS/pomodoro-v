

import React, { useState } from 'react'
import { useSettingsContext } from '../../hooks/useSettingsContext'
import { useTimer } from '../../hooks/useTimer'
import { Button } from '../Button'
import { ButtonFullScreen } from '../ButtonFullScreen'
import { Drawer } from '../Drawer'
import { PauseIcon, PlayIcon } from '../Icons'

export const MainPage = () => {

    const { minutes, seconds, text, percent, pause, handlePause, handlePlay, setMinutes } = useTimer()
    const [isOpen, setIsOpen] = useState(false)
 

    const { settings: { sessionTime, breakTime, setBreakTime, setSessionTime } } = useSettingsContext()

    const toggleDrawer = () => {
        setIsOpen(isOpen => !isOpen)
    }

    const handleChangeSession = (e) => {
        setSessionTime(e.target.value)
        setMinutes(e.target.value)
    }

    const handleChangeBreak = (e) => {
        setBreakTime(e.target.value)
    }



    return (
        <div className='grid place-content-center'>

            <Drawer isOpen={isOpen} setIsOpen={toggleDrawer} >
                <div className="flex items-center justify-center gap-5 w-full">
                    <label htmlFor="sessionTime" className="w-full">
                        <span className="block font-semibold">Session Time</span>
                        <input name="sessionTime" id="sessionTime" type="number" max={60} min={1} className="w-full p-3 rounded text-gray-dark text-2xl"
                            defaultValue={sessionTime}
                            onChange={handleChangeSession}
                        />
                    </label>
                    <label htmlFor="breakTime" className="w-full">
                        <span className="block font-semibold">Break Time</span>
                        <input name="breakTime" id="breakTime" type="number" max={60} min={1} className="w-full p-3 rounded text-gray-dark text-2xl"
                            defaultValue={breakTime}
                            onChange={handleChangeBreak}
                        />
                    </label>
                </div>
            </Drawer>


            <div className="w-screen h-calc grid place-content-center">

                <div className='bg-secondary rounded-full relative shadow-md h-2' >
                    <div style={{ height: 'inherit', width: `${percent}%` }} className='bg-primary rounded-full transition-all duration-1000'>

                    </div>
                </div>

                <div className="">
                    <div className="text-[10rem] font-bold text-primary" >
                        {minutes.toString().padStart(2, '0')} : {seconds.toString().padStart(2, '0')}
                    </div>
                    <p className="w-full text-center inline-block text-xl uppercase tracking-widest text-gray-light mt-3" >{text}</p>
                    <div className="mt-12 flex items-center justify-center">
                        {
                            pause ? (
                                <Button onClick={handlePlay}>
                                    <PlayIcon className="fill-primary w-12 h-12" />
                                </Button>
                            )
                                : (
                                    <Button onClick={handlePause}>
                                        <PauseIcon className="fill-primary w-12 h-12" />
                                    </Button>
                                )
                        }
                    </div>

                    <ButtonFullScreen />

                </div>

            </div>

        </div>
    )
}
