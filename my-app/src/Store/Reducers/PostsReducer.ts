import { ADD_COMMENT, SET_CURRENT_POST, WRITE_NEW_COMMENT, ADD_COMMENT_IN_CURRENT_POST } from '../Types/Types'
import { ICurrentPost, IInitState } from '../initState';
import initState from '../initState';

export const postReducer = (state: IInitState = initState, action: any): IInitState => {
  switch (action.type) {
    case ADD_COMMENT:
      return { ...state, posts: state.posts.map((post: any) => post.id === action.payload.id ? { ...post, comments: [...post.comments, action.payload.comment] } : post) }
    case ADD_COMMENT_IN_CURRENT_POST:
      return { ...state, currentPost: { ...state.currentPost, comments: [...state.currentPost.comments, action.payload] } }
    case SET_CURRENT_POST:
      return { ...state, currentPost: { ...state.currentPost, ...action.payload } }
    case WRITE_NEW_COMMENT:
      return { ...state, writeNewComment: action.payload }
    default:
      return state;
  }
}
