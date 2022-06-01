import { instance } from './index';

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

export { registerUser, loginUser };
