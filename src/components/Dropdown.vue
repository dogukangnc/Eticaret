<template>
  <div class="menu-item" @click="isOpen = !isOpen">
    <router-link :to="'/' + title">{{ title }}</router-link>
    <svg viewBox="0 0 1030 638" width="10">
      <path
        d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z"
        fill="#FFF"
      ></path>
    </svg>
    <transition name="fade" appear>
      <div class="sub-menu" v-if="isOpen">
        <div
          v-for="item in items"
          :key="item.id"
          class="menu-item"
          v-on:click="Category(item.id)"
        >
          <router-link :to="'/' + title + '/' + item.id">{{
            item.name
          }}</router-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "dropdown",

  props: ["title", "items"],
  data() {
    return {
      cat_id: "10",
      isOpen: false,
    };
  },

  methods: {
    Category(catid) {
      localStorage.setItem("foo-key", catid);
      window.dispatchEvent(
        new CustomEvent("foo-key-localstorage-changed", {
          detail: {
            storage: localStorage.getItem("foo-key"),
          },
        })
      );
      this.$emit("data", catid);
    },
  },
};
</script>

<style>
nav .menu-item svg {
  width: 10px;
  margin-left: 10px;
}
nav .menu-item .sub-menu {
  border-width: 1px solid whitesmoke;
  flex-wrap: wrap;
  display: flex;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>