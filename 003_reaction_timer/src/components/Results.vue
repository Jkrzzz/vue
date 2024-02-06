<template>
  <div>
    <p>Reaction Time: {{ score }} ms</p>
    <p class="rank">{{ rank }}</p>
  </div>
</template>

<script>
export default {
  name: "ResultTime",
  props: ["score"],
  data() {
    return {
      rank: null,
    };
  },
  mounted() {
    if (this.score < 250) {
      this.rank = "ninja Finger";
    } else if (this.score < 400) {
      this.rank = "Rapid";
    } else {
      this.rank = "snail pace...";
    }
  },
};
</script>

<style>
.rank {
  font-size: 1.4rem;
  color: #0faf87;
  font-weight: bold;
}
</style>
