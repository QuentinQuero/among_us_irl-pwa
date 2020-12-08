<template>
  <b-card
      class="gameConfigurations"
      title="Game configurations"
  >
    <b-card-text>
      <ul class="configList">
        <li>Cooldow: {{game.configurations.cooldown}}</li>
        <li>Players number: {{game.configurations.nbPlayers}}</li>
        <li>Number short missions: {{game.configurations.nbShortMissions}}</li>
        <li>Number normal missions: {{game.configurations.nbNormalMissions}}</li>
        <li>Number Long missions: {{game.configurations.nbLongMissions}}</li>
        <li>Number imposter: {{game.configurations.nbImposter}}</li>
        <li>Name: {{game.configurations.name}}</li>
      </ul>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: "gameConfigurationsComponent",
  props: ['game']
}
</script>

<style scoped>
.gameConfigurations {
  background-color: dimgray;
  color: white;
  border: none;
  text-align: center;
}

.configList {
  list-style-type: none;
  text-align: justify;
}
</style>
