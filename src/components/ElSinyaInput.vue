<template>
    <div class="el-sinya-form-item-container">
        <el-form-item :label="sinyaLabel+'：'" :sinyaLabel="sinyaLabel">
            <el-input :value="value" @input="$emit('input',$event)" @change="changeSinyaInput($event)" v-bind="$attrs"></el-input>
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
            default:'',
        }
    },
    data(){
        return{

        }
    },
    methods:{
        changeSinyaInput:function(event){
            this.$emit('change',event);
        }
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