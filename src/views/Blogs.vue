<template>
  <div class="blog-card-wrapper">
    <div class="blog-cards container">
      <div class="toggle-edit">
        <span>Toggle Edit to post</span>
        <input type="checkbox" name="" id="" v-model="editPost" />
      </div>
      <BlogCard :post="post" v-for="(post, index) in sampleBlogCards" :key="index" />
    </div>
  </div>
</template>

<script>
import BlogCard from '../components/BlogCard.vue';

export default {
  name: 'blogs',
  components: {
    BlogCard
  },
  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards;
    },
    editPost: {
      get() {
        this.$store.state.editPost;
      },
      set(payload) {
        this.$store.commit("toggleEditPost", payload)
      }
    }
  },
  beforeUnmount() {
    // clear the editPost state to false when component is destroyed so it does not show on home view
    this.$store.commit("toggleEditPost", false)

  },
}
</script>

<style lang="scss" scoped>
.blog-cards {
  position: relative;


  .toggle-edit {
    display: flex;
    align-items: center;
    position: absolute;
    top: -60px;
    right: 40%;
    margin-top: 10px;


    span {
      margin-right: 16px;
      font-size: 16px;
      font-weight: 600;
    }

    input[type="checkbox"] {
      position: relative;
      border: 2px solid var(--black);
      -webkit-appearance: none;
      appearance: default;
      background: #fff;
      outline: none;
      width: 85px;
      height: 35px;
      border-radius: 20px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      cursor: pointer;
    }

    input[type="checkbox"]:before {
      content: "";
      position: absolute;
      width: 30px;
      height: 30px;
      border-radius: 20px;
      top: 0;
      left: 0;
      background: var(--black);
      transform: scale(1.1);
      transition: 750ms ease all;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    input:checked[type="checkbox"]:before {
      background: var(--primary);
      left: 52px;
    }
  }
}
</style>