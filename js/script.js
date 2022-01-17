new Vue({
  el: "#app",
  data: {
    todo: [
      {
        text: "fare 1",
        done: true,
      },
      {
        text: "fare 2",
        done: true,
      },
      {
        text: "fare 3",
        done: false,
      },
    ],
  },
  methods: {
    removeItem: function (index) {
      this.todo.splice(index, 1);
    },
    doneStatus: function () {
      if (this.todo[index].done) {
        this.todo[index].done = false;
      } else {
        this.todo[index].done = true;
      }
    },
  },
});
