import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

export function getPublishedQuestions(questions: Question[]): Question[] {
    const published: Question[] = questions.filter(
        (question: Question): boolean => question.published
    );
    return published;
}

export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const newQuestions: Question[] = questions.filter(
        (question: Question): boolean =>
            question.body !== "" ||
            question.expected !== "" ||
            question.options.length !== 0
    );
    return newQuestions;
}

export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const index: number = questions.findIndex(
        (question: Question) => question.id == id
    );
    if (index !== -1) {
        return questions[index];
    }
    return null;
}

export function removeQuestion(questions: Question[], id: number): Question[] {
    const newQuestions: Question[] = questions.filter(
        (question: Question) => question.id != id
    );
    return newQuestions;
}

export function getNames(questions: Question[]): string[] {
    const names: string[] = questions.map(
        (question: Question) => question.name
    );
    return names;
}

export function sumPoints(questions: Question[]): number {
    const points: number[] = questions.map(
        (question: Question) => question.points
    );
    return points.reduce((points: number, total: number) => points + total, 0);
}

export function sumPublishedPoints(questions: Question[]): number {
    const filtered: Question[] = questions.filter(
        (question: Question) => question.published
    );
    const points: number[] = filtered.map(
        (question: Question) => question.points
    );
    const sum: number = points.reduce(
        (points: number, total: number) => points + total,
        0
    );
    return sum;
}

export function toCSV(questions: Question[]): string {
    const CSV =
        "id,name,options,points,published\n" +
        questions
            .map(
                (question: Question): string =>
                    `${question.id},${question.name},${question.options.length},${question.points},${question.published}`
            )
            .join("\n");
    return CSV;
}

export function makeAnswers(questions: Question[]): Answer[] {
    const answers: Answer[] = questions.map((question: Question) => ({
        questionId: question.id,
        text: "",
        submitted: false,
        correct: false
    }));
    return answers;
}

export function publishAll(questions: Question[]): Question[] {
    const published = questions.map((question: Question) =>
        !question.published ? { ...question, published: true } : question
    );
    return published;
}

export function sameType(questions: Question[]): boolean {
    if (questions.length == 0) {
        return true;
    }
    if (questions[0].type == "multiple_choice_question") {
        return questions.every(
            (question: Question): boolean =>
                question.type == "multiple_choice_question"
        );
    } else {
        return questions.every(
            (question: Question): boolean =>
                question.type == "short_answer_question"
        );
    }
}

export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    return [...questions, makeBlankQuestion(id, name, type)];
}

export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const newQuestions: Question[] = questions.map((question: Question) =>
        question.id == targetId ? { ...question, name: newName } : question
    );
    return newQuestions;
}

export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    if (newQuestionType !== "multiple_choice_question") {
        const newQuestions: Question[] = questions.map((question: Question) =>
            question.id == targetId
                ? { ...question, type: newQuestionType, options: [] }
                : question
        );
        return newQuestions;
    }
    const newQuestions: Question[] = questions.map((question: Question) =>
        question.id == targetId
            ? { ...question, type: newQuestionType }
            : question
    );
    return newQuestions;
}

export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    const newQuestions = questions.map((question: Question) =>
        question.id === targetId
            ? {
                  ...question,
                  options:
                      targetOptionIndex === -1
                          ? [...question.options, newOption]
                          : question.options.map(
                                (option: string, index: number) =>
                                    index === targetOptionIndex
                                        ? newOption
                                        : option
                            )
              }
            : question
    );

    return newQuestions;
}

export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const index = questions.findIndex(
        (question: Question) => question.id == targetId
    );
    const newQuestion = duplicateQuestion(newId, { ...questions[index] });
    const newQuestions: Question[] = questions.map(
        (question: Question) => question
    );
    newQuestions.splice(index + 1, 0, newQuestion);
    return newQuestions;
}
