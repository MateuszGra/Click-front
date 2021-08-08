<template>
  <div>{{ messageId }}</div>
</template>

<script>
export default {
  name: 'MessageBody',
  props: {
    messageId: String,
  },
};
</script>

<style scoped lang="scss"></style>
