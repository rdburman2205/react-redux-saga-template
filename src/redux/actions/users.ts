import * as type from '../reducers/types'

export function getUsers() {
    return {
        type: type.GET_USERS_REQUESTED,
    }
}