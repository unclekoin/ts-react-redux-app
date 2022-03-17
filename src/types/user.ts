export interface UserState {
    users: any[];
    loading: boolean;
    error: null | string;
}

export enum UserActionTypes {
    FEATCH_USERS = 'FEATCH_USERS',
    FEATCH_USERS_SUCCESS = 'FEATCH_USERS_SUCCESS',
    FEATCH_USERS_ERROR = 'FEATCH_USERS_ERROR',
}

interface FetcthUsersAction {
    type: UserActionTypes.FEATCH_USERS;
}

interface FetcthUsersSuccersAction {
    type: UserActionTypes.FEATCH_USERS_SUCCESS;
    payload: any[];
}

interface FetcthUsersErrorAction {
    type: UserActionTypes.FEATCH_USERS_ERROR;
    payload: string;
}

export type UserAction = FetcthUsersAction | FetcthUsersSuccersAction | FetcthUsersErrorAction;
