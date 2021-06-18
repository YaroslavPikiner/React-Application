import React, { SetStateAction, useState } from 'react';
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { ITimeCurr, ITimer } from '../../type';

const Timer: React.FC = () => {
    const [time, setTime] = useState<ITimer>({
        time: { h: 0, m: 0, s: 0 },
        seconds: 0,
        laps: []
    })
    const [timer, setTimer] = useState<ITimeCurr>(0)

    const secondsToTime = (secs: number) => {
        let hours = Math.floor(secs / (60 * 60));

        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        let obj = {
            h: hours,
            m: minutes,
            s: seconds,
        };
        return obj;
    }

    const incTimer = () => {
        if (time.seconds >= 0) {
            setTime((prev: ITimer) => {
                return {
                    ...prev,
                    seconds: prev.seconds + 60
                }
            })
        } else {
            console.log('asdasd')
        }
    }

    const decTimer = () => {
        if (time.seconds > 61 || timer === 0)
            setTime((prev: ITimer) => {
                return {
                    ...prev,
                    seconds: prev.seconds - 60,
                    time: secondsToTime(prev.seconds - 60),
                }
            });
    }

    const startTimer = () => {
        console.log('123')
       
    }
    const stopTimer = () => {
        console.log('123')
    }
    const lapTimer = () => {
        console.log('123')
    }
    const resetTimer = () => {
        console.log('123')
    }



    return (
        <>
            <h1>Redux Stop watch</h1>
            <Typography> {time}</Typography>

            <Button onClick={incTimer}>+</Button>
            <Button onClick={startTimer}>Start</Button>
            <Button onClick={stopTimer}>Stop</Button>
            <Button onClick={lapTimer}>Lap</Button>
            <Button onClick={resetTimer}>Reset</Button>
            <Button onClick={decTimer}>-</Button>
        </>
    )
}

export default Timer;