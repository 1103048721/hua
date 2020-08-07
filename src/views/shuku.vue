<template>
	<div id="shuku">
		<div class="header">
			<div>书库</div>
			<div>
				<van-icon name="search" color="#ffffff" size="25" />
			</div>
		</div>
		<div class="ku">
			<van-tabs v-model="active" animated swipeable background="#EE4D07" border="false" title-inactive-color="#FFFFFF" color="#FFFFFF" line-height="5" line-width="10" title-active-color="#FFFFFF">
			  <van-tab v-for="index in 7" :title="'标签 ' + index" >
			    内容 {{ index }}
			  </van-tab>
			</van-tabs>
		</div>
		<div class="right">
			<div>
				<van-icon name="orders-o" color="#ED5D5D" size="20" />
			</div>
			<div>
				<van-icon name="question-o" color="#ED5D5D" size="20" />
			</div>
		</div>
		<Nav></Nav>
	</div>
</template>

<script>
	import Nav from '../components/Nav.vue'
	
	export default{
		name:'shuku',
		data() {
		    return {
		      active: 0,
		    };
		  },
		components: {
			Nav
		}
	}
</script>

<style scoped="scoped">
	.right{
		position: fixed;
		z-index: 100;
		right: 10px;
		bottom: 70px;
	}
	.right>div{
		background: #FFFFFF;
		border-radius: 50%;
		width: 30px;
		text-align: center;
		line-height: 40px;
		height: 30px;
		box-shadow: 0px 0px 8px #333333;
		margin-bottom: 10px;
	}
	.header{
		background: #EE4D07;
		width: 100%;
		box-sizing: border-box;
		position: fixed;
		display: flex;
		color: #FFFFFF;
		font-weight: bold;
		font-size: 20px;
		justify-content: space-between;
		padding: 35px 15px;
		left: 0;
		top: 0;
		height: 35%;
	}
	.ku{
		margin-top: 60px;
	}
</style>
