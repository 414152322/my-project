<template>
  <div class="into">
    <p>我是into界面</p>
    <childviwe :title="item" v-for="item in msg" v-show="shows" class="childer" @inmentcout="tun"></childviwe>
    <p><button @click="fun">单击我切换</button></p>

    <p v-for="(item, index) in hs">
        {{item}}
    </p>
  </div>
</template>

<script>
import child from '@/components/child'
export default {
  name:'into',
  components:{
      'childviwe':child
  },
  data(){
     return{
          shows:true,
          msg:["奔驰","宝马","奥迪"],
          hs:[]
     }
  },
  methods:{
    fun: function () {
        if(this.shows==true){
           this.shows=false
        }else{
            this.shows=true
        }
     },
     tun:function(data){
          this.hs =data
          console.log(this.hs)
     }
  }
}
</script>

<style lang="css" scoped>
.childer{ width: 100px; height: 100px; background: #999999; text-align: center; line-height: 100px;margin-left: 10px; display: inline-block;}
</style>
