<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  computed: mapGetters([
    'user',
  ]),
  methods: mapActions([
    'queryUser',
  ]),
  created() {
    this.queryUser()
  }
}
</script>

<style>
@import url("./assets/css/reset");
</style>
