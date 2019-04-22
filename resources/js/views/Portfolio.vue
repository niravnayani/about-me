<template>
    <div>
        <div class="overlay">
            <div class="awesome-container text-center">
                <h1 class="tlt">SKILLS</h1>
                <div>
                    <span v-for="(skill, index) in skills" :key="'s' + index">
                        <label>{{ skill }}</label>
                    </span>
                </div>
                <br>
                <h2 class="tlt">My Work</h2>
                <div class="filter">
                    <span v-for="(technology, index) in technologies" :key="'t' + index">
                        <input type="checkbox" :value="technology" v-model="selectedTags"><label :class="{ 'active': (index === 0 && isActive) }">{{ technology }}</label>
                    </span>
                </div>
                <br>
                <isotope v-if="activeProjects.length" class="projects-container" :list="activeProjects" :options='option'>
                    <div class="window col-sm-6 text-center" v-for="(project, index) in activeProjects" :key="index">
                        <div class="screen" @mouseover="scrollImage(index)" v-bar>
                            <div ref="messages">
                                <a :href="project.link" target="_blank">
                                    <img class="img-fluid" :src="project.image">
                                </a>
                            </div>
                        </div>
                        <div class="screen-bottom"></div>
                        <div class="screen-stand"></div>
                        <div class="screen-stand-bottom"></div>
                        <a :href="project.link" target="_blank"><h2 v-text="project.name"></h2></a>
                        <div class="technologies">
                            <span v-for="(technology, index) in project.technologies.slice(1)" :key="index">{{ technology }}</span>
                        </div>
                    </div>
                </isotope>
                <h2 v-else>No such combination found. Please refine the filter.</h2>
            </div>
        </div>
    </div>
</template>

<script>
    import isotope from 'vueisotope'
    export default {
        components: {
            isotope,
        },
        data: function() {
            return {
                isActive: true,
                skills: ["Laravel", "PHP", "Bootstrap", "JavaScript", "jQuery", "React", "React Native", "Vue", "npm", "Webpack", "Gulp", "Wordpress", "REST", "Shopiy", "Liquid HTML", "HTML5", "CSS3", "SASS", "LESS"],
                technologies: ["All", "Laravel", "PHP", "Webpack", "React", "Vue", "Gulp", "Wordpress", "JavaScript", "jQuery", "REST", "Shopiy", "Liquid HTML", "HTML5", "SCSS"],
                selectedTags: [],
                selected: null,
                option: {
                    itemSelector: '.window',
                    layoutMode: 'fitRows',
                },
                projects: [
                    {
                        name: "NoCoast Beer",
                        link: "https://www.nocoastbeer.co/",
                        image: "/images/my-work/ncb.png",
                        technologies: ["All", "JavaScript", "jQuery", "REST", "PHP", "Shopiy", "Liquid HTML", "HTML5", "SCSS", "Responsive", "E-commerce"]
                    },
                    {
                        name: "Mahaska",
                        link: "http://www.mahaska.com/",
                        image: "/images/my-work/mbc.png",
                        technologies: ["All", "Laravel", "Gulp", "PHP", "Wordpress", "REST", "JavaScript", "jQuery", "Shopiy", "Liquid HTML", "HTML5", "SCSS", "Responsive", "E-commerce"]
                    },
                    {
                        name: "Officialize",
                        link: "https://officialize.com/",
                        image: "/images/my-work/off.png",
                        technologies: ["All", "Laravel", "PHP", "Webpack", "React", "JavaScript", "jQuery", "REST", "HTML5", "SCSS", "Responsive"]
                    },
                    {
                        name: "Joe Flacco",
                        link: "https://officialize.com/@joeflacco",
                        image: "/images/my-work/jf.png",
                        technologies: ["All", "Laravel", "PHP", "Webpack", "Vue", "JavaScript", "jQuery", "HTML5", "SCSS", "Responsive", "E-commerce"]
                    },
                    {
                        name: "MJCSE",
                        link: "http://mjcsedev.anthro.is/",
                        image: "/images/my-work/mjc.png",
                        technologies: ["All", "Wordpress", "PHP", "JavaScript", "jQuery", "HTML5", "CSS3", "Responsive"]
                    },
                    {
                        name: "Le'Veon Bell",
                        link: "https://officialize.com/@leveonbell",
                        image: "/images/my-work/lb.png",
                        technologies: ["All", "Laravel", "PHP", "JavaScript", "jQuery", "REST", "Shopiy", "Liquid HTML", "HTML5", "SCSS", "Responsive", "E-commerce"]
                    },
                    {
                        name: "Team Kitty",
                        link: "http://team-kitty.myshopify.com",
                        image: "/images/my-work/tk.png",
                        technologies: ["All", "JavaScript", "jQuery", "React", "Shopiy", "Liquid HTML", "HTML5", "SCSS", "Responsive", "E-commerce"]
                    },
                    {
                        name: "Calvin Ridley",
                        link: "https://officialize.com/@calvinridley",
                        image: "/images/my-work/cr.png",
                        technologies: ["All", "Laravel", "PHP", "Webpack", "Vue", "JavaScript", "jQuery", "HTML5", "SCSS", "Responsive", "E-commerce"]
                    },
                    {
                        name: "EnduraQ",
                        link: "https://www.enduraq.com/",
                        image: "/images/my-work/eq.png",
                        technologies: ["All", "JavaScript", "jQuery", "Shopiy", "Liquid HTML", "HTML5", "SCSS", "Responsive", "E-commerce"]
                    },
                    {
                        name: "Rob Gronkowski",
                        link: "https://gronknation.com/",
                        image: "/images/my-work/gn.png",
                        technologies: ["All", "Laravel", "PHP", "Webpack", "JavaScript", "jQuery", "Shopiy", "Liquid HTML", "HTML5", "SCSS", "Responsive", "E-commerce"]
                    },
                    {
                        name: "ISA Sports",
                        link: "http://isasports.com/",
                        image: "/images/my-work/is.png",
                        technologies: ["All", "Laravel", "PHP", "SPA", "JavaScript", "jQuery", "HTML5", "SCSS", "Responsive"]
                    },
                    {
                        name: "Justin Tucker",
                        link: "https://officialize.com/@justintucker",
                        image: "/images/my-work/jt.png",
                        technologies: ["All", "Laravel", "PHP", "Webpack", "Vue", "JavaScript", "jQuery", "HTML5", "SCSS", "Responsive", "E-commerce"]
                    },
                    {
                        name: "Kirk Cousins",
                        link: "https://kirkcousins.org/",
                        image: "/images/my-work/kc.png",
                        technologies: ["All", "Laravel", "PHP", "JavaScript", "jQuery", "Shopiy", "Liquid HTML", "HTML5", "SCSS", "Responsive", "E-commerce"]
                    },
                    {
                        name: "Tyreek Hill",
                        link: "https://officialize.com/@tyreekhill",
                        image: "/images/my-work/th.png",
                        technologies: ["All", "Laravel", "PHP", "Webpack", "Vue", "JavaScript", "jQuery", "HTML5", "SCSS", "Responsive", "E-commerce"]
                    },
                    {
                        name: "Remy Workouts",
                        link: "https://officialize.com/@remyworkouts",
                        image: "/images/my-work/rw.png",
                        technologies: ["All", "Laravel", "PHP", "Webpack", "Vue", "REST", "JavaScript", "jQuery", "HTML5", "SCSS", "Responsive", "E-commerce"]
                    }
                ]
            }
        },
        computed: {
            activeProjects: function() {
            if(this.selectedTags.length == 0) {
                return this.projects;
            }

            if(this.selectedTags.includes('All')) {
                this.selectedTags = [];
                this.isActive = true;
                return this.projects;
            }

            this.isActive = false;
            
            var activeProjects = [];
            var filters = this.selectedTags;
            
            this.projects.forEach(function(project) {
                
                function projectContainsFilter(filter) {
                    return project.technologies.indexOf(filter) != -1;
                }
                
                if(filters.every(projectContainsFilter)) {
                    activeProjects.push(project);
                }
            });

            console.log(activeProjects.length);
            
            return activeProjects;
            }
        },
        methods: {
            scrollImage(index) {
                // this.$refs.messages[index].animate({scrollTop: this.$refs.messages[index].scrollHeight}, 500);
                // this.$refs.messages[index].scrollTop = this.$refs.messages[index].scrollHeight;
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