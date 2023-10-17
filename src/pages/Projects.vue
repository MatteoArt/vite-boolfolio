<script>

import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {
    components: {
        ProjectCard
    },
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

                    //salvo i dati nella variabile projects
                    this.projects = ris;

                    console.log(this.projects);
                })
        }
    },
    mounted() {
        this.fetchData();
    }
}

</script>

<template>
    <h2 class="mt-3 text-center text-info-emphasis">Projects</h2>
    <div class="container-md mt-2 mb-4">
        <div class="row gy-3">
            <ProjectCard v-for="project in projects" :projectData="project" :key="project.id"></ProjectCard>
        </div>
    </div>
</template>

<style scoped>

</style>