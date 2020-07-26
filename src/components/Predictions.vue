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
iframe {
  display: block;
  width: 1020px;
  height: 1196px;
  visibility: visible;
}
.graphs-container {
  margin: 2em 0;
}
.graph-title {
  text-align: center;
}
.graphs-container > * {
  margin-bottom: 4em;
}
@media only screen and (max-width: 600px) {
  .graphs-container {
    width: 100%;
    overflow: scroll;
  }
}
</style>