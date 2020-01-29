<template>
  <div class="blognav">
    <h4>More on this site</h4>
    <ul>
      <li>
        <a href="/blog/why-netlify">Fear</a>
      </li>
      <!-- <li >
            <a
              
              href="/blog/why-netlify"
              class="nuxt-link-exact-active nuxt-link-active"
            >Fear</a>
      </li>-->
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.blognav {
  position: -webkit-sticky;
  position: -moz-sticky;
  position: -ms-sticky;
  position: -o-sticky;
  position: sticky;
  top: 0;
  margin-top: -40px;
  float: right;
  z-index: 4000;
  width: 250px;
  padding: 50px 0;
  border-left: 1px solid #ccc;
}
.blognav h4 {
  color: #141618;
  padding: 0 0 20px 20px;
  font-size: 20px;
}
.blognav ul {
  list-style: square;
  line-height: 1;
}
.blognav ul li {
  padding-bottom: 20px;
}
.blognav a {
  color: #666;
  font-weight: 400;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
}
.blognav a:hover {
  color: #141618;
}
</style>
