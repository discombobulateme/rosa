<script setup>
const config = useRuntimeConfig()

const { find } = useStrapi()

const route = useRoute()

const { data, pending, error } = await useAsyncData('event', () =>
  find(`events?filters[slug][$eq]=${route.params.slug}`)
)

/*
 * add error handling
 */

const event = computed(() => {
  return {
    title: data.value.data[0].attributes.event_name,
    description: data.value.data[0].attributes.description,
    image:
      config.strapiAssetsURL +
      data.value.data[0].attributes.image.data[0].attributes.url,
  }
})
</script>

<template>
  <h2>{{ event.title }}</h2>
  <img :src="event.image" alt="" />
  <p>{{ event.description }}</p>
</template>

<style scoped></style>
