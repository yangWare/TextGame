<template>
  <div id="app">
    <router-view/>
    <Tabbar class="tab-bar" v-model="footLink">
      <TabItem class="tab-item" id="首页1">
        <router-link to="/">
          <div :class="{selected: footLink === '首页'}" class="tab-item-inner">首页</div>
        </router-link>
      </TabItem>
      <TabItem class="tab-item" id="人物">
        <router-link to="/">
          <div :class="{selected: footLink === '人物'}" class="tab-item-inner">人物</div>
        </router-link>
      </TabItem>
      <TabItem class="tab-item" id="背包">
        <router-link to="/">
          <div :class="{selected: footLink === '背包'}" class="tab-item-inner">背包</div>
        </router-link>
      </TabItem>
      <TabItem class="tab-item__last" id="任务">
        <router-link to="/">
          <div :class="{selected: footLink === '任务'}" class="tab-item-inner">任务</div>
        </router-link>
      </TabItem>
    </Tabbar>
  </div>
</template>

<script>
  import { MessageBox, Tabbar, TabItem } from 'mint-ui'

  export default {
    name: 'App',
    data() {
      return {
        footLink: '首页'
      }
    },
    components: {
      Tabbar,
      TabItem
    },
    created() {
      let userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
      if (!userInfo) {
        MessageBox.prompt('不输入将采用系统命名，建议自定义', '请输入昵称', {
          showCancelButton: false
        }).then(({ value, action }) => {
          userInfo = {
            nickName: value || Date.now(),
            level: 1,
            exp: 0,
            zdl: 1,
            equipment: {},
            bag: {}
          }
          this.$store.dispatch('updateUserInfo', {
            userInfo
          })
        })
      } else {
        this.$store.dispatch('updateUserInfo', {
          userInfo,
          noSave: true
        })
      }
    }
  }
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.tab-bar {
  height: 50px;
}
.tab-bar a {
  -webkit-tap-highlight-color:transparent;
  text-decoration: none;
  outline: none;
  color: #26a2ff
}
.tab-item {
  border-top: 1px solid #888;
  border-bottom: 1px solid #888;
  border-right: 1px solid #888;
}
.tab-item__last {
  border-top: 1px solid #888;
  border-bottom: 1px solid #888;
}
.tab-item-inner {
  line-height: 30px;
}
.selected {
  font-size: large;
}
</style>
