<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">ID: </label>
          <input type="text" id="username" v-model="username" />
        </div>
        <div>
          <label for="password">Password: </label>
          <input type="text" id="password" v-model="password" />
        </div>
        <div>
          <label for="nickname">Nickname: </label>
          <input type="text" id="nickname" v-model="nickname" />
        </div>
        <button
          type="submit"
          class="btn"
          :disabled="!isUsernameValid || !password || !nickname"
        >
          Signup
        </button>
        <p>{{ logMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script>
import { registerUser } from '@/api/auth';
import { validateEmail } from '@/utils/validation';

export default {
  data() {
    return {
      // form
      username: '',
      password: '',
      nickname: '',
      // log
      logMessage: '',
    };
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };

      const { data } = await registerUser(userData);
      console.log(data.username);

      this.logMessage = `${data.username}님이 가입되었습니다.`;
      this.initForm();
    },
    initForm() {
      this.username = '';
      this.password = '';
      this.nickname = '';
    },
  },
};
</script>

<style></style>
