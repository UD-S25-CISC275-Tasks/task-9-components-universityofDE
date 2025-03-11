import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [questionType, setType] = useState<QuestionType>();
    function changeType(): void {
        //WORKING
        if (questionType == "multiple_choice_question") {
            setType("short_answer_question");
        } else {
            setType("multiple_choice_question");
        }
    }
    return (
        <div>
            Change Type
            <Button
                onClick={() => {
                    changeType();
                }}
            >
                Change Type
            </Button>
            {questionType == "multiple_choice_question" ? (
                <span>Multiple Choice Question</span>
            ) : (
                <span>Short Answer Question</span>
            )}
        </div>
    );
}
