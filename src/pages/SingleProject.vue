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
        <div class="w-50" v-if="singleProject.img">
            <img class="img-thumbnail" :src="getImagePath(singleProject.img)" alt="img-project">
        </div>
    </div>
</template>


<style scoped></style>