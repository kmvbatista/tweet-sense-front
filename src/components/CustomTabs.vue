<template>
  <div>
    <nav class="navigation">
      <div class="tab__link" @click="setSelectedTab('past')">
        <div class="tab" :class="{selected: tabSelected==='past'}">Past Informations</div>
      </div>
      <div class="tab__link" @click="setSelectedTab('predictions')">
        <div class="tab" :class="{selected: tabSelected==='predictions'}">Predictions</div>
      </div>
    </nav>
    <div class="tab-content">
      <past-infos v-show="tabSelected==='past'" :person="person" />
      <predictions v-show="tabSelected==='predictions'" :person="person" />
    </div>
  </div>
</template>
<script>
import PastInfos from "./PastInformations";
import Predictions from "./Predictions";
export default {
  data() {
    return {
      tabSelected: "past",
    };
  },
  props: ["person"],
  components: {
    PastInfos,
    Predictions,
  },
  methods: {
    setSelectedTab(tab) {
      this.tabSelected = tab;
    },
  },
};
</script>
<style scoped>
.tab-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
:link {
  text-decoration: none;
}
link,
:visited {
  text-decoration: none;
  display: block;
  z-index: 10;
  background-color: transparent;
  text-align: center;
  color: var(--color-primary);
  padding: 10px 10px;
}

.navigation {
  display: flex;
  width: fit-content;
  margin: 0 auto;
}

.tab {
  position: relative;
  cursor: pointer;
  padding: 5px 1em;
  transition: color 0.2s;
}

.tab::before {
  content: "";
  transform-origin: bottom;
  transition: transform 0.3s, width 0.2s cubic-bezier(1, 0, 0, 1) 0.2s,
    background-color 0.3s;
  background-color: var(--color-green);
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 3px;
  transform: scaleY(0);
  z-index: -2;
}
.tab__link:hover > *,
.selected {
  color: var(--color-green);
}
.tab__link:hover {
  transform: scale(1.01);
}
.selected::before {
  width: 100%;
  transform: scaleY(1);
}
</style>