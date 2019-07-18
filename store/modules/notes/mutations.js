import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE } from "./mutation-types";

export default {
    [ADD_NOTE](state, note){
        state.items.push(note);
    },
    [DELETE_NOTE](state, id){
        const index = state.items.findIndex(item => item.id === id);
        state.items.splice(index, 1);
    },
    [EDIT_NOTE](state, { id, note}){
        const index = state.items.findIndex(item => item.id === id);
        state.items.splice(index, 1, note);
    },
}