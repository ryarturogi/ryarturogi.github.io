<template>
  <div class="hero">
    <h2 class="hero__title">
      Provide You Best Programing Service
    </h2>
    <h3 class="hero__subtitle">
      Mobile & Web Development
    </h3>
    <div class="hero__image">
      <img src="~assets/img/PNG/clip-programming.png" alt="Hero image" />
    </div>
    <a href="mailto:r.arturogi@gmail.com" target="_blank" class="hero__button"
      >Hire Me!</a
    >
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '~assets/scss/_theme.scss';

.hero {
  margin-top: -17px;
  padding: 80px 2em 2em;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  width: auto;
  height: 104vh;
}

.hero__title {
  color: #fff;
  font-size: 1.5rem;
  font-weight: 500;
  max-width: 500px;
  width: 100%;
  line-height: 1.2;
  margin: 0 0 0.5em;
  text-align: left;
  @include md {
    text-align: center;
    font-size: 2.5rem;
  }
}

.hero__subtitle {
  color: #fff;
  font-size: 1.25rem;
  font-weight: 300;
  margin: 0;
  text-align: left;
  max-width: 600px;
  width: 100%;
  @include md {
    text-align: center;
  }
}

.hero__image {
  width: 100%;
  margin: 0 0 1.5em;
}

.hero__image img {
  max-width: 100%;
  width: 600px;
}

.hero__button {
  text-decoration: none;
  border: 0;
  background: #e64744;
  color: #fff;
  padding: 0.5em;
  border-radius: 40px;
  width: 150px;
  max-width: 100%;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
  transition: ease all 0.3s;
  &:hover {
    background: #fff;
    color: #434343;
  }
}
</style>
