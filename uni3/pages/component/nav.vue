<template>
	<view>
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<template #backText>返回</template>导航栏
		</cu-custom>
		<view class="cu-bar bg-white solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-orange"></text>默认
			</view>
		</view>
		<cu-navbar class="bg-white" :list="list" :current="TabCur" @on-change="onNavChange" :active-style="{ color: Color.green }"></cu-navbar>

		<view class="cu-bar bg-white margin-top solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-orange"></text>居中
			</view>
		</view>

		<cu-navbar class="bg-white" :list="list" :current="TabCur" @on-change="onNavChange" text-center :active-style="{ color: Color.orange }"></cu-navbar>

		<view class="cu-bar bg-white margin-top solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-orange"></text>平分
			</view>
		</view>
		<cu-navbar class="bg-white" :list="list" :current="TabCur" @on-change="onNavChange" text-center :active-style="{ color: Color.blue }" even></cu-navbar>

		<view class="cu-bar bg-white margin-top solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-orange"></text>背景
			</view>
		</view>

		<cu-navbar class="bg-red" :list="list" :current="TabCur" @on-change="onNavChange" text-center :active-style="{ color: 'white' }"></cu-navbar>
		<view class="cu-bar bg-white margin-top solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-orange"></text>图标
			</view>
		</view>
		<scroll-view scroll-x class="bg-green nav text-center">
			<view class="cu-item" :class="0 == TabCur ? 'text-white cur' : ''" @tap="tabSelect" data-id="0">
				<text class="cuIcon-camerafill"></text>数码
			</view>
			<view class="cu-item" :class="1 == TabCur ? 'text-white cur' : ''" @tap="tabSelect" data-id="1">
				<text class="cuIcon-upstagefill"></text>排行榜
			</view>
			<view class="cu-item" :class="2 == TabCur ? 'text-white cur' : ''" @tap="tabSelect" data-id="2">
				<text class="cuIcon-clothesfill"></text>皮肤
			</view>
		</scroll-view>
	</view>
</template>

<script lang="ts" setup>
import {
	ref,
	reactive
} from "vue";
import CuNavbar from "../../colorui/components/cu-navbar.vue";
import {
	Color
} from "../../common/style";

const TabCur = ref(0);
const scrollLeft = ref(0);
const list = reactive([]);

const _list = [];
for (let i = 0; i < 4; i++) {
	_list.push("Tab" + i);
}
Object.assign(list, _list);
const onNavChange = (index) => {
	TabCur.value = index;
};
</script>

<style></style>
