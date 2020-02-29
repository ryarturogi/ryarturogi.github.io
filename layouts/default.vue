<template>
  <div>
    <div class="container">
      <Header class="header" />
      <nuxt class="main" />
    </div>
    <Footer class="footer" />
  </div>
</template>
<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      title: `Ry's Front-Dev ==> Portfolio`
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>
<style lang="scss">
@import '~/assets/scss/_theme.scss';

html {
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  line-height: 1.4;
  word-spacing: 1px;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: radial-gradient(
    circle,
    rgb(46, 126, 233) 0%,
    rgb(31, 36, 98) 100%
  );
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  display: grid;
  width: 100%;

  grid-template-areas:
    'header'
    'content'
    'footer';
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  @include md {
    margin: 0 auto;
    max-width: 1200px;
    grid-template-areas:
      'header header header'
      'content content content'
      'footer footer footer';
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto 1fr auto;
  }
}

.header {
  grid-area: header;
  display: flex;
  justify-content: space-between;
  padding: 1.35em 2em 0.5em;
  // position: absolute;
  // top: 0;
  // left: 0;
  width: 100%;
}

.main {
  grid-area: content;
  height: 100%;
}

.footer {
  grid-area: footer;
}

// Transition Effect

.fade-enter-active {
  transition: all 0.3s ease;
}
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
