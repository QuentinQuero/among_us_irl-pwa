<template>
  <div class="vue-template">
    <form>
      <h4>{{ $t('pages.title.join_game') }}</h4>
      <div class="form-group">
        <input
            v-model="pseudo"
            :placeholder="$t('forms.pseudo')"
            class="form-control form-control-lg input-join"
        />
      </div>
      <div class="form-group">
        <input
            v-model="gameCode"
            :placeholder="$t('forms.game_code')"
            class="form-control form-control-lg input-join"
        />
      </div>
      <b-button
          v-on:click="joinGame"
          type="button"
          variant="outline-primary col-12"
          size="lg"
      >
        {{ $t('actions.join_game') }}
      </b-button>
    </form>
    <b-alert
        style="margin-top: 3em"
        :show="dismissCountDown"
        dismissible
        :variant="alertType"
        @dismissed="dismissCountDown=0"
        @dismiss-count-down="countDownChanged"
    >
      <h5>{{ $t('errors.' + alertMessage) }}</h5>
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
        if (response.status === 'error') {
          this.alertMessage = response.message;
          this.alertType = 'danger'
          this.dismissCountDown = this.dismissSecs;
        } else {
          sessionStorage.setItem('player', response.player);
          sessionStorage.setItem('game', response.game);
          this.$router.push('home')
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
