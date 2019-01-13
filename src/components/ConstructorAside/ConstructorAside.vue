<template>
  <div class="constructor-aside">
    <ConstructorHeader></ConstructorHeader>
    <ConstructorFields></ConstructorFields>
  </div>
</template>

<script>
import ConstructorHeader from './ConstructorHeader'
import ConstructorFields from './ConstructorFields'

export default {
  components: {
    ConstructorHeader,
    ConstructorFields
  }
}

</script>

<style lang="scss">
  .constructor-aside {
    width: 20%;
    min-width: 300px;
  }
</style>
