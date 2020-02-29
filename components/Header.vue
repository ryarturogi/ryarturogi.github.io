<template>
  <div class="wrap">
    <nuxt-link to="/" class="logo">
      <h1>Ricardo Irizarry</h1>
      <span>Front-Developer from Dominican Republic, Caribbean</span>
    </nuxt-link>
    <nav class="nav">
      <li class="nav__link">
        <nuxt-link to="/">
          HOME
        </nuxt-link>
      </li>
      <li class="nav__link">
        <nuxt-link to="/portfolio">
          PORTFOLIO
        </nuxt-link>
      </li>
      <li class="nav__link">
        <nuxt-link to="/contact">
          CONTACT
        </nuxt-link>
      </li>
    </nav>

    <div class="burger">
      <i @click="openMobileMenu" class="fas fa-bars"></i>
    </div>
    <transition name="fade" tag="div">
      <div v-if="isMobileMenuOpen" class="menu__mobile">
        <nav class="mobile__nav">
          <li class="nav__link">
            <nuxt-link to="/">
              HOME
            </nuxt-link>
          </li>
          <li class="nav__link">
            <nuxt-link to="/portfolio">
              PORTFOLIO
            </nuxt-link>
          </li>
          <li class="nav__link">
            <nuxt-link to="/contact">
              CONTACT
            </nuxt-link>
          </li>
        </nav>
        <i
          @click="isMobileMenuOpen = false"
          class="close-modal__button fas fa-times"
        ></i>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMobileMenuOpen: false
    }
  },
  watch: {
    $route(to, from) {
      this.isMobileMenuOpen = false
    }
  },
  methods: {
    openMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/_theme.scss';

.wrap {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.nav {
  display: none;
  @include md {
    display: flex;
  }
}

.nav__link {
  list-style: none;
  margin: 0 40px 0 0;
}

.nav__link a {
  text-decoration: none;
  color: #fff;
  font-size: 0.875rem;
  font-weight: 300;
}

.nuxt-link-exact-active {
  color: $color-accent !important;
  font-weight: 500 !important;
}

.logo {
  color: #fff !important;
  text-decoration: none;
  h1 {
    font-weight: 500;
    font-size: 0.95rem;
    text-transform: uppercase;
    margin: 0 0 0.2em;
  }
  span {
    font-size: 0.875rem;
    font-weight: 100;
    line-height: 1.5;
    display: block;
    max-width: 250px;
  }
}
.burger {
  position: absolute;
  right: 1em;
  top: 1em;
  width: 20px;
  height: 20px;
  font-size: 20px;
  color: #fff;
  @include md {
    display: none;
  }
}
.menu__mobile {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: radial-gradient(
    circle,
    rgb(46, 126, 233) 0%,
    rgb(31, 36, 98) 100%
  );
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  .nav__link {
    a {
      font-size: 2rem;
      line-height: 2.5;
    }
  }
}

.close-modal__button {
  position: absolute;
  right: 2em;
  top: 1.5em;
  font-size: 1rem;
  color: #fff;
}
</style>
