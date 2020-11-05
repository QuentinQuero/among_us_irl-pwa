<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>

export default {
  name: 'App',
  computed: {
    layout() {
      console.log(this.$route.meta.layout);
      return (this.$route.meta.layout.name || 'offline') + '-layout'
    }
  }
}
</script>

<style>
</style>
