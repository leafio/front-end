<template>
	<scroll-view scroll-x class=" nav" :class="{'text-center':textCenter}" scroll-with-animation
		:scroll-left="scrollLeft">
		<view :class="{flex:even}">
			<view class="cu-item" :class="{cur:index==current,'flex-sub':even}" v-for="(item,index) in list"
				:key="index" :style="index==current?activeStyle:''" @tap="tabSelect(index)">
				{{ item.label?item.label:item}}
			</view>
		</view>

	</scroll-view>
</template>

<script setup>
	import {
		computed,
	} from 'vue'
	const props = defineProps({
		list: {
			type: Array,
			default: () => []
		},
		current: {
			type: Number,
			default: 0
		},
		textCenter: {
			type: Boolean,
			default: false
		},
		activeStyle: {
			type: [String, Object],
			default: ''
		},
		even: {
			type: Boolean,
			default: false
		}

	})
	const scrollLeft = computed(() => {
		return (props.current - 1) * 60
	})
	const emit = defineEmits(['on-change'])
	const tabSelect = (index) => {
		emit('on-change', index)
	}
</script>

<style>
</style>
