<template>
	<div id="zaijie">
		<div class="header">
			<div>
				<van-icon name="arrow-left" color="#ffffff" size="25" />
			</div>
			<div class="text1">
				<div>借阅中</div>
				<div>已归还</div>
				<div>已购书</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"zaijie"
	}
</script>

<style scoped="scoped">
	.header{
		background: #EE4D07;
		display: flex;
	}
	.text1{
		display: flex;
		color: #E1D2D9;
	}
</style>
