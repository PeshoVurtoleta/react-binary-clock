import {getBinary, addZeroPrefixBits} from "./binaryHelper";

describe(('Get Binary:'), () => {
    test('Should return correct binary digits:', () => {
        expect(getBinary(1)).toEqual("1");
        expect(getBinary(11)).toEqual("1011");
    });

    test('Should return correct binary digits, negative number argument:', () => {
        expect(getBinary(-1)).toEqual("11111111111111111111111111111111");
        expect(getBinary(-11)).toEqual("11111111111111111111111111110101");

    });
});

describe(("Add zero prefix bits:"), () => {
    test('Should not add zero prefix:', () => {
        expect(addZeroPrefixBits("1")).toEqual("1");
        expect(addZeroPrefixBits("101", 2)).toEqual("101");
    });

    test('Should return correct zero prefixed bits:', () => {
        expect(addZeroPrefixBits("1", 4)).toEqual("0001");
        expect(addZeroPrefixBits("101", 4)).toEqual("0101");
    });
});