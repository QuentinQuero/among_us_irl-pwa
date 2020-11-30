<template>
 <div class="home-page">
   <join-game-component/>
 </div>
</template>

<script>
import JoinGameComponent from "@/components/homeModule/Components/joinGameComponent";
export default {
name: "HomePage",
  components: {JoinGameComponent}
}
</script>

<style scoped>
.home-page {
  margin: 2em;
}
</style>
