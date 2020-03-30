<template>
    <div>
        <div class="flex-center overlay">
            <div class="awesome-container text-center">
                <div class="title text-left">
                    <h3><i class="fa fa-briefcase" aria-hidden="true"></i> I am a <span class="tlt">Web Developer</span> at Zehner, based in Los Angeles, CA.</h3>
                    <h3><i class="fa fa-user" aria-hidden="true"></i> I have a passion for creating <span class="tlt">intuitive and dynamic</span> user experiences.</h3>
                    <h3><i class="fa fa-calendar" aria-hidden="true"></i> More than <span class="tlt">4 years of experience</span> building killer responsive front-ends.</h3>
                    <h3><i class="fa fa-graduation-cap" aria-hidden="true"></i> Bachelor's and <span class="tlt">Master's</span> degree in <span class="tlt">Computer Science</span>.</h3>
                </div>
                <div class="dropdown-divider"></div>
                <br>
                <h3>Things that make my job a little easy:</h3>
                <br>
                <div class="row">
                    <div class="col-sm col-6">
                        <div><i class="fa fa-code" aria-hidden="true"></i></div>
                        <br>
                        <h3>Problem<br>Solving Skills</h3>
                    </div>
                    <div class="col-sm col-6">
                        <div><i class="fa fa-bullhorn" aria-hidden="true"></i></div>
                        <br>
                        <h3>Clear<br>Communication</h3>
                    </div>
                    <div class="col-sm col-6">
                        <div><i class="fa fa-building-o" aria-hidden="true"></i></div>
                        <br>
                        <h3>Good<br>Organisation</h3>
                    </div>
                    <div class="col-sm col-6">
                        <div><i class="fa fa-coffee" aria-hidden="true"></i></div>
                        <br>
                        <h3>Lots of<br>Coffee</h3>
                    </div>
                </div>
                <br>
                <h2 class="rotate">Outside of work, I 
                    <span id="rotate"><span class="">am a gamer.</span><span class="">play piano.</span><span class="">worship soccer.</span><span class="">love cooking.</span></span>
                </h2>
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
                    effect: 'fadeInUp',
                    shuffle: true
                }
            });
            $.fn.extend({
                rotaterator: function(options) {
        
                    var defaults = {
                        fadeSpeed: 500,
                        pauseSpeed: 100,
                        child:null
                    };
                    
                    var options = $.extend(defaults, options);
                
                    return this.each(function() {
                        var o =options;
                        var obj = $(this);                
                        var items = $(obj.children(), obj);
                        items.each(function() {$(this).hide();})
                        if(!o.child){var next = $(obj).children(':first');
                        }else{var next = o.child;
                        }
                        $(next).fadeIn(o.fadeSpeed, function() {
                                $(next).delay(o.pauseSpeed).fadeOut(o.fadeSpeed, function() {
                                    var next = $(this).next();
                                    if (next.length == 0){
                                            next = $(obj).children(':first');
                                    }
                                    $(obj).rotaterator({child : next, fadeSpeed : o.fadeSpeed, pauseSpeed : o.pauseSpeed});
                                })
                            });
                    });
                }
            });

            $('#rotate').rotaterator({fadeSpeed:1000, pauseSpeed:100});

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