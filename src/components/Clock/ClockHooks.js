import React, {useEffect, useState} from "react";
import {addZeroPrefix, getTime, timeToBinary} from "../../helpers/timeHelper";
import Square from "../Square/Square";
import squares from "../../mocks/squares";
import Time from "../Time/Time";

export default function Clock() {
    const delay = 1000;
    const digitPerRows = [2, 4, 3, 4, 3, 4];

    const [time, setTime] = useState();
    const [binary, setBinary] = useState([]);

    useEffect(() => {
        const timer = tick();
        return () => clearTimeout(timer);
    }, [time]);

    const tick = () => {
        return setTimeout(() => {
            const [hours, minutes, seconds] = getTime(addZeroPrefix);

            setTime(`${hours}:${minutes}:${seconds}`);
            setBinary(timeToBinary(hours + minutes + seconds, digitPerRows));
        }, delay);
    };

    return (
        <div className="Clock">
            {binary.map((b, index) => (
                    <Square on={b === "1"} key={squares[index].id}
                            column={squares[index].column} row={squares[index].row}
                            number={squares[index].number}
                    />
                )
            )}
            <Time>{time}</Time>
        </div>
    );
}