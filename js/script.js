const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'I miei task giornalieri',
      toDoList: [
        { text: 'Fare la spesa', done: false },
        { text: 'Pulire la casa', done: true },
        { text: 'Finire il progetto Vue.js', done: false },
        { text: 'Allenarsi per 30 minuti', done: true },
        { text: 'Leggere un capitolo del libro', done: false }
      ]
    }
  }
}).mount('#app')