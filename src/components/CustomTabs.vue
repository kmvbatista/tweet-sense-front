<template>
  <!-- <past-infos />
  <predictions />-->
  <nav class="navigation">
    <router-link :to="{name: 'past'}" class="tab__link" @click.native="setSelectedTab('past')">
      <div class="tab" :class="{selected: tabSelected==='past'}">Past Informations</div>
    </router-link>
    <router-link
      :to="{name: 'predictions'}"
      class="tab__link"
      @click.native="setSelectedTab('predictions')"
    >
      <div class="tab" :class="{selected: tabSelected==='predictions'}">Predictions</div>
    </router-link>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      tabSelected: "past",
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.tabSelected = tab;
    },
  },
};
</script>
<style scoped>
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
.tab:hover .selected {
  background-color: tomato;
}
</style>