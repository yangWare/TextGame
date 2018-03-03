<template>
  <div>
    <Header fixed :title="'战斗力  ' + userInfo.zdl">
      <span slot="left">{{userInfo.nickName}}</span>
    </Header>
  </div>
</template>

<style scoped></style>

<script>
  import { Header } from 'mint-ui'
  import { mapGetters } from 'vuex'

  export default {
    name: 'mainPage',
    data() {
      return {
        footLink: ''
      }
    },
    components: {
      Header
    },
    computed: {
      ...mapGetters({
        userInfo: 'userInfo'
      })
    }
  }
</script>
