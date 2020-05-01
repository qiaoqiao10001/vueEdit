<template>
  <div id="app">
    <Edit @input="handleInput" @run="handleRun"></Edit>
    <Show :code="code" ref="show"></Show>
  </div>
</template>

<script>
import Edit from './components/edit'
import Show from './components/show.vue'
export default {
  name: 'App',
  data(){
    return {
      code:''
    }
  },
  components: {
    Edit,
    Show
  },
  methods:{
    handleInput(code){
      this.code = code
    },
    handleRun(){
      this.$refs.show.run()
    }
  }
}
</script>

<style lang="stylus">
* {
  margin: 0;
  padding: 0;
}

html, body, #app {
  width: 100%;
  height: 100%;
}
#app {
  display: flex;
  & > div {
    width: 50%;
    height: 100%;
  }
}
</style>
