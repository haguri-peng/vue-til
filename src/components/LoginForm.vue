<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">ID: </label>
          <input type="text" id="username" v-model="username" />
          <p class="validation-text">
            <span class="warning" v-if="!isUsernameValid && username">
              Please enter an email address
            </span>
          </p>
        </div>
        <div>
          <label for="password">Password: </label>
          <input type="text" id="password" v-model="password" />
        </div>
        <button
          type="submit"
          class="btn"
          :disabled="!isUsernameValid || !password"
        >
          Login
        </button>
        <p>{{ logMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script>
import { loginUser } from '@/api/index';
import { validateEmail } from '@/utils/validation';

export default {
  data() {
    return {
      // form
      username: '',
      password: '',
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
      };

      try {
        const { data } = await loginUser(userData);
        console.log(data);

        this.logMessage = `${data.user.username}님이 로그인되었습니다.\n3초 후에 Main 화면으로 이동합니다.`;

        setTimeout(() => {
          this.$store.commit('setUsername', data.user.username);
          this.$router.push('/main');
        }, 3000);
      } catch (err) {
        this.logMessage = err.response.data;
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
    },
  },
};
</script>

<style>
.btn {
  color: white;
}
</style>
