<template>
  <b-card
    class="gamePlayers"
    title="Game player list"
  >
    <b-card-text>
      <ul class="playerList">
        <li v-for="(player, key) in game.players" :key="key">{{player.pseudo}}</li>
      </ul>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: "playerListComponent",
  props: ['game']
}
</script>

<style scoped>
.gamePlayers {
  background-color: dimgray;
  color: white;
  border: none;
  text-align: center;
}
.playerList {
  list-style-type: none;
  text-align: justify;
}
</style>
