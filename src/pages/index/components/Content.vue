<template>
<div class="contentBox">
  <div class="content">
    <first :curTop="curTop" />
    <second />
    <third :curTop="curTop" />
    <fourth />
    <fifth :curTop="curTop" />
  </div>
</div>
</template>
<script>
import first from './first';
import second from './second';
import third from './third';
import fourth from './fourth';
import fifth from './fifth';
export default {
  props: [
    'curTop'
  ],
  components: {
    first,
    second,
    third,
    fourth,
    fifth
  }
};
</script>
<style lang="less" scoped>
.contentBox {
  background: #f0f0f0;
  position: relative;
  z-index: 1;
  .content {
    width: 1440px;
    margin: 0 auto;
    position: relative;
  }
}
@media screen and (max-width: 750px) {
  .contentBox {
    .content {
      width: 100%;
    }
  }
}
</style>

