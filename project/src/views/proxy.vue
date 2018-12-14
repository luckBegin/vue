<template>
	<div class="asdasd">
	</div>
</template>
<script>
	import {service } from '@/service/service.js';
	export default {
		data() {
			return {
			}
		},
		created(){
			var url = window.location.href;
			console.log(url) ;
			let data = url.match(/code.*&/)[0].replace("code=","").replace("&" ,"")
			let __this = this ;
			console.log(data) ;
			console.log(service) ;
			service.postCode(data)
				.then(
					res => {
						let url = res.data.Values ;
						window.location.href = url ;
					}
				)
		}
	};
</script>
<style>
</style>