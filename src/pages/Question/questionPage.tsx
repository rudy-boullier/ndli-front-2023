import React, {useState} from "react";
import "./question.css";
import data from "../../data/data.json";
import {Question} from "../../types/question";

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
            <div key={'answer.${index}'} className="answer">
                <button
                    tabIndex={0}
                    onClick={() => handleAnswerClick(index)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            handleAnswerClick(index);
                        }
                    }}
                >
                    <div className={selectedAnswer === index ? "selected" : ""}>
                        {answer.title}
                    </div>
                </button>
            </div>
        ));
    };

    const renderExplanation = () => {
        return (
            <div>
                {myQuestion.data.explanations.map((explanation) => (
                    <div key={'explanation.${index}'}>
                        {explanation.type === "paragraph" && (
                            <p>{explanation.value}</p>
                        )}
                        {explanation.type === "image" && (
                            <img src={explanation.value} alt={explanation.alt} loading="lazy"/>
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
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    return (
        <div className="mainContainer">
            <div id="question">
                <div id="title">
                    {myQuestion.title}
                </div>
                <div id="answers">
                    {renderAnswers()}
                </div>
                {showExplanation && renderExplanation()}
                {showExplanation && (
                    <button onClick={resetState}>
                        Next Question
                    </button>
                )}
            </div>
        </div>
    );
};

export default QuestionPage;
