new Vue({
    el: '#vue-app',
    data: {
        title: 'Hello world',
        job: 'ninja',
        name: 'iara',
        website: 'http//www.thenetninja.co.uk'
    },
    methods: {
        greet: function(time){
            return 'Good ' + time +' '+ this.name;
        }
    }
})