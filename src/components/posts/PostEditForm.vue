<template>
  <div class="contents">
    <h1 class="page-header">Edit Post</h1>
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
          Edit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import { fetchPost, editPost } from '@/api/posts';

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
        await editPost(this.$route.params.id, postData);
        this.isLoading = false;
        this.$router.push('/main');
      } catch (err) {
        console.error(err);
        this.logMessage =
          err.response.data.error.message || err.response.data.message;
      }
    },
  },
  async created() {
    try {
      this.isLoading = true;
      var { data } = await fetchPost(this.$route.params.id);

      this.title = data.title;
      this.contents = data.contents;
    } catch (err) {
      console.error(err);
      alert(err.response.data.message);
    } finally {
      this.isLoading = false;
    }
  },
};
</script>

<style scoped>
.form-wrapper .form {
  width: 100%;
}
</style>
