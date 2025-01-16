function DataListLayout2({dataList}) {
    // num과 index가 같이 순회
    return <ul>
        {
            dataList.map((num, index) =>
                <li key={index}>{num}</li>
            )
        }
    </ul>
}

export default DataListLayout2;