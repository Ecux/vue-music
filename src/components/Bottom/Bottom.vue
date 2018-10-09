<template>
  <div class="bottom-bar" @click="showMusicDetail">
    <div>底部歌曲</div>
  </div>
</template>
<script>
import store from '../../store'
export default {
  data () {
    return {
      audioInfo: {
      }
    }
  },
  methods: {
    showMusicDetail () {
      store.dispatch({
        type: 'set_MusicDetail',
        isShow: true
      })
    }
  },
  computed: {
  },
  mounted () {
  }
}
</script>
<style>
  .bottom-bar {
    position: fixed;
    z-index: 1000;
    background: #eee;
    bottom: 0;
    height: 46px;
    padding: 5px;
    box-sizing: border-box;
    left: 0;
    right: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
</style>
