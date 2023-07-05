<template>
  <main>
    <BlogPost :post="welcomeScreen" />
    <BlogPost :post="post" v-for="post in sampleBlogPost" :key="post.id" />
    <div class="blog-card-wrapper">
      <div class="container">
        <h3>View most recent Projects</h3>
        <div class="blog-cards">
          <BlogCard :post="post" v-for="(post, index) in sampleBlogCards" :key="index" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import BlogPost from '../components/BlogPost.vue';
import BlogCard from '../components/BlogCard.vue';
export default {
  name: "Home",
  components: { BlogPost, BlogCard },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome to my Portfolio!",
        blogPost: 'All my projects as front-end developer including React.js, Vue.js, Next.js and MERN applications',
        welcomeScreen: true,
        photo: 'me'
      },
      sampleBlogPost: [
        {
          id: 1,
          title: "Vue3 task tracker",
          blogPost: "It is a basic todo project with CRUD functionality. It is created with Vue3 and composition API",
          blogCoverPhoto: '../assets/images/blogCard/project11.png'
        },
        {
          id: 2,
          title: "My Second Blog Post",
          blogPost: "This is my second blog post",
          blogCoverPhoto: '../assets/images/blogCard/project1.png'
        }
      ],
      sampleBlogCards: [
        { blogTitle: 'card1', blogCoverPhoto: 'project-1', createdAt: '22 May' },
        { blogTitle: 'card2', blogCoverPhoto: 'project-2', createdAt: '10 May'},
        { blogTitle: 'card3', blogCoverPhoto: 'project-3', createdAt: '26 May' },
        { blogTitle: 'card4', blogCoverPhoto: 'project-4', createdAt: '20 May' },
        { blogTitle: 'card4', blogCoverPhoto: 'project-4', createdAt: '20 May' },
        { blogTitle: 'card4', blogCoverPhoto: 'project-4', createdAt: '20 May' },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .blog-card-wrapper {
    h3 {
      font-size: 24px;
      margin-bottom:20px;
      font-weight: 500;
    }
  }
</style>
