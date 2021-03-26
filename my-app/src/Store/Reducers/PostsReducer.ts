import { ADD_COMMENT } from '../Types/Types'
import { IInitState } from '../initState';
import initState from '../initState';

export const postReducer = (state: IInitState = initState, action: any): IInitState => {
  switch (action.type) {
    case ADD_COMMENT:
      return { ...initState, posts: [...initState.posts] }
    default:
      return initState;
  }
}
