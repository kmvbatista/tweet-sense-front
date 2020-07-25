<template>
  <router-link :to="`impacts/${name}`">
    <div class="card">
      <div class="photo" :style="`background-image: url(${photoUrl});`" />
      {{name}}
    </div>
  </router-link>
</template>
<script>
export default {
  props: ["photoUrl", "name"],
};
</script>
<style scoped>
a {
  text-decoration: none;
  color: var(--color-green);
}
.card {
  display: flex;
  width: 100%;
  align-items: center;
  padding: 2px;
  transition: 0.2s;
  cursor: pointer;
  border: 2px solid transparent;
}
.card:hover {
  border-radius: 10px;
  transform: scale(1.02);
  border: 2px solid var(--color-green);
}
.photo {
  border-radius: 50%;
  height: 5em;
  width: 5em;
  background-size: cover;
  background-repeat: no-repeat;
  margin-right: 10px;
  border: 1px var(--color-green) solid;
}
</style>