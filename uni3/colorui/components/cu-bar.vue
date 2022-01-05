<template>
	<view class="cu-bar bg-white">
		<view class="action" :class="{'border-title':borderTitle,'sub-title':subTitle}">
			<slot>
				<text :style="iconStyle" :class="cuIconClass" v-if="cuIconClass"></text>
				<text :class="(borderTitle||subTitle)?'text-xl text-bold':''">{{title}}</text>
				<text class="bg-grey" style="width:2rem"></text>
			</slot>

		</view>
	</view>
</template>

<script setup>
	defineProps({

		title: '',
		cuIconClass: {
			type: String,
			default: ''
		},
		titleStyle: {
			type: String,
			default: ''
		},
		iconStyle: {
			type: String,
			default: ''
		},
		borderTitle: {
			type: Boolean,
			default: false
		},
		subTitle: {
			type: Boolean,
			default: false
		}

	})
</script>

<style>
</style>
