<template>
	<div class="container">
	</div>
</template>
<script>
	import { service } from '@/service/service.js';

	export default {
		data() {
			return {
			}
		},
		created(){
			const redirtion = encodeURIComponent('http://jichang.yoopoon.com/#/proxy') ;
			const appid = 'wx78404b09b86f020f' ;
			const host = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${redirtion}&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect`
			window.location.href = host ;
		}
	};
</script>
<style>
</style>