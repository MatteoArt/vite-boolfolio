<script>

export default {

}
</script>

<template>
    <div class="container mt-4 mb-2">
        <h2>Welcome, guest</h2>
        <p>
            In questo sito puoi trovare una raccolta di progetti che ho creato con diversi
            linguaggi e tecnologie. Da progetti front-end, back-end a progetti full stack.
        </p>
        <div class="text-center mt-4">
            <router-link :to="{ name: 'projects' }" class="btn btn-primary btn-lg">
                Scopri di più
            </router-link>
        </div>

    </div>
</template>

<style scoped>

</style>