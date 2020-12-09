<template>
  <b-card
      class="gameConfigurations"
      :title="$t('pages.title.game_configurations')"
  >
    <b-card-text>
      <ul class="configList">
        <li>{{ $t('configurations.name') }}: {{game.configurations.name}}</li>
        <li>{{ $t('configurations.cooldown') }}: {{game.configurations.cooldown}}</li>
        <li>{{ $t('configurations.players_number') }}: {{game.configurations.nbPlayers}}</li>
        <li>{{ $t('configurations.number_short_missions') }}: {{game.configurations.nbShortMissions}}</li>
        <li>{{ $t('configurations.number_normal_missions') }}: {{game.configurations.nbNormalMissions}}</li>
        <li>{{ $t('configurations.number_long_missions') }}: {{game.configurations.nbLongMissions}}</li>
        <li>{{ $t('configurations.number_imposter') }}: {{game.configurations.nbImposter}}</li>
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
