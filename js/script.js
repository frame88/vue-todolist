const app = new Vue(
    {
        el: '#app',
        data: {
            newTodo: '',
            todos: [
                {
                    text: 'Fare la spesa',
                    done: true,
                },
                {
                    text: 'Andare a casa',
                    done: false,
                },
                {
                    text: 'Andare al bagno',
                    done: false,
                },
            ]
        },
        methods: {
            addTodo: function () {
                if (this.newTodo.lenght != 0) {
                    let obj = {
                        text: this.newTodo,
                        done: false,
                    }
                    this.todos.push(obj);
                }
            },
            removeTodo: function (index) {
                this.todos.splice(index, 1);
            }
        }
    }
);