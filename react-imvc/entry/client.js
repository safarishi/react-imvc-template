import ReactDOM from 'react-dom'
import createApp from 'create-app/lib/client'
import routes from '../../src'

__webpack_public_path__ = window.__PUBLIC_PATH__ + '/'
const __APP_SETTINGS__ = window.__APP_SETTINGS__ || {}

/**
 * babel-polyfil 给 Array.prototype 补了 symbol 属性
 * webpackJsonp 函数用 for in 遍历模块数组
 * 用 typeof obj === 'object' 判断数组
 * 把 symbol 属性里的对象，当做数组调用 slice 方法，在 IE8 下报错
 * 将 symbol key 删除
 */
for (var key in Array.prototype) {
  if (key.indexOf('Symbol') !== -1) {
    delete Array.prototype[key]
  }
}

const webpackLoader = loadModule =>
  new Promise(loadModule).then(module => module.default || module)

const viewEngine = {
  render (component, container) {
    console && console.time && console.time('React#render')
    let result = ReactDOM.render(component, container)
    console && console.timeEnd && console.timeEnd('React#render')
    return result
  }
}

const appSettings = {
  ...__APP_SETTINGS__,
  hashType: 'hashbang',
  container: '#root',
  context: {
    preload: {},
    ...__APP_SETTINGS__.context,
    isClient: true,
    isServer: false
  },
  loader: webpackLoader,
  routes,
  viewEngine
}

/**
 * 动态收集服务端预加载的内容
 */
const preload = {}
Array.from(document.querySelectorAll('[data-preload]')).forEach(elem => {
  let name = elem.getAttribute('data-preload')
  let content = elem.textContent || elem.innerHTML
  preload[name] = content
})
appSettings.context.preload = preload

const app = createApp(appSettings)

app.start()
