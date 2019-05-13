<template>
  <div class="place">
    <img src="../assets/flow/place.jpg" alt="" style="width: 100% ; display: block ; height: auto">
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
  display: flex ;
  flex-direction: column ; 
  justify-content: center ;
  align-items: center
}
</style>