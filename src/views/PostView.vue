<script setup>
    import {ref, onMounted, watch} from 'vue';
    import {useRoute} from 'vue-router';
    
    const endpoint = 'https://jsonplaceholder.typicode.com/posts/';
    
    const props = defineProps({id: String});
    
    const post = ref(null);
    
    const route = useRoute();
    
    onMounted(() => {
        getPost(props.id);
    });
    
    async function getPost(id) {
        const response = await fetch(endpoint + id);
        post.value = await response.json();
    }
    
    watch (route, (newRoute) => {
        console.log('newRoute=', newRoute.path);
        getPost(props.id);
    });
    
</script>

<template>
    <div class="post" v-if="post">
        <h1 class="post__title">{{ post.id }}. {{ post.title }}</h1>
        <p class="post__body">{{ post.body }}</p>
    </div>
</template>
