<template>
  <h1>
    <a href="obj.link">{{company.title}}</a>
  </h1>
  <article>
    <div>
      {{ obj.content }}
    </div>
  </article>
</template>

<script setup>
  defineProps(obj);
</script>