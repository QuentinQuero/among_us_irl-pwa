<template>
  <div class="linkList">
    <b-button
      size="sm"
      variant="ligth"
      @click="logout"
    >
      {{ $t('actions.log_out') }}
    </b-button>
    <b-button
      size="sm"
      variant="light"
    >
      {{ $t('actions.games') }}
    </b-button>
  </div>
</template>

<script>
export default {
  name: "drawerLinkList",
  methods: {
    logout () {
      this.$root.$emit('user-logout');
    }
  }
}
</script>

<style scoped>
.linkList {
  display: flex;
  flex-direction: column;
  margin: 1em;
}
</style>
