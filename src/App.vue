<script>

   import axios from 'axios';


    export default {
      data() {
        return {
          projects: []
        }
      },
      methods: {
        //metodo che ha il compito di recuperare i dati dall'API tramite axios
        fetchData() {
          axios.get('http://127.0.0.1:8000/api/projects')
          .then((response) => {
            //ottengo i dati relativi ai progetti
            let ris = response.data.results;

            console.log(ris);
          })
        }
      },
      mounted() {
        this.fetchData();
      }
    }
</script>

<template>
  <h1 class="text-start mt-2 text-success-emphasis">developerFolio</h1>

  <div class="container mt-4 mb-2">
    <h2>Welcome, guest</h2>
  </div>
  <h2 class="mt-3 text-center text-info-emphasis">Projects</h2>

</template>

<style>

</style>
