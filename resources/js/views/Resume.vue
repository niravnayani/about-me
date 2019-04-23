<template>
    <div>
        <div class="overlay">
            <div class="awesome-container text-center">
                <br>
                <br class="d-none d-md-block d-lg-block">
                <a href="/nirav_nayani_resume.pdf" class="btn-primary">Download Resume</a>
                <br>
                <br>
                <div class="row">
                    <div class="col-md-6">
                        <h1 class="tlt">Education</h1>
                        <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                        <div>
                            <h3>Master's in Computer Science</h3>
                            <h4>San Diego State University</h4>
                            <h4>2015-2017</h4>
                        </div>
                        <br>
                        <div>
                            <h3>Bachelor's in Computer Science</h3>
                            <h4>Mumbai University, India</h4>
                            <h4>2011-2015</h4>
                        </div>   
                        <br>
                        <div class="d-none d-md-block d-lg-block">
                            <h1 class="tlt">Skills</h1>
                            <i class="fa fa-cogs" aria-hidden="true"></i>
                            <div class="technologies">
                                <span v-for="(skill, index) in skills" :key="'s' + index">
                                    <label>{{ skill }}</label>
                                </span>
                            </div>
                        </div>    
                    </div>
                    <div class="col-md-6">
                        <h1 class="tlt">Employment</h1>
                        <i class="fa fa-briefcase" aria-hidden="true"></i>
                        <div>
                            <h3>Officialize</h3>
                            <h4>Web Developer</h4>
                            <h4>September 2016 - Present</h4>
                        </div>
                        <br>
                        <div>
                            <h3>San Diego State University</h3>
                            <h4>Front End Web Developer</h4>
                            <h4>July – August 2016</h4>
                        </div>
                        <br>
                        <div>
                            <h3>LunchMate</h3>
                            <h4>Software Engineer Intern</h4>
                            <h4>June – August 2016</h4>
                        </div>
                    </div>
                </div>

                <br>
                
                <div class="d-md-none d-lg-none">
                    <h1 class="tlt">Skills</h1>
                    <i class="fa fa-cogs" aria-hidden="true"></i>
                    <div class="technologies">
                        <span v-for="(skill, index) in skills" :key="'s' + index">
                            <label>{{ skill }}</label>
                        </span>
                    </div>
                </div>
                
                <br>
            </div>
        </div>
    </div>
</template>

<script>
    import isotope from 'vueisotope'
    export default {
        data: function() {
            return {
                publicPath: process.env.BASE_URL,
                skills: ["Laravel", "PHP", "Bootstrap", "JavaScript", "jQuery", "React", "React Native", "Vue", "Git", "npm", "Webpack", "Gulp", "Wordpress", "REST", "Shopiy", "Liquid HTML", "HTML5", "CSS3", "SASS", "LESS"],
            }
        },
        mounted() {
            (function($){

                $('.tlt').textillate({
                    in: {
                        effect: 'fadeInUp',
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