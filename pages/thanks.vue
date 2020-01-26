<template>
  <div>
    <p class="thank-you">Thanks, it's good to hear from you.</p>
    <p>
      If you have time, please take a look at the
      <nuxt-link to="/writings">articles</nuxt-link>&nbsp;or
      <nuxt-link to="/projects">projects</nuxt-link>.
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
p {
  color: #b5b3b3;
  font-size: 18px;
}
a {
  color: white;
}
.thank-you {
}
</style>