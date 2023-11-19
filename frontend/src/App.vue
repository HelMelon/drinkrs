<template>
  <Header />
  <RouterView />
</template>
<script>
import getTheme from '@/utils/themesSwitcher';
import Header from '@/components/Header.vue';
import { onMounted } from 'vue';
export default {
  setup() {
    onMounted(() => {
      document.getElementById('app').classList.add(getTheme());
    });
  },
  components: { Header },
};
</script>

<style></style>
