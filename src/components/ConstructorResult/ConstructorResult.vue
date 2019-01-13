<template>
  <div class="constructor-result">
    <div class="d-flex mb-3">
      <button
        type="button"
        class="btn btn-info mr-2 btn-form"
        @click="downloadImage"
      >
        <form>
          <input
            type="file"
            ref="file"
            @change="chooseImage"
          >
        </form>
        Завантажити фон
      </button>
      <button
        type="button"
        class="btn btn-warning mr-2"
      >Друк без фону</button>
      <button
        type="button"
        class="btn btn-primary"
      >Друк з фоном</button>
    </div>
    <div class="constructor-canvas">
      <div class="constructor-canvas__inner">
        <div
          class="constructor-canvas__ticket"
          :style="ticketStyle"
        >
          <ConstructorCanvasItem
            v-for="field in ticketFields"
            :key="field.id"
            :field="field"
          ></ConstructorCanvasItem>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import ConstructorCanvasItem from "./ConstructorCanvasItem"

  export default {
    components: {
      ConstructorCanvasItem
    },
    computed: {
      ticketStyle() {
        const ticketWidth = this.$store.getters.getWidth,
              ticketHeight = this.$store.getters.getHeight;

        return {
          width: `${ticketWidth}mm`,
          height: `${ticketHeight}mm`,
          backgroundImage: `url(${this.ticketBackground})`
        }
      },
      ticketFields() {
        return this.$store.getters.getTicketFields
      },
      ticketBackground() {
        return this.$store.getters.getTicketFile
      }
    },
    methods: {
      downloadImage() {
        this.$refs.file.click()
      },
      chooseImage(e) {
        const files = e.target.files;

        if (files.length !== 0) {
          const reader = new FileReader();
          reader.onloadend = () => this.$store.commit(`setTicketFile`, reader.result);
          reader.readAsDataURL(files[0]);
        }
      }
    }
  }
</script>

<style lang="scss">
  .constructor-result {
    margin-left: 20px;
    padding: 20px 0 0;
    width: calc(210mm + 2px);
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
  }

  .constructor-canvas {
    border: 1px solid #ccc;
    width: 100%;
    flex-grow: 1;
    display: flex;
    padding: 10px;
  }

  .constructor-canvas__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    overflow: auto;
  }

  .constructor-canvas__ticket {
    background: #ccc no-repeat 50% 50%;
    background-size: contain;
    position: relative;
    flex-shrink: 0;
    overflow: hidden;
  }

  .btn-form {
    position: relative;

    form {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
      opacity: 0;
    }

    input {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0;
      width: 100%;
      height: 100%;
    }
  }
</style>
