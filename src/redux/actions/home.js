const initialState = {

};


const home = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export function backPress() {
    return { type: 'BACK_PRESS' };
}

export default home;