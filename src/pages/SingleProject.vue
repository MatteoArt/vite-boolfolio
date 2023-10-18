<script>
import axios from 'axios';

export default {
    data() {
        return {
            singleProject: []
        }
    },
    methods: {
        //chiamata axios con cui recupero i dettagli di un singolo progetto tramite id
        fetchSingleProj() {
            axios.get('http://127.0.0.1:8000/api/projects/' + this.$route.params.id)
                .then((response) => {
                    this.singleProject = response.data.result[0];
                    console.log(this.singleProject)
                })
        },
        getImagePath(image) {
            return `http://127.0.0.1:8000/storage/${image}`;
        }
    },
    mounted() {
        this.fetchSingleProj();
    }
}

</script>

<template>
    <h1 class="text-center mt-3">{{ singleProject.title }}</h1>
    <div class="w-50 m-auto">
        <span v-if="singleProject.type" class="badge text-bg-warning">
            {{ singleProject.type.name }}
        </span>
        <p>
            {{ singleProject.description }}
        </p>
        <div class="d-flex column-gap-5">
            <div class="w-50" v-if="singleProject.img">
                <img class="img-thumbnail" :src="getImagePath(singleProject.img)" alt="img-project">
            </div>
            <div>
                <div>Linguaggi/tecnologie:</div>
                <span v-for="technology in singleProject.technologies" class="badge text-bg-info me-2">
                    {{ technology.name }}
                </span>
                <div class="mt-4">
                    <a :href="singleProject.repository" class="btn btn-outline-success" target="_blank">
                        Repository
                    </a>
                    <a v-if="singleProject.page_project" :href="singleProject.page_project" 
                    class="btn btn-outline-info ms-3" target="_blank">
                        Pagina del progetto
                    </a>
                </div>
            </div>
        </div>

    </div>
</template>


<style scoped></style>