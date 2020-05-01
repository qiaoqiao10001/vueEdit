<template>
  <div class="edit">
    <div class="edit-btn">
      <button @click="$emit('run')">代码运行</button>
      <button @click="code=''">清空代码</button>
    </div>
    <div class="edit-box">
      <textarea @input="handleInput" :value="code" @keydown.9.prevent="handleKeyDown"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      code: ''
    }
  },
  methods:{
    handleInput(e){
      this.code = e.target.value;
      this.$emit('input',this.code);
    },
    handleKeyDown(e){
      if(e.keyCode == 9){
        this.code = '   ' + e.target.value;
      }
    }
  }
};
</script>

<style lang="stylus">
.edit {
  .edit-btn {
    padding: 10px;
    background: #ccc;

    button {
      width: 80px;
      height: 40px;
      margin-right: 5px;
    }
  }

  .edit-box {
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    bottom: 0;

    textarea {
      width: 100%;
      height: 100%;
      outline: none;
      border: none;
      font-size: 20px;
    }
  }
}</style>