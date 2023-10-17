<script>

import TheNavbar from './components/TheNavbar.vue';

export default {
  components: {
    TheNavbar
  }
}
</script>

<template>
  
  <TheNavbar></TheNavbar>

  <!-- qui andrà il contenuto di ogni pagina -->
  <router-view></router-view>


</template>

<style></style>
