<template>
  <div class="modal">
    <div class="modal-content">
      <p>{{ this.modalMessage }}</p>
      <button @click="closeModal" class="btn">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ['modalMessage'],
  methods: {
    closeModal() {
      this.$emit('close-modal');
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);
  .modal-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 8px;
    width: 400px;
    padding: 40px 30px;
    background-color: #fff;
    p {
      text-align: center;
    }
    .btn {
      padding:16px 60px;
      border-radius: 10px;
      font-size: 18px;
      text-transform: uppercase;
      background-color: var(--black);
      color:var(--white);
      letter-spacing: 1.05px;
      transition: .5 s all ease-in-out;
      &:hover {
        background-color: var(--red);
      }
    }
  }
}
</style>