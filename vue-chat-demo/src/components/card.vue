<script>
  export default {
    props: ['user', 'search']
  }
</script>

<template>
  <div class="m-card">
    <header>
      <img class="avatar" width="40" height="40" :alt="user.name" :src="user.img"  />
      <p class="name">
        {{user.name}}
      </p>
    </header>
    <footer>
      <input class="search" type="text" placeholder="search user..." v-model="search">
    </footer>
  </div>
</template>

<style lang="less">
  .m-card {
    padding: 12px;
    border-bottom: solid 1px #24272C;

    .avatar {
      border-radius: 2px;
    }
    .avatar, .name {
      vertical-align: middle;
    }
    .name {
      display: inline-block;
      margin-left: 15px;
      font-size: 16px;
    }
    .search {
      padding: 0 10px;
      width: 100%;
      color: #fff;
      height: 30px;
      font-size: 12px;
      line-height: 30px;
      outline: none;
      border-radius: 4px;
      border: solid 1px #3a3a3a;
      background-color: #26292E;
    }
  }
</style>
