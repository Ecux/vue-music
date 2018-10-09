<template>
  <div class="search">
    <el-input v-model="search" placeholder="请输入内容">
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
  </div>
</template>

<script>
export default {
  data () {
    return {
      search: ''
    }
  }
}
</script>

<style>
.search {
  padding: 1.5rem 0.5rem;
}
</style>
