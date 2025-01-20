/**@jsxImportSource @emotion/react */
import * as s from './style';
import React from 'react';

function MainHeader(props) {
    return (
        <div css={s.layout}>
            <div css={s.leftContainer}>
                <h1>미니 게시판 프로젝트</h1>
            </div>

            <div css={s.rightContainer}>

            </div>
        </div>
    );
}

export default MainHeader;