import { SET_CURRENT_POST, WRITE_NEW_COMMENT, ADD_COMMENT, ADD_COMMENT_IN_CURRENT_POST } from '../Types/Types';

export function setCurrentPost(title: string, author: string, content: string, comments: Array<string>, authorID: string, id: string) {
  return {
    type: SET_CURRENT_POST,
    payload: { title, author, content, comments, authorID, id },
  };
};

export function writeNewComment(flag: boolean) {
  return {
    type: WRITE_NEW_COMMENT,
    payload: flag,
  };
};

export function addComment(comment: string, id: string) {
  return {
    type: ADD_COMMENT,
    payload: { comment, id }
  };
};

export function addCommentInCurrentPost(comment: string) {
  return {
    type: ADD_COMMENT_IN_CURRENT_POST,
    payload: comment
  }
}
