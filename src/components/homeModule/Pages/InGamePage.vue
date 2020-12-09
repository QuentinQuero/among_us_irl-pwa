<template>
  <b-tabs pills justified>
    <b-tab :title="$t('tabs.missions')" active>
      <mission-tab-component/>
    </b-tab>
    <b-tab :title="$t('tabs.players')">
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
