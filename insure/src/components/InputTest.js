import React, {useState} from 'react'

const InputTest = () => {

    // let text = "text"
    const [text,setText] = useState("초기값")
    const handlezChange = (event) => {
        const {value} = event.target
        setText(value)
    }
    return (
        <div>
            <p>{text}</p>
            <input onChange={handlezChange}></input>
        </div>
    )
}

export default InputTest