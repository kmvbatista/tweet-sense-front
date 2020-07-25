<template>
  <div class="graphs-container">
    <div v-for="(prediction, index) in person.predictionsCharts" :key="index" class="graph">
      <p class="graph-title">{{prediction.title}}</p>
      <iframe
        frameborder="0"
        allowtransparency="true"
        allowfullscreen="true"
        title="Data Visualization"
        marginheight="0"
        marginwidth="0"
        scrolling="no"
        style="display: block; width: 827px; height: 1196px; visibility: visible;"
        :src="prediction.link"
      ></iframe>
    </div>
  </div>
</template>
<script>
export default {
  props: ["person"],
};
</script>
<style>
.graphs-container {
  margin: 2em 0;
}
.graph-title {
  text-align: center;
}
.graphs-container > * {
  margin-bottom: 4em;
}
</style>