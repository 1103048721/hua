<template>
	<div id="nav">
		<router-link tag="div" to="/shouye">
			<div class="img"></div>
		</router-link>
		<router-link tag="div" to="/wangdian">
			<div class="img"></div>
		</router-link>
		<router-link tag="div" to="/shuku">
			<div class="img"></div>
		</router-link>
		<router-link tag="div" to="/wode">
			<div class="img"></div>
		</router-link>
	</div>
</template>

<script>
	export default{
		name:"Nav"
	}
</script>

<style>
	#nav{
		width: 100%;
		display: flex;
		position: fixed;
		left: 0;
		bottom: 0;
		background: #EE4D07;
		color: #ffffff;
		padding: 15px 0 5px 0;
	}
	#nav>div{
		flex: 1;
	}
	#nav>div>.img{
		width: 30%;
		height: 40.56px;
		margin: 0 auto;
	}
	#nav>div:nth-of-type(1)>div{
		background: url(../../public/img/shouye1.png) no-repeat;
		background-size: 100% 100%;
	}
	#nav>div:nth-of-type(2)>div{
		background: url(../../public/img/wangdian1.png) no-repeat;
		background-size: 100% 100%;
	}
	#nav>div:nth-of-type(3)>div{
		background: url(../../public/img/shuku1.png) no-repeat;
		background-size: 100% 100%;
	}
	#nav>div:nth-of-type(4)>div{
		background: url(../../public/img/wode1.png) no-repeat;
		background-size: 100% 100%;
	}
	
	#nav>div.router-link-active:nth-of-type(1)>div{
		background: url(../../public/img/shouye2.png) no-repeat;
		background-size: 100% 100%;
	}
	#nav>div.router-link-active:nth-of-type(2)>div{
		background: url(../../public/img/wangdian2.png) no-repeat;
		background-size: 100% 100%;
	}
	#nav>div.router-link-active:nth-of-type(3)>div{
		background: url(../../public/img/shuku2.png) no-repeat;
		background-size: 100% 100%;
	}
	#nav>div.router-link-active:nth-of-type(4)>div{
		background: url(../../public/img/wode2.png) no-repeat;
		background-size: 100% 100%;
	}
</style>
