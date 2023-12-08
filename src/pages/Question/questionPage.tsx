import React, { useState } from "react";
import "./question.css";
import data from "../../data/data.json";
import { Question } from "../../types/question";

const QuestionPage: React.FC = () => {
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [showExplanation, setShowExplanation] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isButtonLocked, setIsButtonLocked] = useState(false);

    const questions = data.questions;
    const myQuestion: Question = questions[currentQuestionIndex];
    const assetPath = "../../assets/";

    const handleScore = () => setScore(score + 1);

    const handleAnswerClick = (index: number, truth: boolean) => {
        setSelectedAnswer(index);
        setShowExplanation(true);

        if (truth) {
            handleScore();
        }
        setIsButtonLocked(true);
    };

    const renderAnswers = () =>
        myQuestion.answers.map((answer, index) => (
            <div key={`answer.${index}`} className="answer">
                <button
                    tabIndex={0}
                    onClick={() => handleAnswerClick(index, answer.truth)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                            handleAnswerClick(index, answer.truth);
                        }
                    }}
                    disabled={isButtonLocked}
                >
                    <div className={selectedAnswer === index ? "selected" : ""}>
                        {answer.title}
                    </div>
                </button>
            </div>
        ));

    const renderExplanation = () => (
        <div>
            {myQuestion.data.explanations.map((explanation, index) => (
                <div key={`explanation.${index}`}>
                    {explanation.type === "paragraph" && (
                        <p>{explanation.value}</p>
                    )}
                    {explanation.type === "button" && (
                        <a href={explanation.link}>{explanation.value}</a>
                    )}
                </div>
            ))}
            <div>
                <img
                    src={`${assetPath}/answers/${myQuestion.data.image.link}`}
                    alt={myQuestion.data.image.description}
                    loading="lazy"
                />
            </div>
        </div>
    );

    const resetState = () => {
        setSelectedAnswer(null);
        setShowExplanation(false);
        setCurrentQuestionIndex((prevIndex) =>
            prevIndex < questions.length - 1 ? prevIndex + 1 : prevIndex
        );
        setIsButtonLocked(false);
    };

    const handleNextQuestionClick = () => {
        resetState();
    };

    return (
        <div className="question-containers">
            <h1>Score: {score}</h1>
            <div className="mainContainer">
                <div id="question">
                    <div id="title">{myQuestion.title}</div>
                    <div id="answers">{renderAnswers()}</div>
                    {showExplanation && renderExplanation()}
                    {showExplanation && (
                        <button onClick={handleNextQuestionClick}>
                            Next Question
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default QuestionPage;
