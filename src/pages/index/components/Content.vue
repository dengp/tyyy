<template>
<div class="contentBox">
  <div class="content">
    <first :curTop="curTop" :curHeight="curHeight" />
    <second :curTop="curTop" :curHeight="curHeight" />
    <third :curTop="curTop" :curHeight="curHeight" />
    <fourth :curTop="curTop" :curHeight="curHeight" />
    <fifth :curTop="curTop" :curHeight="curHeight" />
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
    'curTop',
    'curHeight'
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
@media screen and (max-width: 1025px) {
  .contentBox {
    .content {
      width: 100%;
    }
  }
}
@media screen and (min-width: 1026px) and (max-width: 1439px) {
  .contentBox {
    .content {
      width: 1300;
    }
  }
}
</style>

