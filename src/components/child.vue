<template>
  <div class="child">
      <p>
        {{title}}
      </p>
      <button @click="inmenTcout">传入数据到父组件</button>
  </div>
</template>

<script>
export default {
  name:'child',
  data(){
     return{
        hsg:['我是子级苹果','我是子级香蕉','我是子级橘子']
     }
  },
  props:[
    'title'
  ],
  methods:{
     inmenTcout(e){
        this.$emit('inmentcout',this.hsg)
     }
  }
}
</script>

<style lang="css" scoped>
</style>
