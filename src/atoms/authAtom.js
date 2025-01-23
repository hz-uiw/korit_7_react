import { atom } from "recoil";

// App.js의 전역 변수 설정
export const authUserIdAtomState = atom({
    key: "authUserIdAtomState",
    default: 0,
});