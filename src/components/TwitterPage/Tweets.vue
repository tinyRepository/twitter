<template>
  <main class="tweets">
    <div>
      <h1 class="tweets__title">Home</h1>
      <div class="tweets__form-block">
        <img src="jason.jpeg" class="tweets__avatar" />
        <form @submit.prevent="addNewTweet" class="tweets__form">
          <textarea v-model="tweetText" placeholder="What's happening?" class="tweets__textarea" />
          <div class="tweets__form-bottom">
            <div class="tweets__form-icons">
              <IconGif class="tweets__icon" />
              <IconImage class="tweets__icon" />
              <IconSmile class="tweets__icon" />
              <IconDiagram class="tweets__icon" />
            </div>
            <button type="submit" class="tweets__button" :disabled="!tweetText.length">
              Tweet
            </button>
          </div>
        </form>
      </div>
      <TweetEl v-for="tweet in tweets" :key="tweet.id" :tweet="tweet" />
    </div>
  </main>
</template>

<script>
import TweetEl from "./TweetEl";
import IconGif from "Icons/IconGif";
import IconImage from "Icons/IconImage";
import IconSmile from "Icons/IconSmile";
import IconDiagram from "Icons/IconDiagram";

export default {
  components: {
    IconGif,
    IconImage,
    IconSmile,
    IconDiagram,
    TweetEl
  },
  data: () => ({
    tweetText: "",
    tweets: [
      {
        src: "elon.jpg",
        name: "Elon Musk",
        handle: "@teslaBoy",
        time: "20 min",
        text: "Should I just quarantine on mars??",
        comments: "1,000",
        retweets: "550",
        like: "1,000,003"
      },
      {
        src: "kevin.jpg",
        name: "Kevin Hart",
        handle: "@miniRock",
        time: "55 min",
        text: "Should me and the rock do another sub-par movie together????",
        comments: "2,030",
        retweets: "50",
        like: "20,003"
      },
      {
        src: "elon.jpg",
        name: "Elon Musk",
        handle: "@teslaBoy",
        time: "1.4 hr",
        text: "Haha just made a flame thrower. Shld I sell them?",
        comments: "100,000",
        retweets: "1,000,002",
        like: "5,000,003"
      },
      {
        src: "elon.jpg",
        name: "Elon Musk",
        handle: "@teslaBoy",
        time: "1.4 hr",
        text: "Just did something crazyyyyyyy",
        comments: "100,500",
        retweets: "1,000,032",
        like: "5,000,103"
      }
    ]
  }),
  computed: {
    postData() {
      const data = {
        text: this.tweetText,
        src: "jason.jpeg",
        name: "Jason Statham",
        handle: "@realjstatham",
        time: "1s",
        comments: 0,
        retweets: 0,
        like: 0
      };
      return data;
    }
  },
  methods: {
    addNewTweet() {
      this.tweets.unshift(this.postData);
      this.tweetText = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.tweets {
  height: 100vh;
  overflow-y: auto;
  border: 1px solid $blue-color3;
  border-top: 0;
  border-bottom: 0;
  &__title {
    padding: 15px;
    border-bottom: 1px solid $blue-color3;
    @include font(19px, $black-color1, bold);
  }
  &__avatar {
    border-radius: 50%;
    width: 49px;
    height: 49px;
    object-fit: cover;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 0px 2px inset;
  }
  &__button {
    border: none;
    outline: none;
    background: $blue-color5;
    cursor: pointer;
    border-radius: 99px;
    user-select: none;
    padding: 11px 19px;
    @include font(15px, $white-color1, bold);
    &[disabled] {
      opacity: 0.5;
    }
  }
  &__textarea {
    width: 100%;
    resize: none;
    outline: none;
    border: none;
    @include font(19px);
    margin-left: 15px;
    padding-right: 30px;
  }
  &__form-block {
    border-bottom: 10px solid $blue-color3;
    margin-bottom: 10px;
    padding-bottom: 10px;
    padding: 0 15px;
    display: flex;
    flex-direction: row;
  }
  &__form {
    width: 100%;
  }
  &__form-icons {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 20px;
  }
  &__icon {
    margin-right: 10px;
    cursor: pointer;
  }
  &__form-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
  }
  &__followings {
    padding-top: 10px;
  }
}
</style>
