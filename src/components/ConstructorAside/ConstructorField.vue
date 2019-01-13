<template>
  <li class="constructor-field">
    <div class="form-row">
      <div class="ml-auto" style="padding-right: 5px; line-height: 0">
        <CrossButton
          class="w-auto"
          @click="removeField"
          title="Видалити квиток"
        ></CrossButton>
      </div>
    </div>
    <div class="form-row">
      <label class="form-group mb-0 col-5">
        <span>Поля</span>
        <select
          class="form-control form-control-sm"
          v-model="type"
        >
          <option value="name">Назва подии</option>
          <option value="date">Дата початку</option>
          <option value="time">Час початку</option>
          <option value="hall">Зала</option>
          <option value="sector">Сектор</option>
          <option value="row">Ряд</option>
          <option value="seat">Мисце</option>
          <option value="cost">Вартисть</option>
          <option value="barcode">Штрих-код</option>
          <option value="titcket-id">№ квитка</option>
        </select>
      </label>
      <label class="form-group mb-0 col-3">
        <span>Розмір</span>
        <input
          type="number"
          class="form-control form-control-sm"
          v-model="fontSize"
        >
      </label>
      <label class="form-group mb-0 col-4">
        <span>Тип шрифта</span>
        <select
          class="form-control form-control-sm"
          v-model="fontFamily"
        >
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
        </select>
      </label>
    </div>
    <div class="form-row align-items-start">
      <label class="form-group col-4 mb-0">
        <span>X</span>
        <input
          type="number"
          class="form-control form-control-sm"
          v-model.number="posX"
        >
      </label>
      <label class="form-group col-4 mb-0">
        <span>Y</span>
        <input
          type="number"
          class="form-control form-control-sm"
          v-model.number="posY"
        >
      </label>
      <label class="form-group col-4 mb-0">
        <span>Кут</span>
        <input
          type="number"
          class="form-control form-control-sm"
          v-model.number="angle"
        >
      </label>

      <label class="form-group col-12 mb-0">
        <span>Текст</span>
        <textarea
          type="text"
          class="form-control form-control-sm"
          v-model="text"
        ></textarea>
      </label>
    </div>
  </li>
</template>

<script>
import CrossButton from "@/components/common/CrossButton"

export default {
  components: {
    CrossButton
  },
  props: {
    field: {
      type: Object,
      required: true
    }
  },
  computed: {
    text: {
      get() {
        return this.field.text
      },
      set(value) {
        this.changeField(`text`, value);
      }
    },
    posX: {
      get() {
        return this.field.posX
      },
      set(value) {
        this.changeField(`posX`, value);
      }
    },
    posY: {
      get() {
        return this.field.posY
      },
      set(value) {
        this.changeField(`posY`, value);
      }
    },
    angle: {
      get() {
        return this.field.angle
      },
      set(value) {
        this.changeField(`angle`, value);
      }
    },
    type: {
      get() {
        return this.field.type
      },
      set(value) {
        this.changeField(`type`, value);
      }
    },
    fontFamily: {
      get() {
        return this.field.fontFamily
      },
      set(value) {
        this.changeField(`fontFamily`, value);
      }
    },
    fontSize: {
      get() {
        return this.field.fontSize
      },
      set(value) {
        this.changeField(`fontSize`, value);
      }
    }
  },
  methods: {
    removeField() {
      this.$store.commit(`removeTicketField`, this.field.id)
    },
    changeField(type, value) {
      this.$store.commit(`changeTicketField`, {
        field: this.field,
        type,
        value
      })
    }
  }
}
</script>

<style lang="scss">
  .constructor-field {
    &:not(:last-child) {
      padding: 0 0 10px;
      border-bottom: 1px solid #ccc;
      margin: 0 0 10px;
    }

    span {
      font-size: 0.8em;
    }

    textarea {
      resize: y;
    }
  }
</style>
