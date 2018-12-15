<template>
  <div class="flow">
    <img src="../assets/flow/1.png" class="flowSection" alt="" @click="flow(1)">
    <img src="../assets/flow/2.png" class="flowSection" alt="" @click="flow(2)">
    <img src="../assets/flow/3.png" class="flowSection" alt="" @click="flow(3)">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'flow',
  components: {
    HelloWorld
  },
  methods : {
    flow(index){
      if(index === 1 )
        this.$router.replace( { path : "/place"})
      if(index === 2 )
        this.$router.replace( { path : "/metting"})
      if(index === 3 )
        this.$router.replace( { path : "/album"})
    }
  }
}
</script>
<style scoped>
.flow{
  width: 100% ; 
  height: 100% ;
  background: url('../assets/flow/bg.png') round  ; 
  display: flex ; 
  flex-direction: column ; 
  justify-content: center ;
  align-items: center
}
.sign{
  display: block;
  position: absolute;
  top: 53%;
  width: 36%;
  height: auto;
  left: 32%;
}
.flowSection{
  width: 80% ; 
  height: auto;
  display: block ; 
  margin-bottom: 10px;
}
</style>