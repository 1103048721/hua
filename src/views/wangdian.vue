<template>
		<div id="wangdian">
			<div class="header">
				<div class="text1">
					借书网点
				</div>
				<div>
					<van-icon name="search" color="#ffffff" size="25" />
				</div>
			</div>
			<div>
			        <baidu-map class="map" :center="map.center" :zoom="map.zoom" @ready="handler">
			            <!--缩放-->
			            <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
			            <!--定位-->
			            <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
			            <!--点-->
			            <bm-marker :position="map.center" :dragging="map.dragging" animation="BMAP_ANIMATION_DROP">
			                <!--提示信息-->
			                <bm-info-window :show="map.show">你的位置</bm-info-window>
			            </bm-marker>
			        </baidu-map>
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

	export default {
		name: "demo",
		        data: () => ({
		            map:{
		                center: {lng: 121.4472540000, lat: 31.3236200000},
		                zoom: 15,
		                show: true,
		                dragging: true
		            },
		        }),
		        methods: {
		            handler ({BMap, map}) {
		                let me = this;
		                console.log(BMap, map)
		                // 鼠标缩放
		                map.enableScrollWheelZoom(true);
		                // 点击事件获取经纬度
		                map.addEventListener('click', function (e) {
		                    console.log(e.point.lng, e.point.lat)
		                })
		            }
		        },
		components: {
			Nav
		}
	}
</script>

<style scoped="scoped">
	.map {
	        width: 100%;
	        height: 610px;
	    }
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
		position: fixed;
		z-index: 100;
		left: 0;
		top: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		padding: 50px 10px 20px 10px;
		box-sizing: border-box;
	}
	.text1{
		color: #FFFFFF;
		font-size: 24px;
	}
</style>
