<template>
  <div class="ui message" :class="type">
      {{ message }}
  </div>
</template>

<script>
export default {
  name: 'Notification',
  props: {
      message: {
          type: String,
          required: true,
      }, 
      type: {
          type: String,
          required: true,
      },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
