<template>
  <div class="defaultLayout">
    <b-button
        style="margin: 2vh"
        v-b-toggle.sidebar
    >
      <b-icon-sliders></b-icon-sliders>
    </b-button>
    <b-sidebar
        id="sidebar"
        title="Among us irl"
        shadow
        backdrop
        width="65vw"
    >
      <div>
        <drawer-link-list/>
      </div>
    </b-sidebar>
    <slot/>
  </div>
</template>

<script>
import DrawerLinkList from "@/components/shared/drawerLinkList";
export default {
name: "online",
  components: {DrawerLinkList}
}
</script>

<style scoped>

</style>
