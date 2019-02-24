<template>
  <div class="main">
    <Header />
    <div class="con">
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from '../../components/Header';
import Footer from '../../components/Footer';
export default {
  components: {
    Header,
    Footer
  }
};
</script>
<style lang="less" scoped>
.main {
  width: 100%;
}
@media screen and (max-width: 750px) {
  .main {
    width: 100%;
    padding-top: 1.2rem;
    .con {
      
    }
  }
}
</style>