export function toggleShow(id) {
    return { type: 'TOGGLE_SHOW', id };
}
export function toggleMemorized(id) {
    return { type: 'TOGGLE_MEMORIZED', id };
}

export function showAll(){
    return { type: 'SHOW_ALL' };
}

export function showMemorized(){
    return { type: 'MEMORIZED' };
}
export function showNeedPractices(){
    return { type: 'NEED_PRACTICES' };
}