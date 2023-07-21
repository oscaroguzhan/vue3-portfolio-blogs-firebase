<template>
  <div class="profile-wrapper">
    <Modal :modalMessage="modalMessage" v-if="modalActive" @close-modal='closeModal' />
    <div class="container">
      <h2>User Profile Information</h2>
      <div class="profile-info">
        <div class="initials">
          <span class="user-initials">{{ store.state.profileUserInitials }}</span>
          <div class="admin-badge">
            <adminIcon class="icon" />
            <span>Admin</span>
          </div>
          <div class="input">
            <label for="name">Name: </label>
            <input type="text" id="name" v-model="name" >
          </div>
          <div class="input">
            <label for="surname">Surname: </label>
            <input type="text" id="surname" v-model="surname">
          </div>
          <div class="input">
            <label for="username">Username: </label>
            <input type="text" id="username" v-model="username">
          </div>
          <div class="input">
            <label for="email">Email: </label>
            <input disabled type="text" id="email" v-model="email">
          </div>
          <button>Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex';
import adminIcon from '../assets/images/user-crown-light.svg'
import Modal from '../components/Modal.vue'
//-----------------

const emits = defineEmits('close-modal')
const store = useStore()
const modalMessage = ref("All changes are saved!")
const modalActive = ref(null)

const closeModal = () => {
  modalActive.value = !modalActive.value
}
const name = computed(() => {
  return (
    store.getters.getProfileName
  )
})
const surname = computed(() => {
  return store.getters.getProfileSurname
})
const username = computed(() => {
  return store.getters.getProfileUsername
})
const email = computed(() => {
  return store.getters.getProfileEmail
})

</script>

<style lang="scss" scoped>
.profile-wrapper {
  max-width: 1200px;
  padding: 60px 25px;
  margin: 0 auto;

  @media (max-width: 600px) {
    margin: 0 20px 20px 20px;
  }

  .container {
    h2 {
      text-align: center;
      font-size: 26px;
      margin-bottom: 16px;
    }

    .profile-info {
      border-radius: 8px;
      background-color: var(--silver);
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 26px;
      margin: 16px auto;
      max-width: 600px;

      .initials {
        .user-initials {
          width: 80px;
          height: 80px;
          background-color: var(--primary);
          padding: 6px;
          border-radius: 50%;
          color: var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          font-size: 20px;

        }

        .admin-badge {
          display: flex;
          align-items: center;
          margin: 10px auto;
          gap: 5px;
          background-color:var(--primary);
          color:var(--white);
          padding: 5px;
          border-radius: 5px;
          box-shadow: 0 4px 4px var(--primary);

          span {
            text-transform: uppercase;
            font-weight: 600;
            font-size: 16px;
          }

          .icon {
            width: 18px;
          }
        }

        .input {
          margin: 6px 0;

          label {
            font-size: 14px;
            display: block;
            padding-bottom: 4px;
          }

          input {
            width: 300px;
            border: none;
            background-color: var(--white);
            padding: 8px;
            height: 30px;

            @media (max-width: 900px) {
              width: 250px;
            }

            &:focus {
              outline: 1px solid var(--black);
            }
          }
        }

        button {
          background-color: var(--black);
          color: var(--white);
          padding: 10px 127px;
          border-radius: 10px;
          outline: none;
          margin: 10px auto;
          text-transform: uppercase;
          letter-spacing: 1.1px;
          font-size: 16px;
          cursor: pointer;
          transition: .5s all ease-in-out;

          &:hover {
            background-color: var(--primary);
            font-weight: 600;
          }
          @media (max-width: 900px) {
            padding: 10px 100px;
            }

        }
      }
    }
  }
}
</style>