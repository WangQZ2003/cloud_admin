// 方法一：
// // 引入element-plus
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

// // 引入element-plus icons 图标
// import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import type { App } from "vue"


export const setRegisterGlobal = (app: App) => {
    // 引入element-plus全局组件
    // app.use(ElementPlus)
    app.use(registerElementPlus)

    // //全局 注册element-plus icons 图标
    // for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    //     app.component(key, component)
    // }
    app.use(registerElementPlusIcon)
}



// export default {
//     install:(app:App)=>{
//         app.use(ElementPlus)
//     }
// }

// 方法二： 分开的引入
// 引入element-plus
import registerElementPlus from "./registerElementPlus"
// 引入element-plus icons 图标
import registerElementPlusIcon from "./registerElementPlusIcon"