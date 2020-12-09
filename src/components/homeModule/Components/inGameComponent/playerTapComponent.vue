<template>
  <div>
    <b-container class="playerTab">
      <qr-code-scaner
          style="width: 50vw; margin-bottom: 2vh"
      ></qr-code-scaner>
      <input-and-button
          :placeholder="$t('messages.enter_players_pseudo')"
          v-on:send="reportPlayer($event)"
      ></input-and-button>
    </b-container>
    <div class="footer">
      <b-button variant="link">
        <b-icon icon="chat-right-text" font-scale="5"></b-icon>
      </b-button>
    </div>
  </div>
</template>

<script>
import QrCodeScaner from "@/components/shared/qrCodeScaner";
import InputAndButton from "@/components/shared/inputAndButton";
export default {
  name: "playerTapComponent",
  components: {InputAndButton, QrCodeScaner},
  methods: {
    reportPlayer ($event) {
      console.log($event)
    }
  }
}
</script>

<style scoped>
.playerTab {
  width: 100vw;
  padding-top: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.footer {
  position: fixed;
  bottom: 0;
  right: 0;
}
</style>
