<template>
  <el-menu default-active="1-4-1" class="el-menu-vertical-demo"  
      @open="handleOpen" 
      @close="handleClose" 
      :collapse="isCollapse" 
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <h3>{{isCollapse ? '后台':'通用后台管理系统'}}</h3>
        <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :key="item.name" :index="item.name">
            <i :class="`el-icon-${item.icon}`"></i>
            <span slot="title">{{ item.label }}</span>
        </el-menu-item>    
    <el-submenu v-for="item in hasChildren" :key="item.label" :index="item.label">
        <template  slot="title">
            <i :class="`el-icon-${item.icon}`"></i>
            <span slot="title">{{ item.label }}</span>
        </template>
        <el-menu-item-group v-for="subItem in item.children" :key="subItem.path" >
            <el-menu-item  @click="clickMenu(subItem)" :index="subItem.path">{{ subItem.label }}</el-menu-item>
        </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
import { CLOSING } from 'ws';

  export default {
    data() {
      return {
        menuData: [
        {
          path: '/',
          name: 'home',
          label: '首页',
          icon: 's-home',
          url: 'Home/Home'
        },
        {
          path: '/mall',
          name: 'mall',
          label: '商品管理',
          icon: 'video-play',
          url: 'MallManage/MallManage'
        },
        {
          path: '/user',
          name: 'user',
          label: '用户管理',
          icon: 'user',
          url: 'UserManage/UserManage'
        },
        {
          label: '其他',
          icon: 'location',
          children: [
            {
              path: '/page1',
              name: 'page1',
              label: '页面一',
              icon: 'setting',
              url: 'Other/PageOne'
            },
            {
              path: '/page2',
              name: 'page2',
              label: '页面二',
              icon: 'setting',
              url: 'Other/PageTwo'
            }
          ]
        }
      ]
      };
    },
    methods: {
      clickMenu(item){
        // console.log(item);
        //当页面的路由与跳转的路由不一致时才允许跳转
        if(this.$route.path !== item.path && !(this.$route.path ==='/home' && item.path === '/')){
          this.$router.push(item.path);
        }
        this.$store.commit('selectTab',item)
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    computed:{
      //1.带有子菜单的
      hasChildren(){
        return this.menuData.filter(item => item.children)
      },
      //2.不带子菜单的
      noChildren(){
        return this.menuData.filter(item => !item.children)
      },
      isCollapse(){
        return this.$store.state.tab.isCollapse
      }

    }
  }
</script>

<style lang="less">
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-menu{
    border-right: none;
    height: 100vh;
    h3 {
      color: #fff;
      text-align: center;
      line-height: 48px;
      font-size: 16px;
      font-weight: 400;
    }
  }
</style>