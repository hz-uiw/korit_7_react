import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    border-bottom: 2px solid #dbdbdb;
    width: 100%;
    padding: 20px 10px 10px;

    & a {
        text-decoration: none;
        color: #222222;
    }

    & ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
`

export const leftContainer = css`
    display: flex;
    align-items: center;

    & > a >  h1 {
        margin: 0;
        margin-right: 20px;
        font-size: 26px;
        cursor: pointer;
    }

    & > ul {
        display: flex;

        & li {
            margin-left: 30px;
            font-weight: 600;
            transition: all 0.1s ease-in-out;
            color: #666666;

            &:hover {
                transform: scale(110%);
                color: #222222    ;
            }
        }
    }
`;

export const rightContainer = css`
    display: flex;
    align-items: center;

    & > ul {
        display: flex;
    }
`;