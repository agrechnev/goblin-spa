<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

const endpoint = 'https://jsonplaceholder.typicode.com/posts/';
const posts = ref(null);

getAllPosts();

async function getAllPosts() {
  const response = await fetch(endpoint);
  posts.value = await response.json();
}
</script>

<template>
  <header>
    <h1>Goblin SPA</h1>
  </header>
  <main>
    <div class="sidebar">
      <router-link v-for="post in posts" active-class="is-active" class="link" :to="{ name: 'post', params: {id: post.id}}">{{post.id}}. {{post.title}}</router-link>
    </div>
    <div class="content">
      <RouterView />
    </div>
  
  </main>
</template>

<style>
.sidebar {
  border: solid thick;
  margin-right: 1%;
  padding: 1%;
  display: inline-block;
  vertical-align: top;
  width: 20%; 
  height: 80vh;
  overflow: scroll;
}
.content {
  display: inline-block;
  vertical-align: top;
  width: 75%;
}
.link {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

</style>
