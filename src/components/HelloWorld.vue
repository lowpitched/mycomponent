<template>
 <div>
   <main-panel :btns="btns" @click1="clickSearch" :columnInfo="columnInfo" :model="person">
     <template slot="search-form" slot-scope="slotProps">
        <el-sinya-select sinyaLabel="姓名" v-model="slotProps.form.country" :sinyaOptions="query.countryOptions" clearable placeholder="请选择"></el-sinya-select>
        <el-sinya-input v-model="slotProps.form.age" sinyaLabel="年龄" @change="changeAge()" placeholder="请输入"></el-sinya-input>
        <el-sinya-input v-model="slotProps.form.name" sinyaLabel="姓名" @change="changeName()" placeholder=""></el-sinya-input>
        <el-sinya-input v-model="slotProps.form.name" sinyaLabel="姓名" @change="changeName()" placeholder=""></el-sinya-input>
        <el-sinya-input v-model="slotProps.form.name" sinyaLabel="姓名" @change="changeName()" placeholder=""></el-sinya-input>
        <el-sinya-input v-model="slotProps.form.name" sinyaLabel="姓名" @change="changeName()" placeholder=""></el-sinya-input>
        <el-sinya-input v-model="slotProps.form.name" sinyaLabel="姓名" @change="changeName()" placeholder=""></el-sinya-input>
        <el-sinya-input v-model="slotProps.form.name" sinyaLabel="姓名" @change="changeName()" placeholder=""></el-sinya-input>
        <el-sinya-input v-model="slotProps.form.name" sinyaLabel="姓名" @change="changeName()" placeholder=""></el-sinya-input>
     </template>
     <template slot="addDialogForm" slot-scope="slotProps">
        <el-sinya-select sinyaLabel="姓名" v-model="slotProps.form.country" :sinyaOptions="query.countryOptions" clearable placeholder="请选择"></el-sinya-select>
        <el-sinya-input v-model="slotProps.form.age" sinyaLabel="年龄" @change="changeAge()" placeholder="请输入"></el-sinya-input>
        <el-sinya-input v-model="slotProps.form.name" sinyaLabel="姓名" @change="changeName()" placeholder=""></el-sinya-input>
        <el-sinya-input v-model="slotProps.form.name" sinyaLabel="姓名" @change="changeName()" placeholder=""></el-sinya-input>
        <el-sinya-input v-model="slotProps.form.name" sinyaLabel="姓名" @change="changeName()" placeholder=""></el-sinya-input>
        <el-sinya-input v-model="slotProps.form.name" sinyaLabel="姓名" @change="changeName()" placeholder=""></el-sinya-input>
        <el-sinya-input v-model="slotProps.form.name" sinyaLabel="姓名" @change="changeName()" placeholder=""></el-sinya-input>
        <el-sinya-input v-model="slotProps.form.name" sinyaLabel="姓名" @change="changeName()" placeholder=""></el-sinya-input>
        <el-sinya-input v-model="slotProps.form.name" sinyaLabel="姓名" @change="changeName()" placeholder=""></el-sinya-input> 
     </template>
     <template slot="editDialogForm" slot-scope="slotProps">
        <el-sinya-select sinyaLabel="姓名" v-model="slotProps.form.country" :sinyaUrl="sinyaUrl" :sinyaItemLabelField="sinyaItemLabelField" :sinyaItemLabelValue="sinyaItemLabelValue" clearable placeholder="请选择"></el-sinya-select>
        <el-sinya-input v-model="slotProps.form.age" sinyaLabel="年龄" @change="changeAge()" placeholder="请输入"></el-sinya-input>
        <el-sinya-input v-model="slotProps.form.name" sinyaLabel="姓名" @change="changeName()" placeholder=""></el-sinya-input>
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
      /***********前后端实体***** */
      person:'person',
      /*person:{
        'add':'/xxx/add',
        'list':'/xxx/list',
        'edit':'/xxx/edit',
        'delete':'/xxx/delete',
      },*/
      /***********query实体 */
      sinyaUrl:'/xxx/xxx',
      sinyaItemLabelField:'id',
      sinyaItemLabelValue:'name',
      query:{
        countryOptions:[
          {id:'1',text:'中国'},
          {id:'2',text:'巴布几内亚'},
          {id:'3',text:'吉尔吉斯斯坦'}
        ],
      },
      /************按钮定义 */
      btns:{
        default:['searchBtn','addBtn','resetBtn','editBtn','deleteBtn','addSaveBtn','editSaveBtn','cancelBtn'],
        custom:[
          {
            id:6,
            name:'submit',
            text:'提交',
            clickFun:function(vm){
              alert(JSON.stringify(vm.multipleSelection));
            },
            type:'operat'
          }
        ], 
      },
      columnInfo:{
        isSelect:true,
        isOperat:true,
        operats:{
          default:['view','edit','delete'],
          custom:[
            {
              id:11,
              text:'启用',
              clickFun:function(row,vm){
                alert(JSON.stringify(row));
              }
            }
          ]
        },
        columns:[
          {id:0,text:'主键',field:'id',type:'hidden'},
          {id:1,text:'姓名',field:'name'},
          {id:2,text:'年龄',field:'age'},
          {id:3,text:'生日',field:'date'}
        ]
      }
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
   
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
