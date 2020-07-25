<template>
  <div class="graphs-container">
    <div v-for="(pastChart, index) in person.pastCharts" :key="index" class="graph">
      <p class="graph-title">{{pastChart.title}}</p>
      <iframe
        frameborder="0"
        allowtransparency="true"
        allowfullscreen="true"
        title="Data Visualization"
        marginheight="0"
        marginwidth="0"
        scrolling="no"
        style="display: block; width: 827px; height: 1196px; visibility: visible;"
        :src="pastChart.link"
      ></iframe>
    </div>
  </div>
</template>
<script>
export default {
  props: ["person"],
};
</script>
<style scoped>
</style>