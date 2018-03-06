<template>
  <div>
    <zdlInfoComponent :info="userInfo"></zdlInfoComponent>
    <div class="wrap_container" :style="{ height: wrapHeight }">
    </div>
  </div>
</template>

<style scoped>
  .wrap_container {
    margin: 10px;
  }
</style>

<script>
  import zdlInfoComponent from './components/zdlInfo/index.vue'
  import { mapGetters } from 'vuex'

  export default {
    name: 'userInfo',
    data () {
      return {
        wrapHeight: (parseInt(window.document.body.clientHeight) - 190) + 'px'
      }
    },
    computed: {
      userInfo () {
        return this.$store.getters.userInfo
      }
    },
    components: {
      zdlInfoComponent
    }
  }
</script>
