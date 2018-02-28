<template>
  <div>User {{ $route.params.id }} {{msg}}</div>
</template>
<script>
export default {
  name: 'user',
  data () {
    return {
      msg: 'Hello World.'
    }
  }
}
</script>
<style lang="scss" scoped>
h1 {
  color: $green;
}
</style>
