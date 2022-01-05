<template>
	<view class="action">
		<view class="cuIcon-cu-image">
			<image :src="img" v-if="img"></image>
			<view v-if="cuIconClass && !isButton" :class="cuIconClass">
			</view>
			<view class="cu-tag badge" v-if="showBadgle||badgeText">{{badgeText}}</view>
		</view>
		<button class="cu-btn  bg-green shadow" v-if="cuIconClass && isButton" :class="cuIconClass"></button>
		<view :style="textStyle">{{text}} </view>
	</view>
</template>

<script setup>
	defineProps({
		text: {
			type: [String, Number],
			default: ''
		},
		img: {
			type: String,
			default: ''
		},
		textStyle: {
			type: String,
			default: ''
		},
		badgeText: {
			type: [String, Number],
			default: ''
		},
		showBadgle: {
			type: Boolean,
			default: false
		},
		cuIconClass: {
			type: String,
			default: ''
		},
		isButton: {
			type: Boolean,
			default: false
		}

	})
</script>

<style>
</style>
