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
    <!-- BREADCRUMB -->
    <div class="px-[70px] py-7 flex flex-col flex-1">
      <div class="flex items-center font-thin text-sm space-x-5 mb-10">
        <p>Home</p>
        <svg
          width="13"
          height="13"
          viewBox="0 0 13 13"
          class="mt-1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.65865 3.40865C6.87018 3.19712 7.21315 3.19712 7.42468 3.40865L10.133 6.11698C10.3446 6.32852 10.3446 6.67148 10.133 6.88302L7.42468 9.59135C7.21315 9.80288 6.87018 9.80288 6.65865 9.59135C6.44712 9.37982 6.44712 9.03685 6.65865 8.82532L8.98397 6.5L6.65865 4.17468C6.44712 3.96315 6.44712 3.62018 6.65865 3.40865Z"
            fill="#868686"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.86702 3.40865C3.07856 3.19712 3.42152 3.19712 3.63306 3.40865L6.34139 6.11698C6.55292 6.32852 6.55292 6.67148 6.34139 6.88302L3.63306 9.59135C3.42152 9.80288 3.07856 9.80288 2.86702 9.59135C2.65549 9.37982 2.65549 9.03685 2.86702 8.82532L5.19234 6.5L2.86702 4.17468C2.65549 3.96315 2.65549 3.62018 2.86702 3.40865Z"
            fill="#868686"
          />
        </svg>
        <p>Produk Detail</p>
        <svg
          width="13"
          height="13"
          viewBox="0 0 13 13"
          class="mt-1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.65865 3.40865C6.87018 3.19712 7.21315 3.19712 7.42468 3.40865L10.133 6.11698C10.3446 6.32852 10.3446 6.67148 10.133 6.88302L7.42468 9.59135C7.21315 9.80288 6.87018 9.80288 6.65865 9.59135C6.44712 9.37982 6.44712 9.03685 6.65865 8.82532L8.98397 6.5L6.65865 4.17468C6.44712 3.96315 6.44712 3.62018 6.65865 3.40865Z"
            fill="#868686"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.86702 3.40865C3.07856 3.19712 3.42152 3.19712 3.63306 3.40865L6.34139 6.11698C6.55292 6.32852 6.55292 6.67148 6.34139 6.88302L3.63306 9.59135C3.42152 9.80288 3.07856 9.80288 2.86702 9.59135C2.65549 9.37982 2.65549 9.03685 2.86702 8.82532L5.19234 6.5L2.86702 4.17468C2.65549 3.96315 2.65549 3.62018 2.86702 3.40865Z"
            fill="#868686"
          />
        </svg>
        <p class="text-[#EB3F36]">{{ $route.params.id }}</p>
      </div>
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
          <p
            class="text-[30px] mx-auto"
            v-html="changeTextMixins(getAll.product.data.list[0].name)"
          ></p>
          <p class="text-[#EB3F36] text-[20px] mx-auto">
            {{ priceFormatMixins(getAll.product.data.list[0].price) }}
          </p>
          <p
            class="mt-5 break-all text-[17px] mx-auto"
            v-html="changeTextMixins(getAll.product.data.list[0].description)"
          ></p>
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
