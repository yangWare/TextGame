<template>
  <div id="app" class="">
    <Popup v-model="isLogin" popup-transition="popup-fade">登陆成功</Popup>
    <router-view/>
  </div>
</template>

<script>
  import { MessageBox, Popup } from 'mint-ui'
  import Jonp from './utils/jsonp'

  export default {
    name: 'App',
    data() {
      return {
        isLogin: false
      }
    },
    components: {
      Popup
    },
    methods: {
      queryUserInfo (account) {
        window.onUserInfo = (userInfo) => {
          this.$store.dispatch('updateUserInfo', userInfo)
        }
        Jonp('https://yangWare.github.io/TextGame/data/' + account + '.js')
      },
      login () {
        const localStorage = window.localStorage
        if (localStorage) {
          let account = localStorage.getItem('account')
          if (account) {
            this.queryUserInfo(account)
            return
          }
        }
        let account = ''
        let pwd = ''
        MessageBox.prompt('请输入账号', '', {
          showCancelButton: false,
          closeOnClickModal: false
        }).then(ret => {
          if (!ret.value) {
            alert('账号不能为空')
            return this.login()
          }
          account = ret.value
          MessageBox.prompt('请输入密码', '', {
            showCancelButton: false,
            closeOnClickModal: false
          }).then(ret => {
            if (!ret.value) {
              alert('密码不能为空')
              return this.login()
            }
            pwd = ret.value
            if (account === 'yl' && pwd === 'yl') {
              this.isLogin = true
              setTimeout(() => {
                this.isLogin = false
              }, 1000)
              localStorage.setItem('account', account)
              this.queryUserInfo(account)
              return
            }
            if (account === 'yx' && pwd === 'yx') {
              this.isLogin = true
              setTimeout(() => {
                this.isLogin = false
              }, 1000)
              localStorage.setItem('account', account)
              this.queryUserInfo(account)
              return
            }
            alert('账号密码错误')
            this.login()
          })
        })
      }
    },
    created() {
      this.login()
    }
  }
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
