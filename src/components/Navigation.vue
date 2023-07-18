<template>
    <header>
        <nav class="container">
            <div class="branding">
                <router-link class="branding__header" :to="{ name: 'home' }">Portfolio Blogs</router-link>
            </div>
            <div class="nav-links" v-show="!mobile">
                <ul>
                    <router-link class="link" :to="{ name: 'home' }">Home</router-link>
                    <router-link class="link" :to="{ name: 'Blogs' }">Blogs</router-link>
                    <router-link class="link" to="#">Create Post</router-link>
                    <router-link class="link" :to="{ name: 'Login' }" v-show="!user">Login/Register</router-link>
                </ul>
            </div>
            <div class="profile" ref="profile" v-if="user">
                <span @click="toggleProfileMenu">{{ store.state.profileUserInitials }}</span>
                <div class="profile__menu" v-show="profileMenu">
                    <div class="info">
                        <p class="initials">
                            {{ store.state.profileUserInitials }}
                        </p>
                        <div class="right">
                            <p>{{ store.state.profileName }} {{ store.state.profileSurname }}</p>
                            <p>{{ store.state.profileUsername }}</p>
                            <p>{{ store.state.profileEmail }}</p>
                        </div>
                    </div>
                    <div class="options">
                        <div class="option">
                            <router-link class="option" to="#">
                                <userIcon class="icon" />
                                <p>Profile</p>
                            </router-link>
                        </div>
                        <div class="option">
                            <router-link class="option" to="#">
                                <adminIcon class="icon" />
                                <p>Admin</p>
                            </router-link>
                        </div>
                        <div class="option" @click="signOut" >
                                <signOutIcon class="icon" />
                                <p>Sign Out</p>
                        </div>
                    </div>
                </div>
            </div>
            <menuIcon class="menu-icon" v-show="mobile" @click="toggleSideMobileNav" />
            <!-- transition built-in vue components that can help work with transitions and animations in response to changing state -->
            <transition name="mobile-nav" v-show="sideMobileNav">
                <ul class="mobile-nav">
                    <router-link class="link" :to="{ name: 'home' }">Home</router-link>
                    <router-link class="link" :to="{ name: 'Blogs' }">Blogs</router-link>
                    <router-link class="link" to="#">Create Post</router-link>
                    <router-link class="link" :to="{ name: 'Login' }">Login/Register</router-link>
                </ul>
            </transition>
        </nav>
    </header>
</template>
<script setup>
import { onMounted, ref, computed } from 'vue'
import { useStore } from 'vuex'
import menuIcon from '../assets/images/bars-regular.svg'
import userIcon from '../assets/images/user-alt-light.svg'
import adminIcon from '../assets/images/user-crown-light.svg'
import signOutIcon from '../assets/images/sign-out-alt-regular.svg'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const store = useStore()
const mobile = ref(null)
const sideMobileNav = ref(null)
const windowWidth = ref(null)
const profileMenu = ref(false)

const checkScreen = () => {
    windowWidth.value = window.innerWidth
    if (windowWidth.value <= 768) {
        mobile.value = true
        return
    }
    mobile.value = false
    sideMobileNav.value = false
    return
}
const toggleSideMobileNav = () => {
    sideMobileNav.value = !sideMobileNav.value
    return
}
const toggleProfileMenu = () => {
    profileMenu.value = !profileMenu.value
}
const signOut = () => {
    firebase.auth().signOut();
    window.location.reload();
}

const user = computed(() => {
    return store.state.user
})
onMounted(() => {
    window.addEventListener('resize', checkScreen);
    checkScreen()
})

</script>


<style lang="scss" scoped>
header {
    background-color: var(--white);
    padding: 3rem;
    z-index: 99;

    .link {
        font-weight: 400;
        padding: 0 8px;
        transition: 0.3s color ease-in-out;

        &:hover {
            color: var(--primary);
        }
    }

    nav {
        display: flex;
        padding: 25px 0;


        .branding {
            display: flex;
            align-items: center;

            &__header {
                font-weight: 600;
                font-size: 26px;
                color: var(--black);
                text-decoration: none;
            }
        }

        .nav-links {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            flex: 1;
            cursor: pointer;
        }

        .profile {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--black);
            color: var(--white);
            cursor: pointer;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            z-index:99;

            @media (min-width: 500px) {
                margin-left: 40px;
            }
            &__menu {
                position: absolute;
                top: 35px;
                right: 0;
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin: 10px auto;
                gap: 10px;
                width: 300px;
                background-color: var(--black);

                .info {
                    display: flex;
                    align-items: center;
                    padding: 15px;
                    border-bottom: 0.5px solid var(--silver);
                    

                    .initials {
                        position: initial;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        background-color: var(--silver);
                        color: var(--black);
                        padding: 8px;
                        margin-right: 10px;
                    }
                    .right {
                        display: flex;
                        flex-direction: column;
                        gap: 2px;
                    }
                }
            }

            .options {
                display: flex;
                flex-direction: column;
                gap: 10px;
                margin-left: 20px;
                

                .option {
                    display: flex;
                    text-decoration: none;
                    gap: 10px;
                    color:var(--white);
                    opacity: 90%;
                    transition: .5s all ease-in-out;
                    &:hover {
                        color:var(--primary);
                    }
                    .icon {
                        width: 20px;
                        height: auto;
                    }
                    p {
                        font-size: 16px;
                    }
                }
                &:last-child {
                    margin-bottom: 10px;
                }
            }
        }

        .mobile-nav {
            display: flex;
            flex-direction: column;
            position: fixed;
            top: 0;
            height: 100%;
            left: 0;
            padding: 30px;
            width: 70%;
            background-color: var(--black);
            max-width: 250px;
            z-index: 99;

            .link {
                color: var(--white);
                font-weight: 400;
                padding: 20px 0;
                transition: 0.3 color ease-in;

                &:hover {
                    color: var(--primary);
                }
            }

        }

        .menu-icon {
            width: 30px;
            position: absolute;
            top: 65px;
            right: 50px;
            cursor: pointer;
        }

        .mobile-nav-enter-active {
            transition: all 1s ease-in;
        }

        .mobile-nav-leave-active {
            transition: all 1s ease-out;
        }

        .mobile-nav-enter {
            transform: translateX(-250px);
        }

        .mobile-nav-enter-to {
            transform: translateX(0);
        }

        .mobile-nav-leave-to {
            transform: translateX(-250px);
        }
    }

}</style>