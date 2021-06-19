import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {
  applyPolyfills,
  defineCustomElements,
} from '@aws-amplify/ui-components/loader'

import Amplify from 'aws-amplify'

Amplify.configure({
  Auth: {
    identityPoolId: process.env.VUE_APP_IDENTITY_POOL,
    region: process.env.VUE_APP_REGION,
    userPoolId: process.env.VUE_APP_USER_POOL_ID,
    userPoolWebClientId: process.env.VUE_APP_WEB_CLIENT_ID,
  },
  Storage: {
    AWSS3: {
      bucket: process.env.VUE_APP_BUCKET,
      region: process.env.VUE_APP_REGION,
    },
  },
})

applyPolyfills().then(() => {
  defineCustomElements(window)
})

const app = createApp(App)

app.config.isCustomElement = (tag) => tag.startsWith('amplify-')

app.use(router).mount('#app')
