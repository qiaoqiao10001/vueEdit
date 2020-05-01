<template>
  <div class="show">
    <h2 class="show-title">运行结果</h2>
    <div class="show-box" ref="display"></div>
  </div>
</template>

<script>
export default {
  props: {
    code: {
      type: String,
      code: ""
    }
  },
  methods: {
    getSource(type) {
      const reg = new RegExp(`<${type}[^>]*>`);
      let code = this.code;
      let matches = code.match(reg);
      
      if (matches) {
        return code.slice(
          code.indexOf(matches[0]) + matches[0].length,
          code.lastIndexOf(`</${type}`)
        );
      }
      return "";
    },
    run() {
      console.log(123);
      // 运行代码的逻辑是获取到code字符串，当做一个组件 ，使用vue.extend构造Vue组件，手动挂载到showbox下
      // 获取html ,css ,js
      const template = this.getSource("template");
      const script = this.getSource("template").replace(
        /export default/,
        "return"
      );
      const style = this.getSource("style");
      console.log(template);
    }
  }
};
</script>

<style lang="stylus">
.show-title {
  line-height: 40px;
  padding-left: 20px;
}
</style>