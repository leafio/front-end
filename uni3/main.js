import App from './App'
import {
	createSSRApp
} from 'vue'
import basics from './pages/basics/home.vue'
import components from './pages/component/home.vue'
import plugin from './pages/plugin/home.vue'
import cuCustom from './colorui/components/cu-custom.vue'
export function createApp() {
	const app = createSSRApp(App)
	app.component('basics', basics)
	app.component('components', components)
	app.component('plugin', plugin)
	app.component('cu-custom', cuCustom)


	app.config.globalProperties.headerInfo = {}

	return {
		app
	}
}

