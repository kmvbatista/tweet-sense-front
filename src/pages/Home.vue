<template>
  <div class="home-main">
    <first-header selected="home" />
    <img class="detail left" src="@/assets/yellow-square.svg" alt="detail" />
    <img class="detail right" src="@/assets/yellow-square.svg" alt="detail" />
    <div class="central-text-box">
      <h1 class="title">TWEET SENSE</h1>
      <div class="horizontal-band"></div>
      <h3 class="subtitle">TWEETS WITH AN IMPACT</h3>
    </div>
  </div>
</template>
<script>
import FirstHeader from "../components/FirstHeader";
export default {
  components: {
    FirstHeader,
  },
};
</script>
<style>
.home-main {
  background-image: linear-gradient(
      var(--color-green),
      rgba(40, 180, 133, 0.801)
    ),
    url("../assets/city.jpg");
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: flex;
  position: fixed;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}
.button {
  /* color: var(--color-green); */
}
.button::before {
  /* background-color: var(--color-green); */
}
.detail {
  position: absolute;
  height: 40%;
  width: auto;
  top: 50%;
  transform: translateY(-50%);
}
.right {
  transform: translate(50%, -50%);

  right: 0;
}
.left {
  left: 0;
  transform: translate(-50%, -50%);
}
.central-text-box {
  margin: auto;
  max-width: 100vw;
  width: 41em;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  font-size: 5em;
  color: var(--color-yellow);
  word-spacing: -13px;
}
.subtitle {
  color: white;
  margin-top: 1em;
  font-size: 1.5em;
}
.horizontal-band {
  width: 100%;
  background-color: var(--color-yellow);
  height: 9px;
}
@media only screen and (max-width: 600px) {
  .detail {
    height: 30%;
  }
  .right {
    top: 0;
    right: 50%;
    display: none;
  }
  .left {
    top: 100%;
    left: 50%;
  }
}
</style>