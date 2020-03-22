<template>
 <div>
   <main-panel :btns="btns" :columnInfo="columnInfo" urlMap="person">
     <template slot="searchForm" slot-scope="slotProps">
        <el-sinya-input v-model="slotProps.form.name" sinyaLabel="姓名"  placeholder=""></el-sinya-input>
        <el-sinya-input v-model="slotProps.form.age" sinyaLabel="年龄"  placeholder="请输入"></el-sinya-input>
        <el-sinya-select sinyaLabel="国家" v-model="slotProps.form.country" sinyaUrl="/api/dictionary/dictCountry" sinyaItemLabelField="name" sinyaItemValueField="code" clearable placeholder="请选择"></el-sinya-select>
     </template>
     <template slot="addDialogForm" slot-scope="slotProps">
        <el-sinya-input v-model="slotProps.form.name" sinyaLabel="姓名"  placeholder=""></el-sinya-input>
        <el-sinya-input v-model="slotProps.form.age" sinyaLabel="年龄"  placeholder="请输入"></el-sinya-input>
        <el-sinya-select v-model="slotProps.form.country" sinyaLabel="国家"  sinyaUrl="/api/dictionary/dictCountry" sinyaItemLabelField="name" sinyaItemValueField="code" clearable placeholder="请选择"></el-sinya-select>
        <el-sinya-input v-model="slotProps.form.phone" sinyaLabel="电话"  placeholder=""></el-sinya-input>
        <el-sinya-input v-model="slotProps.form.email" sinyaLabel="邮箱"  placeholder=""></el-sinya-input>
        <el-sinya-input v-model="slotProps.form.birthday" sinyaLabel="生日"  placeholder=""></el-sinya-input>
     </template>
     <template slot="editDialogForm" slot-scope="slotProps">
        <el-sinya-input v-model="slotProps.form.age" sinyaLabel="年龄"  placeholder="请输入"></el-sinya-input>
        <el-sinya-input v-model="slotProps.form.name" sinyaLabel="姓名"  placeholder=""></el-sinya-input>
        <el-sinya-select v-model="slotProps.form.country" sinyaLabel="国家"  sinyaUrl="/api/dictionary/dictCountry" sinyaItemLabelField="name" sinyaItemValueField="code" clearable placeholder="请选择"></el-sinya-select>
        <el-sinya-input v-model="slotProps.form.phone" sinyaLabel="电话"  placeholder=""></el-sinya-input>
        <el-sinya-input v-model="slotProps.form.email" sinyaLabel="邮箱"  placeholder=""></el-sinya-input>
        <el-sinya-input v-model="slotProps.form.birthday" sinyaLabel="生日"  placeholder=""></el-sinya-input>
     </template>
   </main-panel>
   <!-- <el-sinya-mapper ref="countryMapper" name="countryMapper" :mapperData="mapperData" mapperUrl="/api/dictionary/dictCountry" mapperLabelField="name" mapperValueField="code"></el-sinya-mapper> -->
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
      /*person:{
        'add':'/xxx/add',
        'list':'/xxx/list',
        'edit':'/xxx/edit',
        'delete':'/xxx/delete',
      },*/
      /***********query实体 */
      query:{

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
          {id:3,text:'生日',field:'birthday'},
          {id:4,text:'国家',field:'country',mapper:'countryMapper'},
          {id:5,text:'邮箱',field:'email'},
          {id:6,text:'电话',field:'phone'},
        ]
      },
      mapperData:{},
      haha:'a',
    }
  },
  methods:{

  },
  watch:{

  },
  computed:{
    globalName(){
      console.log('--------'+this.$store.state.globalName);
      return this.$store.state.globalName
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
