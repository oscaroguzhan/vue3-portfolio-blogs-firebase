<template>
  <div>
    <div class="form-wrapper">
      <form class="login">
        <p>Don't have an account?
          <router-link :to="{ name: 'Register' }" class="router-link">Register</router-link>
        </p>
        <h2>Login</h2>
        <div class="inputs">
          <div class="input">
            <input type="email" placeholder="Email" v-model="email">
            <emailIcon class="icon" />
          </div>
          <div class="input">
            <input type="password" placeholder="Password" v-model="password">
            <passwordIcon class="icon" />
          </div>
          <div class="error" v-show="error">
            {{ errorMsg }}
          </div>
        </div>
        <router-link :to="{ name: 'ForgetPassword' }" class="router-link forget-password">Forget Password</router-link>
        <button class="btn" @click.prevent="signIn">Sign in</button>
      </form>
    </div>
  </div>
</template>

<script>
import emailIcon from '../assets/images/envelope-regular.svg'
import passwordIcon from '../assets/images/lock-alt-solid.svg'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
export default {
  name: "Login",
  components: {
    emailIcon,
    passwordIcon,
  },
  data() {
    return {
      email: '',
      password: '',
      error: null,
      errorMsg: ''
    }

  },
  //! ------- methods ----------
  methods: {
    signIn() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push({ name: 'home' });
          this.error = false;
          this.errorMsg = '';
          console.log(firebase.auth().currentUser.uid);
          this.password = ''
        }).catch(err => {
          this.error = true;
          this.errorMsg = err.message;
        })
    }
  }
}
</script>

<style lang="scss">
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

    .inputs {
      width: 100%;
      max-width: 360px;

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

    .forget-password {
      text-decoration: none;
      color: #000;
      cursor: pointer;
      font-size: 16px;
      margin: 8px 0 16px;

      &:hover {
        color: var(--red);
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
</style>