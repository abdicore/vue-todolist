const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'I miei task giornalieri',
      toDoList: [
        'fare yoga',
        'fare meditazione',
        'Igene personale',
        'Controllare la mail',
        'Iniaizare a lavorare',
        'ciao bibbuz'
      ]
    }
  }
}).mount('#app')