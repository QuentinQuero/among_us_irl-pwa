<template>
  <b-tabs pills justified>
    <b-tab title="Missions" active>
      <mission-tab-component/>
    </b-tab>
    <b-tab title="Players">
      <player-tap-component/>
    </b-tab>
  </b-tabs>
</template>

<script>
import MissionTabComponent from "@/components/homeModule/Components/inGameComponent/missionTabComponent";
import PlayerTapComponent from "@/components/homeModule/Components/inGameComponent/playerTapComponent";
export default {
  name: "InGamePage",
  components: {PlayerTapComponent, MissionTabComponent}
}
</script>

<style scoped>

</style>
