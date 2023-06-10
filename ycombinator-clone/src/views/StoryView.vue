<script>
import {getTopNStories} from '../utils/HackerNewService'
import StoryItem from '../components/StoryItem.vue';

export default {
  components : { StoryItem },
  data() {
    return {
      stories: [],
      storyLoaded : false,
      maxStoryToFetch: 30,
    };
  },
  async created() {
    this.stories = await getTopNStories(this.maxStoryToFetch);
    this.storyLoaded = true;
  },
}
</script>

<template>
  <main>
    <StoryItem v-if="storyLoaded" v-for="(story, index) in stories" v-bind="story" :serialNumber="index" :key="index"/>
    <div v-else>Loading....</div>
  </main>
</template>

<style scoped>

main {
  margin-left : 2rem;
}
</style>
