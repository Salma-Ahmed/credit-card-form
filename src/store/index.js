import { createStore } from 'vuex'

export default createStore({
  state: {
    cardNumber: '',
    cardHolder: '',
    expirationDate: {
      month:'',
      year:''
    },
    cvv:'',
    years: [],
    months: []
  },
  mutations: {
    //syncronous
    setCardNumber(state, payload) {
      state.cardNumber = payload
    },
    setCardHolder(state, payload) {
      state.cardNumber = payload
    },
    setCardNumber(state, payload) {
      state.cardNumber = payload
    },
    setCardNumber(state, payload) {
      state.cardNumber = payload
    },
    setYears(state, payload) {
      state.years = payload;
    },
    setMonths(state, payload) {
      state.months = payload;
    }
  },
  actions: {
    //asyncronous
    setCardNumber(state, payload) {
      state.commit("setCardNumber", payload);
    },

    //create an array of 20 years (for instance) including current year
    setYears(state) {
      let currentYear = new Date().getFullYear();
      let years = [];
      for(let year = currentYear; year <= currentYear + 19 ; year++){
            years.push(year)
      }
      this.commit('setYears', [...years]);
    },

    //set the months array
    setMonths(state) {
      let months = ["01","02","03","04","05","06","07","08","09","10","11","12"]
      this.commit("setMonths", months)
    }
  },
  modules: {
  },
  getters: {
    getCardNumber: (state) => {
      return state.cardNumber
    },
    getCardHolder: (state) => {
      return state.cardHolder
    },
    getExpirationDate: (state) => {
      return state.expirationDate
    },
    getCvv: (state) => {
      return state.cvv
    },
    getYears: (state) => {
      return state.years
    },
    getMonths: (state) => {
      return state.months
    }

  }
})
