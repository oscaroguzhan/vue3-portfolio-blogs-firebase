<template>
    <header>
        <nav class="container">
            <div class="branding">
                <router-link class="branding__header" :to="{ name: 'home' }">Portfolio Blogs</router-link>
            </div>
            <div class="nav-links" v-show="!mobile">
                <ul>
                    <router-link class="link" to="#">Home</router-link>
                    <router-link class="link" to="#">Blogs</router-link>
                    <router-link class="link" to="#">Create Post</router-link>
                    <router-link class="link" to="#">Login/Register</router-link>
                </ul>
            </div>
            <menuIcon class="menu-icon" v-show="mobile" @click="toggleSideMobileNav" />
            <!-- transition built-in vue components that can help work with transitions and animations in response to changing state -->
            <transition name="mobile-nav" v-show="sideMobileNav">
                <ul class="mobile-nav">
                    <router-link class="link" to="#">Home</router-link>
                    <router-link class="link" to="#">Blogs</router-link>
                    <router-link class="link" to="#">Create Post</router-link>
                    <router-link class="link" to="#">Login/Register</router-link>
                </ul>
            </transition>
        </nav>
    </header>
</template>

<script>
import menuIcon from '../assets/images/bars-regular.svg'
export default {
    name: 'navigation',
    components: {
        menuIcon
    },
    data() {
        return {
            mobile: null,
            sideMobileNav: null,
            windowWidth: null,
        }
    },
    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen(6);
    },
    methods: {
        checkScreen() {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth <= 768) {
                this.mobile = true;
                return;
            }
            this.mobile = false;
            this.sideMobileNav = false;
            return;
        },
        toggleSideMobileNav() {
            this.sideMobileNav = !this.sideMobileNav;
            return;
        }
    },
};

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