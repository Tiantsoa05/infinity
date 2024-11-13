import React from "react";

export const TestForm = ({data}) => {
    console.log(data);
    return (
        <div className="test-fr justify-content-center align-items-center container-fluid">
            {
                data.map(subject=>(
                    <div key={subject.question}>
                        <h4>{subject.question}</h4>
                        {subject.choices.map(choice=>(
                            <div key={choice}>
                                <input type="radio" id={choice} name={subject.question} />
                                <label htmlFor={choice}>{choice}</label>
                            </div>
                        ))}
                    </div>
                ))
            }
            <div className="btn btn-primary">Valider</div>
        </div>
    );
};