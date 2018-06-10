<template>
    <div class = "test">
        <input type = "text" v-model ="items[0].title"> <br />
        <h1>{{title}}</h1>
        <h1 v-if="showName">{{user.firstName}}</h1>
        <h1 v-else>FalseName</h1>
        <p v-text="user.lastName"> </p>
        <ul>
          <!--  <li v-for="item in items">{{item.title}}</li>-->
        </ul>

        <button v-on:click="greet('Hello ' + user.firstName)">Say Greetings</button>
        <br />
        <input type ="text" v-on:keyup="pressKey" v-on:keyup.enter ="enterHit" >

        <hr />
        <form>

            <label>First Name: </label><input type="text" v-model="user.firstName">
            <label>Last Name: </label><input type="text" v-model="user.lastName">
            <h3>{{fullName}}</h3>
            <button v-on:click ="navigate()">Submit</button>
            <router-link :to="{ name: 'SecondPage' }">Navigate to Page2</router-link>
        </form>

    </div>


</template>

<script>
//import router from '../router';

export default{
  name: 'Test',
  data() {
    return {
      title: 'Hello World',
      user: {
        firstName: '',
        lastName: '',
      },
      showName: true,
      items: [
        { title: 'Item One' },
        { title: 'Item Two' },
        { title: 'Item Three' },
      ],
    };
  },
  methods: {
    greet(greeting) {
      alert(greeting);
    },
    pressKey(e) {
      console.log(e.target.value);
    },
    enterHit() {
      console.log('EnterHit');
    },
    navigate() {
     // router.push({ name: 'SecondPage' });
    },
  },
  computed: {
    fullName() {
      return `${this.user.firstName} ${this.user.lastName}`;
    },
  },
};
</script>

<style scoped>

</style>
