import { posts } from './index';

// 학습노트 데이터 목록 조회
function fetchPosts() {
  return posts.get('/');
}

// 특정 학습노트 데이터를 조회
function fetchPost(postId) {
  return posts.get(postId);
}

// 학습노트 데이터를 생성
function createPost(postData) {
  return posts.post('/', postData);
}

// 학습노트 데이터를 수정
function editPost(postId, postData) {
  return posts.put(postId, postData);
}

// 학습노트 데이터를 삭제
function deletePost(postId) {
  return posts.delete(postId);
}

export { fetchPosts, fetchPost, createPost, editPost, deletePost };
