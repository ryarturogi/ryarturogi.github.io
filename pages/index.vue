<template>
  <div class="home-wrap">
    <Hero />
    <Skillboard />
    <Works />
  </div>
</template>

<script>
import Hero from '@/components/home/Hero'
import Skillboard from '@/components/home/Skillboard'
import Works from '@/components/home/Works'
export default {
  components: {
    Hero,
    Skillboard,
    Works
  }
}
</script>

<style lang="scss" scoped></style>
