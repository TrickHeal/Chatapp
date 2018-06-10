<template>
    <div class="Thiele">
        <h1>Chat</h1>
        <button v-on:click ="navigate()">Back</button>
    </div>
</template>

<script>
/* eslint-disable no-param-reassign */

import router from '../router';

const id = 'cji902py095wt0126deljq8is';

/*  fetch('https://api.graph.cool/simple/v1/cji8y7jwa06z2016086elhv88', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: `{ User { id:${id}} }` }),
})
  .then(res => console.log(res));
*/


//  'use latest';

const { fromEvent } = require('graphcool-lib');

/*
 * you need to augment the event context with the project id and PAT yourself,
 * until https://github.com/graphcool/feature-requests/issues/219 is implemented
 */
// const pat = '__PAT__'
const projectId = 'cji8y7jwa06z2016086elhv88';

module.exports = (event) => {
  event.context = {
    graphcool: {

      projectId,
    },
  };
  const api = fromEvent(event).api('simple/v1');
  const query = `
    query {
      User(id:${id}) {
        firstName
        lastName
      }
    }
  `;

  return api.request(query)
    .then((data) => {
      console.log(data);
      return {
        data: event.data,
      };
    })
    .catch(err => ({
      error: err,
    }));
};

export default {
  name: 'SecondPage',
  data() {
    return {
      msg: 'Hey Nic Raboy',
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
      router.go(-1);
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
