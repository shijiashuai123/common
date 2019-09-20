<template>
  <el-menu
    mode="vertical"
    unique-opened
    :default-active="$route.path"
    :collapse="isCollapse"
    background-color="#1F263E"
    text-color="#bfcbd9"
    active-text-color="#409EFF"
  >
    <sidebar-item :routes="permission_routers"></sidebar-item>
  </el-menu>
</template>

<script>
import { mapGetters } from "vuex";
import SidebarItem from "./sidebarItem";
import ScrollBar from "base/ScrollBar";
export default {
  components: { SidebarItem, ScrollBar },
  computed: {
    ...mapGetters(["permission_routers", "sidebar"]),
    isCollapse() {
      return !this.sidebar.opened;
    }
  }
};
</script>

<style scoped rel="stylesheet/scss" lang="scss">
/*.el-menu {*/
/*min-height: 100%;*/
/*}*/
</style>
