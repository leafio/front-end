<template>
	<view :class="iconOnly?'':'cu-load'">
		<view class="icon" :class="cur_status" :style="{'margin-right':iconOnly?'':'6rpx'}">
			<slot name="loading-icon" v-if="cur_status==='loading'">
				<view class="cuIcon-icloading"></view>
			</slot>
			<slot name="over-icon" v-if="cur_status==='over'">
				<view class="cuIcon-emoji"></view>
			</slot>
			<slot name="error-icon" v-if="cur_status==='erro'">
				<view class="cuIcon-roundclosefill"></view>
			</slot>
		</view>
		<text v-if="!iconOnly">
			{{cur_text}}
		</text>
	</view>
</template>

<script>
	export default {
		props: {
			loading: {
				type: Boolean,
				default: false
			},
			error: {
				type: Boolean,
				default: false
			},
			loadingText: {
				type: String,
				default: '加载中...'
			},
			errorText: {
				type: String,
				default: '加载失败'
			},
			completeText: {
				type: String,
				default: '没有更多了'
			},
			iconOnly: {
				type: Boolean,
				default: false
			}
		},
		computed: {
			cur_status() {
				if (this.error) return 'erro'
				if (this.loading) return 'loading'
				return 'over'
			},
			cur_text() {
				if (this.error) return this.errorText
				if (this.loading) return this.loadingText
				return this.completeText
			}
		},

		data() {
			return {
				statusOptions: [
					'loading',
					'over',
					'error'
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.icon {
		font-family: "cuIcon";
		display: inline-block;
	}

	.icon.loading {
		animation: cuIcon-spin 2s infinite linear;
	}
</style>
