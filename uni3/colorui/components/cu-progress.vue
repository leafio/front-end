<template>
	<view class="cu-progress" :class="customClass">
		<view :style="[{ width:loading?percent:'','background-color':color}]">
			<slot>
			</slot>
		</view>
	</view>
</template>

<script setup>
	import {
		computed,
		toRefs
	} from 'vue'

	const props = defineProps({
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
		},
		loading: {
			type: Boolean,
			default: false
		},
		percent: {
			type: String,
			default: ''
		},
		color: {
			type: String,
			default: 'red'
		},
		striped: {
			type: Boolean,
			default: false
		},
		active: {
			type: Boolean,
			default: false
		}

	})

	const customClass = computed(() => {

		let temp = ''
		if (props.round) temp = temp + ' round'
		if (props.radius) temp = temp + ' radius'
		if (props.striped) temp = temp + ' striped'
		console.log('active',props.active)
		if (props.active) temp = temp + ' active'
		if (props.size) temp = temp + ' ' + props.size
		console.log(temp)
		return temp

	})
</script>

<style>
</style>
