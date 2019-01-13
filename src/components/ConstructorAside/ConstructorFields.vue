<template>
  <div class="constructor-fields">
    <p>Поля для відображення:</p>
    <div class="constructor-fields__wrap mb-3">
      <ConstructorFieldsList
        class="mb-3"
        v-if="ticketFieldsLength"
      ></ConstructorFieldsList>
      <button
        type="button"
        class="btn btn-primary"
        @click="addField"
      >Додати поле</button>
    </div>
    <div class="d-flex justify-content-between">
      <button
        type="button"
        class="btn btn-success"
        @click="saveTicket"
      >Зберегти</button>
      <button
        type="button"
        class="btn btn-danger"
        @click="resetTicket"
      >Відмінити</button>
    </div>
  </div>
</template>

<script>
import ConstructorFieldsList from './ConstructorFieldsList'

export default {
  components: {
    ConstructorFieldsList
  },
  data() {
    return {
      id: 0
    }
  },
  computed: {
    ticketFieldsLength() {
      return this.$store.getters.getTicketFields.length
    }
  },
  methods: {
    saveTicket() {
      this.$store.dispatch(`saveTicket`);
    },
    resetTicket() {
      this.$store.commit(`resetTicket`);
    },
    addField() {
      const ticket = {
        text: `Текст`,
        type: `name`,
        id: this.id,
        posX: 20,
        posY: 20,
        angle: 0,
        fontFamily: `Arial`,
        fontSize: `16`,
        width: 100,
        height: 30
      };

      this.$store.commit(`addTicketField`, ticket);
      this.id++;
    }
  }
}
</script>

<style lang="scss">
  .constructor-fields__wrap {
    border: 1px solid #ccc;
    padding: 10px;
    height: 400px;
    overflow-y: auto;
  }
</style>
