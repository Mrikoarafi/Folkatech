<template>
  <div class="flex flex-col flex-1">
    <div class="bg-[#F5F5F5] h-[64px] flex items-center px-[70px]">
      <button
        class="bg-[#EB3F36] h-full px-10 text-white tracking-wide flex items-center hover:bg-red-600"
        @click="$router.push('/product-list')"
      >
        BELANJA
        <svg
          width="24"
          height="24"
          class="fill-white"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.277 14.7522L8.45062 10.5007C8.27687 10.3076 8.41388 10 8.67361 10H16.3264C16.5861 10 16.7231 10.3076 16.5494 10.5007L12.723 14.7522C12.6038 14.8846 12.3962 14.8846 12.277 14.7522Z"
            fill=""
          />
        </svg>
      </button>
    </div>
    <div v-if="getAll.product" class="px-[70px] py-7 flex flex-col flex-1">
      <SmallBreadcrumb
        :list="[
          'Home',
          'product',
          `${changeTextMixins(getAll.product.data.list[0].name)}`,
        ]"
      />
      <div
        v-if="getAll.isLoading"
        class="flex-1 flex items-center justify-center"
      >
        <SmallLoading />
      </div>
      <div v-else class="flex flex-1 items-center w-full">
        <div class="flex flex-col w-full justify-center">
          <div class="flex justify-center">
            <img
              v-for="item in getAll.product.data.list[0].images"
              :key="item.id"
              :src="item.image_url"
              alt="picture"
              class="w-[415px] h-[415px] self-center"
            />
          </div>
          <div
            class="mt-8 onlyvhtml text-[22px] font-thin mx-auto"
            v-html="changeTextMixins(getAll.product.data.list[0].name)"
          ></div>
          <div class="text-[#EB3F36] text-[17px] mx-auto">
            {{ priceFormatMixins(getAll.product.data.list[0].price) }}
          </div>
          <div
            class="mt-5 break-all text-[15px] mx-auto font-thin"
            v-html="changeTextMixins(getAll.product.data.list[0].description)"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'ProductDetail',
  methods: {
    ...mapActions({ detailProduct: 'product/detailProduct' }),
  },
  head: {
    title: 'Product Detail - ',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Folkatech home page',
      },
    ],
  },
  computed: {
    ...mapGetters({
      getAll: 'product/getAll',
    }),
  },
  fetch() {
    this.detailProduct(this.$route.params.id)
  },
}
</script>

<style scoped>
.onlyvhtml >>> b {
  font-size: 21px !important;
}
</style>
