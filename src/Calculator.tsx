import {useState} from "react";


function Calculator(){

    const [currentinput,setInput] = useState(0);
    const [previousinput,setPrevInput] = useState(0);
    const [operator,setOperator] = useState('');
    const [result,setResult] = useState(0);

    const handleNumberClick = (number: number) => {
        setInput((prevInput) => prevInput * 10 + number);
    };

    const clearCalculator = () => {
        setInput(0);
        setPrevInput(0);
        setOperator('');
        setResult(0);
    };

    const handleOperatorClick=(operator:string)=>{
        setPrevInput(currentinput);
        setOperator(operator);
        setInput(0);
    };


    return(
        <>
            <div>
                <input type="text" value={currentinput || result || operator} readOnly/>
            </div>
            <div>
                <button onClick={() => handleNumberClick(1)}>1</button>
                <button onClick={() => handleNumberClick(2)}>2</button>
                <button onClick={() => handleNumberClick(3)}>3</button>
            </div>
            <div>
                <button onClick={() => handleNumberClick(4)}>4</button>
                <button onClick={() => handleNumberClick(5)}>5</button>
                <button onClick={() => handleNumberClick(6)}>6</button>
            </div>
            <div>
                <button onClick={() => handleNumberClick(7)}>7</button>
                <button onClick={() => handleNumberClick(8)}>8</button>
                <button onClick={() => handleNumberClick(9)}>9</button>
            </div>
            <div>

                <button onClick={()=>handleOperatorClick('+')}>+</button>
                <button onClick={()=>handleOperatorClick('-')}>-</button>
                <button onClick={()=>handleOperatorClick('*')}>*</button>
            </div>
            <div>

            <button>=</button>
                <button onClick={()=> clearCalculator()}>C</button>

            </div>
        </>
    )
}
export default Calculator