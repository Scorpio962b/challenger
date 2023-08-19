import { createStore } from 'vuex'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
    ADD_PRODUCT(state, newProduct) {
      state.products.push(newProduct);
    }
  },
  actions: {
    fetchDataFromServer() {
      fetch("http://localhost:5002/")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    },
    fetchProductById(context, productId) {
      fetch(`http://localhost:5002/products/${productId}`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
  }}})
