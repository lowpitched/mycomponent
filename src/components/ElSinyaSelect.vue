<template>
    <div class="el-sinya-form-item-container">
        <!-- <el-form-item 
            :label="sinyaLabel+'：'" 
            :sinayLabel="sinyaLabel" 
            :sinyaItemLabelField="sinyaItemLabelField" 
            :sinyaItemValueField="sinyaItemValueField" 
            :sinyaUrl="sinyaUrl" 
            :sinyaParam="sinyaParam"> -->
        <el-form-item :label="sinyaLabel+'：'" >
            <el-select 
                :value="value" 
                @input="$emit('input',$event)" 
                placeholder="请选择" 
                v-bind="$attrs">
                <el-option 
                    v-for="item in sinyaOptions"  
                    :label="item.text" 
                    :value="item.id" 
                    :key="item.id">
                </el-option>
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
        if('undefined'!=this.url&&null!=this.url){
            var that = this;
            this.$axios.get(that.url,that.param).then(function(response){
                var dataArr = response.data;
                for(var i=0;i<dataArr.length;i++){
                    var itemLabel = dataArr[i]['itemLabelField'];
                    var itemValue = dataArr[i]['itemValueField'];
                    var item = {};
                    item.id=itemValue;
                    item.text=itemLabel;
                    that.sinyaOptions.push(item);
                }
            }).catch(function(e){
                alert(url+"加载失败");
            });
        }
    },
    data(){
        return{

        }
    },
    methods:{

    },
    computed:{

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