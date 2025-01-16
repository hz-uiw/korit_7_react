import React from "react";

function Hello() {
    return <React.Fragment>
        <h1>Hello react!!</h1>
        <input type="text" />
    </React.Fragment>
}
/*
    return에는 <div></div>나 <React.Fragment></React.Fragment> 또는 <> </>를 사용
    태그들은 모두 감싸져있어야함
    <React.Fragment></React.Fragment>의 축약 => <> </>
    하나의 폴더 당 하나의 컴포넌트
*/
export default Hello;