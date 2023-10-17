<script>

export default {
    data() {
        return {
            navLinks: [
                {
                    link: 'Home',
                    link_name: 'home'
                },
                {
                    link: 'Projects',
                    link_name: 'projects'
                },
                {
                    link: 'Contacts',
                    link_name: 'contacts'
                }
            ]
        }
    },
    methods: {
    }
}
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <router-link :to="{ name: 'home' }" class="navbar-brand">developerFolio</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li v-for="link in navLinks" class="nav-item">
                        <router-link :to="{ name: link.link_name }" class="nav-link">
                            {{ link.link }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped></style>