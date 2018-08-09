import {
  createApp
} from './app'

// Специфичная для клиента логика загрузки...

const {
  app,
  router
} = createApp()

// предполагается, что у корневого элемента в шаблоне App.vue есть элемент с `id="app"`

router.onReady(() => {
  app.$mount('#app')
})
