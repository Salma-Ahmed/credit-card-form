import { createStore } from 'vuex'

export default createStore({
  state: {
    cardNumber: '####',
    cardHolder: 'Salma Elbouhy',
    currentYear:'',
    currentMonth:'',
    cvv:'',
    years: [],
    months: [],
    flipCard: false
  },
  mutations: {
    //syncronous
    setCardNumber(state, payload) {
      state.cardNumber = payload
    },
    setCardHolder(state, payload) {
      state.cardHolder = payload
    },
    setYears(state, payload) {
      state.years = payload;
    },
    setMonths(state, payload) {
      state.months = payload;
    },
    setCvv(state, payload) {
      state.cvv = payload;
    },
    setFlipCard(state, payload) {
      state.flipCard = payload;
    },
    setCurrentYear(state, payload) {
      state.currentYear = payload;
    },
    setCurrentMonth(state, payload) {
      state.currentMonth = payload;
    }
  },
  actions: {
    //asyncronous
    setCardNumber(state, payload) {
      state.commit("setCardNumber", payload);
    },

    setCardHolder(state, payload) {
      state.commit("setCardHolder", payload);
    },

    setCvv(state, payload) {
      state.commit("setCvv", payload);
    },

    setFlipCard(state, payload) {
      state.commit("setFlipCard", payload);
    },

    setCurrentYear(state, payload) {
      state.commit("setCurrentYear", payload);
    },
    setCurrentMonth(state, payload) {
      state.commit("setCurrentMonth", payload);
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
    },
    getFlipCard: (state) => {
      return state.flipCard
    },
    getCurrentYear: (state) => {
      return state.currentYear
    },
    getCurrentMonth: (state) => {
      return state.currentMonth
    },

  }
})
