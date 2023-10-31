import React from 'react'

const TemplateExpression = () => {
    const name = "Nilson";
    const data = {
        age: 37,
        job: "Programador"
    }
    return (
        <div>
            <h1>Olá {name}, tudo bem ?</h1>
            <p>você atua como {data.job}</p>
            <p>{4 + 4}</p>
            <p>{console.log("JSX React")}</p>
        </div>
    )
}

export default TemplateExpression