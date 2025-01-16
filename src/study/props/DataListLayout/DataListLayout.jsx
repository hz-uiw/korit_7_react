function DataListLayout({children}) {

    console.log(children);
    const liList = [
        <li>5번 리스트</li>,
        <li>6번 리스트</li>,
        <li>7번 리스트</li>,
        <li>8번 리스트</li>,
    ];

    // 배열이기 때문에 모든 props에 '키' 값이 필요함
    return <ul>
        {children}
        {liList}
        {
            children.map((li, index) => 
                <li key={index}>{"1" + li.props.children}</li>
            )
        }
        {
            liList.map((li, index) =>
                <li key={index}>{"2" + li.props.children}</li>
            )
        }
        {/* chilred.map과 liList.map의 인덱스 번호가 같으므로 warning */}
    </ul>
}

export default DataListLayout;