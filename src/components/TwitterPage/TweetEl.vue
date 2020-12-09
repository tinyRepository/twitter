<template>
  <div class="tweet">
    <img :src="`${tweet.src}`" class="tweet__avatar" :title="tweet.name" />
    <div class="tweet__content">
      <div class="tweet__content-top">
        <div class="tweet__content-data bold-text">{{ tweet.name }}</div>
        <div class="tweet__content-data">{{ tweet.handle }}</div>
        <div class="tweet__content-data">{{ tweet.time }}</div>
      </div>
      <p class="tweet__content-text">
        {{ tweet.text }}
      </p>
      <div class="tweet__content-icons">
        <div class="icon-block">
          <IconComments />
          <div>{{ tweet.comments }}</div>
        </div>
        <div class="icon-block">
          <IconRetweets />
          <div>{{ tweet.retweets }}</div>
        </div>
        <div class="icon-block">
          <IconLike />
          <div>{{ tweet.like }}</div>
        </div>
        <IconExport />
      </div>
    </div>
  </div>
</template>

<script>
import IconLike from "Icons/IconLike";
import IconExport from "Icons/IconExport";
import IconRetweets from "Icons/IconRetweets";
import IconComments from "Icons/IconComments";

export default {
  components: {
    IconLike,
    IconExport,
    IconRetweets,
    IconComments
  },
  props: {
    tweet: Object
  }
};
</script>

<style lang="scss" scoped>
.tweet {
  padding: 0 15px;
  border-bottom: 1px solid $blue-color3;
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  &:last-child {
    border-bottom: none;
  }
  &__avatar {
    border-radius: 50%;
    width: 49px;
    height: 49px;
    object-fit: cover;
  }
  &__content-top {
    display: flex;
    @include font(14px, $grey-color3);
  }
  &__content {
    margin: 0 15px 10px;
    width: 100%;
    @include font(15px);
  }
  &__content-icons {
    display: flex;
    justify-content: space-between;
  }
  &__content-text {
    word-break: break-all;
    @include font(15px);
  }
  &__content-data {
    margin-right: 5px;
  }
}
.icon-block {
  display: flex;
  align-content: center;
  cursor: pointer;
  svg {
    margin-right: 5px;
    margin-top: 1px;
  }
}
.bold-text {
  font-weight: bold;
}
</style>
