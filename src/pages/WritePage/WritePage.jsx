/**@jsxImportSource @emotion/react */
import ReactQuill from 'react-quill';
import * as s from './style';
import React, { useEffect } from 'react';

function WritePage(props) {

    useEffect(() => {
        const head = document.querySelector("head");
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/react-quill@1.3.3/dist/quill.snow.css"
        head.appendChild(link);
    }, []);

    return (
        <div>
            <ReactQuill />
        </div>
    );
}

export default WritePage;