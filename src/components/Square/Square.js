import React from "react";

import './Square.css';

export default function Square({on, column, row, number}) {
    const gridRow = row ? ` grid__row-${row}` : "";
    const lit = on ? " Clock__Square--lit" : "";

    return <span className={`Clock__Square grid__column-${column}${gridRow}${lit}`}>
            {on && number}
        </span>
};