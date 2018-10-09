<template>
  <div id="app">
    <!-- 头部header -->
    <headerApp/>
    <!-- 侧边栏列表 -->
     <menuApp :info="info"/>
    <!-- 底部固定页 -->
    <bottomApp />
    <router-view/>
  </div>
</template>

<script>
import menuApp from './components/Menu/Menu'
import headerApp from './components/Header/Header'
import bottomApp from './components/Bottom/Bottom'
import store from './store'
import axios from 'axios'
export default {
  name: 'App',
  components: {
    menuApp,
    headerApp,
    bottomApp
  },
  created () {
    let LocalAPI = 'static/data.json'
    axios.get(LocalAPI).then((res) => {
      // data.user的信息赋值给info  再通过组件的数据传递传给sideBar
      this.info = res.data.user
      // 所有的数据存起来  包括音乐个人信息 等等
      store.dispatch('set_AllInfo', res.data)
    }, (err) => {
      alert(err)
    })
  },
  data () {
    return {
      info: {}
    }
  }
}
</script>

<style>
  body{
    margin: 0;
  }
  a{
    text-decoration: none;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    padding-top: 3.5rem;
  }
</style>
