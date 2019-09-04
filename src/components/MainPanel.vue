<template>
    <div class="main-panel">
        <div class="form-panel">
            <el-form ref="form" :model="form" label-width="80px" size="mini">
                <slot name="search-form"></slot>
                <div class="search-form-btn-container">
                    <template v-for="item in applyBtnGroup">
                        <el-button v-show="item.type=='search'" :key="item.id"  class="search-form-btn" type="primary" size="mini" @click="clickMe(item,$event)">{{item.text}}</el-button>
                    </template>
                </div>
            </el-form>
        </div>
        <div class="operator-btn-container">
                <template v-for="item in applyBtnGroup">
                    <el-button  v-show="item.type!='search'" :key="item.id"  class="search-form-btn" type="primary" size="mini" @click="clickMe(item,$event)">{{item.text}}</el-button>
                </template>
        </div>
        <div class="data-grid-panel">
            <template>
                <el-table :data="tableData" border  style="width: 100%;margin-bottom:80px;" size="mini">
                    <template v-if="columnInfo.isSelect">
                        <el-table-column  type="selection" width="55"></el-table-column>
                    </template>
                    <el-table-column v-for="column in columnInfo.columns" :key="column.id" fixed :prop="column.field" :label="column.text" ></el-table-column>
                    <template v-if="columnInfo.isOperat">
                        <el-table-column
                            fixed="right"
                            label="操作"
                            style=""
                            width="200px">
                            <template slot-scope="scope">
                                    <el-button v-for="item in columnInfo.operats" :key="item.id" @click="handleClick(scope.row)" type="text" size="small">{{item.text}}</el-button>
                            </template>
                        </el-table-column>
                    </template>
                </el-table>
            </template>
            <slot name="dataGrid"></slot>
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
                title="我是标题"
                :visible.sync="dialogDrawer"
                :direction="direction"
                :before-close="handleClose"
                size="70%">
                <span>我来啦!</span>
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
        },
        columnInfo:{
            type:Object,
            default:{
                isSelect:true,
                isOperat:true,
                operats:[
                    
                ],
                columns:[
                {
                    id:'1',
                    field:'',
                    text:'',
                }
            ]}
        },
        model:{
            type:Object,
            default:{}
        },
        formUrl:{
            type:String,
            default:'http://127.0.0.1/list'
        }
    },
    mounted:function(){
        this.initBtns();
    },
    data(){
        return{
            form:{},
            applyBtnGroup:[],
            defaultBtnGroup:[
                {
                    id:'1',
                    name:'searchBtn',
                    text:'查询',
                    clickFun:function(vm){
                        var datas = [];
                        var that = vm;
                        vm.$axios.get('/api/helloWorld/hello').then(function(response){
                            datas = response.data;
                            that.tableData = datas;
                        }).catch(function(e){
                            alert(JSON.stringify(e));
                        });
                    },
                    dialogDrawer:false,
                    type:'search',
                },{
                    id:'2',
                    name:'resetBtn',
                    text:'重置',
                    clickFun:function(vm){
                        
                    },
                    type:'search',
                },{
                    id:'3',
                    name:'addBtn',
                    text:'新增',
                    clickFun:'',
                    dialogDrawer:true,
                    type:'operat',
                },{
                    id:'4',
                    name:'editBtn',
                    text:'修改',
                    clickFun:'',
                    dialogDrawer:true,
                    type:'operat',
                },{
                    id:'5',
                    name:'deleteBtn',
                    text:'删除',
                    clickFun:'',
                    type:'operat',
                }
            ],
            tableData:[],
            currentPage4: 4,
            dialogDrawer:false,
        }
    },
    methods:{        
        clickMe:function(btn,event){
            if('undefined'!=btn.dialogDrawer&&null!=btn.dialogDrawer&&btn.dialogDrawer){
                this.dialogDrawer = true;
            }else{
                this.dialogDrawer = false;
            }
            btn.clickFun(this);
            /* for(var i=0;i<100;i++){
                var data = {id:i,name:'张三'+i,age:15+i,date:'2019-08-05'};
                datas.push(data);
            } */
            this.$emit('click'+btn.name,event);
        }
    },
    computed:{
        /********************初始化工作 */
        initBtns:function(){
            if('undefined'!=this.btns.default&&null!=this.btns.default){
                for(var i=0;i<this.defaultBtnGroup.length;i++){
                    console.log(JSON.stringify(this.defaultBtnGroup[i]));
                    var btn = this.defaultBtnGroup[i];
                    for(var j=0;j<this.btns.default.length;j++){
                        var applyBtn = this.btns.default[j];
                        console.log(applyBtn+"-"+btn.name);
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
        /********************初始化工作 */
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
</style>