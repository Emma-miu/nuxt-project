<template>
  <div>
    <h2>About</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta pariatur voluptatibus nisi nobis non voluptas officia odit necessitatibus recusandae hic.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsa id quia, quam sapiente quae deleniti odit? Quo, eveniet consequatur.</p>
    <div>{{  data  }}</div>
  </div>
</template>

<script setup >
// for params and post data
// const { data } = await useFetch('/api/hello?name=Mario', {
//   method: 'post',
//   body: { age: 30}
// });

// from private key
//const { data } = await useFetch('/api/hello');

// dynamic routes from api/currency/[code].js
const { data } = await useFetch('/api/currency/GBP');
</script>

<style scoped>
 h2 {
  margin-bottom: 20px;
  font-size: 36px;
 }
 p {
  margin: 20px 0;
 }
</style>