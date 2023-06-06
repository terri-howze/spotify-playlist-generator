import { atom, selector } from "recoil";

const devAuthState = atom({
    key: "devAuthState",
    default: ""
});

export{
    devAuthState
}