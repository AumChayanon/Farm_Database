<template>
  <div id="app">
    <header class="header">
      <nav class="header__nav">
        <ul >
          <li class="header__item">
            <a href="#" class="header__link">
              <transition name="slide-fade">
                <!-- Header Navigation Menu Icons -->
                <button
                  class="header--button"
                  v-if="show"
                  key="on"
                  @click="show = false"
                >
                  <svg viewBox="0 0 24 24" class="header--icon">
                    <title>Close</title>
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path
                      fill="currentColor"
                      d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
                    />
                  </svg>
                </button>
                <button
                  class="header--button"
                  v-else
                  key="off"
                  @click="show = true"
                >
                  <svg viewBox="0 0 24 24" class="header--icon">
                    <title>Navigation Menu</title>
                    <path
                      fill="currentColor"
                      d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"
                    />
                  </svg>
                </button>
              </transition>
            </a>
            <!-- Dropdown Menu -->
            <transition name="dropdown">
              <div
                class="dropdown__menu"
                v-bind:class="{ active: show }"
                v-if="show"
              >
                <ul>
                  <li>
                    <a
                      href="#"
                      class="dropdown__menu-link"
                      title="Account"
                      v-on:click="logout"
                    >
                      <div class="dropdown__menu-svg">
                        <svg viewBox="0 0 496 512">
                          <path
                            fill="currentColor"
                            d="m 361.5 392 v 40 c 0 44.1133 -35.8867 80 -80 80 h -201 c -44.1133 0 -80 -35.8867 -80 -80 v -352 c 0 -44.1133 35.8867 -80 80 -80 h 201 c 44.1133 0 80 35.8867 80 80 v 40 c 0 11.0469 -8.95313 20 -20 20 s -20 -8.95313 -20 -20 v -40 c 0 -22.0547 -17.9453 -40 -40 -40 h -201 c -22.0547 0 -40 17.9453 -40 40 v 352 c 0 22.0547 17.9453 40 40 40 h 201 c 22.0547 0 40 -17.9453 40 -40 v -40 c 0 -11.0469 8.95313 -20 20 -20 s 20 8.95313 20 20 Z m 136.355 -170.355 l -44.7852 -44.7852 c -7.8125 -7.8125 -20.4766 -7.8125 -28.2852 0 c -7.8125 7.80859 -7.8125 20.4727 0 28.2813 l 31.8555 31.8594 h -240.141 c -11.0469 0 -20 8.95313 -20 20 s 8.95313 20 20 20 h 240.141 l -31.8555 31.8594 c -7.8125 7.80859 -7.8125 20.4727 0 28.2813 c 3.90625 3.90625 9.02344 5.85938 14.1406 5.85938 c 5.12109 0 10.2383 -1.95313 14.1445 -5.85938 l 44.7852 -44.7852 c 19.4961 -19.4961 19.4961 -51.2148 0 -70.7109 Z m 0 0"
                          />
                        </svg>
                      </div>
                      <div class="dropdown__menu-text">Logout</div>
                    </a>
                  </li>
                </ul>
              </div>
            </transition>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "Menu_Logout",
  data: function() {
    return {
      show: false,
    };
  },
  methods: {
    logout() {
      firebase
            .auth()
            .signOut()
            .then(() => {
              this.$router.replace("/");
            });
    },
  },
};
</script>

<style>
:root {
  --font-primary: "Open Sans", sans-serif;
  --color-gray: #ffffff;
}
ol, ul, dl {
  margin-top: 10%;
  margin-bottom: 1rem;
  background-color: #ffffff;
}

*,
::after,
::before {
  box-sizing: border-box;
}

.header {
  padding: 0px;
  background-color:#FFFFFF ;
}
.header__nav {
  position: relative;
}
.header__item {
  padding-left: 100%;
  color: #e23d3d00;
}
.header--icon {
  width: 1.65rem;
  height: 1.65rem;
}
.header--button {
  top: 0;
  position: absolute;
  margin: 0;
  padding: 0;
  color: #508944;
  cursor: pointer;
  border: 1px solid transparent;
  background-color: transparent;
}
.header--button:focus {
  outline: 0;
}
.dropdown__menu {
  right: 0;
  position: absolute;
  z-index: 10;
  height: auto;
  min-width: 300px;
  margin-top: 1rem;
  overflow-y: auto;
  border-radius: 12px;
  background-color: white;
  border: 1px solid var(--color-gray);
  background-clip: padding-box;
}
.dropdown__menu-link {
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
  text-decoration: none;
  color: #ffffff;
  padding: 10px 10px 10px 50px;
  background-color:#508944 ;
}
.dropdown__menu-link:hover {
  color: #508944;
  background-color: #FFFFFF;
}
.dropdown__menu-item{
  background-color: #FFFFFF;
}
.dropdown__menu-svg {
  width: 1.5rem;
  height: 1.5rem;
}
.dropdown__menu-text {
  font-weight: 300;
  margin-left: 1rem;
  margin-right: 1rem;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  -webkit-transition: all 0.6s;
  transition: all 0.6s;
}

.slide-fade-enter,
.slide-fade-leave-active {
  opacity: 0;
}

.slide-fade-enter {
  -webkit-transform: translateX(31px);
  transform: translateX(31px);
}

.slide-fade-leave-active {
  -webkit-transform: translateX(-31px);
  transform: translateX(-31px);
}

.dropdown-enter-active,
.dropdown-leave-active {
  -webkit-transition: all 1s;
  transition: all 1s;
}

.dropdown-enter,
.dropdown-leave-to {
  opacity: 0;
  -webkit-transform: translateY(30px);
  transform: translateY(30px);
}

.main {
  display: -webkit-box;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
}
.main__subtitle {
  color: #FFFFFF;
  font-weight: 100;
}
</style>
