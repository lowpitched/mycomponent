<template>
 <div>
   <main-panel :btns="btns" :columnInfo="columnInfo" urlMap="perm/mtaUser">
     <template slot="searchForm" slot-scope="slotProps">
        <el-sinya-input v-model="slotProps.form.pin" sinyaLabel="用户名"  placeholder=""></el-sinya-input>
        <el-sinya-input v-model="slotProps.form.nickName" sinyaLabel="昵称"  placeholder="请输入"></el-sinya-input>
        <el-sinya-input v-model="slotProps.form.fullName" sinyaLabel="姓名"  placeholder="请输入"></el-sinya-input>
        <el-sinya-input v-model="slotProps.form.phone" sinyaLabel="电话"  placeholder="请输入"></el-sinya-input>
        <el-sinya-input v-model="slotProps.form.email" sinyaLabel="邮箱"  placeholder="请输入"></el-sinya-input>
        <el-sinya-input v-model="slotProps.form.dept" sinyaLabel="部门"  placeholder="请输入"></el-sinya-input>
        <el-sinya-input v-model="slotProps.form.status" sinyaLabel="状态"  placeholder="请输入"></el-sinya-input>
        <el-sinya-input v-model="slotProps.form.remark" sinyaLabel="备注"  placeholder="请输入"></el-sinya-input>
     </template>
     <template slot="addDialogForm" slot-scope="slotProps">
        <el-sinya-input v-model="slotProps.form.pin" sinyaLabel="用户名"  placeholder=""></el-sinya-input>
        <el-sinya-input type="password" v-model="slotProps.form.password" sinyaLabel="密码"  placeholder="请输入"></el-sinya-input>
        <el-sinya-input v-model="slotProps.form.nickName" sinyaLabel="昵称"  placeholder="请输入"></el-sinya-input>
        <el-sinya-input v-model="slotProps.form.fullName" sinyaLabel="姓名"  placeholder="请输入"></el-sinya-input>
        <el-sinya-input v-model="slotProps.form.phone" sinyaLabel="电话"  placeholder="请输入"></el-sinya-input>
        <el-sinya-input v-model="slotProps.form.email" sinyaLabel="邮箱"  placeholder="请输入"></el-sinya-input>
        <el-sinya-input v-model="slotProps.form.dept" sinyaLabel="部门"  placeholder="请输入"></el-sinya-input>
        <el-sinya-input v-model="slotProps.form.status" sinyaLabel="状态"  placeholder="请输入"></el-sinya-input>
        <el-sinya-input v-model="slotProps.form.remark" sinyaLabel="备注"  placeholder="请输入"></el-sinya-input>
     </template>
     <template slot="editDialogForm" slot-scope="slotProps">
        <el-sinya-input v-model="slotProps.form.pin" sinyaLabel="用户名"  placeholder=""></el-sinya-input>
        <el-sinya-input type="password" v-model="slotProps.form.password" sinyaLabel="密码"  placeholder="请输入"></el-sinya-input>
        <el-sinya-input v-model="slotProps.form.nickName" sinyaLabel="昵称"  placeholder="请输入"></el-sinya-input>
        <el-sinya-input v-model="slotProps.form.fullName" sinyaLabel="姓名"  placeholder="请输入"></el-sinya-input>
        <el-sinya-input v-model="slotProps.form.phone" sinyaLabel="电话"  placeholder="请输入"></el-sinya-input>
        <el-sinya-input v-model="slotProps.form.email" sinyaLabel="邮箱"  placeholder="请输入"></el-sinya-input>
        <el-sinya-input v-model="slotProps.form.dept" sinyaLabel="部门"  placeholder="请输入"></el-sinya-input>
        <el-sinya-input v-model="slotProps.form.status" sinyaLabel="状态"  placeholder="请输入"></el-sinya-input>
        <el-sinya-input v-model="slotProps.form.remark" sinyaLabel="备注"  placeholder="请输入"></el-sinya-input>
     </template>
   </main-panel>
 </div>
</template>

<script>
import ElSinyaSelect from './ElSinyaSelect'
import ElSinyaInput from './ElSinyaInput'
import MainPanel from './MainPanel'

export default {
  name: 'MtaUser',
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
          {id:1,text:'用户名',field:'pin'},
          {id:2,text:'密码',field:'password'},
          {id:3,text:'昵称',field:'nickName'},
          {id:4,text:'真是姓名',field:'fullName'},
          {id:5,text:'联系电话',field:'phone'},
          {id:6,text:'邮箱',field:'email'},
          {id:7,text:'部门',field:'dept'},
          {id:8,text:'状态',field:'status'},
          {id:9,text:'备注',field:'remark'},
          {id:10,text:'最后登录IP',field:'lastLoginIp'},
          {id:11,text:'最后登录时间',field:'lastLoginTime'},
          {id:12,text:'登录次数',field:'loginCount'},
          {id:13,text:'创建时间',field:'createTime'},
          {id:14,text:'修改时间',field:'modifyTime'},
          {id:15,text:'创建人',field:'creator'},
          {id:16,text:'修改人',field:'editor'},
        ]
      },
      mapperData:{},
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
