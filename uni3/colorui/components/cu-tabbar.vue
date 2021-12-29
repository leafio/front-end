<template>
	<view class="cu-bar tabbar ">
		<slot>

		</slot>
	</view>
</template>

<script>
	import CuAction from './cu-action.vue'
	export default {
		components: {
			CuAction
		},
		props: {

		}
	}
</script>

<style>
</style>
