
import Vuex from 'vuex'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { collection, getDocs } from "firebase/firestore";
import {db} from './firebase'
const store = new Vuex.Store({
  state: {
    sampleBlogCards: [
      { blogTitle: 'card1', blogCoverPhoto: '../src/assets/images/blogCard/project-1.png', createdAt: '22 May' },
      { blogTitle: 'card2', blogCoverPhoto: '../src/assets/images/blogCard/project-2.png', createdAt: '10 May'},
      { blogTitle: 'card3', blogCoverPhoto: '../src/assets/images/blogCard/project-3.png', createdAt: '26 May' },
      { blogTitle: 'card5', blogCoverPhoto: '../src/assets/images/blogCard/project-4.png', createdAt: '20 May' },
      { blogTitle: 'card6', blogCoverPhoto: '../src/assets/images/blogCard/project-5.png', createdAt: '20 May' },
      { blogTitle: 'card7', blogCoverPhoto: '../src/assets/images/blogCard/project-6.png', createdAt: '20 May' },
      { blogTitle: 'card8', blogCoverPhoto: '../src/assets/images/blogCard/project-7.png', createdAt: '20 May' },
      { blogTitle: 'card9', blogCoverPhoto: '../src/assets/images/blogCard/project-8.png', createdAt: '20 May' },
      { blogTitle: 'card10', blogCoverPhoto: '../src/assets/images/blogCard/project-9.png', createdAt: '20 May' },
      { blogTitle: 'card11', blogCoverPhoto: '../src/assets/images/blogCard/project-10.png', createdAt: '20 May' },
      { blogTitle: 'card12', blogCoverPhoto: '../src/assets/images/blogCard/project-11.png', createdAt: '20 May' },
    ],
    editPost:null,
    admin:null,
    user:null,
    profileName: null,
    profileSurname:null,
    profileUsername:null,
    profileEmail:null,
    profileId:null,
    profileUserInitials: null
  },
  getters: {
    getProfileName: (state) => state.profileName,
    getProfileSurname: (state) => state.profileSurname,
    getProfileUsername: (state) => state.profileUsername,
    getProfileEmail: (state) => state.profileEmail
  },
  setters: {
    setProfileName: ({commit}) => commit(state.changeProfileName())
  },
  mutations: {
    toggleEditPost(state, payload) {
      state.editPost = payload;
    console.log(state.editPost);
    },
    updateUser(state,payload) {
      state.user = payload
    },
    setProfileInfo(state,payload) {
      state.profileId =payload.id;
      state.profileName =payload.data().name;
      state.profileSurname =payload.data().surname;
      state.profileUsername =payload.data().username;
      state.profileEmail =payload.data().email;
    },
    setProfileInitials(state) {
      state.profileUserInitials = state.profileName.match(/(\b\S)?/g).join("") + state.profileSurname.match(/(\b\S)?/g).join("")
    },
    changeProfileName(state,payload) {
      state.profileName=payload;
    },
    changeProfileSurname(state,payload) {
      state.profileSurname=payload;
    },
    changeProfileUsername(state,payload) {
      state.profileUsername=payload;
    }
  },
  actions: {
    async getCurrentUser({commit}) {
      const documentSnapShots = await getDocs(collection(db, "users"));
      documentSnapShots.forEach((doc) => {
      if (doc.id === firebase.auth().currentUser.uid){ 
        commit('setProfileInfo', doc)
        commit('setProfileInitials')
        }
      });
    }
  },
  modules: {},
});

export default store


