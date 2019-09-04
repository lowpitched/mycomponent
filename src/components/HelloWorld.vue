<template>
 <div>
   <!-- <el-form ref="form" :model="form" label-width="80px" size="mini">
    <el-sinya-select sinyaLabel="姓名" v-model="form.country" :sinyaOptions="countryOptions" clearable placeholder="请选择"></el-sinya-select>
    <el-sinya-input v-model="form.age" sinyaLabel="年龄" @change="changeAge()" placeholder="请输入"></el-sinya-input>
    <el-sinya-input v-model="form.name" sinyaLabel="姓名" @change="changeName()" placeholder=""></el-sinya-input>
   </el-form> -->
   <main-panel :btns="btns" @click1="clickSearch" :columnInfo="columnInfo" :model="model">
     <template slot="search-form">
        <el-sinya-select sinyaLabel="姓名" v-model="form.country" :sinyaOptions="query.countryOptions" clearable placeholder="请选择"></el-sinya-select>
        <el-sinya-input v-model="form.age" sinyaLabel="年龄" @change="changeAge()" placeholder="请输入"></el-sinya-input>
        <el-sinya-input v-model="form.name" sinyaLabel="姓名" @change="changeName()" placeholder=""></el-sinya-input>
        <el-sinya-input v-model="form.name" sinyaLabel="姓名" @change="changeName()" placeholder=""></el-sinya-input>
        <el-sinya-input v-model="form.name" sinyaLabel="姓名" @change="changeName()" placeholder=""></el-sinya-input>
        <el-sinya-input v-model="form.name" sinyaLabel="姓名" @change="changeName()" placeholder=""></el-sinya-input>
        <el-sinya-input v-model="form.name" sinyaLabel="姓名" @change="changeName()" placeholder=""></el-sinya-input>
        <el-sinya-input v-model="form.name" sinyaLabel="姓名" @change="changeName()" placeholder=""></el-sinya-input>
        <el-sinya-input v-model="form.name" sinyaLabel="姓名" @change="changeName()" placeholder=""></el-sinya-input>
     </template>
   </main-panel>
 </div>
</template>

<script>
import ElSinyaSelect from './ElSinyaSelect'
import ElSinyaInput from './ElSinyaInput'
import MainPanel from './MainPanel'
export default {
  name: 'HelloWorld',
  components:{
    ElSinyaSelect,
    ElSinyaInput,
    MainPanel,
  },
  data () {
    return {
      /***********form实体***** */
      form:{},
      /***********query实体 */
      query:{
        countryOptions:[
          {id:'1',text:'中国'},
          {id:'2',text:'巴布几内亚'},
          {id:'3',text:'吉尔吉斯斯坦'}
        ],
      },
      /************按钮定义 */
      btns:{
        default:['searchBtn','addBtn','resetBtn','editBtn','deleteBtn'],
        custom:[
          {id:6,name:'submit',text:'提交',clickFun:function(){},type:'operat'}
        ], 
      },
      columnInfo:{
        isSelect:true,
        isOperat:true,
        operats:[
          {id:'1',text:'查看'},
          {id:'2',text:'编辑'},
          {id:'3',text:'删除'}
        ],
        columns:[
        {id:1,text:'姓名',field:'name'},
        {id:2,text:'年龄',field:'age'},
        {id:3,text:'生日',field:'date'}
      ]}
    }
  },
  methods:{
    changeAge:function(){
      alert(this.form.age);
    },
    changeName:function(){
      alert(this.form.name);
    },
    clickSearch:function(){
       
    },
  },
  watch:{
    // form(newVal,oldVal){
    //   alert(JSON.stringify(newVal));
    // }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
