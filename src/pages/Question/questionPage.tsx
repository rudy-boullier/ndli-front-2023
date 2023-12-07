import React, { useState } from "react";
import "./question.css";
import data from "../../data/data.json";
import { Question } from "../../types/question";

const QuestionPage: React.FC = () => {
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [showExplanation, setShowExplanation] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const questions = data.questions;
    const myQuestion: Question = questions[currentQuestionIndex];

    const handleAnswerClick = (index: number) => {
        setSelectedAnswer(index);
        setShowExplanation(true);
    };

    const renderAnswers = () => {
        return myQuestion.answers.map((answer, index) => (
            <li key={index} onClick={() => handleAnswerClick(index)}>
                <div className={selectedAnswer === index ? "selected" : ""}>
                    {answer.title}
                </div>
            </li>
        ));
    };

    const renderExplanation = () => {
        return (
            <div>
                {myQuestion.data.explanations.map((explanation, index) => (
                    <div key={index}>
                        {explanation.type === "paragraph" && (
                            <p>{explanation.value}</p>
                        )}
                        {explanation.type === "image" && (
                            <img src={explanation.value} alt="explication" />
                        )}
                        {explanation.type === "button" && (
                            <a href={explanation.link}>{explanation.value}</a>
                        )}
                    </div>
                ))}
            </div>
        );
    };

    const resetState = () => {
        setSelectedAnswer(null);
        setShowExplanation(false);
        setCurrentQuestionIndex(currentQuestionIndex + 1); // Incrémente l'index de la question
    };

    return (
        <div id="question">
            <div>
                {myQuestion.title}
            </div>
            <ul>
                {renderAnswers()}
            </ul>
            {showExplanation && renderExplanation()}
            {showExplanation && (
                <button onClick={resetState}>
                    Next Question
                </button>
            )}
        </div>
    );
};

export default QuestionPage;
