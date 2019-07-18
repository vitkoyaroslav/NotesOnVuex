import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE } from "./mutation-types";

function generateId(){
    return new Date().getTime();
}

export default {
    addNote({commit}, name) {
        commit(ADD_NOTE, {
            name: name,
            isDone: false,
            id: generateId()
        });
    },
    deleteNote({ commit }, id){
        commit(DELETE_NOTE, id)
    },
    editNote({ commit }, newNote){
        commit(EDIT_NOTE, newNote);
    }
}