<template>
  <div class="test">welcome to vue</div>
</template>

<script>
import * as test from "@/api/test.js";
import { mapMutations } from "vuex";

export default {
  name: "hello",
  data() {
    return {};
  },
  created() {},
  methods: {
    ...mapMutations({
      setToken: "SET_TOKEN",
      setCustomerId: "SET_CUSTOMER"
    })
  }
};
</script>

<style scoped lang="scss">
</style>

