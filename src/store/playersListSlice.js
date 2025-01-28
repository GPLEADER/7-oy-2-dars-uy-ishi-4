import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    players: [],
};

const playersSlice = createSlice({
    name: 'players',
    initialState,
    reducers: {
        addPlayer: (state, action) => {
            state.players.push({
                id: Date.now(),
                name: action.payload.name,
                score: action.payload.score || 0,
            });
        },
        removePlayer: (state, action) => {
            state.players = state.players.filter(player => player.id !== action.payload);
        },
        updateScore: (state, action) => {
            const player = state.players.find(player => player.id === action.payload.id);
            if (player) {
                player.score = action.payload.score;
            }
        },
    },
});

export const { addPlayer, removePlayer, updateScore } = playersSlice.actions;
export default playersSlice.reducer;