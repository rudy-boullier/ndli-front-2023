import data from '../../data/data.json';
import {Link} from "react-router-dom";

const MainContainer = () => {
    return (
        <div className="mainContainer">
            <div>
                <h1>
                    <Link to={"/question"}>Testez vos connaissances</Link>
                </h1>
            </div>
            <div id={"homeMainContainer"} >
                {data.questions.map((question, index) => (
                    <div key={index} className="question-container">
                        <h2>{question.title}</h2>
                        {question.data.explanations.map((explanation, i) => (
                            explanation.type === "paragraph" && <p key={i}>{explanation.value}</p>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainContainer;