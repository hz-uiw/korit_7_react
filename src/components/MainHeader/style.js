import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    border-bottom: 2px solid #dbdbdb;
    width: 100%;
`

export const leftContainer = css`
    & > h1 {
        margin: 0;
        font-size: 26px;
        cursor: pointer;
    }
`;

export const rightContainer = css`
    display: flex;
    align-items: center;
`;