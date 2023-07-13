<template>
  <div class="reset-password">
    <Modal v-if="modalActive" @close-modal="closeModal" :modalMessage='modalMessage' />
    <Loader v-if="loading" />
    <div class="form-wrapper">
      <form class="reset">
        <p>Back to
          <router-link :to="{ name: 'Login' }" class="router-link">
            Login
          </router-link>
        </p>
        <h2>Reset Password</h2>
        <p>Please enter your email to reset it...</p>
        <div class="inputs">
          <div class="input">
            <input type="email" v-model="email" placeholder="Email">
            <emailIcon class="icon" />
          </div>
        </div>
        <button class="btn" @click.prevent="resetPassword">
          Reset
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import emailIcon from '../assets/images/envelope-regular.svg'
import Modal from '../components/Modal.vue'
import Loader from '../components/Loader.vue'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
export default {
  name: "ForgetPassword",
  data() {
    return {
      email: null,
      modalActive: false,
      modalMessage: '',
      loading: null
    }
  },
  components: { emailIcon, Modal, Loader },
  methods: {
    //! --- methods ---
    resetPassword() {
      firebase.
        auth().
        sendPasswordResetEmail(this.email)
        .then(() => {
          this.modalMessage = 'If you have an account, you will receive a email to reset your password!';
          this.loading = false;
          this.modalActive = true;
        }).catch(err => {
          this.modalMessage = err.message;
          this.loading = false;
          this.modalActive = true;
        })
    },
    closeModal() {
      this.modalActive = !this.modalActive;
      this.email = '';
    }
  }
}
</script>

<style lang="scss">
.reset-password {
  position: relative;

  .form-wrapper {
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0 auto;
    width: 90%;

    @media (min-width: 900px) {
      width: 100%;
    }

    .router-link {
      color: var(--black);
      margin-left: 3px;
      transition: .5 s all ease-in;

      &:hover {
        color: var(--red);
      }
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      padding: 0 10px;
      justify-content: center;
      flex: 1;

      @media (min-width: 900px) {
        padding: 0 60px;
      }

      h2 {
        text-align: center;
        font-size: 32px;
        margin-bottom: 20px;

        @media (min-width: 900px) {
          font-size: 36px;
        }
      }

      p {
        margin-bottom: 32px;
      }

      .inputs {
        width: 100%;
        max-width: 360px;
        margin-bottom: 10px;

        .input {
          position: relative;
          display: flex;

          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-bottom: 8px;

          &:focus {
            outline: none;
          }

          input {
            width: 100%;
            padding: 4px 6px;
            border: none;
            background-color: var(--silver);
            height: 40px;
            text-align: center;
            font-size: 16px;


          }

          .icon {
            width: 16px;
            position: absolute;
            left: 6px;
            opacity: 0.8;
          }
        }
      }

      .btn {
        padding: 16px 60px;
        border-radius: 10px;
        font-size: 18px;
        text-transform: uppercase;
        background-color: var(--black);
        color: var(--white);
        letter-spacing: 1.05px;
        transition: .5 s all ease-in-out;

        &:hover {
          background-color: var(--red);
        }
      }
    }

  }
}
</style>