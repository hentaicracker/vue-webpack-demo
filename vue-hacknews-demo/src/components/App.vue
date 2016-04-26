<template>
  <div id="wrapper">
    <div class="header">
      <a id="yc" href="http://www.ycombinator.com">
        <img src="https://news.ycombinator.com/y18.gif">
      </a>
      <h1>
        <a href="#/">Hacker News</a>
      </h1>
      <span>
        Build with <a href="https://vuejs.org" target="_blank">Vue.js</a> |
        <a href="https://github.com/hentaicracker/vue-webpack-demo" target="_blank">source</a>
      </span>
    </div>

    <router-view class="view" keep-alive transition transition-mode="out-in"></router-view>

  </div>
</template>

<style lang="stylus">
@import '../variables.styl'

html, body
  font-size 13px
  font-family Verdana
  height 100%

ul
  list-style-type none
  padding 0
  margin 0

a
  color #000
  cursor pointer
  text-decoration none

#wrapper
  background-color $bg
  position relative
  width 85%
  margin 0 auto

#header
  background-color $orange
  height 24px
  position relative
  h1
    font-weight bold
    vertical-align middle
    display inline-block
    font-size 13px
    margin 0
  .source
    color #fff
    font-size 11px
    position absolute
    right 4px
    top 4px
    a
      color #fff
      &:hover
        text-decoration underline

#yc
  border 1px solid #fff
  margin 2px
  vertical-align middle
  display inline-block
  img
    vertical-align middle

.view
  position absolute
  background-color $gray
  width 100%
  transition opacity 0.2s ease
  box-sizing border-box
  padding 8px 20px
  &.v-enter, &.v-leave
    opacity 0

@media screen and (max-width: 700px)
  html, body
    margin 0
  #wrapper
    width 100%
</style>
