<template>
  <div class="contents">
    <h1 class="page-header">Create Post</h1>
    <div class="form-wrapper">
      <loading-spinner v-if="isLoading"></loading-spinner>
      <p v-else class="log">
        {{ logMessage }}
      </p>
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title">Title</label>
          <input type="text" id="title" v-model="title" />
        </div>
        <div>
          <label for="contents">Contents</label>
          <textarea id="contents" rows="5" v-model="contents" />
          <p class="validation-text warning" v-show="!title">
            Title is required.
          </p>
          <p class="validation-text warning" v-show="!contents">
            Contents is required.
          </p>
          <p class="validation-text warning" v-show="!isContentsValid">
            Contents must be less than 200.
          </p>
        </div>
        <button
          type="submit"
          class="btn"
          :disabled="isLoading || !title || !contents || !isContentsValid"
        >
          Create
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import { createPost } from '@/api/posts';

export default {
  components: {
    LoadingSpinner,
  },
  data() {
    return {
      title: '',
      contents: '',
      logMessage: '',
      isLoading: false,
    };
  },
  computed: {
    isContentsValid() {
      return this.contents.length <= 200;
    },
  },
  methods: {
    async submitForm() {
      const postData = {
        title: this.title,
        contents: this.contents,
      };

      try {
        this.isLoading = true;
        await createPost(postData);
        this.isLoading = false;
        // const response = await createPost(postData);
        // console.log(response);
        this.$router.push('/main');
      } catch (err) {
        console.error(err);
        this.logMessage =
          err.response.data.error.message || err.response.data.message;
      }
    },
  },
};
</script>

<style scoped>
.form-wrapper .form {
  width: 100%;
}
</style>
