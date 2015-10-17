(function(){
    var users = {
        url: 'https://api.github.com/',
        cacheElements: function() {
            this.$output = $('#output');
            this.$button1 = $('.step1');
            this.$step1 = $('#step1');
            this.$step2 = $('#step2');
            this.$button2 = $('.step2');
            this.$step3 = $('.step3');
            this.$singleUser = $('#single-user');
            this.$mulptipleUsers = $('#mulptiple-users');
        }
    }
})();