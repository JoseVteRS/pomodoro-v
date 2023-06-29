import { Button } from '../components/Button';
import { PauseIcon, PlayIcon } from '../components/Icons';

export const Timer = ({
    minutes,
    seconds,
    text,
    pause,
    handlePause,
    handlePlay
}) => {

    return (
        <>
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
        </>
    )
}
