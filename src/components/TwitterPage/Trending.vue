<template>
  <div class="trending">
    <input class="trending__search" placeholder="Search Twitter" type="search" />
    <div class="trending__list">
      <div class="trending__title">Trends for You</div>
      <button v-for="trend in trending" :key="trend.id" class="trending__item">
        <div>
          <div class="trending__item-title">
            {{ trend.top }}
          </div>
          <div class="trending__item-author">
            {{ trend.title }}
          </div>
        </div>
        <IconDots />
      </button>
    </div>
  </div>
</template>

<script>
import IconDots from "Icons/IconDots";
export default {
  components: {
    IconDots
  },
  data() {
    return {
      trending: [
        { top: "Trending in TX", title: "Gigi" },
        { top: "Music", title: "We Won" },
        { top: "Pop", title: "Blue Ivy" },
        { top: "Trending in US", title: "Denim Day" },
        { top: "Trending", title: "When Beyonce" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.trending {
  height: 100vh;
  overflow-y: auto;
  margin-top: 8px;
  &__search {
    @include font(14px, $grey-color1);
    @include trimOverflowText(100%);
    background: url("~@/assets/svg/search.svg") no-repeat center;
    background-color: $blue-color3;
    background-size: 14px;
    background-repeat: no-repeat;
    background-position: center left 22px;
    border: 1px solid transparent;
    height: 37px;
    outline: none;
    padding: 5px 12px 5px 47px;
    border-radius: 99px;
    letter-spacing: 0.4px;
    -moz-appearance: textfield;
    width: 100%;
    transition: background-color $transition/2, border-color $transition/2;
    &::placeholder {
      color: $grey-color1;
    }
  }
  &__list {
    display: flex;
    flex-direction: column;
    background: $blue-color4;
    margin-top: 16px;
    border-radius: 16px;
  }
  &__title {
    padding: 16px;
    letter-spacing: 0.6px;
    @include font(18px, $black-color1, 700);
    border-bottom: 1px solid $blue-color3;
  }
  &__item {
    border: none;
    outline: none;
    padding: 0;
    text-align: left;
    user-select: none;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    background: transparent;
    padding: 12px 16px;
    border-bottom: 1px solid $blue-color3;
    &:last-child {
      border: none;
    }
  }
  &__item-title {
    @include font(13px, $black-color1);
    margin-bottom: 5px;
  }
  &__item-author {
    @include font(15px, $black-color1, bold);
  }
}
</style>
