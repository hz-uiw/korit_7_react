import { atom } from "recoil";

// App.js의 전역 변수 설정
export const authUserIdState = atom({
    key: "authUserIdState",
    default: 0,
});