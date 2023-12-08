export interface Answer {
    title: string;
    truth: boolean;
}

export interface ExplanationParagraph {
    type: 'paragraph';
    value: string;
}

export interface ExplanationImage {
    type: 'image';
    alt: string;
    value: string;
}

export interface ExplanationButton {
    type: 'button';
    value: string;
    link: string;
}

export type explanation = ExplanationParagraph | ExplanationImage | ExplanationButton;

export type Question = {
    title: string;
    answers: Answer[];
    data: {
        explanations: explanation[];
    };
}