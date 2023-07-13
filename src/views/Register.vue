<template>
  <div>
    <div class="form-wrapper">
      <form class="register">
        <p>Already have an account?
          <router-link :to="{ name: 'Login' }" class="router-link">
            Login
          </router-link>
        </p>
        <h2>Create an new account</h2>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="Name" v-model="name">
          </div>
          <div class="input">
            <input type="text" placeholder="Surname" v-model="surname">
          </div>
          <div class="input">
            <input type="text" placeholder="Username" v-model="username">
          </div>
          <div class="input">
            <input type="email" placeholder="Email" v-model="email">
            <emailIcon class="icon" />
          </div>
          <div class="input">
            <input type="password" placeholder="Password" v-model="password">
            <passwordIcon class="icon" />
          </div>
          <div class="error" v-show="error">
            {{ this.errorMsg }}
          </div>
        </div>
        <div class="error"></div>

        <button class="btn" @click.prevent="register">Sign Up</button>
      </form>
    </div>
  </div>
</template>

<script>
import emailIcon from '../assets/images/envelope-regular.svg'
import passwordIcon from '../assets/images/lock-alt-solid.svg'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import db from '../firebase'
export default {
  name: "Register",
  components: {
    emailIcon,
    passwordIcon,
  },
  data() {
    return {
      name: '',
      surname: '',
      username: '',
      email: '',
      password: '',
      error: null,
      errorMsg: null,
    }
    // ---------- methods --------- // 
  },
  methods: {
    async register() {
      if (this.name !== '' && this.surname !== '' && this.username !== '' && this.email !== '' && this.password !== '') {
        this.error = false;
        this.errorMsg = '';
        const firebaseAuth = await firebase.auth();
        const createUser = await firebaseAuth.createUserWithEmailAndPassword(this.email, this.password);
        const result = await createUser;
        const dataBase = db.collection("users").doc(result.user.uid);
        await dataBase.set({
          name: this.name,
          surname: this.surname,
          username: this.username,
          email: this.email,
        })
        await this.$router.push({ name: "home" });
        return;
      }
      this.error = true;
      this.errorMsg = 'Please fill in all necessary fields!'
      return;
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
</style>