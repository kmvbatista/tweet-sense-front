<template>
  <nav class="nav-bar">
    <router-link :to="{name: 'home'}" class="tab__link">
      <div class="button" :class="{selected: selected==='home'}">Home</div>
    </router-link>
    <router-link :to="{name: 'about'}" class="tab__link">
      <div class="button" :class="{selected: selected==='about'}">About</div>
    </router-link>
    <router-link :to="{name: 'choose-person'}" class="tab__link">
      <div class="button" :class="{selected: selected==='choose-person'}">TweetLytics</div>
    </router-link>
  </nav>
</template>
<script>
export default {
  props: ["selected"],
};
</script>
<style scoped>
.nav-bar {
  width: 100%;
  background-color: var(--color-green);
  display: flex;
  justify-content: center;
  margin-bottom: 2em;
}
.button {
  color: white;
  padding: 0.5em;
  position: relative;
}
:link {
  margin: 0.5em 1em;
}
.button:hover {
  transform: scale(1.05);
}
.button::before {
  content: "";
  transform-origin: bottom;
  transition: transform 0.3s, width 0.2s cubic-bezier(1, 0, 0, 1) 0.2s,
    background-color 0.3s;
  background-color: white;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 3px;
  transform: scaleY(0);
}
.button:hover::before,
.selected::before {
  width: 100%;
  transform: scaleY(1);
}
</style>