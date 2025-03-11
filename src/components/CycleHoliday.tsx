import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    type holiday = "🎅" | "🎉" | "💞" | "🎃" | "🐰";
    const [emoji, setEmoji] = useState<holiday>("🎅");
    function nextAlphabet(holiday: holiday) {
        if (holiday == "🎅") {
            setEmoji("🐰");
        }
        if (holiday == "🎉") {
            setEmoji("💞");
        }
        if (holiday == "💞") {
            setEmoji("🎅");
        }
        if (holiday == "🎃") {
            setEmoji("🎉");
        }
        if (holiday == "🐰") {
            setEmoji("🎃");
        }
    }
    function nextYear(holiday: holiday) {
        if (holiday == "🎅") {
            setEmoji("🎉");
        }
        if (holiday == "🎉") {
            setEmoji("💞");
        }
        if (holiday == "💞") {
            setEmoji("🐰");
        }
        if (holiday == "🐰") {
            setEmoji("🎃");
        }
        if (holiday == "🎃") {
            setEmoji("🎅");
        }
    }
    return (
        <div>
            Cycle Holiday Holiday: {emoji}
            <Button
                onClick={() => {
                    nextAlphabet(emoji);
                }}
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() => {
                    nextYear(emoji);
                }}
            >
                Advance by Year
            </Button>
        </div>
    );
}
