import React, { useEffect, useState } from 'react';

function App10(props) {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    
    const unmount = () => {
        console.log("장착해제됨");
    }

    const mount = () => {
        console.log("장착됨");
        return unmount;
    }

    // useEffect의 괄호안에 대괄호를 넣으면 의존성(배열)을 가짐 대괄호 안에는 상태값을 넣을 수 있음
    useEffect(mount);
    
    // num1의 상태가 바뀔 때마다 setNum2() 실행
    useEffect(() => {
        console.log(num1);
        setNum2(num1 + 100);
    }, [num1])

    // num2의 상태가 바뀔 때마다 console.log()실행
    useEffect(() => {
        console.log(num2);
    }, [num2]);

    // num1 또는 num2의 상태가 바뀔 때마다 console.log() 실행
    useEffect(() => {
        console.log(num1);
        console.log(num2);
    }, [num1, num2]);


    // []에 아무것도 없으면 한 번만 실행됨
    useEffect(() => {
        console.log("마운트!!!")
    }, []);

    const handleOnClick = () => {
        setNum1(num1 + 10);
    }

    return (
        <div>
            <h1>Num1: {num1}</h1>
            <h1>Num2: {num2}</h1>

            <button onClick={handleOnClick}>클릭</button>
        </div>
    );
}

export default App10;