<template>
  <div id="app">
  <w-button type="primary" shape="circle">默认</w-button>
  <w-button type="success" block loading>成功按钮</w-button>
  <w-button type="info" >信息按钮</w-button>
  <w-button type="warning">警告按钮</w-button>
  <w-button type="danger">危险按钮</w-button>
  <w-tag color="#3280f5">vue</w-tag>
  <w-tag closable @onClose="handler">weixi-ui</w-tag>
  <w-alert closable message="朋朋" type="success" description="李阿珍" @onClose="()=>{alert('nihao')}"></w-alert>
  <w-alert closable message="珍珍" type="info" description="朋朋" @onClose="()=>{alert('nihao')}"></w-alert>
  <w-alert message="朋朋" type="warning"></w-alert>
  <w-alert message="朋朋" type="primary"></w-alert>
  <w-alert message="朋朋" type="danger"></w-alert>
  <w-blink text="珍珍" themeColor="pink" :textColor="['#fff','#eee']"></w-blink>
  <w-blink text="爱珍珍"></w-blink>
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {
  
  },
  methods:{
    handler(){
      console.log('回调')
    }
  }
}
</script>

<style lang="scss">
</style>
