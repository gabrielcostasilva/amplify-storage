<template>
  <the-header></the-header>

  <main>
    <router-view></router-view>
  </main>

  <the-footer></the-footer>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheFooter,
  },
}
</script>
