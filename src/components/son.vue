<template>
<div class="son">
      <p>平均成绩：{{average}}</p>
      <p>
         姓名:<input class="inp" type="text" v-model="grade.xm">
      </p>
      <p>
         成绩:<input class="inp" type="number" v-model.number="grade.cj">
      </p>
      <p>{{grade.xm}}{{grade.cj}}<button @click="addgrade">添加</button></p>
      <table class="cjbiaoge" border="1">
          <tr>
              <th>姓名</th>
              <th>成绩</th>
          </tr>
          <tr v-for="(item,index) in arrs">
              <td>
                  {{item.xm}}
              </td>
              <td>
                  {{item.cj}}
              </td>
          </tr>
      </table>
</div>
</template>

<script>
export default {
  name:'son',
  data(){
     return{
        grade:{xm:'',cj:''},
        arrs:[]
     }
  },
  computed:{
        average:function(){
          var csl = 0;
          this.arrs.forEach((item,index,arr) => {
              csl = csl + item.cj
            })
            if(this.arrs.length>0){
                return csl/this.arrs.length
            }else{
                return csl
            }
        }
  },
  methods:{
      addgrade:function(){
          let objs = {};
          objs.xm=this.grade.xm;
          objs.cj=this.grade.cj;
          this.arrs.push(objs);
      }
  }
}
</script>

<style lang="css" scoped>
.inp{ border: 1px solid #666666;}
.cjbiaoge{ margin: auto;}
.cjbiaoge tr th{ width: 200px;}
</style>
