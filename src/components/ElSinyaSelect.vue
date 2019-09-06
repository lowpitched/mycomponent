<template>
    <div class="el-sinya-form-item-container">
         <el-form-item 
            :label="sinyaLabel+'：'" 
            :sinayLabel="sinyaLabel" 
            :sinyaItemLabelField="sinyaItemLabelField" 
            :sinyaItemValueField="sinyaItemValueField" 
            :sinyaUrl="sinyaUrl" 
            :sinyaParam="sinyaParam"> 
        <!-- <el-form-item :label="sinyaLabel+'：'" > -->
            <el-select
                :value="value" 
                @input="$emit('input',$event)" 
                placeholder="请选择" 
                v-bind="$attrs">
                <template v-if="sinyaAutoOptions.length>0">
                    <el-option 
                    v-for="item in sinyaAutoOptions"  
                    :label="item.text" 
                    :value="item.id" 
                    :key="item.id">
                </el-option>
                </template>
                <template v-else>
                    <el-option 
                    v-for="item in sinyaOptions"  
                    :label="item.text" 
                    :value="item.id" 
                    :key="item.id">
                </el-option>
                </template>
            </el-select>
        </el-form-item>
    </div>
</template>
<script>
export default {
    name:'ElSinyaSelect',
    props:{
        sinyaLabel:{
            type:String,
            default:'我是标签',
        },
        value:{
            type:[String,Number],
        },
        sinyaOptions:{
            type:Array
        },
        sinyaUrl:'',
        sinyaParam:'',
        sinyaItemLabelField:'',
        sinyaItemValueField:''
    },
    mounted:function(){
        this.initSelect();
    },
    data(){
        return{
            sinyaAutoOptions:[]
        }
    },
    methods:{
        initSelect: function(){
            if('undefined'!=this.sinyaUrl&&null!=this.sinyaUrl){
                var that = this;
                var datas = [];
                this.$axios.get(that.sinyaUrl).then(async function(response){
                    var dataArr = response.data;
                    for(var i=0;i<dataArr.length;i++){
                        var itemLabel = dataArr[i][that.sinyaItemLabelField];
                        var itemValue = dataArr[i][that.sinyaItemValueField];
                        var item = {};
                        item.id=itemValue;
                        item.text=itemLabel;
                        datas[i]=item;
                    }
                    that.sinyaAutoOptions = datas;
                }).catch(function(e){
                    alert(that.sinyaUrl+"加载失败");
                });
            }
        },
    },
    computed:{

    },
    watch:{
       
    }
}
</script>
<style scoped>
 .el-sinya-form-item-container{
    display: inline-block;
    float: left;
    width: 273px;
}   
</style>