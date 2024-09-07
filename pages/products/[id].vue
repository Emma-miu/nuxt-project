<template>
  <div>
<p>Product for {{ id }}</p>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo reiciendis vel voluptates similique nam hic quibusdam sunt, tempora omnis deleniti recusandae provident quod, eos itaque vitae facere animi, nisi fugiat.</p>
  </div>
</template>

<script setup>
 const { id } = useRoute().params;

 definePageMeta({
    layout: 'products'
 });

</script>

<style lang="scss" scoped>

</style>