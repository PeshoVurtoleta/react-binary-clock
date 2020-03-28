export const setTimeAndBinary = ([hours, minutes, seconds], digitPerRows)  => timeToBinary => {
    return {
        time: `${hours}:${minutes}:${seconds}`,
        binary: timeToBinary(hours + minutes + seconds, digitPerRows)
    }
};