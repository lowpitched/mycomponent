<template>
    <div class="main-panel">
        <div class="form-panel">
            <el-form ref="form" :model="form" label-width="80px" size="mini">
                <slot name="search-form" :form="form"></slot>
                <div class="search-form-btn-container">
                    <template v-for="item in applyBtnGroup">
                        <el-button 
                            v-show="item.type=='search'" 
                            :key="item.id"  
                            class="search-form-btn" 
                            type="primary" 
                            size="mini" 
                            @click="clickMe(item,$event)">
                            {{item.text}}
                        </el-button>
                    </template>
                </div>
            </el-form>
        </div>
        <div class="operator-btn-container">
                <template v-for="item in applyBtnGroup">
                    <el-button  
                        v-show="item.type=='operat'" 
                        :key="item.id"  
                        class="search-form-btn" 
                        type="primary" 
                        size="mini" 
                        @click="clickMe(item,$event)">
                        {{item.text}}
                    </el-button>
                </template>
        </div>
        <div class="data-grid-panel">
            <template>
                <el-table 
                    ref="multipleTable" 
                    :data="tableData" 
                    tooltip-effect="dark"
                    @selection-change="handleSelectionChange"
                    border  
                    style="width: 100%;margin-bottom:80px;" 
                    size="mini">
                    <template v-if="columnInfo.isSelect">
                        <el-table-column  type="selection" width="55">
                        </el-table-column>
                    </template>
                    <template v-for="column in columnInfo.columns">
                        <el-table-column 
                            v-if="column.type!='hidden'"  
                            :key="column.id" 
                            fixed 
                            :prop="column.field" 
                            :label="column.text" >
                        </el-table-column>
                    </template>
                    <template v-if="columnInfo.isOperat">
                        <el-table-column
                            fixed="right"
                            label="操作"
                            style=""
                            width="200px">
                            <template slot-scope="scope">
                                    <el-button 
                                        v-for="item in applyOperats" 
                                        :key="item.id" 
                                        @click="handleClick(item,scope.row)" 
                                        type="text" size="small">
                                        {{item.text}}
                                    </el-button>
                            </template>
                        </el-table-column>
                    </template>
                </el-table>
            </template>
        </div>                     
        <div class="pagination-panel">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400">
            </el-pagination>
        </div>
        <div class="dialog-form">
            <el-drawer
                :title="新增"
                :visible.sync="dialogInfo.addDialogDrawer"
                :direction="direction"
                :before-close="handleClose"
                size="70%">
                <div class="dialog-form-container">
                    <el-form 
                        :disabled="dialogInfo.addDialogDisabled" 
                        ref="addDialogForm" 
                        :model="addDialogForm" 
                        label-width="80px" 
                        size="mini">
                        <slot name="addDialogForm" :form="addDialogForm"></slot>
                    </el-form>
                </div>
                <div class="dialog-btn-container" ref="addDialogBtns">
                    <template v-for="item in applyBtnGroup">
                        <el-button  
                            v-show="item.type=='addDialog'||item.type=='dialog'" 
                            :key="item.id"  
                            class="search-form-btn" 
                            type="primary" 
                            size="mini" 
                            @click="clickMe(item,$event)">
                            {{item.text}}
                        </el-button>
                    </template>
                </div>
            </el-drawer>
        </div>
        <div class="dialog-form">
            <el-drawer
                :title="修改"
                :visible.sync="dialogInfo.editDialogDrawer"
                :direction="direction"
                :before-close="handleClose"
                size="70%">
                <div class="dialog-form-container">
                    <el-form ref="editDialogForm" 
                        :model="editDialogForm" 
                        label-width="80px" 
                        size="mini">
                        <slot name="editDialogForm" :form="editDialogForm"></slot>
                    </el-form>
                </div>
                <div class="dialog-btn-container">
                    <template v-for="item in applyBtnGroup">
                        <el-button  
                            v-show="item.type=='editDialog'||item.type=='dialog'" 
                            :key="item.id"  
                            class="search-form-btn" 
                            type="primary" 
                            size="mini" 
                            @click="clickMe(item,$event)">
                            {{item.text}}
                        </el-button>
                    </template>
                </div>
            </el-drawer>
        </div>
    </div>
</template>
<script>
export default {
    name:'MainPanel',
    props:{
        btns:{
            type:Object,
            default:{}
            /***
             * *********************************************************
             * 面板中的按钮，已预定义一部分按钮
             * searchBtn查询按钮，addBtn新增按钮，resetBtn重置按钮，editBtn编辑按钮，
             * addSaveBtn保存按钮（为新增弹框内的保存按钮）
             * editSaveBtn修改保存按钮
             * btns:{
             *   default:['searchBtn','addBtn','resetBtn','editBtn','deleteBtn','addSaveBtn','editSaveBtn','cancelBtn'],
             *   //自定义按钮及按钮行为
             *   custom:[
             *   {
             *       id:6,
             *       name:'submit',
             *       text:'提交',
             *       clickFun:function(vm){
             *       alert(JSON.stringify(vm.multipleSelection));
             *       },
             *       type:'operat'
             *       }
             *       ], 
             *   },
             * 
             * **************************************************************
             */
        },
        columnInfo:{
            type:Object,
            default:{
                /***列表第一列是否含有checkbox */
                isSelect:true,
                /****列表最后一列是否含有操作按钮列 */
                isOperat:true,
                /**
                 * ***********示例******************************
                 * operats:{
                 *      //可以直接启用默认按钮  view查看 edit编辑 delete删除
                 *      default:['view','edit','delete'],
                 *      //自定义按钮
                 *      custom:[
                 *          {
                 *               id:11,
                 *               text:'启用',
                 *               //按钮行为
                 *               clickFun:function(row,vm){
                 *                  alert(JSON.stringify(row));
                 *                }
                 *           }
                 *      ],
                 *  }
                 * **********************************************
                 */
                operats:{},
                /****
                 * ****************************************
                 * 列表列定义
                 * id为列表ID，唯一即可
                 * field为前后端model列名
                 * text为表头列名
                 * type值包含 hidden(隐藏列),editable(可编辑的（未完成）)
                 * columns:[
                 *   {id:0,text:'主键',field:'id',type:'hidden'},
                 *   {id:1,text:'姓名',field:'name'},
                 *   {id:2,text:'年龄',field:'age'},
                 *   {id:3,text:'生日',field:'date'}
                 *  ]
                 * 
                 * *******************************************
                 */
                columns:[]
            }
        },
        model:{
            type:[String,Object],
            default:'',
            /**
             * ***********************************
             * 如果model为String类型则为model的名字
             * 约定
             * 查 {baseUrl}/modelName/list
             * 增 {baseUrl}/modelName/add
             * 改 {baseUrl}/modelName/eidt
             * 删 {baseUrl}/modelName/delete
             * ***********************************
             * 如果model为Object类型则model实际为url和操作映射
             * {'list':'[listUrl]','add':'[addUrl]','edit':'[editUrl]','delete':'[deleteUrl]'}
             * ***************************************
             */
        },
        /**如上判断各操作URL是否为约定URL */
        isStandard:true,
        /**查询条件表单对应model */
        form:{
            type:Object,
            default:{}
        },
        /**新增弹框表单对应odel */
        addDialogForm:{
            type:Object,
            default:{}
        },
        /**修改弹框表单对应model */
        editDialogForm:{
            type:Object,
            default:{}
        }
    },
    mounted:function(){
        this.initBtns();
        this.initIsStandard();
        this.initColumnOperats();
    },
    data(){
        return{
            applyBtnGroup:[],
            defaultBtnGroup:[
                {
                    id:'1',
                    name:'searchBtn',
                    text:'查询',
                    type:'search',
                    clickFun:function(vm){
                        var listUrl = '';
                        if(vm.isStandard){
                            listUrl = vm.$baseUrl+vm.model+'/list';
                        } else {
                            listUrl = vm.model.list;
                        }
                        // var datas = [];
                        // var that = vm;
                        // vm.$axios.get(listUrl,vm.form).then(function(response){
                        //     datas = response.data;
                        //     that.tableData = datas;
                        // }).catch(function(e){
                        //     alert(JSON.stringify(e));
                        // });
                        var datas = [];
                        for(var i=0;i<100;i++){
                            var data = {id:i,name:'张三'+i,age:15+i,date:'2019-08-05'};
                            datas.push(data);
                        } 
                        vm.tableData = datas;
                    },
                },{
                    id:'2',
                    name:'resetBtn',
                    text:'重置',
                    type:'search',
                    clickFun:function(vm){
                        vm.form={};
                    },
                },{
                    id:'3',
                    name:'addBtn',
                    text:'新增',
                    type:'operat',
                    clickFun:function(vm){
                        vm.dialogInfo.addDialogDisabled = false;
                        vm.addDialogForm = {};
                        vm.dialogInfo.addDialogDrawer = true;
                    },
                },{
                    id:'4',
                    name:'editBtn',
                    text:'修改',
                    type:'operat',
                    clickFun:function(vm){
                        var selection = vm.multipleSelection;
                        if(selection.length==0){
                            alert('请选择一条数据');
                            return;
                        }else if(selection.length>1){
                            alert('只能选择一条数据');
                            return;
                        }
                        vm.editDialogForm = selection[0];
                        vm.dialogInfo.editDialogDrawer = true;
                    },
                },{
                    id:'5',
                    name:'deleteBtn',
                    text:'删除',
                    type:'operat',
                    clickFun:function(vm){
                        var deleteUrl = '';
                        if(vm.isStandard){
                            deleteUrl = vm.$baseUrl+vm.model+'/delete';
                        } else {
                            deleteUrl = vm.model.delete;
                        }
                        alert(JSON.stringify(vm.multipleSelection));
                    },
                },{
                    id:'6',
                    name:'addSaveBtn',
                    text:'保存',
                    type:'addDialog',
                    clickFun:function(vm){
                        var addUrl = '';
                        if(vm.isStandard){
                            addUrl = vm.$baseUrl+vm.model+'/add';
                        } else {
                            addUrl = vm.model.add;
                        }
                        alert(JSON.stringify(vm.addDialogForm));
                        //vm.$axios.post(vm.$baseUrl+'vm.');
                        vm.dialogInfo.addDialogDrawer = false;
                    },
                },{
                    id:'7',
                    name:'editSaveBtn',
                    text:'保存',
                    type:'editDialog',
                    disabled:false,
                    clickFun:function(vm){
                        var eidtUrl = '';
                        if(vm.isStandard){
                            eidtUrl = vm.$baseUrl+vm.model+'/edit';
                        } else {
                            eidtUrl = vm.model.add;
                        }
                        alert(JSON.stringify(vm.editDialogForm));
                        //vm.$axios.post(vm.$baseUrl+'vm.');
                        vm.dialogInfo.editDialogDrawer = false;
                    },
                },{
                    id:'8',
                    name:'cancelBtn',
                    text:'取消',
                    type:'dialog',
                    clickFun:function(vm){
                        vm.dialogInfo.addDialogDrawer = false;
                        vm.dialogInfo.editDialogDrawer = false;
                    },
                }
            ],
            applyOperats:[],
            defaultOperats:[
                {
                    id:1,
                    name:'view',
                    text:'查看',
                    clickFun:function(row,vm){
                        vm.addDialogForm = row;
                        vm.dialogInfo.addDialogDrawer = true;
                        vm.dialogInfo.addDialogDisabled = true;
                    }
                },{
                    id:2,
                    name:'edit',
                    text:'编辑',
                    clickFun:function(row,vm){
                        vm.editDialogForm = row;
                        vm.dialogInfo.editDialogDrawer = true;
                    }
                },{
                    id:3,
                    name:'delete',
                    text:'删除',
                    clickFun:function(row,vm){
                         var deleteUrl = '';
                        if(vm.isStandard){
                            deleteUrl = vm.$baseUrl+vm.model+'/delete';
                        } else {
                            deleteUrl = vm.model.delete;
                        }
                        alert(JSON.stringify(row));
                    }
                }
            ],
            tableData:[],
            multipleSelection: [],
            currentPage4: 4,
            dialogInfo:{
                addDialogDrawer:false,
                addDialogDisabled:false,
                editDialogDrawer:false,
                addDialogSaveBtnDisabled:false,
            }
        }
    },
    methods:{        
        clickMe:function(btn,event){
            btn.clickFun(this);
            this.$emit('click'+btn.name,event);
        },
        handleSelectionChange:function(val){
            this.multipleSelection = val;
        },
        handleClick:function(btn,row){
            btn.clickFun(row,this);
            this.$emit('click'+btn.name,row);
        },
        /********************初始化工作 */
        initBtns:function(){
            if('undefined'!=this.btns.default&&null!=this.btns.default){
                for(var i=0;i<this.defaultBtnGroup.length;i++){
                    var btn = this.defaultBtnGroup[i];
                    for(var j=0;j<this.btns.default.length;j++){
                        var applyBtn = this.btns.default[j];
                        if(btn.name==applyBtn){
                            this.applyBtnGroup.push(btn);
                        }
                        if(btn.id==applyBtn){
                            this.applyBtnGroup.push(btn);
                        }
                    }
                }
            }
            var customBtn = this.btns.custom;
            if('undefined'!=customBtn&&null!=customBtn){
                for(var i=0;i<customBtn.length;i++){
                    this.applyBtnGroup.push(customBtn[i]);
                }
            }
        },
        initColumnOperats:function(){
            if('undefined'!=this.columnInfo.operats.default&&null!=this.columnInfo.operats.default){
                for(var i=0;i<this.defaultOperats.length;i++){
                    var btn = this.defaultOperats[i];
                    for(var j=0;j<this.columnInfo.operats.default.length;j++){
                        var applyBtn = this.columnInfo.operats.default[j];
                        console.log('applyBtn:'+applyBtn+"----"+btn.name);
                        if(btn.name==applyBtn){
                            this.applyOperats.push(btn);
                        }
                        if(btn.id==applyBtn){
                            this.applyOperats.push(btn);
                        }
                    }
                }

            }
            var customBtn = this.columnInfo.operats.custom;
            if('undefined'!=customBtn&&null!=customBtn){
                for(var i=0;i<customBtn.length;i++){
                    this.applyOperats.push(customBtn[i]);
                }
            }
        },
        initIsStandard:function(){
            if(typeof this.model=='string'){
                this.isStandard = true;
            }else{
                this.isStandard = false;
            }
        }
        /********************初始化工作 */
        
    },
    computed:{
        
    }
}
</script>
<style scoped>
.display{
    display: inline;
}
.no-display{
    display: none;
}
.main-panel{
    padding: 0px;
    margin: 0px;
    border: 1px solid #eee;
}
.form-panel{
    display: block;
    background-color: #B3C0D1;
    padding-top: 18px;
    width: 100%;
    height: 100%;
}
.search-form-btn-container{
    display: block;
    clear: both;
    margin-bottom: 18px;
    margin-left: 80px;
    margin-right: 10px;
}
.data-grid-panel{
    display: block;
    background-color: white;
    height: 600px;
    margin-bottom: 100px;
}
.operator-btn-container{
    padding-top: 10px;
    padding-bottom: 10px;
    float: right;
}
.pagination-panel{
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    position: fixed;
    z-index: 1000;
    bottom: 0px;
    width:100%;
    background-color: #B3C0D1;
    border-top: 1px solid #eee;
    line-height: 50px;
    text-align: center;
    align-content: center;
    vertical-align: center;

}
.dialog-form-container{
    border: 1px solid #B3C0D1;
    width: 100%;
    height: 92%;
    padding-top: 20px;
}
.dialog-btn-container{
    position:absolute;
    right: 10px;
    bottom:20px;
}
</style>