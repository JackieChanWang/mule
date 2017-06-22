// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import $ from 'jquery'
import header from './components/header/header.vue'
import footer from './components/footer/footer.vue'
import section from './components/section/section.vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use($)
$(function () {
  $('.product').click(function () {
    $('.header_product').toggle()
  })
  $(window).scroll(function () {
    const sTop = $(window).scrollTop() + 'px'
    if ($(window).scrollTop() >= 300) {
      $('.content').css({'position': 'absolute', 'left': 0, 'top': 300})
      $('.banner ul li img').css('opacity', 0.1)
      console.log($('.header').height())
      console.log(sTop)
    } else {
      $('.content').css({'position': 'absolute', 'left': 0, 'top': '900px'})
      $('.banner ul li img').css('opacity', 1)
    }
  })
})
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/header',
      component: header
    },
    {
      path: '/footer',
      component: footer
    }
  ]
})

Vue.use(header)
Vue.use(footer)
Vue.use(section)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app')





