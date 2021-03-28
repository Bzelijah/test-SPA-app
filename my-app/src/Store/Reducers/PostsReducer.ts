import { ADD_COMMENT, SET_CURRENT_POST, SHOW_COMMENTS } from '../Types/Types'
import { IInitState } from '../initState';
import initState from '../initState';

export const postReducer = (state: IInitState = initState, action: any): IInitState => {
  switch (action.type) {
    case ADD_COMMENT:
      return { ...state, posts: [...state.posts] }
    case SET_CURRENT_POST:
      return { ...state, currentPost: { ...state.currentPost, ...action.payload } }
    case SHOW_COMMENTS:
      return { ...state, showComments: action.payload }
    default:
      return state;
  }
}
