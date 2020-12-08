<template>
  <div class="inputAndButton">
    <input
      :placeholder="placeholder"
      v-model="value"
    />
    <b-button variant="primary" @click="validate">Validate</b-button>
  </div>
</template>

<script>
export default {
  name: "inputAndButton",
  props: ['placeholder'],
  data () {
    return {
      value: ''
    }
  },
  methods: {
    validate () {
      this.$emit("send", this.value);
      this.value = ''
    }
  }
}
</script>

<style scoped>
.inputAndButton {
  display: flex;
}
</style>
