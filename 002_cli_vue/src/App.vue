<template>
  <h1>{{ title }}</h1>
  <p>Welcome....</p>
  <teleport to=".modals" v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>
      <h1>Jkrz giveway</h1>
      <p>Grab your jkrz red power ranger!</p>
    </Modal>
  </teleport>
  <teleport to=".modals" v-if="showOtherModal">
    <Modal theme="sale" @close="toggleOtherModal">
      <template v-slot:links>
        <a href="#"> Sign up Other</a>
        <a href="#">More info</a>
      </template>
      <h1>Other jkrz giveway</h1>
      <p>Grab your jkrz other ranger</p>
    </Modal>
  </teleport>
  <button @click="toggleModal">open Modal</button>
  <br />
  <button @click="toggleOtherModal">open Other Modal</button>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: { Modal },
  data() {
    return {
      title: "My first Vue project",
      header: "Sign up for free giveway",
      text: "grab your power ranger!",
      showModal: false,
      showOtherModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleOtherModal() {
      this.showOtherModal = !this.showOtherModal;
    },
  },
};
</script>

<style>
#app,
.modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
