<template>
  <div class="qrCodeScanner">
    <b-button v-if="!openCamera" @click="openCamera = true" variant="primary">
      <b-icon icon="camera" font-scale="7.5"></b-icon>
    </b-button>
    <div v-if="openCamera" class="qrcodeScanGroup">
      <qrcode-stream @decode="onDecode"/>
      <b-button variant="danger" @click="openCamera = false">Cancel</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "qrCodeScaner",
  data () {
    return {
      openCamera: false
    }
  },
  methods: {
    onDecode (value) {
      console.log(value);
    }
  }
}
</script>

<style scoped>
.qrCodeScanner {
  display: flex;
  justify-content: center;
}
.qrcodeScanGroup {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
</style>
