import React from 'react';

import './Clock.css';

import Square from "../Square/Square";
import Time from "../Time/Time";

import squares from "../../mocks/squares";

import {getTime, addZeroPrefix, timeToBinary} from "../../helpers/timeHelper";
import {setTimeAndBinary} from "../../helpers/clockStateHelper";

export default class Clock extends React.Component {
    delay = 1000;
    digitPerRows = [2, 4, 3, 4, 3, 4];
    timeoutId = null;

    state = {
        time: null,
        binary: []
    };

    tick = () => {
        return setTimeout(() => {
            this.setState(() => ({
                ...setTimeAndBinary(getTime(addZeroPrefix), this.digitPerRows)(timeToBinary)
            }));
        }, this.delay);
    };

    componentDidMount() {
        this.timeoutId = this.tick();
    }

    componentDidUpdate() {
        this.timeoutId = this.tick();
    }

    componentWillUnmount() {
        clearTimeout(this.timeoutId);
    }

    render() {
        const {binary, time} = this.state;

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
}