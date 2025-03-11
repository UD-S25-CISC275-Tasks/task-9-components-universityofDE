import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    //WORKING
    const [leftDice, setLeft] = useState<number>(1);
    const [rightDice, setRight] = useState<number>(2);
    return (
        <div>
            <span data-testid="left-die">Left: {leftDice}</span>
            <span data-testid="right-die">Right: {rightDice}</span>
            <Button
                onClick={() => {
                    setLeft(d6());
                }}
            >
                Roll Left
            </Button>
            <Button
                onClick={() => {
                    setRight(d6());
                }}
            >
                Roll Right
            </Button>
            {leftDice == rightDice && leftDice == 1 && rightDice == 1 ? (
                <span>Lose</span>
            ) : (
                <span></span>
            )}
            {leftDice == rightDice && leftDice != 1 ? (
                <span>Win</span>
            ) : (
                <span></span>
            )}
        </div>
    );
}
