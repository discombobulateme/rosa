<script setup>
const config = useRuntimeConfig()

const { find } = useStrapi()

const { data, pending, error } = await useAsyncData('event', () =>
  find('events')
)

/*
* add error handling
* add find artists
*/

const events = computed(() =>
  data.value.data.map((event) => {
    return {
      title: event.attributes.event_name,
      description: event.attributes.description,
      image:
        config.strapiAssetsURL + event.attributes.image.data[0].attributes.url,
    }
  })
)
</script>

<template>
  <h2>Events</h2>
  <div class="events-container" v-if="events?.length > 0">
    <div class="event-container" v-for="(event, index) in events" :key="index">
      <img :src="event.image" alt="" />
      <h3>{{ event.title }}</h3>
      <p>{{ event.description }}</p>
    </div>
  </div>
</template>

<style scoped></style>
