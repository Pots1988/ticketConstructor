<template>
  <div id="app">
    <div class="constructor wrap">
      <ConstructorAside></ConstructorAside>
      <ConstructorResult></ConstructorResult>
    </div>
  </div>
</template>

<script>
import ConstructorAside from '@/components/ConstructorAside/ConstructorAside'
import ConstructorResult from '@/components/ConstructorResult/ConstructorResult'

export default {
  components: {
    ConstructorAside,
    ConstructorResult
  }
}

</script>

<style lang="scss">
  .wrap {
    max-width: calc(342px + 210mm);
    min-width: calc(342px + 210mm);
    margin: 0 auto;
    padding: 20px 10px;
  }

  .constructor {
    display: flex;
  }
</style>
