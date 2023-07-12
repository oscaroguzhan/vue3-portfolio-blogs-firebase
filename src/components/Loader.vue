<template>
  <div class="loader">
    <span>
    </span>
    <p>Loading...</p>
  </div>
</template>

<script>
  export default {
    setup() {}
  }
</script>

<style lang="scss" scoped>
.loader {
  top: 0;
  z-index: 99;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  @keyframes spin {
    to {
      transform: rotateZ(360deg);
    }
  }
  span {
    display: block;
    width: 80px;
    height: 80px;
    margin: 0 auto;
    border: 3px solid transparent;
    border-top-color: #fff;
    border-bottom-color: #fff;
    border-radius: 50%;
    animation: spin ease 1000ms infinite;
  }
  p{
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color:#fff;
  }
}
</style>