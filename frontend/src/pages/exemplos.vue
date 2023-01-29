<script setup>
// Exemplo de variavel reativa:
const title = ref('Hello1')
// Exemplo de objeto reativo:
const exemplo = reactive({
  nome: 'seila',
  idade: 0,
})

function updateTitle() {
  title.value = title.value + '-haha'
  console.log(JSON.stringify(title))
}

function updateObject() {
  exemplo.idade += 1
}
</script>

<template>
  <h2>{{ title }}</h2>
  <button @click="updateTitle">Update title</button>
  <br />
  <h2>{{ exemplo.idade }}</h2>
  <button @click="updateObject">Update object</button>
</template>

<style scoped></style>
