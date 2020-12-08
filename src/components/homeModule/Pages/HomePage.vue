<template>
 <div class="home-page">
   <join-game-component/>
 </div>
</template>

<script>
import playerService from "@/services/playerServices"
import JoinGameComponent from "@/components/homeModule/Components/joinGameComponent";
export default {
  name: "HomePage",
  components: {JoinGameComponent},
  mounted () {
    this.getUserGame();
  },
  methods: {
    getUserGame () {
      playerService.getUserPlayerAndActiveGame().then((response) => {
        sessionStorage.setItem('gameStatus', response.game.status);
        sessionStorage.setItem('gameId', response.game._id);
        sessionStorage.setItem('player', response.player._id);
        this.makeRouting();
      }).catch((error) => {
        if (error === 'User not logged') {
          this.$root.$emit('user-logout');
        }
      })
    },
    makeRouting () {
      let gameStatus = sessionStorage.getItem('gameStatus');
      // Rooting to game page
      switch (gameStatus) {
        case 'inGame':
          console.log('in game');
          this.$router.push('inGame');
          break;
        case 'init':
          console.log('init')
          this.$router.push('salon');
          break;
        default:
          console.log('no game');
          sessionStorage.removeItem('gameStatus');
          sessionStorage.removeItem('player');
          sessionStorage.removeItem('gameId');
      }
    }
  }

}
</script>

<style scoped>
.home-page {
  margin: 2em;
}
</style>
