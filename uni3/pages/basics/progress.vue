<template>
	<view>
		<cu-custom bgcolor="bg-gradual-blue" :isBack="true">
			<template #backText>返回</template>进度条
		</cu-custom>
		<view class="cu-bar bg-white solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-blue"></text>进度条形状
			</view>
		</view>
		<view class="padding bg-white">
			<CuProgress :loading="loading" percent="61.8%">61.8%</CuProgress>
			<CuProgress radius :loading="loading" percent="61.8%" class="margin-top">61.8%</CuProgress>
			<CuProgress round :loading="loading" percent="61.8%" class="margin-top">61.8%</CuProgress>
		</view>
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-blue"></text>进度条尺寸
			</view>
		</view>
		<view class="padding bg-white">
			<CuProgress round :loading="loading" percent="61.8%"></CuProgress>
			<CuProgress size="sm" round :loading="loading" percent="61.8%" class="margin-top"></CuProgress>
			<CuProgress size="xs" round :loading="loading" percent="61.8%" class="margin-top"></CuProgress>
		</view>

		<view
			class="cu-bar bg-white solid-bottom margin-top"
			@tap="handleShowModal"
			data-target="ColorModal"
		>
			<view class="action">
				<text class="cuIcon-title text-blue"></text>进度条颜色
			</view>
			<view class="action">
				<view class="padding solid radius shadow-blur" :class="'bg-' + color.name"></view>
			</view>
		</view>
		<view class="padding" :class="color == 'white' ? 'bg-grey' : 'bg-white'">
			<CuProgress round :loading="loading" percent="61.8%" :color="color.color"></CuProgress>
		</view>

		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-blue"></text>进度条条纹
			</view>
			<switch class="margin-right-sm" :class="active ? 'checked' : ''" @change="SetActive"></switch>
		</view>
		<view class="padding bg-white">
			<CuProgress
				round
				:loading="loading"
				percent="61.8%"
				:color="Color.green"
				striped
				size="sm"
				:active="active"
			></CuProgress>
			<CuProgress
				round
				:loading="loading"
				percent="61.8%"
				:color="Color.red"
				striped
				size="sm"
				:active="active"
			></CuProgress>
			<CuProgress
				round
				:loading="loading"
				percent="61.8%"
				:color="Color.black"
				striped
				size="sm"
				:active="active"
			></CuProgress>
		</view>
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-blue"></text>进度条比例
			</view>
		</view>
		<view class="padding bg-white">
			<view class="cu-progress radius striped active">
				<view class="bg-red" :style="[{ width: loading ? '30%' : '' }]">30%</view>
				<view class="bg-olive" :style="[{ width: loading ? '45%' : '' }]">45%</view>
				<view class="bg-cyan" :style="[{ width: loading ? '25%' : '' }]">25%</view>
			</view>
		</view>
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-blue"></text>进度条布局
			</view>
		</view>
		<view class="padding bg-white">
			<view class="flex">
				<CuProgress :loading="loading" percent="100%" round :color="Color.green"></CuProgress>
				<text class="cuIcon-roundcheckfill text-green margin-left-sm"></text>
			</view>
			<view class="flex margin-top">
				<CuProgress :loading="loading" percent="80%" round :color="Color.green"></CuProgress>
				<text class="margin-left">80%</text>
			</view>
		</view>
		<CuColorPicker :show="showModal" @close="showModal = false" @change="handleColorChange"></CuColorPicker>
	</view>
</template>

<script setup lang="ts">
import {
	ref,
	reactive
} from "vue";
import {
	onLoad
} from "@dcloudio/uni-app";
import CuProgress from "../../colorui/components/cu-progress.vue";
import CuColorPicker from "../../colorui/components/cu-color-picker.vue";
import {
	colorList,
	Color
} from "../../common/style";
const ColorList = reactive(colorList);
const color = reactive({
	name: "red",
	color: "#e54d42",
});
const loading = ref(false);
const showModal = ref(false);
const active = ref(false);

onLoad(() => {
	setTimeout(() => {
		loading.value = true;
	}, 500);
});

const handleShowModal = (e) => {
	showModal.value = true;
};

const SetActive = (e) => {
	active.value = e.detail.value;
};
function handleColorChange(item) {
	Object.assign(color, item);
};
</script>

<style></style>
