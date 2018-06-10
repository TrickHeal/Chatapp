<template>
    <div class="Thiele">
        <h1>Thiele</h1>
        <label>First Name: </label><input type="text" v-model="user.firstName">
        <label>Last Name: </label><input type="text" v-model="user.lastName">
        <button v-on:click ="navigate()">Submit</button>
    </div>
</template>

<script>
import router from '../router';

export default {
  name: 'EnterPage',
  data() {
    return {
      title: 'Hello World',
      user: {
        firstName: '',
        lastName: '',
      } };
  },
  methods: {
    pressKey(e) {
      console.log(e.target.value);
    },
    enterHit() {
      console.log('EnterHit');
    },
    navigate() {
      router.push({ name: 'SecondPage' });
    },
    joinChat(firstName, lastName) {

    },
  },
};
</script>

<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
