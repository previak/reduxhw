import { RootState } from './store';

export const selectUsers = (state: RootState) => state.users;

export const selectUserById = (state: RootState, userId: number) =>
    state.users.find(user => user.id === userId);