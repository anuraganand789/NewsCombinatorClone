<template>
  <div>
    <router-link to="/" >Home</router-link>
    <router-link to="/comment">Comments</router-link>
  </div>

  <router-view ></router-view>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';

export default {
  components : {RouterLink, RouterView}
}
</script>