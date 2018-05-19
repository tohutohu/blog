<template>
  <div class="sidebar-group" :class="{ first, collapsable }">
    <p class="sidebar-heading" :class="{ open }" @click="$router.push(item.path)">
      <span class="sidebar-heading-text">{{ item.title }}</span>
      <span class="arrow"
        v-if="collapsable"
        :class="open ? 'down' : 'right'"
        @click.stop="$emit('toggle')"></span>
    </p>
    <DropdownTransition>
      <ul class="sidebar-group-items" ref="items" v-if="open || !collapsable">
        <li v-for="child in item.children">
          <SidebarLink :item="child"/>
        </li>
      </ul>
    </DropdownTransition>
  </div>
</template>

<script>
import SidebarLink from './SidebarLink.vue'
import DropdownTransition from './DropdownTransition.vue'

export default {
  name: 'SidebarGroup',
  props: ['item', 'first', 'open', 'collapsable'],
  components: { SidebarLink, DropdownTransition }
}
</script>

<style lang="stylus">
@import './styles/config.styl'
.sidebar-group
  padding-left 1em
  .sidebar-group
    padding-left 0.5em
  &:not(.collapsable)
    .sidebar-heading
      cursor auto
      color inherit

.sidebar-heading
  color #999
  transition color .15s ease
  cursor pointer
  font-size 1.1em
  font-weight bold
  // text-transform uppercase
  padding-left 1.5rem
  margin-top 0
  margin-bottom 0
  &.hover
    color inherit
  &.open
    color inherit
  .arrow
    position relative
    top -0.12em
    left 0.5em
  &:.open .arrow
    top -0.18em

.sidebar-heading-text
  &:hover
    color $accentColor

.sidebar-group-items
  transition height .1s ease-out
  overflow hidden
</style>
