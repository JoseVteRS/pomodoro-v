
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { Button } from "./components/Button";
import { CogIcon, PauseIcon } from "./components/Icons";
import { PROGRESSBAR_COLORS } from "./config/ciurcular-progressbar-color";
import { useTimer } from "./hooks/useTimer";


const sessionTime = 1
const breakTime = 1

function App() {
  const { minutes, seconds, text, percent } = useTimer()

  return (
    <>
      <main className="min-h-screen bg-gray-dark" >
        <nav className="w-full p-3 flex items-center justify-end" >
          <ul>
            <li> <Button className="text-gray-light" ><CogIcon /></Button> </li>
          </ul>
        </nav>
        <div className=" w-11/12 mx-auto py-16 h-full flex items-center justify-center" >
          <div className="w-10/12 mx-auto h-full flex flex-col items-center justify-center" >
            <CircularProgressbarWithChildren
              value={percent}
              className={`shadow-xl ${text === 'session' ? 'shadow-gray-dark/10' : 'shadow-white/20'} p-4 rounded-full font-bold`}
              styles={buildStyles({
                pathColor: text === 'session' ? PROGRESSBAR_COLORS.primary : 'white',
                textColor: text === 'session' ? PROGRESSBAR_COLORS.primary : 'white',
                trailColor: PROGRESSBAR_COLORS.secondary,
                pathTransitionDuration: 1,
                trailTransitionDuration: 1,
              })} >

              <div className="flex flex-col items-center justify-center">
                <time className="text-6xl font-bold text-primary " >
                  {minutes.toString().padStart(2, '0')} : {seconds.toString().padStart(2, '0')}
                </time>
                <span className="uppercase block tracking-[10px] text-gray-light mt-3" >{text}</span>

              </div>
            </CircularProgressbarWithChildren>


            <div className="mt-12">
              {/* <Button>
                <PlayIcon className="fill-primary w-12 h-12" />
              </Button> */}
              <Button>
                <PauseIcon className="fill-primary w-12 h-12" />
              </Button>

            </div>

            {/* <div className="mt-20">
              <SpotifyButton />
            </div> */}


          </div>



        </div>


      </main>
    </>
  )
}

export default App
