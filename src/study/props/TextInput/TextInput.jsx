function TextInput({id, text}) {
    // 매개변수에 props가 들어가야하지만 비구조할당으로 매개변수에 id와 text가 들어갈 수 있음
    /*
        비구조할당
    const user = {
        username: "test",
        password: "1234",
        name: "권민창",
    };

    const {username, name} = user;
    console.log(username);
    */
    return <div>
        <label htmlFor={id}>{text}</label>
        <input type="text" id={id} />
    </div>
}

export default TextInput;