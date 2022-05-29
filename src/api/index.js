import axios from 'axios';
import { setInterceptors } from './common/interceptors';

// axios 초기화
function createInstance() {
  const instance = axios.create({
    // baseURL: 'http://localhost:3000/',
    baseURL: process.env.VUE_APP_API_URL, // define in .env file
  });
  return setInterceptors(instance);
}

const instance = createInstance();

// 회원가입
function registerUser(userData) {
  // const url = 'http://localhost:3000/signup';
  // return axios.post(url, userData);
  return instance.post('signup', userData);
}

// 로그인
function loginUser(userData) {
  return instance.post('login', userData);
}

// 학습노트 데이터를 조회
function fetchPosts() {
  return instance.get('posts');
}

export { registerUser, loginUser, fetchPosts };
