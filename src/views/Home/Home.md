# Home

```vue
<template>
  <div>
    <progress-bar ref="bar"></progress-bar>
    <div class="container center">
      <span class="logo"></span>
      <p class="msg">Welcome to Your <a href="https://github.com/vincheung/vue-app">vue-app</a>.</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ProgressBar from '@/components/ProgressBar/ProgressBar'
// import constant from '@/utils/constant'

// const { code } = constant

export default {
  name: 'Home',
  components: { ProgressBar },
  mounted() {
    this.$refs.bar.finish()
  },
  methods: {
    ...mapActions([
      'queryListHome',
    ]),
  },
  computed: {
    ...mapGetters({
      banner: 'ListHome',
    }),
  },
  created() {
    /*
    * 不使用 Vuex
    * this.axios({
    *   url: '/query/list',
    *   params: {
    *     maxNum: 10
    *   }
    * }).then(res => {
    *   if (res.data.code === code) {
    *     console.log('获取成功')
    *   }
    * })
    */

    /*
    * 使用 Vuex
    * this.queryListHome()
    */
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "@/assets/sass/index.scss";

.container {
  width: 100%;
  text-align: center;
  @include br($base-color, true);
  .logo {
    width: 60px;
    height: 60px;
    @include bg('home-1');
  }
  .msg {
    display: inline-block;
    padding: $s10 * 3 0;
    color: $base-color;
    font-size: $s18;
    @include br();
    a {
      text-decoration: underline;
    }
  }
}
</style>
```
