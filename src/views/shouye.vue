<template>

	<div id="shouye">
		<div class="header">
			<div class="seach">
				<van-icon class="img1" size="25px" name="search" />
				<input id="sousuo" type="text" placeholder="点击搜索" />
			</div>
		</div>
		<van-pull-refresh v-model="isLoading" success-text="刷新成功" @refresh="onRefresh">
			<div class="huodong">
				<div class="img2">
					<img src="../../public/img/newbook.png" />
				</div>
				<div class="sao">
					<div>
						<div><img src="../../public/img/saoyisao.png" /></div>
						扫一扫
					</div>
					<div>
						<div><img src="../../public/img/duzheerweima.png" /></div>
						读者二维码
					</div>
					<div>
						<div><img src="../../public/img/xiaoxi.png" /></div>
						消息
					</div>
				</div>
			</div>
			<div class="toutiao">
				<div class="tt">
					<div class="top">
						<div>活动头条</div>
						<div>
							往期主题
							<van-icon name="arrow" />
						</div>
					</div>
					<div class="bottom">
						<div class="img3">
							<img src="../../public/img/bookzhan.png" />
						</div>
						<div>
							2019天府书展, 这个书店“搞事情”！
						</div>
					</div>
				</div>
				<div class="baokuan">
					<div class="top">
						<div>
							爆款热点
						</div>
						<div>
							<van-icon name="arrow" />
						</div>
					</div>
					<div>
						<van-swipe :loop="false" :width="125">
							<van-swipe-item>
								<div class="img4">
									<img src="../../public/img/gaipu.png" />
								</div>
								<div class="text1">盖普眼中的...</div>
							</van-swipe-item>
							<van-swipe-item>
								<div class="img4">
									<img src="../../public/img/gaipu.png" />
								</div>
								<div class="text1">盖普眼中的...</div>
							</van-swipe-item>
							<van-swipe-item>
								<div class="img4">
									<img src="../../public/img/gaipu.png" />
								</div>
								<div class="text1">盖普眼中的...</div>
							</van-swipe-item>
							<van-swipe-item>
								<div class="img4">
									<img src="../../public/img/gaipu.png" />
								</div>
								<div class="text1">盖普眼中的...</div>
							</van-swipe-item>
							<van-swipe-item>
								<div class="img4">
									<img src="../../public/img/gaipu.png" />
								</div>
								<div class="text1">盖普眼中的...</div>
							</van-swipe-item>
							<van-swipe-item>
								<div class="img4">
									<img src="../../public/img/gaipu.png" />
								</div>
								<div class="text1">盖普眼中的...</div>
							</van-swipe-item>
							<template #indicator>
								<div class="custom-indicator">
								</div>
							</template>
						</van-swipe>
					</div>
				</div>
			</div>

			<div class="tongshu">
				<div class="top">
					<div>
						精品童书
					</div>
					<div>
						<van-icon name="arrow" />
					</div>
				</div>
				<div class="maohao">
					<img src="../../public/img/maohao.png" />
				</div>
				<div class="tong">
					<div class="book">
						<div>
							<img src="../../public/img/ziji.png" />
						</div>
						<div>
							我喜欢自己
						</div>
					</div>
					<div class="book">
						<div>
							<img src="../../public/img/ziji.png" />
						</div>
						<div>
							我喜欢自己
						</div>
					</div>
					<div class="book">
						<div>
							<img src="../../public/img/ziji.png" />
						</div>
						<div>
							我喜欢自己
						</div>
					</div>
					<div class="book">
						<div>
							<img src="../../public/img/ziji.png" />
						</div>
						<div>
							我喜欢自己
						</div>
					</div>
					<div class="book">
						<div>
							<img src="../../public/img/ziji.png" />
						</div>
						<div>
							我喜欢自己
						</div>
					</div>
					<div class="book">
						<div>
							<img src="../../public/img/ziji.png" />
						</div>
						<div>
							我喜欢自己
						</div>
					</div>
				</div>
			</div>

			<div class="jindian">
				<div class="top">
					<div>
						长销经典
					</div>
					<div>
						<van-icon name="arrow" />
					</div>
				</div>
				<div class="jin">
					<div class="book2">
						<div>
							<img src="../../public/img/juwai.png" />
						</div>
						<div>
							局外人
						</div>
					</div>
					<div class="book2">
						<div>
							<img src="../../public/img/juwai.png" />
						</div>
						<div>
							局外人
						</div>
					</div>
					<div class="book2">
						<div>
							<img src="../../public/img/juwai.png" />
						</div>
						<div>
							局外人
						</div>
					</div>
					<div class="book2">
						<div>
							<img src="../../public/img/juwai.png" />
						</div>
						<div>
							局外人
						</div>
					</div>
					<div class="book2">
						<div>
							<img src="../../public/img/juwai.png" />
						</div>
						<div>
							局外人
						</div>
					</div>
					<div class="book2">
						<div>
							<img src="../../public/img/juwai.png" />
						</div>
						<div>
							局外人
						</div>
					</div>
					<div class="book2">
						<div>
							<img src="../../public/img/juwai.png" />
						</div>
						<div>
							局外人
						</div>
					</div>
					<div class="book2">
						<div>
							<img src="../../public/img/juwai.png" />
						</div>
						<div>
							局外人
						</div>
					</div>
				</div>
			</div>

			<div class="yuntu">
				<div class="top">
					<div>
						云图甄选
					</div>
					<div>
						<van-icon name="arrow" />
					</div>
				</div>
				<div class="yun">
					<div class="book3">
						<div>
							<img src="../../public/img/xianjin.png" />
						</div>
						<div>
							<div>美国陷阱</div>
							<div>(法)弗雷德里克 · 皮耶鲁齐,(法)马修-阿伦著</div>
						</div>
					</div>
					<div class="book3">
						<div>
							<img src="../../public/img/xianjin.png" />
						</div>
						<div>
							<div>美国陷阱</div>
							<div>(法)弗雷德里克 · 皮耶鲁齐,(法)马修-阿伦著</div>
						</div>
					</div>
					<div class="book3">
						<div>
							<img src="../../public/img/xianjin.png" />
						</div>
						<div>
							<div>美国陷阱</div>
							<div>(法)弗雷德里克 · 皮耶鲁齐,(法)马修-阿伦著</div>
						</div>
					</div>
					<div class="book3">
						<div>
							<img src="../../public/img/xianjin.png" />
						</div>
						<div>
							<div>美国陷阱</div>
							<div>(法)弗雷德里克 · 皮耶鲁齐,(法)马修-阿伦著</div>
						</div>
					</div>
					<div class="book3">
						<div>
							<img src="../../public/img/xianjin.png" />
						</div>
						<div>
							<div>美国陷阱</div>
							<div>(法)弗雷德里克 · 皮耶鲁齐,(法)马修-阿伦著</div>
						</div>
					</div>
					<div class="book3">
						<div>
							<img src="../../public/img/xianjin.png" />
						</div>
						<div>
							<div>美国陷阱</div>
							<div>(法)弗雷德里克 · 皮耶鲁齐,(法)马修-阿伦著</div>
						</div>
					</div>
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
		name: 'shouye',
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
	#shouye {
		background: #F5F5F5;
		width: 100%;
		box-sizing: border-box;
		padding-bottom: 60.56px;
	}

	.header {
		background: #EE4D07;
		padding: 50px 2.5% 10px 2.5%;
		width: 100%;
		box-sizing: border-box;
		position: fixed;
		z-index: 100;
	}

	.seach {
		display: flex;
		align-items: center;
		background: #ffffff;
		border-radius: 10px;
		padding: 15px 10px;
	}

	#sousuo {
		border: none;
	}

	.img1 {
		width: 30px;
	}

	.huodong {
		background: #FFFFFF;
		margin-top: 114.8px;
		padding: 10px 20px 20px 20px;
	}

	.img2 {
		width: 90%;
		margin: 0 auto;
	}

	.img2 img {
		width: 100%;
	}

	.sao {
		display: flex;
		justify-content: space-between;
		margin-top: 10px;
	}

	.sao>div {
		flex: 1;
		text-align: center;
		color: #666666;
	}

	.sao>div img {
		width: 50%;
	}

	.toutiao {
		background: #FFFFFF;
		margin-top: 20px;
		padding: 10px;
	}

	.top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20px;
	}

	.top>div:nth-of-type(1) {
		font-weight: bold;
		font-size: 18px;
	}

	.top>div:nth-of-type(2) {
		display: flex;
		align-items: center;
		color: #B5B5B5;
	}

	.img3 img {
		width: 100%;
	}

	.bottom {
		box-shadow: 0px 3px 10px #333333;
		border-bottom-right-radius: 5px;
		border-bottom-left-radius: 5px;
	}

	.bottom>div:nth-of-type(2) {
		font-weight: bold;
		color: #333333;
		padding: 10px 20px;
	}

	.baokuan {
		margin-top: 20px;
	}

	.custom-indicator {
		display: none;
	}

	.img4 img {
		width: 100px;
	}

	.text1 {
		color: #666666;
	}

	.van-swipe-item {
		box-sizing: border-box;
	}

	.tongshu {
		margin-top: 20px;
		padding: 10px;
		background: #FFFFFF;
	}

	.maohao {
		width: 25%;
		margin-bottom: 10px;
	}

	.maohao img {
		width: 25%;
	}

	.tong {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.book {
		color: #666666;
		width: 28%;
	}

	.book img {
		width: 100%;
		margin-top: 10px;
		margin-bottom: 10px;
	}

	.jindian {
		margin-top: 20px;
		padding: 10px;
		background: #FFFFFF;
	}

	.jin {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.book2 {
		color: #666666;
		font-size: 14px;
		width: 21%;
	}

	.book2 img {
		width: 100%;
		margin-top: 10px;
		margin-bottom: 10px;
	}

	.yuntu {
		margin-top: 20px;
		padding: 10px;
		background: #FFFFFF;
	}

	.book3 {
		display: flex;
		color: #666666;
		margin-top: 5px;
	}

	.book3 img {
		width: 100%;
	}

	.book3>div:nth-of-type(1) {
		flex: 2;
	}

	.book3>div:nth-of-type(2) {
		flex: 8;
		margin-top: 15px;
		padding-left: 20px;
	}

	.book3>div:nth-of-type(2)>div:nth-of-type(2) {
		font-size: 13px
	}
</style>
