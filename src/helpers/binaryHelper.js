export const getBinary = digit => (digit >>> 0).toString(2);

export const addZeroPrefixBits = (bin, bits) => {
    while (bin.length < bits) bin = "0" + bin;

    return bin;
};