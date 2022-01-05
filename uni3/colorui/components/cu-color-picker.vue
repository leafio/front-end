<template>
	<view class="cu-modal" :class="show?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar justify-end solid-bottom">
				<view class="content">选择颜色</view>
				<view class="action" @tap="hideModal">
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<view class="grid col-5 padding">
				<view class="padding-xs" v-for="(item,index) in ColorList" :key="index" @tap="SetColor(item)">
					<view v-if="item.name!='gray' && item.name!='white'" class="padding-tb radius"
						:class="'bg-' + item.name"> {{item.title}} </view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		reactive
	} from 'vue'
	import {
		colorList
	} from "../../common/style"
	const ColorList = reactive(colorList)
	defineProps({
		show: {
			type: Boolean,
			default: false
		}
	})
	const emit = defineEmits(['close','change'])

	const hideModal = (e) => {
		emit('close')
	}
	const SetColor = (item) => {
		emit('change',item)
		emit('close')
	}
</script>

<style>
</style>
