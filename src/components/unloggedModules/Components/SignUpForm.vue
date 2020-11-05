<template>
  <div class="vue-tempalte">
    <form>
      <h3>Sign Up</h3>

      <div class="form-group">
        <label>Email address</label>
        <input
            v-model="email"
            type="email"
            class="form-control form-control-lg"
            @blur="checkMail()"
        />
      </div>

      <div class="form-group">
        <label>Password</label>
        <input
            v-model="password"
            type="password"
            class="form-control form-control-lg"
        />
      </div>

      <div class="form-group">
        <label>Confirm your password</label>
        <input
            v-model="confirmPassword"
            type="password"
            class="form-control form-control-lg"
        />
      </div>

      <button
          @click="signup()"
          :disabled="!goodData"
          type="submit"
          class="btn btn-dark btn-lg btn-block"
      >
        Sign Up
      </button>
      <p class="forgot-password text-right">
        Already registered
        <router-link :to="{name: 'login'}">sign in?</router-link>
      </p>
    </form>
    <b-alert
        style="margin-top: 3em"
        :show="dismissCountDown"
        dismissible
        :variant="alertType"
        @dismissed="dismissCountDown=0"
        @dismiss-count-down="countDownChanged"
    >
      <h4>{{alertMessage}}</h4>
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
const userService = require('../../../services/userServices');
export default {
  name: "SignUpForm",
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      isUsed: true,
      alertMessage: '',
      alertType: '',
      dismissSecs: 10,
      dismissCountDown: 0,
    }
  },
  computed: {
    goodData () {
      return (this.email !== '' && this.password !== '' && this.confirmPassword !== '') && (this.password === this.confirmPassword) && !this.isUsed
    }
  },
  methods: {
    checkMail () {
      userService.isUsedEmail(this.email).then((response) => {
        this.isUsed = response.isUsed;
        // Display error if mail is used
        if (this.isUsed) {
          this.alertMessage = 'Email address is already used';
          this.alertType = 'danger'
          this.dismissCountDown = this.dismissSecs;
        }
      });
    },
    signup () {
      userService.signup(this.email, this.password, this.confirmPassword)
      .then((response) => {
        this.alertMessage = 'Account created';
        this.alertType = 'success'
        this.dismissCountDown = this.dismissSecs;
        console.log(response)
      })
      .catch((error) => {
        this.alertMessage = 'Error in account creation';
        this.alertType = 'danger'
        this.dismissCountDown = this.dismissSecs;
        console.log(error)
      });
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    }
  }
}
</script>

<style scoped>

</style>