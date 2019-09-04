<template>
    <div class="el-sinya-form-item-container">
        <el-form-item :label="sinyaLabel+'：'" :sinayLabel="sinyaLabel">
            <el-select :value="value" @input="$emit('input',$event)" placeholder="请选择" v-bind="$attrs">
                <el-option v-for="item in sinyaOptions"  :label="item.text" :value="item.id" :key="item.id"></el-option>
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