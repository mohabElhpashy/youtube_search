import {ActionType} from './ActionTypes'

interface GetResult {
    type: ActionType.GET_RESULT,
    payload: string
}

interface SetResult {
    type: ActionType.SET_RESULT,
    payload: {}[]
}

export type Action = GetResult | SetResult ;