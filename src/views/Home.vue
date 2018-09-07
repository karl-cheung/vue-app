<template>
  <div>
    <progress-bar ref="bar"></progress-bar>
    <div class="container">
      <span class="logo"></span>
      <p class="msg">Welcome to Your <a href="https://github.com/vincheung/vue-app">vue-app</a>.</p>
      <div>
        <spinner :show="loading" v-for="item in 7" :key="item"></spinner>
      </div>
    </div>
  </div>
</template>

<script>
import Spinner from '../components/Spinner'
import ProgressBar from '../components/ProgressBar'
// import api from '@/api'

export default {
  name: 'Home',
  components: { Spinner, ProgressBar },
  data () {
    return {
      loading: true
    }
  },
  mounted () {
    this.$refs.bar.finish()
  },
  created () {
    // // 模拟
    // this.axios({
    //   url: api.getBanners,
    //   params: {
    //     maxNum: 10
    //   }
    // }).then(res => {
    //   if (res.data.code === api.code) {
    //     console.log('获取成功')
    //   }
    // })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "@/assets/sass/index.scss";

.container {
  width: 100%;
  text-align: center;
  @include center();
  .logo {
    width: 60px;
    height: 60px;
    @include bg('home-1');
  }
  .msg {
    display: inline-block;
    padding: $s10 * 3 0;
    color: $baseColor;
    font-size: $s18;
    a {
      text-decoration: underline;
    }
  }
}
</style>
