import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
    id: number;
    name: string;
}

const initialState: User[] = [
    { id: 1, name: 'Данил'},
    { id: 2, name: 'Тестер'}
];

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        updateUserName: (state, action: PayloadAction<{ id: number; newName: string }>) => {
            const { id, newName } = action.payload;
            return state.map(user =>
                user.id === id ? { ...user, name: newName } : user
            );
        }
    }
});

export const { updateUserName } = usersSlice.actions;
export default usersSlice.reducer;