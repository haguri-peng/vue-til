<template>
  <header>
    <div>
      <router-link to="/" class="logo">
        TIL
        <span class="username" v-if="isLogin">by {{ username }}</span>
      </router-link>
    </div>
    <div class="navigations">
      <template v-if="isLogin">
        <a href="javascript: void(0)" @click="logoutUser" class="logout-button">
          로그아웃
        </a>
      </template>
      <template v-else>
        <router-link to="/login">로그인</router-link> |
        <router-link to="/signup">회원가입</router-link>
      </template>
    </div>
  </header>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapState(['username']),
    ...mapGetters(['isLogin']),
  },
  methods: {
    logoutUser() {
      this.$store.commit('clearUsername');
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #927dfc;
  z-index: 2;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
}
a {
  color: #dedede;
  font-size: 18px;
}
a.logo {
  font-size: 30px;
  font-weight: 900;
  color: white;
}
.logo > span {
  font-size: 14px;
  font-weight: normal;
}
.navigations a {
  margin-left: 10px;
}
.fixed {
  position: fixed;
  top: 0;
  width: 100%;
}
a.router-link-exact-active {
  color: white;
  font-weight: bold;
}
span.username {
  color: white;
}
.logout-button {
  font-size: 14px;
}
</style>
