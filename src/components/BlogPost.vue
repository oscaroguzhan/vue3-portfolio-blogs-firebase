<template>
  <div class="blog-wrapper no-user">
    <div class="blog-content">
      <div class="left">
        <h2 v-if="post.welcomeScreen">{{ post.title }}</h2>
        <h2 v-else>{{ post.title }}</h2>
        <p v-if="post.welcomeScreen">{{ post.blogPost }}</p>
        <p v-else class="content-preview">{{ post.blogPost }}</p>

        <router-link v-if="post?.welcomeScreen" to="#" class="link">
          Login / Register
          <Arrow class="arrow" />
        </router-link>

        <router-link v-else to="#" class="link">
          Look The post
          <Arrow class="arrow" />
        </router-link>
      </div>
      <div class="right">
        <img v-if="post.welcomeScreen" src="../assets/images/blogCoverPhotos/oscar1.png" />
        <img v-else src="../assets/images/blogCard/project1.png" />
      </div>
    </div>
  </div>
</template>

<script>
import Arrow from '../assets/images/arrow-right-light.svg'
export default {
  name: 'BlogPost',
  props: ['post'],
  components: {
    Arrow
  }
}
</script>

<style lang="scss" scoped>
.blog-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

  @media (min-width: 768px) {
    max-height: 700px;
    flex-direction: row;
  }

  .blog-content {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex: 3;
    padding: 36px auto;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .left {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
      padding: 72px 24px;

      @media (max-width: 768px) {
        order: 2;
      }
    }

    h2 {
      font-size: 36px;
      margin-bottom: 12px;
    }

    .content-preview {
      font-size: 13px;
      max-height: 24px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 250px;
    }

    .link {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      text-decoration: underline;
      transition: 0.3 color ease-in;
      color: var(--white);

      &:hover {
        color: var(--primary);
      }
    }

    .arrow {
      height: 24px;
      width: 24px;
    }
  }

  .right {
    order: 2;

    @media (max-width: 768px) {
      order: 1;
    }

    img {
      display: block;
      height: auto;
      object-fit: cover;
      width: 100%;
    }
  }

  &:nth-child(even) {
    .blog-content {
      order: 2;
    }

    .right {
      order: 1;
    }
  }
}

.no-user:first-child {
  .blog-content {
    background-color: var(--black);
    color: var(--white);
  }
}
</style>