<template>
	<view>
		<view class="cu-custom" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar fixed" :style="style" :class="[bgImage!=''?'none-bg text-white bg-img':'',bgColor]">
				<view class="action" @tap="BackPage" v-if="isBack">
					<text class="cuIcon-back"></text>
					<slot name="backText"></slot>
				</view>
				<view class="content" :style="[{top:StatusBar + 'px'}]">
					<slot></slot>
				</view>
				<slot name="right"></slot>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		computed,
		inject,
		getCurrentInstance
	} from 'vue'

	// const headerInfo = inject('headerInfo')
	let headerInfo //获取全局变量中的 headerInfo
	  {
	    const app = getCurrentInstance()
	    headerInfo = app.appContext.config.globalProperties.headerInfo
	
	  }

	const {
		bgColor,
		isBack,
		bgImage
	} = defineProps({
		bgColor: String,
		isBack: Boolean | String,
		bgImage: String
	})
	const StatusBar = ref(headerInfo.StatusBar)
	const CustomBar = ref(headerInfo.CustomBar)
	const style = computed(() => {
		let style = `height:${CustomBar.value}px;padding-top:${StatusBar.value}px;`;
		if (bgImage) {
			style = `${style}background-image:url(${bgImage});`;
		}
		console.log(style)
		return style

	})
	const BackPage = () => {
		if (getCurrentPages().length < 2 && 'undefined' !== typeof __wxConfig) {
			let url = '/' + __wxConfig.pages[0]
			return uni.redirectTo({
				url
			})
		}
		uni.navigateBack({
			delta: 1
		});
	}
</script>

<style>

</style>
