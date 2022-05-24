<template>
  <div class="flex-1 flex w-full items-center justify-center">
    <div class="text-center">
      <p>Maaf page yang anda cari tidak tersedia...</p>
      <button
        class="bg-blue-400 text-white p-3 rounded-lg mt-3"
        @click="$router.go(-1)"
      >
        Kembali
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
}
</script>

<style></style>
