const avg = (x, y) => { return x/y }

const adder = new Vue({
  el: '#adder',
  data: {
    firstNumber: 16,
    secondNumber: 4
  },
  computed: {
    result: function () {
      const i = parseInt(this.firstNumber)
      const j = parseInt(this.secondNumber)
      return `Average of the tasks per developers ${avg(i, j)}.`
    }
  }
})