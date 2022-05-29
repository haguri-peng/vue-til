<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>
      <ul>
        <li v-for="postItem in postItems" :key="postItem._id">
          <div class="post-title">
            {{ postItem.title }}
          </div>
          <div class="post-contents">
            {{ postItem.contents }}
          </div>
          <div class="post-time">
            {{ getCreatedTime(postItem.createdAt) }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import moment from 'moment-timezone';
import { fetchPosts } from '@/api/index';

export default {
  data() {
    return {
      postItems: [],
    };
  },
  methods: {
    async fetchData() {
      const { data } = await fetchPosts();
      console.log(data);

      this.postItems = data.posts;
    },
    getCreatedTime(isoDate) {
      let newDate = moment
        .utc(isoDate)
        .tz('Asia/Seoul')
        .format('YYYY/MM/DD a h:mm:ss');
      return newDate;
    },
  },
  created() {
    this.fetchData();

    moment.locale('ko');
  },
};
</script>

<style></style>
