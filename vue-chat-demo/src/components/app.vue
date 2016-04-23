<script>
  import store from '../store'
  import card from './card'
  import list from './list'
  import text from './text'
  import message from './message'

  export default {
    el: '#app',
    data () {
      let serverData = store.fetch();
      return {
        user: serverData.user,
        userList: serverData.userList,
        sessionList: serverData.sessionList,
        search: '',
        sessionIndex: 0
      }
    },
    computed: {
      session () {
        return this.sessionList[this.sessionIndex]
      }
    },
    watch: {
      sessionList: {
        deep: true,
        handler () {
          store.save({
            user: this.user,
            userList: this.userList,
            sessionList: this.sessionList
          })
        }
      }
    },
    components: {
      card, list, message, text
    }
  }
</script>

<template>
  <div>
    <div class="sidebar">
      <card :user="user" :search.sync="search"></card>
      <list :user-list="userList" :session="session" :session-index.sync="sessionIndex" :search="search"></list>
    </div>
    <div class="main">
      <message :session="session" :user="user" :user-list="userList"></message>
      <text :session="session"></text>
    </div>
  </div>
</template>

<style lang="less">
  #app{
    overflow: hidden;
    border-radius: 3px;

    .sidebar, .main {
      height: 100%;
    }
    .sidebar {
      float: left;
      width: 200px;
      color: #f4f4f4;
      background-color: #2e3238;
    }
    .main {
      position: relative;
      overflow: hidden;
      background-color: #eee;
    }
    .m-text {
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
    }
    .m-message {
      height: ~'calc(100% - 160px)';
    }
  }
</style>
