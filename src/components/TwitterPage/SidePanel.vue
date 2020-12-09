<template>
  <header class="side-panel">
    <div class="side-panel__list">
      <router-link to="/" class="side-panel__logo" />
      <div class="side-panel__list-items">
        <button v-for="tab in tabs" :key="tab.id" class="side-panel__button">
          <component :is="tab.icon" class="side-panel__icon" />
          <p class="side-panel__item-text">
            {{ tab.title }}
          </p>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    tabs() {
      const result = [];
      result.push({
        title: "Home",
        icon: () => import("Icons/IconHome.vue"),
        id: "home"
      });
      result.push({
        title: "Explore",
        icon: () => import("Icons/IconExplore.vue"),
        id: "explore"
      });
      result.push({
        title: "Notifications",
        icon: () => import("Icons/IconBell.vue"),
        id: "notifications"
      });
      result.push({
        title: "Messages",
        icon: () => import("Icons/IconMessage.vue"),
        id: "messages"
      });
      result.push({
        title: "Profile",
        icon: () => import("Icons/IconProfile.vue"),
        id: "profile"
      });
      result.push({
        title: "More",
        icon: () => import("Icons/IconMore.vue"),
        id: "more"
      });
      return result;
    }
  }
};
</script>

<style lang="scss" scoped>
.side-panel {
  margin-top: 9px;
  &__list {
    display: flex;
    flex-direction: column;
  }
  &__logo {
    background: url("~@/assets/svg/logo.svg") no-repeat center;
    background-size: 30px;
    width: 46px;
    height: 46px;
    padding: 10px;
    border-radius: 50%;
    transition: background-color $transition/2;
    &:hover {
      background-color: $blue-color2;
    }
  }
  &__list-items {
    display: flex;
    flex-direction: column;
  }
  &__button {
    border: none;
    outline: none;
    padding: 0;
    text-align: left;
    background: transparent;
    cursor: pointer;
    user-select: none;
    padding: 10px 16px;
    border-radius: 99px;
    margin-right: auto;
    margin-bottom: 12px;
    display: flex;
    height: 46px;
    transition: background $transition/2;
    align-items: center;
    &:hover {
      background: $blue-color2;
      p {
        color: $blue-color1;
      }
      svg {
        fill: $blue-color1;
      }
    }
  }
  &__icon {
    transition: fill $transition/2;
  }
  &__item-text {
    margin-left: 18px;
    @include font(19px, $black-color1, 600);
    transition: color $transition/2;
  }
}
</style>
