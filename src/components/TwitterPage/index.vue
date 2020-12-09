<template>
  <div class="twitter">
    <SidePanel />
    <Tweets />
    <Trending />
  </div>
</template>

<script>
import Tweets from "./Tweets.vue";
import SidePanel from "./SidePanel.vue";
import Trending from "./Trending.vue";

export default {
  components: { SidePanel, Tweets, Trending }
};
</script>

<style lang="scss" scoped>
.twitter {
  width: 1280px;
  margin: auto;
  display: grid;
  grid-column-gap: 30px;
  grid-template-columns: 1fr 600px 1fr;
}
</style>
