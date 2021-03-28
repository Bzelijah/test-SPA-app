import { SET_CURRENT_POST, SHOW_COMMENTS } from '../Types/Types';

export function setCurrentPost(title: string, author: string, content: string, comments: Array<string>, authorID: string) {
  return {
    type: SET_CURRENT_POST,
    payload: { title, author, content, comments, authorID },
  }
}

export function showComments(flag: boolean) {
  return {
    type: SHOW_COMMENTS,
    payload: flag,
  }
}
