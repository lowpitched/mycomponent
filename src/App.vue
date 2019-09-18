<template>
<el-container>
  <el-header>
    <div class="header-logo">
      <i class="el-icon-menu header-part"></i>
    </div>
    <div class="header-loginfo">
      <img src="./assets/logon-head-img.jpg"/>
    </div> 
    <div class="header-notice">
      <i class="el-icon-bell header-part"></i>
    </div>
    
  </el-header>
  <el-container>
    <el-aside width="200px">     
      <el-row class="tac">
        <el-col :span="24">
          <h5></h5>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-setting"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-aside>
    <el-main>
      <div class="bread-crumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
       <div id="app">
        <router-view/>
      </div>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,body{
  height: 100%;
}
.header-logo .header-notice{
  display: inline-block;
  height: 100%;
  text-align: center;
  line-height: 60px;
  vertical-align: middle;  
}
.header-logo{
  float: left;
  font-size: 40px;
}
.header-notice{
  float: right;
   font-size: 24px;
}
.header-loginfo{
  height: 40px;
  width: 40px;
  float: right;
  margin-left: 10px;
  margin-right: 10px;
}
.header-loginfo > img{
  height: 40px;
  width: 40px;
  float: right;
  margin-top: 10px;
}
.header-part{
  color: white;
  display: inline-block;
  line-height: 60px;
  
}
.bread-crumb{
  height: 30px;
  line-height: 30px;
  margin-top: 3px;
  background-color: #fff;
}
.el-breadcrumb{
  height: 100%;
  line-height: 30px;
}
.el-menu-vertical-demo{
  border: 0px;
}
.el-container{
  height: 100%;
}
.el-header{
  background-color: #222;
  height: 30px;
  border: 1px solid #080808;
  box-shadow: 0px 3px 2px #888;
}
.el-aside{
   background-color: #545c64;
   box-shadow: 3px 0px 2px #888;
   margin-right: 3px;
}
.el-main{
  padding: 0px;
}
#app {
}
</style>
