<template>
  <div class="app-menu">
    <transition name="side">
      <div class="app-sider" v-show="isMenuShow">
          <div class="app-content">
            <div class="menu-detail">
              <div class="menu-userInfo">
                <img width="56" height="56" class="avatar" :src="info.avatar">
                <div class="user-detail">
                  <span class="name" v-text="info.name"></span>
                </div>
              </div>
            </div>
            <div class="menu-content">
              <MenuList icon_class="el-icon-share" list_title="首页" disc="" @click.native="toLink(path='/')"></MenuList>
              <MenuList icon_class="el-icon-upload" list_title="音乐" disc="诗歌" @click.native="toLink(path='/music')"></MenuList>
            </div>
            <div class="menu-footer">
              <p class="border-1"></p>
              <div class="exit">
                <i class="el-icon-error"></i>
                <span>退出</span>
              </div>
            </div>
          </div>
      </div>
    </transition>
    <transition name="fade" @touchmove.stop.prevent>
      <div class="app-shade" v-show="isMenuShow" @click="hideMenu"></div>
    </transition>
  </div>
</template>

<script>
import store from './../../store'
import MenuList from './../MenuList/MenuList'
export default {
  name: 'Menu',
  props: {
    info: {
      type: Object
    }
  },
  computed: {
    // 显示
    isMenuShow () {
      return store.state.sideBar.isShow
    }
  },
  data () {
    return {
      menuShow: false
    }
  },
  methods: {
    // 显示菜单
    hideMenu () {
      store.dispatch({
        type: 'hideSideBar'
      })
    },
    toLink (link) {
      this.$router.push({
        path: link
      })
      this.hideMenu()
    }
  },
  components: {
    MenuList: MenuList
  }
}
</script>
<style scoped>
  .app-menu{
  }
  .app-sider{
    position: fixed;
    top: 0;
    left: 0;
    width: 286px;
    bottom: 0;
    background-color: #fff;
    z-index: 1001;
  }
  .app-shade{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: .3;
    background-color: #000;
    z-index: 1000;
  }
  .side-item {
    display: inline-block;
    margin-right: 10px;
  }
  .side-enter-active, .side-leave-active {
    transition: all .1s;
  }
  .side-enter, .side-leave-to
    /* .list-leave-active for below version 2.1.8 */ {
    opacity: 1;
    transform: translateX(-180px);
  }
  .app-content {
    position: fixed;
    width: 286px;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 1001;
    overflow-y: auto;
    background: #fff;
    -webkit-overflow-scrolling: touch;
  }
  .menu-content{
    background: #fff;
    display: block;
    padding-bottom: 40px;
  }
  .menu-userInfo {
    box-sizing: border-box;
    width: 100%;
    height: 168px;
    position: relative;
    padding: 50px 15px 15px;
    background-image: url("./../../assets/timg.jpg"); background-size: cover;
  }
  .menu-userInfo .avatar {
    position: absolute;
    bottom: 50px;
    left: 15px;
    border-radius: 50%;
  }
  .menu-userInfo .user-detail {
    position: absolute;
    bottom: 20px;
    left: 15px;
    font-size: 0;
  }
  .menu-userInfo .user-detail .name {
    display: inline-block;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    vertical-align: middle;
    max-width: 130px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .menu-footer{
    position: fixed;
    bottom: 0;
    height: 47px;
    width: 286px;
  }
  .menu-footer div {
    display: inline-block;
    font-size: 16px;
    height: 100%;
    text-align: right;
  }
  .border-1{
    border-top:1px solid rgba(7, 17, 27, 0.1);
    padding: 0;
    margin: 0;
  }
  .menu-footer .exit{
    width: 90%;
    line-height: 40px;
  }
</style>
