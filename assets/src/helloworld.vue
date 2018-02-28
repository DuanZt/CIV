<template>
  <h1>{{ msg }}</h1>
</template>
<script>
import axios from 'axios';

export default {
  name: 'helloworld',
  data () {
    return {
      msg: 'Hello World.'
    }
  },
  created () {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.fetchData()
  },
  methods: {
    fetchData () {
        var _this = this;
        axios.post('/civ')
          .then(function (response) {
            _this.msg = response.data.a;
            console.log(response.data.a);
            console.log(_this);
          })
          .catch(function (error) {
            console.log(error.data);
          });
    }
  }
}
</script>
<style lang="scss" scoped>
h1 {
  color: $green;
}
</style>
