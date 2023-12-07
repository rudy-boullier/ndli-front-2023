export interface answer {
    title: string;
    truth: boolean;
}

export interface ExplanationParagraph {
    type: 'paragraph';
    value: string;
}

export interface ExplanationImage {
    type: 'image';
    value: string;
}

export interface ExplanationButton {
    type: 'button';
    value: string;
    link: string;
}

export type explanations = ExplanationParagraph | ExplanationImage | ExplanationButton;

export type Question = {
    title: string;
    answers: answer[];
    data: {
        explanations: explanations[];
    };
}