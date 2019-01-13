<template>
  <VueDragResize
    class="constructor-canvas-item"
    :style="ticketStyle"
    :isActive="true"
    :x="posX"
    :y="posY"
    @resizing="resize"
    @dragging="resize"
    :parentLimitation="true"
    :minw="10"
    :minh="minh"
    :w="width"
    :h="height"
    ref="item"
  >{{ field.text }}</VueDragResize>
</template>

<script>
  import VueDragResize from "vue-drag-resize"

  export default {
    props: {
      field: {
        required: true,
        type: Object
      }
    },
    components: {
      VueDragResize
    },
    mounted() {
      this.minh = Math.round(parseFloat(getComputedStyle(this.$refs.item.$el).lineHeight));
    },
    data() {
      return {
        minh: 10
      }
    },
    computed: {
      posX() {
        return this.field.posX
      },
      posY() {
        return this.field.posY
      },
      width() {
        return this.field.width
      },
      height() {
        return this.field.height
      },
      ticketStyle() {
        return {
          fontFamily: this.field.fontFamily,
          fontSize: `${this.field.fontSize}px`,
          transform: `rotate(${this.field.angle}deg)`
        }
      }
    },
    methods: {
      resize(newRect) {
        this.$store.commit(`ticketFieldResize`, {
          field: this.field,
          posX: newRect.left,
          posY: newRect.top,
          width: newRect.width,
          height: newRect.height
        })
      }
    }
  }
</script>

<style lang="scss">
  .constructor-canvas-item {
    position: absolute;
    outline: 1px solid #333;
    white-space: pre;
  }
</style>
