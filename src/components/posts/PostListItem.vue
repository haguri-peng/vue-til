<template>
  <li>
    <div class="post-title">
      {{ postItem.title }}
    </div>
    <div class="post-contents">
      {{ postItem.contents }}
    </div>
    <div class="post-time">
      {{ createdFormatDate }}
      <i class="icon ion-md-create" @click="routeEditPage"></i>
      <i class="icon ion-md-trash" @click="deleteItem"></i>
    </div>
  </li>
</template>

<script>
import { formatDate } from '@/utils/filters';
import { deletePost } from '@/api/posts';

export default {
  props: {
    postItem: {
      type: Object,
      required: true,
    },
  },
  computed: {
    createdFormatDate() {
      return formatDate(this.postItem.createdAt);
    },
  },
  methods: {
    routeEditPage() {
      this.$router.push(`/post/${this.postItem._id}`);
    },
    async deleteItem() {
      if (!confirm('Do you want to delete it?')) return;

      try {
        await deletePost(this.postItem._id);
        this.$emit('refresh');
      } catch (err) {
        console.error(err);
        alert(err.response.data.message);
      }
    },
  },
};
</script>

<style></style>
