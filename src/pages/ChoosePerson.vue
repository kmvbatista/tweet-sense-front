<template>
  <div>
    <second-header selected="choose-person" />
    <div class="main-page">
      <div class="central-text-box">
        <h1 class="title">INFLUENTIAL PEOPLE</h1>
        <div class="horizontal-band"></div>
        <h3 class="subtitle">CHOOSE ONE TO SEE HIS TWEETS IMPACTS</h3>
      </div>
      <div class="people-list">
        <person-card
          v-for="person in people"
          :key="person.name"
          :name="person.name"
          :photoUrl="person.photoUrl"
        />
      </div>
    </div>
  </div>
</template>
<script>
import influentialPeople from "@/assets/influentialPeople.json";
import PersonCard from "../components/PersonCard";
import SecondHeader from "../components/SecondHeader";

export default {
  components: {
    PersonCard,
    SecondHeader,
  },
  data() {
    return {
      people: [],
    };
  },
  created() {
    this.people = influentialPeople;
  },
};
</script>
<style scoped>
.main-page {
  min-height: 100vh;
  width: 55em;
  max-width: 100%;
  margin: 0 auto;
}
.central-text-box {
  width: unset;
}
.people-list {
  margin-top: 2em;
  display: grid;
  gap: 2em;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
}
.people-lis:hover {
  background-color: var(--color-green);
  opacity: 0.2;
}
.title {
  color: var(--color-green);
  font-size: 2em;
  word-spacing: normal;
}
.horizontal-band {
  background-color: var(--color-green);
}
.subtitle {
  color: var(--color-green);
  font-size: 1em;
}
@media screen and (max-width: 600px) {
  .people-list {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 1em;
    font-size: 1.2em;
  }
}
</style>