<template>
  <div>
    <div class="name_container"><span class="name">{{info.name}}</span></div>
    <div class="info_container">
      <div class="zdl_container">
        <span class="panel_1_2 label panel_first">等级<span class="value">{{info.level}}</span></span>
        <span class="panel_1_2 label">战斗力<span class="value zdl_value">{{info.zdl}}</span></span>
      </div>
      <div class="level_container">
        <span class="label panel_first">经验值<span class="exp_current value">{{info.exp}}</span><span>/{{parseInt(Math.pow(info.level, 3) * 1000)}}</span></span>
        <div class="exp_container"><span class="exp_progress" :style="{width: expRate}"></span></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .name_container {
    text-align: center;
    margin-top: 10px;
  }
  .name {
    color: cornsilk;
    display: inline-block;
    width: 70px;
    height: 26px;
    line-height: 26px;
    border-radius: 13px;
    background-color: #2c3e50;
    /*box-shadow: -2px -2px #000;*/
    overflow: hidden;
    text-align: center;
    white-space: nowrap;

  }
  .info_container {
    margin: 10px;
    padding: 20px;
    border-radius: 2px;
    /*border: 1px solid #000;*/
    background-color: rgba(0, 0, 0, 0.5);
  }
  .panel_1_2 {
    float: left;
    width: 50%;
  }
  .panel_first {
    padding-left: 20px;
    box-sizing: border-box;
  }
  .label {
    color: azure;
  }
  .value {
    color: aquamarine;
    margin-left: 5px;
  }
  .zdl_container {
    overflow: hidden;
  }
  .zdl_value {
    color: #ff6666;
  }
  .level_container {
    margin-top: 10px;
  }
  .exp_current {
    color: aqua;
  }
  .exp_container {
    height: 16px;
    width: 80%;
    margin-top: 10px;
    margin-left: 20px;
    border: 1px solid #bbb;
    border-radius: 2px;
  }
  .exp_progress {
    display: block;
    background-color: orange;
    height: 16px;
    border-radius: 2px 0 0 2px;
  }
</style>

<script>
  export default {
    data () {
      return {
      }
    },
    props: {
      info: {
        type: Object,
        required: true
      }
    },
    computed: {
      expRate () {
        let rate = this.info.exp / (Math.pow(this.info.level, 3) * 10)
        return rate + '%'
      }
    }
  }
</script>
