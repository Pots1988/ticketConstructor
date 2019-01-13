import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: `Без імені`,
    width: 190,
    height: 50,
    ticketFields: [],
    ticketFile: ``
  },
  getters: {
    getName(state) {
      return state.name
    },
    getWidth(state) {
      return state.width
    },
    getHeight(state) {
      return state.height
    },
    getTicketFields(state) {
      return state.ticketFields
    },
    getTicketFile(state) {
      return state.ticketFile
    }
  },
  mutations: {
    setName(state, payload) {
      state.name = payload;
    },
    setWidth(state, payload) {
      state.width = payload;
    },
    setHeight(state, payload) {
      state.height = payload;
    },
    setTicketFile(state, payload) {
      state.ticketFile = payload;
    },
    addTicketField(state, ticket) {
      state.ticketFields.push(ticket);
    },
    changeTicketField(state, payload) {
      const fieldIndex = state.ticketFields.findIndex(item => item === payload.field);

      if (fieldIndex != -1) state.ticketFields[fieldIndex][payload.type] = payload.value;
    },
    ticketFieldResize(state, payload) {
      const fieldIndex = state.ticketFields.findIndex(item => item === payload.field);

      if (fieldIndex != -1) {
        const ticket = state.ticketFields[fieldIndex];

        ticket.posX = payload.posX;
        ticket.posY = payload.posY;
        ticket.width = payload.width;
        ticket.height = payload.height;
      }
    },
    removeTicketField(state, payload) {
      const fieldIndex = state.ticketFields.findIndex(ticket => ticket.id === payload);

      if (fieldIndex != -1) state.ticketFields.splice(fieldIndex, 1);
    },
    resetTicket(state) {
      state.ticketFields = []
    }
  },
  actions: {
    saveTicket({commit}) {
      console.log(`Save ticket`)
    }
  }
})
