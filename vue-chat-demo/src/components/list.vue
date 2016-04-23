<script>
  export default {
    props: ['userList', 'session', 'sessionIndex', 'search'],
    methods: {
      select (user) {
        this.sessionIndex = this.userList.indexOf(user)
      }
    },
    filters: {
      search (list) {
        return list.filter(user => user.name.indexOf(this.search) > -1)
      }
    }
  }
</script>

<template>
  <div class="m-list">
    <ul>
      <li v-for="user in userList | search" :class="{active: session.userId === user.id}" @click="select(user)">
        <img class="avatar" width="30" height="30" :alt="user.name" :src="user.img"  />
        <p class="name">
          {{user.name}}
        </p>
      </li>
    </ul>
  </div>
</template>

<style lang="less">
  .m-list {
    li {
      padding: 12px 15px;
      border-bottom: 1px solid #292C33;
      cursor: pointer;
      transition: background-color 0.1s;
      &:hover {
        background-color: rgba(255, 255, 255, 0.03);
      }
      &.active {
        background-color: rgba(255, 255, 255, 0.1);
      }
    }
    .avatar {
      border-radius: 2px;
    }
    .avatar, .name {
      vertical-align: middle;
    }
    .name {
      display: inline-block;
      margin: 0 0 0 15px;
    }

  }
</style>
