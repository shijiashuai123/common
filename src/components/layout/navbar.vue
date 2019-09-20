<template>
  <el-menu class="navbar" mode="horizontal">
    <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
    <levelbar></levelbar>
    <tabs-view></tabs-view>
    <!-- <error-log v-if="log.length>0" class="errLog-container" :logsList="log"> -->
    <!-- </error-log> -->
    <el-dropdown class="avatar-container" trigger="click">
      <div class="avatar-wrapper">
        <img class="user-avatar" :src="avatar+'?imageView2/1/w/80/h/80'" />
        <i class="el-icon-caret-bottom"></i>
        <span class="user-name">{{name}}</span>
      </div>
      <el-dropdown-menu class="user-dropdown" slot="dropdown">
        <!-- <router-link class="inlineBlock" to="/"> -->
        <el-dropdown-item>
          <a>首页</a>
        </el-dropdown-item>
        <!-- </router-link> -->
        <!-- <a href="javascript:void(0)">
          <el-dropdown-item>
            个人详情
          </el-dropdown-item>
        </a>-->
        <el-dropdown-item divided>
          <span @click="_logout" style="display:block;">退出登录</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-menu>
</template>

<script>
import { mapGetters } from "vuex";
import Levelbar from "./levelbar";
import TabsView from "./TabsView";
import Hamburger from "base/hamburger";
// import ErrorLog from 'base/errLog'
export default {
  components: {
    Levelbar,
    TabsView,
    Hamburger
    // ErrorLog
  },
  data() {
    return {
      log: []
    };
  },
  computed: {
    ...mapGetters(["sidebar", "name", "avatar"])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch("ToggleSideBar");
    },
    _logout() {
      // console.log(this.$store.dispatch("LogOut"));
      // this.$store.dispatch("LogOut").then(() => {
      //   // 为了重新实例化vue-router对象避免bug
      //   // location.reload()
      // });
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: 50px;
  min-width: 1000px;
  line-height: 50px;
  border-radius: 0px !important;
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .errLog-container {
    display: inline-block;
    position: absolute;
    right: 200px;
  }
  .screenfull {
    position: absolute;
    right: 90px;
    top: 16px;
    color: red;
  }
  .avatar-container {
    height: 40px;
    position: absolute;
    top: 0;
    right: 35px;
    .avatar-wrapper {
      cursor: pointer;
      margin: 5px 0;
      padding-right: 95px;
      position: relative;
      height: 40px;
      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
      .user-name {
        position: absolute;
        left: 45px;
        top: 0;
        height: 40px;
        width: 120px;
        line-height: 40px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .el-icon-caret-bottom {
        position: absolute;
        right: 0px;
        top: 16px;
        font-size: 12px;
      }
    }
  }
}
</style>
