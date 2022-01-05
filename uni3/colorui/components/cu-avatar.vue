<template>
	<view class="cu-avatar" :class="avatarClass" :style="`background-image:url(${src})`">

		<slot></slot>
	</view>
</template>

<script setup>
	import {
		computed
	} from 'vue'
	const {
		round,
		radius,
		size
	} = defineProps({
		round: {
			type: Boolean,
			default: false
		},
		radius: {
			type: Boolean,
			default: false
		},
		src: {
			type: String,
			default: ''
		},
		size: {
			type: String,
			default: ''
		}
	})
	const avatarClass = computed(() => {
		let temp = ''
		if (round) temp = temp + ' round'
		if (radius) temp = temp + ' radius'
		if (size) temp = temp + ' ' + size
		return temp

	})
</script>

<style scoped>

</style>
