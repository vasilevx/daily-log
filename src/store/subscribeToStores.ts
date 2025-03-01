import { useAuthorsStore, useMessagesStore, useParkovkaStore } from "./store";

export const subscribeToStores = () => {
    useAuthorsStore().$subscribe((_, state) => {
        localStorage.setItem('authors', JSON.stringify(state.authors));
    });
    useMessagesStore().$subscribe((_, state) => {
        localStorage.setItem('messages', JSON.stringify(state.messages));
    });
    useParkovkaStore().$subscribe((_, state) => {
        localStorage.setItem("parkovka", JSON.stringify(state.parkovka))
    })
}
