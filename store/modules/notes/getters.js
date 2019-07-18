export default{
    getNoteList: state => state.items,
    getDoneNoteList: state => state.items.filter(note => note.isDone),
    getNotDoneNoteList: state => state.items.filter(note => !note.isDone)
}