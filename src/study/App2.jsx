// useState 상태관리
import {useState} from "react";

function App2() {
    // const numState = useState(0);
    
    // const num = numState[0];
    // const setNum = numState[1];

    const [num, setNum] = useState(0);
    const handleIncreaseOnClick = () => {
        setNum(num + 1);
        if(num >= 8) { setNum(9); }
    }
    const handleDecreaseOnclick = () => {
        setNum(num - 1);
        if (num <= 0) { setNum(0); }
    }


    return <>
        <h1>{num}</h1>
        <button onClick={handleIncreaseOnClick}>1증가</button>
        <button onClick={handleDecreaseOnclick}>1감소</button>
    </>
}

export default App2;