<template>
  <div class="show">
    <h2 class="show-title">运行结果</h2>
    <div class="show-box" ref="show"></div>
  </div>
</template>

<script>
export default {
  props: {
    code: {
      type: String,
      default: ""
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
      // 运行代码的逻辑是获取到code字符串，当做一个组件 ，使用vue.extend构造Vue组件，手动挂载到showbox下
      // 获取html ,css ,js
      const template = this.getSource("template");
      const script = this.getSource("script").replace(
        /export default/,
        "return"
      );
      const style = this.getSource("style");
      let component = {}
      if(script){
        component = new Function(script)()
      }
      if(template){
        component.template = template;
        // 构造组件构造器
        let instance = new (this.$options._base.extend(component))
        this.$refs.show.appendChild(instance.$mount().$el)
      }

      if(style){
        let el = document.createElement('style')
        el.type = 'text/css'
        el.innerText = style
        document.body.appendChild(el)
      }


      // console.log(instance)
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