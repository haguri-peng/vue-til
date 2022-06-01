<template>
  <li>
    <div class="post-title">
      {{ postItem.title }}
    </div>
    <div class="post-contents">
      {{ postItem.contents }}
    </div>
    <div class="post-time">
      {{ getCreatedTime(postItem.createdAt) }}
      <i class="icon ion-md-create"></i>
      <i class="icon ion-md-trash" @click="deleteItem"></i>
    </div>
  </li>
</template>

<script>
import moment from 'moment-timezone';
import { deletePost } from '@/api/posts';

export default {
  props: {
    postItem: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getCreatedTime(isoDate) {
      let newDate = moment
        .utc(isoDate)
        .tz('Asia/Seoul')
        .format('YYYY/MM/DD a h:mm:ss');
      return newDate;
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
  created() {
    moment.locale('ko');
  },
};
</script>

<style></style>
