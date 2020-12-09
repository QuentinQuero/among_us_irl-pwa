<template>
  <b-container class="missionTab">
    <qr-code-scaner
      style="width: 50vw; margin-bottom: 2vh"
    ></qr-code-scaner>
    <input-and-button
      :placeholder="$t('messages.enter_missions_code')"
      v-on:send="codeSend($event)"
    ></input-and-button>
  </b-container>
</template>

<script>
import QrCodeScaner from "@/components/shared/qrCodeScaner";
import InputAndButton from "@/components/shared/inputAndButton";
export default {
  name: "missionTabComponent",
  components: {InputAndButton, QrCodeScaner},
  methods: {
    codeSend ($event) {
      console.log($event);
    }
  }
}
</script>

<style scoped>
.missionTab {
  width: 100vw;
  padding-top: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
</style>
