<template>
	<div id="wode">
		<div class="header">
			<van-icon class="xiao" name="chat-o" color="#ffffff" size="25" />
		</div>
		<van-pull-refresh v-model="isLoading" success-text="刷新成功" @refresh="onRefresh">
			<div class="tou">
				<div class="img1">
					<img src="../../public/img/tou.png" />
				</div>
				<div>
					<div class="text1">
						*建华
					</div>
					<div class="img2">
						<img src="../../public/img/yong.png" />
					</div>
				</div>
			</div>
			
			<div class="book">
				<div class="read">
					<div>0</div>
					<div>在借</div>
				</div>
				<div class="hen"></div>
				<div class="read">
					<div>0</div>
					<div>已还</div>
				</div>
				<div class="hen"></div>
				<div class="read">
					<div>0</div>
					<div>收藏</div>
				</div>
				<div class="hen"></div>
				<div class="read">
					<div>0</div>
					<div>书评</div>
				</div>
			</div>
			
			<div class="changy">
				<div class="shang">常用工具</div>
				<div class="xia">
					<div>
						<div>
							<img src="../../public/img/saoyisao.png" />
						</div>
						<div>扫一扫</div>
					</div>
					<div>
						<div>
							<img src="../../public/img/duzheerweima.png" />
						</div>
						<div>读者二维码</div>
					</div>
					<div>
						<div>
							<img src="../../public/img/chang.png" />
						</div>
						<div>常用网点</div>
					</div>
					<div>
						<div>
							<img src="../../public/img/quan.png" />
						</div>
						<div>我的权益</div>
					</div>
					<div>
						<div>
							<img src="../../public/img/ding.png" />
						</div>
						<div>订单</div>
					</div>
				</div>
			</div>
			
			<div class="she">
				<div>
					<div>
						<img src="../../public/img/fenxiang.png" />
					</div>
					<div>分享我们</div>
				</div>
				<div>
					<div>
						<img src="../../public/img/kui.png" />
					</div>
					<div>意见反馈</div>
				</div>
				<div>
					<div>
						<img src="../../public/img/kefu.png" />
					</div>
					<div>联系客服</div>
				</div>
				<div>
					<div>
						<img src="../../public/img/shezhi.png" />
					</div>
					<div>设置</div>
				</div>
			</div>
			
		</van-pull-refresh>
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
	import {
		Toast
	} from 'vant';
	export default {
		name: 'wode',
		data() {
			return {
				isLoading: false,
			};
		},
		methods: {
			onRefresh() {
				setTimeout(() => {
					Toast('刷新成功');
					this.isLoading = false;
				}, 1000);
			},
		},
		components: {
			Nav
		}
	}
</script>

<style scoped="scoped">
	#wode{
		background: #F5F5F5;
	}
	.right {
		position: fixed;
		z-index: 100;
		right: 10px;
		bottom: 70px;
	}

	.right>div {
		background: #FFFFFF;
		border-radius: 50%;
		width: 30px;
		text-align: center;
		line-height: 40px;
		height: 30px;
		box-shadow: 0px 0px 8px #333333;
		margin-bottom: 10px;
	}

	.header {
		background: #EE4D07;
		width: 100%;
		box-sizing: border-box;
		position: fixed;
		left: 0;
		top: 0;
		height: 35%;
	}

	.xiao {
		margin: 40px 90%;
	}

	.van-pull-refresh {
		margin-top: 65px;
		padding: 0 15px 20px 15px;
	}

	.tou {
		padding-top: 40px;
		display: flex;
		color: #FFFFFF;
		align-items: center;
	}

	.img1 {
		width: 20%;
		margin-right: 15px;
	}

	.img1 img {
		width: 100%;
	}

	.img2 {
		width: 40%;
	}

	.img2 img {
		width: 100%;
	}

	.text1 {
		font-size: 18px;
		line-height:40px;
	}
	.book{
		background: #FFFFFF;
		display: flex;
		margin-top: 20px;
		border-radius: 5px;
		align-items: center;
		padding: 20px 0;
	}
	.read{
		flex: 1;
		text-align: center;
	}
	.read>div:nth-of-type(1){
		font-weight: bold;
		font-size: 28px
	}
	.read>div:nth-of-type(2){
		color: #B5B5B5;
	}
	.hen{
		width: 2px;
		height: 30px;
		background: #F5F5F5;
	}
	.changy{
		background: #FFFFFF;
		margin-top: 15px;
		border-radius: 5px;
	}
	.shang{
		font-size: 20px;
		padding: 15px;
		border-bottom: 2px solid #F5F5F5;
	}
	.xia{
		display: flex;
		font-size: 13px;
		padding: 15px 0;
		color: #666666;
	}
	.xia>div{
		flex: 1;
		text-align: center;
	}
	.xia>div img{
		width: 60%;
		margin-bottom: 5px;
	}
	.she{
		background: #FFFFFF;
		margin-top: 15px;
		border-radius: 5px;
		display: flex;
		font-size: 13px;
		padding: 15px 0;
		color: #666666;
	}
	.she>div{
		flex: 1;
		text-align: center;
	}
	.she>div img{
		width: 60%;
		margin-bottom: 5px;
	}
</style>
