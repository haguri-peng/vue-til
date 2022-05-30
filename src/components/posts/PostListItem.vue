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
    </div>
  </li>
</template>

<script>
import moment from 'moment-timezone';

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
  },
  created() {
    moment.locale('ko');
  },
};
</script>

<style></style>
