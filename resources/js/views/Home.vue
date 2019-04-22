<template>
    <div>
        <div class="flex-center overlay">
            <div class="title">
                <h1 class="tlt">Greetings,</h1>
                <h1 class="tlt">I am Nirav Nayani,</h1>
                <h1 class="tlt">a web developer.</h1>
            </div>
        </div>
        <background></background>
    </div>
</template>

<script>
    import Background from '../components/Background.vue'
    export default {
        components: {
            Background
        },
        mounted() {

            (function($){

                $('.tlt').textillate({
                    in: { 
                        effect: 'bounceIn',
                        shuffle: true
                    }
                });

                window.setInterval(function(){
                    var classes = ["teal", "cyan", "cyan-light", "cyan-dark", "aquamarine"];
                    $('*[class^="char"]').each(function(){
                        var currentClasses = $(this).attr('class').split(" ");
                        $(this).removeClass(classes.filter(value => currentClasses.includes(value)).toString());
                        $(this).addClass(classes[~~(Math.random()*classes.length)]);
                    });
                }, 500);
            })(jQuery);

        }
    }
</script>