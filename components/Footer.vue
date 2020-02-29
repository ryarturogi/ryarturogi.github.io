<template>
  <div>
    <div class="cta">
      <button class="cta__button">HIRE ME!</button>
    </div>
    <div class="contact__bar">
      <div class="contact__info">
        <span class="contact__phone">
          +1 829 380 5363
        </span>
        <span class="contact__email">
          r.arturogi@gmail.com
        </span>
      </div>
      <div class="contact__social">
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-instagram"></i>
        <i class="fas fa-envelope-open"></i>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~assets/scss/_theme.scss';
.cta {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 2em 1em 0;
}

.cta__button {
  text-decoration: none;
  border: 0;
  background: #e64744;
  color: #fff;
  padding: 0.5em;
  border-radius: 40px;
  width: 300px;
  max-width: 100%;
  font-size: 1.8rem;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
  transition: ease all 0.3s;
  &:hover {
    background: #fff;
    color: #434343;
  }
  margin: 1em auto 2em;
}

.contact__bar {
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 1rem;
  font-weight: 400;
  background: #eeeeee;
  color: #2d77df;
  padding: 1em;
  @include md {
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
