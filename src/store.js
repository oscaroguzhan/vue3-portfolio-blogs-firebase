
import Vuex from 'vuex'

const store = new Vuex.Store({
  state: {
    sampleBlogCards: [
      { blogTitle: 'card1', blogCoverPhoto: './assets/images/blogCard/project-1.png', createdAt: '22 May' },
      { blogTitle: 'card2', blogCoverPhoto: './assets/images/blogCard/project-2.png', createdAt: '10 May'},
      { blogTitle: 'card3', blogCoverPhoto: './assets/images/blogCard/project-3.png', createdAt: '26 May' },
      { blogTitle: 'card4', blogCoverPhoto: './assets/images/blogCard/project-4.png', createdAt: '20 May' },
      { blogTitle: 'card4', blogCoverPhoto: './assets/images/blogCard/project-5.png', createdAt: '20 May' },
      { blogTitle: 'card4', blogCoverPhoto: './assets/images/blogCard/project-6.png', createdAt: '20 May' },
    ],
    editPost:null,
  },
  mutations: {
    toggleEditPost(state, payload) {
      state.editPost = payload;
    console.log(state.editPost);
    }
  },
  actions: {},
  modules: {},
});

export default store


