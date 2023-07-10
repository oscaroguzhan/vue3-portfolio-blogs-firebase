<template>
  <div class="blog-card">
    <div class="icons" v-show="editPost">
      <div class="icons">
        <div class="icon">
          <Edit class="edit" />
        </div>
        <div class="icon">
          <Delete class="delete" />
        </div>
      </div>
    </div>
    <img src="../assets/images/blogCard/project-1.png" alt="" />
    <div class="info">
      <h4>{{ post?.blogTitle }}</h4>
      <h6>Created At: {{ post.createdAt }}</h6>
      <router-link to="#" class="link">
        View The Project Details
        <Arrow class="arrow" />

      </router-link>
    </div>
  </div>
</template>

<script>
import Arrow from '../assets/images/arrow-right-light.svg'
import Edit from '../assets/images/edit-regular.svg'
import Delete from '../assets/images/trash-regular.svg'
export default {
  name: "BlogCard",
  props: ['post'],
  components: {
    Arrow, Edit, Delete
  },
  computed: {
    editPost() {
      return this.$store.state.editPost
    }
  }
}
</script>

<style lang="scss" scoped>
.blog-card {
  position: relative;
  display: flex;
  cursor: pointer;
  
  flex-direction: column;
  transition: .5s ease all;

  &:hover {
    transform: scale(1.1) rotate(-1deg);
  }


  .icons {
    display: flex;
    position: absolute;
    top: 10px;
    right: 20px;
    gap: 5px;
    z-index: 99;

    .icon {
      width: 36px;
      height: 36px;
      padding: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background-color: var(--white);
      transition: 0.5 ease-in all;

      &:hover {
        background-color: var(--primary);

      }
    }

  }
  img {
    display: block;
    z-index: 1;
    width: 100%;
    object-fit: cover;
  }

  .info {
    display: flex;
    flex-direction: column;
    height: 100%;
    z-index: 3;
    padding: 24px 16px;
    color: var(--black);

    h4 {
      padding-bottom: 4px;
      font-size: 20px;
      font-weight: 500;
      text-transform: uppercase;
    }

    h6 {
      font-weight: 400;
      font-size: 14px;
      padding-bottom: 16px;
    }

    .link {
      display: inline-flex;
      align-items: center;
      margin-top: auto;
      font-weight: 500;
      padding-top: 20px;
      font-size: 16px;
      padding-bottom: 4px;
      transition: 0.5s ease-in all;

      &:hover {
        color: var(--primary);
      }

      .arrow {
        margin-left: 5px;
        width: 12px;
      }
    }
  }
}</style>