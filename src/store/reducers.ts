import { Action } from "redux"

const initialState = {
  theme: 'light',
  reports: [],
}

export default function appReducer(state = initialState, action: any) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    case 'REPORTS': {
      return {
        ...state,
        //@ts-ignore
        reports: action.reports,
      }
    }
    default:
      return state
  }
}