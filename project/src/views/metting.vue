<template>
  <div class="metting">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue' ; 
export default {
  name: 'metting',
  components: {
    HelloWorld
  },
  methods : {
  }
}
</script>
<style scoped>
.metting{
  width: 100% ; 
  height: 100% ;
  background: url('../assets/flow/metting.png') round  ; 
  display: flex ; 
  flex-direction: column ; 
  justify-content: center ;
  align-items: center
}
</style>