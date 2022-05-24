export default {
  SET_PRODUCT(state, payload) {
    state.all.product = payload
  },
  SET_LOADING(state, payload) {
    state.all.isLoading = payload
  },
}
