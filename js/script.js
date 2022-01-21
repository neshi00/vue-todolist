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
      {
        text: "fare 4",
        done: false,
      },
    ],
    temporaryItem: "",
  },
  methods: {
    removeItem: function (index) {
      this.todo.splice(index, 1);
    },
    doneStatus: function (index) {
      this.todo[index].done = !this.todo[index].done;
    },
    addItem: function () {
      this.todo.push({
        text: this.temporaryItem,
        done: false,
      });
      this.temporaryItem = "";
    },
  },
});
