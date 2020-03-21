import {getTime, addZeroPrefix, timeToBinary} from "./timeHelper";

describe(('Add zero prefix:'), () => {
    test('Should return correct number of strings:', () => {
        const singleDigit = 5;
        const doubleD = 10;

        expect(addZeroPrefix(singleDigit)).toEqual("05");
        expect(addZeroPrefix(doubleD)).toEqual("10");
    });

    test('Should call callback correct times:', () => {
        const fn = jest.fn();
        const time = new Date();

        getTime(fn);

        expect(fn).toHaveBeenCalledTimes(3);
    });

    test('Should call callback with correct arguments:', () => {
        const fn = jest.fn();
        const time = new Date();

        getTime(fn);

        expect(fn).toHaveBeenNthCalledWith(1, time.getHours());
        expect(fn).toHaveBeenNthCalledWith(2, time.getMinutes());
        expect(fn).toHaveBeenNthCalledWith(3, time.getSeconds());
        // expect(fn).toHaveBeenLastCalledWith(time.getSeconds());
    });
});

describe(('Get time:'), () => {
    test('Should call callback correct times:', () => {
        const fn = jest.fn();
        const time = new Date();

        getTime(fn);

        expect(fn).toHaveBeenCalledTimes(3);
    });

    test('Should call callback with correct arguments:', () => {
        const fn = jest.fn();
        const time = new Date();

        getTime(fn);

        expect(fn).toHaveBeenNthCalledWith(1, time.getHours());
        expect(fn).toHaveBeenNthCalledWith(2, time.getMinutes());
        expect(fn).toHaveBeenNthCalledWith(3, time.getSeconds());
        // expect(fn).toHaveBeenLastCalledWith(time.getSeconds());
    });
});

describe(('time to binary:'), () => {
    test('Should return correct length of strings:', () => {
        const time = [1];
        const digitPerRows = [2];
        const digitPerRows2 = [2, 4];

        expect(timeToBinary(time, digitPerRows)).toHaveLength(2);
        expect(timeToBinary(time, digitPerRows2)).toHaveLength(6);
    });

    test('Should return correct result:', () => {
        expect(timeToBinary([1], [1])).toEqual(["1"]);
        expect(timeToBinary([1], [3])).toEqual(["0", "0", "1"]);
        expect(timeToBinary([2], [3, 4])).toEqual(["0", "1", "0", "0", "0", "0", "0"]);
    });
});