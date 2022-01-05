<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<template #backText>返回</template>
			加载
			<template #right>
				<view class="action">
					<view class="cu-load load-cuIcon" :class="!isLoad?'loading':'over'"></view>
					<CuLoading :loading="!isLoad" iconOnly></CuLoading>
				</view>
			</template>
		</cu-custom>
		<view class="cu-bar bg-white">
			<view class="action">
				<text class="cuIcon-title text-blue"></text>背景
			</view>
		</view>
		<CuLoading :loading="!isLoad" class=" bg-red"></CuLoading>
		<view class="cu-bar bg-white margin-top">
			<view class="action">
				<text class="cuIcon-title text-blue"></text>加载状态
			</view>
			<view class="action">
				<switch @change="isLoading" :class="isLoad?'checked':''"></switch>
			</view>
		</view>
		<view class="cu-load bg-grey" :class="!isLoad?'loading':'over'"></view>
		<CuLoading :loading="!isLoad" class="bg-grey"></CuLoading>
		<view class="cu-bar bg-white margin-top">
			<view class="action">
				<text class="cuIcon-title text-blue"></text>加载错误
			</view>
		</view>
		<view class="cu-load bg-red erro"></view>
		<CuLoading :loading="!isLoad" class="bg-red" error></CuLoading>
		<view class="cu-bar bg-white margin-top">
			<view class="action">
				<text class="cuIcon-title text-blue"></text>弹框加载
			</view>
			<view class="action">
				<button class="cu-btn bg-green shadow" @tap="LoadModal">
					点我
				</button>
			</view>
		</view>
		<view class="cu-load load-modal" v-if="loadModal">
			<!-- <view class="cuIcon-emojifill text-orange"></view> -->
			<image src="/static/logo.png" mode="aspectFit"></image>
			<view class="gray-text">加载中...</view>
		</view>
		<view class="cu-bar bg-white margin-top">
			<view class="action">
				<text class="cuIcon-title text-blue"></text>进度条加载
			</view>
			<view class="action">
				<button class="cu-btn bg-green shadow" @tap="LoadProgress">
					点我
				</button>
			</view>
		</view>
		<view class="load-progress" :class="loadProgress!=0?'show':'hide'" :style="[{top:CustomBar+'px'}]">
			<view class="load-progress-bar bg-green"
				:style="[{transform: 'translate3d(-' + (100-loadProgress) + '%, 0px, 0px)'}]"></view>
			<view class="load-progress-spinner text-green"></view>
		</view>
	</view>
</template>


<script setup>
	import {
		reactive,
		ref,
		inject
	} from 'vue'
	import CuLoading from '../../colorui/components/cu-loading.vue'
	const isLoad = ref(false)
	const loadModal = ref(false)
	const loadProgress = ref(0)
	const headerInfo=inject('headerInfo')

	const CustomBar = ref(headerInfo.CustomBar)

	const isLoading = (e) => {
		isLoad.value = e.detail.value;
	}
	const LoadModal = (e) => {
		loadModal.value = true;
		setTimeout(() => {
			loadModal.value = false;
		}, 2000)
	}
	const LoadProgress = (e) => {
		loadProgress.value = loadProgress.value + 3;
		if (loadProgress.value < 100) {
			setTimeout(() => {
				LoadProgress();
			}, 100)
		} else {
			loadProgress.value = 0;
		}
	}
</script>

<style>

</style>
