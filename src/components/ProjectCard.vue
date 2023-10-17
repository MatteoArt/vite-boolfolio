<script>

export default {
    props: {
        projectData: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {

        }
    },
    methods: {
        getImagePath(image) {
            return `http://127.0.0.1:8000/storage/${image}`;
        }
    }
}

</script>

<template>
    <div class="col-4">
        <div class="card h-100">
            <img :src="getImagePath(projectData.img)" class="card-img-top" alt="img-project">
            <div class="card-body">
                <router-link class="text-decoration-none" :to="{ name: 'project.show', params: { id: projectData.id } }">
                    <h3 class="card-title">
                        {{ projectData.title }}
                    </h3>
                </router-link>
                <span class="badge text-bg-warning">
                    {{ projectData.type.name }}
                </span>
                <p class="card-text mt-2">
                    {{ projectData.description }}
                </p>
                <div class="mt-2 mb-3">
                    <div>Linguaggi/tecnologie:</div>
                    <span class="badge text-bg-info me-2" 
                    v-for="technology in projectData.technologies">
                            {{ technology.name }}
                    </span>
                </div>
                <a :href="projectData.repository" class="btn btn-outline-success" target="_blank">Repository</a>
                <a v-if="projectData.page_project" 
                :href="projectData.page_project" 
                class="btn btn-outline-info ms-3" target="_blank">Pagina del progetto</a>
            </div>
        </div>
    </div>
</template>

<style scoped></style>