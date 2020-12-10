<template>
  <div class="salonPage" v-if="game !== null">
    <b-tabs pills justified>
      <b-tab :title="$t('tabs.configurations')" active>
        <game-configurations-component
            :game="game"
        />
      </b-tab>
      <b-tab :title="$t('tabs.players')">
        <player-list-component
            :game="game"
        />
      </b-tab>
    </b-tabs>
    <b-button variant="danger" @click="leaveGame">{{ $t('actions.leave_game') }}</b-button>
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
        this.game = response.game;
      }).catch(() => {
        this.$root.$emit('session-expired');
      })
    },
    leaveGame () {
      gameService.leaveGame(sessionStorage.getItem('gameId'), sessionStorage.getItem('player')).then((response) => {
        if (response.status === 'success') {
          this.$router.push('/home');
        } else {
          console.log("error");
        }
      }).catch(() => {
        this.$root.$emit('session-expired');
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
