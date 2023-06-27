
import { useState } from "react";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { Button } from "./components/Button";
import { Drawer } from "./components/Drawer";
import { CogIcon, PauseIcon, PlayIcon } from "./components/Icons";
import { PROGRESSBAR_COLORS } from "./config/ciurcular-progressbar-color";
import { useSettingsContext } from "./hooks/useSettingsContext";
import { useTimer } from "./hooks/useTimer";





function App() {
  const { minutes, seconds, text, percent, pause, handlePause, handlePlay, setMinutes } = useTimer()
  const [isOpen, setIsOpen] = useState(false)

  const { settings } = useSettingsContext()

  const toggleDrawer = () => {
    setIsOpen(isOpen => !isOpen)
  }

  const handleChangeSession = (e) => {
    settings.setSession(e.target.value)
    setMinutes(e.target.value)
  }

  const handleChangeBreak = (e) => {
    settings.setBreakTime(e.target.value)
  }

  return (
    <>
      <Drawer isOpen={isOpen} setIsOpen={toggleDrawer} >
        <div className="flex items-center justify-center gap-5 w-full">
          <label htmlFor="sessionTime" className="w-full">
            <span className="block font-semibold">Session Time</span>
            <input name="sessionTime" id="sessionTime" type="number" max={60} min={1} className="w-full p-3 rounded text-gray-dark text-2xl" defaultValue={settings.session}
              onChange={handleChangeSession}
            />
          </label>
          <label htmlFor="breakTime" className="w-full">
            <span className="block font-semibold">Break Time</span>
            <input name="breakTime" id="breakTime" type="number" max={60} min={1} className="w-full p-3 rounded text-gray-dark text-2xl" defaultValue={settings.breakTime}
              onChange={handleChangeBreak}
            />
          </label>
        </div>
      </Drawer>

      <main className="relative min-h-screen" >
        <section className=" text-white bg-gray-dark h-screen">

          <nav className="sticky top-0 w-full p-3 flex items-center justify-end  z-10"  >
            <ul>
              <li> <Button onClick={toggleDrawer} className="text-gray-light" ><CogIcon /></Button> </li>
            </ul>
          </nav>

          <div className="w-5/12 mx-auto" >


            <div className="" >
              <CircularProgressbarWithChildren
                value={percent}
                className={`shadow-xl ${text === 'session' ? 'shadow-gray-dark/10' : 'shadow-white/20'} p-4 rounded-full font-bold`}
                styles={buildStyles({
                  pathColor: text === 'session' ? PROGRESSBAR_COLORS.primary : 'white',
                  textColor: text === 'session' ? PROGRESSBAR_COLORS.primary : 'white',
                  trailColor: PROGRESSBAR_COLORS.secondary,
                  pathTransitionDuration: 1,
                  trailTransitionDuration: 1,
                  rotation: 0.25,
                })} >

                <div className="flex flex-col items-center justify-center">
                  <time className="text-[10rem] font-bold text-primary " >
                    {minutes.toString().padStart(2, '0')} : {seconds.toString().padStart(2, '0')}
                  </time>
                  <span className="text-sm uppercase block tracking-[10px] text-gray-light mt-3" >{text}</span>
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
                </div>
              </CircularProgressbarWithChildren>




              {/* <div className="mt-20">
                <SpotifyButton />
              </div> */}
            </div>



          </div>
        </section>

        {/* <VideoBackground /> */}
      </main>

    </>
  )
}

export default App
