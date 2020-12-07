<template>
  <div class="vue-template">
    <form>
      <h4>Join Game</h4>
      <div class="form-group">
        <input
            v-model="pseudo"
            placeholder="Pseudo"
            class="form-control form-control-lg input-join"
        />
      </div>
      <div class="form-group">
        <input
            v-model="gameCode"
            placeholder="Game code"
            class="form-control form-control-lg input-join"
        />
      </div>
      <button
          v-on:click="joinGame"
          type="button"
          class="btn btn-outline-primary btn-lg btn-block col-12"
      >
        Join Game
      </button>
    </form>
    <b-alert
        style="margin-top: 3em"
        :show="dismissCountDown"
        dismissible
        :variant="alertType"
        @dismissed="dismissCountDown=0"
        @dismiss-count-down="countDownChanged"
    >
      <h5>{{alertMessage}}</h5>
      <b-progress
          :variant="alertType"
          :max="dismissSecs"
          :value="dismissCountDown"
          height="4px"
      ></b-progress>
    </b-alert>
  </div>
</template>

<script>
const gameServices = require('@/services/gameServices')
export default {
  name: "joinGameComponent",
  data () {
    return {
      gameCode: '',
      alertMessage: '',
      alertType: '',
      dismissSecs: 10,
      dismissCountDown: 0,
      pseudo: ''
    }
  },
  methods: {
    joinGame () {
      gameServices.joinGame(this.gameCode, this.pseudo).then((response) => {
        console.log(response);
        if (response.status === 'error') {
          this.alertMessage = response.message;
          this.alertType = 'danger'
          this.dismissCountDown = this.dismissSecs;
        }
      }).catch(() => {
        this.$root.$emit('session-expired')
      })
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    }
  }
}
</script>

<style scoped>
.input-join {
  margin-bottom: 0.5em;
}
</style>
