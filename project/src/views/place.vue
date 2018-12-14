<template>
  <div class="place">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue' ; 
export default {
  name: 'flow',
  components: {
    HelloWorld 
  },
  methods : {
  }
}
</script>
<style scoped>
.place{
  width: 100% ; 
  height: 100% ;
  background: url('../assets/flow/place.png') round  ; 
  display: flex ; 
  flex-direction: column ; 
  justify-content: center ;
  align-items: center
}
</style>