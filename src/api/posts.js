import { posts } from './index';

// 학습노트 데이터를 조회
function fetchPosts() {
  return posts.get('/');
}

// 학습노트 데이터를 생성
function createPost(postData) {
  return posts.post('/', postData);
}

// 학습노트 데이터를 삭제
function deletePost(postId) {
  return posts.delete(postId);
}

export { fetchPosts, createPost, deletePost };
