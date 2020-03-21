import {addZeroPrefixBits, getBinary} from "./binaryHelper";

export const getTime = fn => {
    const time = new Date();
    const hours = fn(time.getHours());
    const minutes = fn(time.getMinutes());
    const seconds = fn(time.getSeconds());
    
    return [hours, minutes, seconds];
};

export const addZeroPrefix = time => ('0' + time).slice(-2);

export const timeToBinary = (time, digitRows) => {
    return digitRows.reduce((acc, curr, index) => {
        return acc += addZeroPrefixBits(getBinary(time[index]), curr)
    }, "").split("");
};