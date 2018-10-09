<template>
  <div class="header">
    <div class="header-content">
      <i class="menu el-icon-menu pull-left" @click="showMenu"></i>
      <router-link to="/"><h2 class="header-title">赞美诗网</h2></router-link>
      <router-link to="/search"><i class="header-search el-icon-search pull-right"></i></router-link>
    </div>
  </div>
</template>
<script>
import store from '../../store'

export default {
  props: {
    index: {
      type: Number,
      default: 0
    },
    menu: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      selectIndex: this.index,
      isShowMenu: this.menu
    }
  },

  methods: {
    showMenu () {
      store.dispatch({
        type: 'showSideBar'
      })
    },
    hideMenu () {
      store.dispatch({
        type: 'hideSideBar'
      })
    }
  }
}
</script>
<style>
  .header{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    margin: inherit;
    z-index: 1000;
  }
  .header-content{
    background-color: dodgerblue;
    text-align: center;
    border: none;
    padding: 0 1rem;
    flex-shrink: 0;
    min-height: 3.5rem;
    height: 3.5rem;
    overflow: hidden;
  }
  .header-title{
    margin: 0;
    padding: 0;
    height:3.5rem;
    font-size: 20px;
    overflow: hidden;
    display: inline-block;
    line-height: 3.7rem;
    color: #fff;
  }
  .menu{
    color: #fff;
    font-size: 26px;
    cursor: pointer;
    margin-top: 1rem!important;
  }
  .header-search{
    color: #fff;
    font-size: 26px;
    cursor: pointer;
    margin-top: 1rem!important;
  }
  .pull-left {
    float: left;
  }
  .pull-right {
    float: right;
  }
</style>
