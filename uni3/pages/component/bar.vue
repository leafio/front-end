<template>
	<view>
		<cu-custom bgColor="bg-gradual-pink" :isBack="true"><template #backText>返回</template>操作条</cu-custom>
		<view class="cu-bar bg-white margin-top">
			<view class="action">
				<text class="cuIcon-title text-green"></text>
				<text>底部操作条</text>
			</view>
		</view>
		<view class="box">
			<cu-tabbar class="bg-white">
				<cu-action text="元素" img="/static/tabbar/basics_cur.png" class="text-green"></cu-action>
				<cu-action text="组件" img="/static/tabbar/component.png" class="text-gray"></cu-action>
				<cu-action text="扩展" img="/static/tabbar/plugin.png" class="text-gray" badgeText="99"></cu-action>
				<cu-action text="关于" img="/static/tabbar/about.png" class="text-gray" showBadgle></cu-action>
			</cu-tabbar>
			<cu-tabbar class="margin-bottom-xl bg-black">
				<cu-action text="首页" cuIconClass="cuIcon-homefill" class="text-orange"></cu-action>
				<cu-action text="分类" cuIconClass="cuIcon-similar" class="text-gray"></cu-action>
				<cu-action text="积分" cuIconClass="cuIcon-recharge" class="text-gray"></cu-action>
				<cu-action text="购物车" cuIconClass="cuIcon-cart" class="text-gray" badgeText="99"></cu-action>
				<cu-action text="我的" cuIconClass="cuIcon-my" class="text-gray" showBadgle></cu-action>
			</cu-tabbar>

			<cu-tabbar class="margin-bottom-xl bg-white">
				<cu-action text="首页" cuIconClass="cuIcon-homefill" class="text-green"></cu-action>
				<cu-action text="分类" cuIconClass="cuIcon-similar" class="text-gray"></cu-action>
				<cu-action text="发布" cuIconClass="cuIcon-add" class="text-gray add-action" isButton></cu-action>
				<cu-action text="购物车" cuIconClass="cuIcon-cart" class="text-gray" badgeText="99"></cu-action>
				<cu-action text="我的" cuIconClass="cuIcon-my" class="text-gray" showBadgle></cu-action>
			</cu-tabbar>
			<cu-tabbar class="margin-bottom-xl bg-black">
				<cu-action text="首页" cuIconClass="cuIcon-homefill" class="text-green"></cu-action>
				<cu-action text="分类" cuIconClass="cuIcon-similar" class="text-gray"></cu-action>
				<cu-action text="发布" cuIconClass="cuIcon-add" class="text-gray add-action" isButton></cu-action>
				<cu-action text="购物车" cuIconClass="cuIcon-cart" class="text-gray" badgeText="99"></cu-action>
				<cu-action text="我的" cuIconClass="cuIcon-my" class="text-gray" showBadgle></cu-action>
			</cu-tabbar>
			<cu-tabbar class="margin-bottom-xl bg-white border shop">
				<cu-action text="客服" cuIconClass="cuIcon-service" class="text-green" showBadgle></cu-action>
				<cu-action text="已收藏" cuIconClass="cuIcon-favorfill" class="text-orange"></cu-action>
				<cu-action text="购物车" cuIconClass="cuIcon-cart" class="text-gray" badgeText="99"></cu-action>
				<view class="bg-red submit">立即订购</view>
			</cu-tabbar>
			<cu-tabbar class="margin-bottom-xl bg-white border shop">
				<cu-action text="客服" cuIconClass="cuIcon-service" class="text-green" showBadgle></cu-action>

				<cu-action text="购物车" cuIconClass="cuIcon-cart" class="text-gray" badgeText="99"></cu-action>
				<view class="bg-orange submit">加入购物车</view>
				<view class="bg-red submit">立即订购</view>
			</cu-tabbar>

			<cu-tabbar class="margin-bottom-xl bg-white border shop">
				<cu-action text="客服" cuIconClass="cuIcon-service" class="text-green" showBadgle></cu-action>
				<cu-action text="店铺" cuIconClass="cuIcon-shop" class="text-orange"></cu-action>
				<cu-action text="购物车" cuIconClass="cuIcon-cart" badgeText="99"></cu-action>
				<view class="btn-group">
					<button class="cu-btn bg-red round shadow-blur">立即订购</button>
				</view>
			</cu-tabbar>
			<cu-tabbar class="margin-bottom-xl bg-white border shop">
				<cu-action text="客服" cuIconClass="cuIcon-service" class="text-green" showBadgle></cu-action>
				<cu-action text="购物车" cuIconClass="cuIcon-cart" badgeText="99"></cu-action>
				<view class="btn-group">
					<button class="cu-btn bg-orange round shadow-blur">加入购物车</button>
					<button class="cu-btn bg-red round shadow-blur">立即订购</button>
				</view>
			</cu-tabbar>
		</view>


		<view class="box">

			<cu-bar title="标题操作条" cuIconClass="cuIcon-title" class="bg-white" :iconStyle="'color:#39b54a'"></cu-bar>
			<cu-bar title="关于我们" class="bg-white justify-center" border-title></cu-bar>
			<cu-bar class="bg-white justify-center" border-title>
				<text class="text-xl text-bold text-blue">关于我们</text>
				<text class="bg-gradual-blue" style="width:3rem"></text>
			</cu-bar>
			<cu-bar class="bg-white justify-center" sub-title>
				<text class="text-xl text-bold text-green">关于我们</text>
				<text class="bg-green" style="width:2rem"></text>
			</cu-bar>
			<cu-bar class="bg-white justify-center" sub-title>
				<text class="text-xl text-bold text-blue">关于我们</text>
				<text class="text-ABC text-blue">about</text>
			</cu-bar>




		</view>
		<view class="box">
			<cu-bar title="关于我们" class="bg-white " border-title></cu-bar>
			<cu-bar class="bg-white " border-title>
				<text class="text-xl text-bold text-blue">关于我们</text>
				<text class="bg-gradual-blue" style="width:3rem"></text>
			</cu-bar>
			<cu-bar class="bg-white " sub-title>
				<text class="text-xl text-bold text-green">关于我们</text>
				<text class="bg-green" style="width:2rem"></text>
			</cu-bar>
			<cu-bar class="bg-white " sub-title>
				<text class="text-xl text-bold text-blue">关于我们</text>
				<text class="text-ABC text-blue">about</text>
			</cu-bar>
			<cu-bar class="bg-white ">
				<text class="cuIcon-title text-green"></text>
				<text class="text-xl text-bold">关于我们</text>

			</cu-bar>
			<cu-bar class="bg-white ">
				<text class="cuIcon-titles text-green"></text>
				<text class="text-xl text-bold">关于我们</text>

			</cu-bar>
			<view class="cu-bar bg-white">
				<view class="action title-style-3">
					<text class="text-xl text-bold">关于我们</text>
					<text class="text-Abc text-gray self-end margin-left-sm">about</text>
				</view>
			</view>
		</view>

		<view class="cu-bar bg-white">
			<view class="action">
				<text class="cuIcon-title text-green"></text>
				<text>顶部操作条</text>
			</view>
		</view>
		<view class="box">
			<view class="cu-bar bg-white">
				<view class="action">
					<text class="cuIcon-back text-gray"></text> 返回
				</view>
				<view class="content text-bold">
					操作条
				</view>
			</view>
			<view class="cu-bar bg-white">
				<view class="action">
					<text class="cuIcon-homefill text-gray"></text> 首页
				</view>
				<view class="content text-bold">
					鲜亮的高饱和色彩，专注视觉的小程序组件库
				</view>
				<view class="action">
					<text class="cuIcon-cardboardfill text-grey"></text>
					<text class="cuIcon-recordfill text-red"></text>
				</view>
			</view>
			<view class="cu-bar bg-blue">
				<view class="action">
					<text class="cuIcon-close"></text> 关闭
				</view>
				<view class="content text-bold">
					海蓝
				</view>
			</view>
			<view class="cu-bar bg-black search">
				<view class="cu-avatar round"
					style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg);">
				</view>
				<view class="content">
					ColorUI
				</view>
				<view class="action">
					<text class="cuIcon-more"></text>
				</view>
			</view>
		</view>


		<view class="cu-bar bg-white">
			<view class="action">
				<text class="cuIcon-title text-green"></text>
				<text>搜索操作条</text>
			</view>
		</view>

		<view class="box">
			<view class="cu-bar search bg-white">
				<view class="search-form round">
					<text class="cuIcon-search"></text>
					<input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text"
						placeholder="搜索图片、文章、视频" />
				</view>
				<view class="action">
					<button class="cu-btn bg-green shadow-blur round">搜索</button>
				</view>
			</view>
			<view class="cu-bar search bg-white">
				<view class="cu-avatar round"
					style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big11010.jpg)">
				</view>
				<view class="search-form round">
					<text class="cuIcon-search"></text>
					<input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text"
						placeholder="搜索图片、文章、视频" confirm-type="search" />
				</view>
				<view class="action">
					<text>广州</text>
					<text class="cuIcon-triangledownfill"></text>
				</view>
			</view>
			<view class="cu-bar bg-red search">
				<view class="cu-avatar round"
					style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big114004.jpg);">
				</view>
				<view class="search-form radius">
					<text class="cuIcon-search"></text>
					<input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text"
						placeholder="搜索图片、文章、视频" />
				</view>
				<view class="action">
					<text>广州</text>
					<text class="cuIcon-triangledownfill"></text>
				</view>
			</view>
			<view class="cu-bar bg-cyan search">
				<view class="search-form radius">
					<text class="cuIcon-search"></text>
					<input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text"
						placeholder="搜索图片、文章、视频" />
				</view>
				<view class="action">
					<text class="cuIcon-close"></text>
					<text>取消</text>
				</view>
			</view>
		</view>

		<view class="cu-bar bg-white">
			<view class="action">
				<text class="cuIcon-title text-green"></text>
				<text>操作条按钮组</text>
			</view>
		</view>

		<view class="box">
			<view class="cu-bar btn-group">
				<button class="cu-btn bg-green shadow-blur round lg">保存</button>
			</view>
			<view class="cu-bar btn-group">
				<button class="cu-btn bg-green shadow-blur">保存</button>
				<button class="cu-btn text-green line-green shadow">上传</button>
			</view>
			<view class="cu-bar btn-group">
				<button class="cu-btn bg-green shadow-blur round">保存</button>
				<button class="cu-btn bg-blue shadow-blur round">提交</button>
			</view>
		</view>


		<view class="cu-bar bg-white">
			<view class="action">
				<text class="cuIcon-title text-green"></text>
				<text>输入操作条</text>
			</view>
		</view>
		<view class="box">
			<view class="cu-bar input">
				<view class="action">
					<text class="cuIcon-sound text-grey"></text>
				</view>
				<input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" class="solid-bottom"
					:focus="false" maxlength="300" cursor-spacing="10" />
				<view class="action">
					<text class="cuIcon-emojifill text-grey"></text>
				</view>
				<button class="cu-btn bg-green shadow-blur">发送</button>
			</view>

			<view class="cu-bar input">
				<view class="cu-avatar round"
					style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg);">
				</view>
				<view class="action">
					<text class="cuIcon-roundaddfill text-grey"></text>
				</view>
				<input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" class="solid-bottom"
					maxlength="300" cursor-spacing="10" />
				<view class="action">
					<text class="cuIcon-emojifill text-grey"></text>
				</view>
				<button class="cu-btn bg-green shadow-blur">发送</button>
			</view>
		</view>
	</view>
</template>

<script>
	import CuTabbar from '../../colorui/components/cu-tabbar.vue'
	import CuAction from '../../colorui/components/cu-action.vue'
	import CuBar from '../../colorui/components/cu-bar.vue'
	export default {
		components: {
			CuTabbar,
			CuAction,
			CuBar
		},
		data() {
			return {
				InputBottom: 0
			};
		},
		methods: {
			InputFocus(e) {
				this.InputBottom = e.detail.height
			},
			InputBlur(e) {
				this.InputBottom = 0
			}
		}
	}
</script>

<style>
	.box {
		margin: 20upx 0;
	}

	.box view.cu-bar {
		margin-top: 20upx;
	}
</style>
