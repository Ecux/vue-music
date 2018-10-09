<template>
  <div class="side-list">
    <i class="icon" :class="side_icon_class"></i>
    <span class="title">{{side_title}}</span>
    <span class="disc" v-show="showDisc">{{side_disc}}</span>
  </div>
</template>

<script>
export default {
  props: {
    icon_class: {
      type: String,
      default: ''
    },
    list_title: {
      title: String,
      default: ''
    },
    disc: {
      title: String,
      default: ''
    }
  },
  data () {
    return {
      side_icon_class: this.icon_class,
      side_title: this.list_title,
      side_disc: this.disc
    }
  },
  computed: {
    showDisc () {
      return this.side_disc.length
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped>
.side-list{
  position: relative;
  height: 40px;
  line-height: 40px;
  font-size: 0;
  padding: 0 15px;
  width: 100%;
  box-sizing: border-box;
}
.side-list:active{
  background:#d5d5d5;
}
.side-list .icon {
  font-size: 16px;
  margin-right: 6px;
  color: #9a9a9a;
}
.side-list .title {
  font-size: 14px;
  color: #333;
}
.side-list .disc {
  position: absolute;
  right: 15px;
  font-weight: 400;
  top: 50%;
  -webkit-transform: translate3d(0,-50%,0);
  transform: translate3d(0,-50%,0);
  color: #9c9c9c;
  font-size: 10px;
}
</style>
