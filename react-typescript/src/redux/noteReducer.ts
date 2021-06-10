export interface NotesState {
    notes: string[]
}

const initState = {
    notes: []
}

type Action = { type: 'ADD_NOTE', payload: string }

export const notesReducer = (state: NotesState = initState, action: Action) => {
    switch (action.type) {
        case 'ADD_NOTE': return { ...state, notes: [...state.notes, action.payload] }
        default: return state
    }
}