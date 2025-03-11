import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    function flipVisibility(): void {
        setVisible(!visible);
    }
    return (
        <div>
            Reveal Answer:
            <span>
                <Button onClick={flipVisibility}>Reveal Answer</Button>
                {visible && <div>42</div>}
            </span>
        </div>
    );
}
