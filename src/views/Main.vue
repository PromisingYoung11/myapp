<template>
    <div>
        <el-container>
            <el-aside width="auto">
                <common-aside></common-aside>
            </el-aside>
            <el-container>
                <el-header width="200px">
                    <common-header/>
                </el-header>
                <common-tag />
                <el-main>
                    <!-- 路由出口 -->
                    <!-- 路由匹配到的组件将渲染在这里 -->
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
        
    </div>
</template>
  
  <script>
  import CommonHeader from '@/components/CommonHeader.vue'
  import CommonAside from '../components/CommonAside.vue'
  import CommonTag from '../components/CommonTag.vue'
  export default {
      data(){
          return{
  
          }
      },
      components:{
        CommonAside,
        CommonHeader,
        CommonTag
      }
  }
  </script>

  <style scoped>
    .el-header{
        padding: 0;
    }
    .el-container{
        height: 100vh;
    }
  </style>