<script setup>
import { RouterView } from 'vue-router'
import NavbarLayout from './components/layout/NavbarLayout.vue'
import FooterLayout from './components/layout/FooterLayout.vue'
</script>

<template>
  <div class="font-serif">
    <NavbarLayout />
    <div class="h-screen">
      <RouterView />
    </div>
    <FooterLayout />
  </div>
</template>
