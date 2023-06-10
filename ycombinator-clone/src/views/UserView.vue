<template>
  <table v-if="userDetail">
    <tr><td>User : </td> <td>{{ userDetail.id }}</td></tr>
    <tr><td>Created : </td> <td>{{ userDetail.created }}</td></tr>
    <tr><td>karma : </td> <td>{{ userDetail.karma }}</td></tr>
    <tr v-if="hasAbout"><td>about: </td> <td>{{ userDetail.about }}</td></tr>
    <tr v-if="hasSubmitted"><td>submitted: </td> <td>{{ userDetail.submitted.length }}</td></tr>
  </table>
</template>
<script>
import {fetchUser} from '../utils/HackerNewService';

export default {
  name : 'User',
  data() {
    return {
      userDetail : {}
    }
  },
  async created() {
    const userId = this.$route.params.id
    console.log('userId', userId);
    this.userDetail = await fetchUser(userId);
    console.log('user detials', this.userDetail)
  },
  computed : {
    hasSubmitted() {
      return this.userDetail?.submitted?.length > 0;
    },
    hasAbout() {
      return this.userDetail?.about;
    }
  }
}
</script>