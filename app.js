const app = new Vue({
    el: '#app',
    data: {
        title: 'GYM with Vue.js and LocalStorage',
        tasks: [],
        newTask: ''
    },
    methods: {
        intoLocalStorage() {
            // LocalStorage
            localStorage.setItem('gym-vue', JSON.stringify(this.tasks));
        },
        addTask() {
            this.tasks.push({
                name: this.newTask,
                status: false
            });
            this.newTask = '';
            // LocalStorage
            this.intoLocalStorage();
        },
        aditTask(index) {
            this.tasks[index].status = true;
           // LocalStorage
            this.intoLocalStorage();
        },
        deleteTask(index) {
            this.tasks.splice(index, 1);
            // LocalStorage
            this.intoLocalStorage();
        }
    },
    created() {
        let storage = JSON.parse(localStorage.getItem('gym-vue'));       
        if (storage === null) {           
            this.tasks = [];
        } else {
            this.tasks = storage;
        }     
    }
});