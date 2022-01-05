<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true"><template #backText>返回</template>头像</cu-custom>
		<view class="cu-bar bg-white">
			<view class="action">
				<text class="cuIcon-title text-blue"></text>头像形状
			</view>
		</view>
		<view class="padding">
			<Avatar round :src="avatar[0]"></Avatar>
			<Avatar radius :src="avatar[1]" class="margin-left"></Avatar>
		</view>
		<view class="cu-bar bg-white margin-top">
			<view class="action">
				<text class="cuIcon-title text-blue"></text>头像尺寸
			</view>
		</view>
		<view class="padding">
			<Avatar round :src="avatar[0]" size="sm" class="margin-left"></Avatar>
			<Avatar round :src="avatar[1]" class="margin-left"></Avatar>
			<Avatar round :src="avatar[2]" size="lg" class="margin-left"></Avatar>
			<Avatar round :src="avatar[3]" size="xl" class="margin-left"></Avatar>

		</view>
		<view class="padding">
			<Avatar round size="sm" class="margin-left bg-red">A</Avatar>
			<Avatar round class="margin-left bg-red">B</Avatar>
			<Avatar round size="lg" class="margin-left bg-red">C</Avatar>
			<Avatar round size="xl" class="margin-left bg-red">D</Avatar>

		</view>
		<view class="padding">
			<Avatar round size="sm" class="margin-left bg-red">蔚</Avatar>
			<Avatar round class="margin-left bg-red">蓝</Avatar>
			<Avatar round size="lg" class="margin-left bg-red">wl</Avatar>
			<Avatar round size="xl" class="margin-left bg-red" style="font-size: 1.2em;">网络</Avatar>
		</view>
		<view class="cu-bar bg-white margin-top">
			<view class="action">
				<text class="cuIcon-title text-blue"></text>内嵌文字(图标)
			</view>
		</view>
		<view class="padding">

			<Avatar radius class="margin-left"><text class="cuIcon-people"></text></Avatar>
			<Avatar radius class="margin-left">港</Avatar>
		</view>

		<view class="cu-bar bg-white margin-top">
			<view class="action">
				<text class="cuIcon-title text-blue"></text>头像颜色
			</view>
		</view>
		<view class="padding-sm">
			<Avatar size="lg" round class="margin-xs" style="font-size: 0.8em;" :class="'bg-' + item.name"
				v-for="(item,index) in ColorList" :key="index">{{item.name}}</Avatar>
		</view>
		<view class="cu-bar bg-white margin-top">
			<view class="action">
				<text class="cuIcon-title text-blue"></text>头像组
			</view>
		</view>
		<view class="padding">
			<view class="cu-avatar-group">
				<Avatar round size="lg" v-for="(item,index) in avatar" :key="index" :src="item"></Avatar>
			</view>
		</view>

		<view class="cu-bar bg-white margin-top">
			<view class="action">
				<text class="cuIcon-title text-blue"></text>头像标签
			</view>
		</view>
		<view class="padding">
			<Avatar round size="lg" class="margin-left" v-for="(item,index) in avatar" :key="index" :src="item">
				<view class="cu-tag badge" :class="index%2==0?'cuIcon-female bg-pink':'cuIcon-male bg-blue'"></view>
			</Avatar>
		</view>

	</view>
</template>

<script setup>
	import {
		reactive
	} from 'vue'
	import {
		colorList
	} from "../../common/style"
	import Avatar from '../../colorui/components/cu-avatar.vue'
	const ColorList = reactive(colorList)
	const avatar = reactive([
		'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
		'https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg',
		'https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg',
		'https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg'
	])
</script>

<style>

</style>
