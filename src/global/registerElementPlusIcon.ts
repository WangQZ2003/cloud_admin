// 引入element-plus icons 图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import type {App} from "vue"

 //全局 注册element-plus icons 图标
 export default {
    install:(app:App)=>{
        for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            app.component(key, component)
        }
    }
 }
 