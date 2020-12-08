<template>
  <div class="salonPage">
    <b-tabs pills justified>
      <b-tab title="Configuration" active>
        <game-configurations-component
            :game="game"
        />
      </b-tab>
      <b-tab title="Players">
        <player-list-component
            :game="game"
        />
      </b-tab>
    </b-tabs>
    <b-button variant="danger">Leave Game</b-button>
  </div>
</template>

<script>
import gameService from '@/services/gameServices'
import GameConfigurationsComponent from "@/components/shared/gameConfigurationsComponent";
import PlayerListComponent from "@/components/shared/playerListComponent";
export default {
  name: "SalonPage",
  components: {PlayerListComponent, GameConfigurationsComponent},
  data () {
    return {
      game: null
    }
  },
  mounted () {
    this.loadData();
  },
  methods: {
    loadData () {
      gameService.getGameDetails(sessionStorage.getItem('gameId')).then((response) => {
        this.game = response.game
      }).catch(() => {
        this.$root.$emit('session-expired')
      })
    }
  }
}
</script>

<style scoped>
.salonPage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
