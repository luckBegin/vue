<template>
	<div class="flow">
		<img src="../assets/flow/5.png" class="flowSection" alt="" @click="flow(5)" style="margin-top: 25%;">
		<img src="../assets/flow/3.png" class="flowSection" alt="" @click="flow(2)">
		<img src="../assets/flow/6.png" class="flowSection" alt="" @click="flow(6)">
		<img src="../assets/flow/1.png" class="flowSection" alt="" @click="flow(4)">
		<img src="../assets/flow/4.png" class="flowSection" alt="" @click="flow(3)" style="margin-top: 15px">
		<!-- <img src="../assets/flow/2.png" class="flowSection" alt="" @click="flow(1)"> -->
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
		methods: {
			flow(index) {
				if (index === 1)
					this.$router.push({path: "/place"})
				if (index === 2)
					this.$router.push({path: "/metting"})
				if (index === 3)
					this.$router.push({path: "/album"})
				if (index === 4)
					window.location.href = 'https://e.eqxiu.com/s/JfEEUI2P';
				if (index === 5)
					window.location.href = 'https://d.eqxiu.com/s/CG9m8hdj';
				if (index === 6)
					window.location.href = 'https://a.eqxiu.com/s/NfWDwoiU';
				// this.$router.replace( { path : "/flowIntro"})
			}
		}
	}
</script>
<style scoped>
	.flow {
		width: 100%;
		height: 100%;
		background: url('../assets/flow/bg.png') round;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center
	}

	.sign {
		display: block;
		position: absolute;
		top: 53%;
		width: 36%;
		height: auto;
		left: 32%;
	}

	.flowSection {
		width: 80%;
		height: auto;
		display: block;
		margin-bottom: 10px;
	}
</style>
