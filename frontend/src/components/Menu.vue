<script setup>
const router = useRouter()

const menuItems = computed(() => {
  return router.getRoutes().filter((route) => !route.name.includes('slug'))
})
</script>

<template>
  <nav>
    <ul class="menu-container">
      <li v-for="(item, index) in menuItems" :key="index">
        <NuxtLink :to="item.path"> {{ item.name }} </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
