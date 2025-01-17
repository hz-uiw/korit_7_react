import React from 'react';
/* 
    비동기

    promise(resolve, reject)
    the, catch, finally

    async / await
    try, catch, finally
*/

function App11(props) {

    // setTimeout(() => {
    //     console.log("1");
    //     console.log("2");
    //     setTimeout(() => {
    //         console.log("3");
    //     }, 2000);
    // }, 3000);

    const isSuccess = false;
    const isSuccess2 = true;

    console.log("1번");

    // Promise 사용법 - resolve와 reject를 받음
    // 우선 순위: Promise > resolve / reject > then / catch
    const p1 = new Promise((resolve, reject) => {
        console.log("Promise1 생성!!");

        if(isSuccess) {
            resolve();
        } else {
            reject();
        }
    });

    p1.then(() => {
        console.log("p1 then 호출")
    }).catch(() => {
        console.log("p1 catch 호출");
    });

    console.log("2번");

    const p2 = new Promise((resolve, reject) => {
        console.log("Promise2 생성!!");

        if(isSuccess2) {
            resolve();
        } else {
            reject();
        }
    });

    p2.then(() => {
        console.log("p2 then 호출");
    }).then(() => {
        console.log("p2 2번째 then 호출");
    });

    const p3 = new Promise((resolve, reject) => {
        console.log("Promise3 생성");

        const response = {
            status: 200,
            data: {
                username: "aaa",
                password: "1234",
            }
        }

        if(true) {
            resolve({response: response}); // response: response로 들어가야하지만 키값 키워드와 벨류값 키워드가 같으면 하나만 입력해도 됨
        } else {
            reject();
        }
    });

    p3.then((r) => {
        console.log(r);
        if(true) {
            throw new Error("오류!!!");
        }
        return {
            response: {
                ...r.response,
                data: {
                    ...r.response.data,
                    name: "권민창",
                    email: "aaa@gmail.com",
                }
            }
        }
    }).then((r) => {
        console.log(r);
    });


    const p4 = new Promise((resolve, reject) => {
        console.log("Promise4 생성");

        const response = {
            status: 400,
            data: {
                errorMessage: "문자열 형식이 맞지 않습니다.",
            }
        }

        if(false) {
            resolve({response})
        } else {
            reject(new Error(JSON.stringify({response})));
        }
    }); 

    p4.catch((error) => {
        console.error(error);
    })

    return (
        <div>
            
        </div>
    );
}

export default App11;