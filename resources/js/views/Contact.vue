<template>
    <div class="overlay">
        <div class="flex-center">

            <form class="w-100" @submit.prevent="submit" autocomplete="off">
                <h1 class="text-center tlt">Contact Me</h1>
                <br>
                <h3 class="text-center">Email: <a href="mailto:niravnayanidev@gmail.com">niravnayanidev@gmail.com</a></h3>
                <br>
                <h3 class="text-center">Or</h3>
                <br>
            
                <div class="row text-center">
                    <div class="col-12 col-sm-6">
                        <span class="input input--kuro">
                            <input type="text" class="input__field input__field--kuro" name="name" id="name" v-model="fields.name" />
                            <label class="input__label input__label--kuro" for="name" v-bind:class="{'red-outline': (errors && errors.name)}">
                                <span class="input__label-content input__label-content--kuro">Name</span>
                            </label>
                        </span>
                    </div>
                    <div class="col-12 col-sm-6">
                        <span class="input input--kuro">
                            <input type="email" class="input__field input__field--kuro" name="email" id="email" v-model="fields.email" />
                            <label class="input__label input__label--kuro" for="email" v-bind:class="{'red-outline': (errors && errors.email)}">
                                <span class="input__label-content input__label-content--kuro">Email</span>
                            </label>
                        </span>
                    </div>
                    <div class="col-12">
                        <span class="input input--kuro">
                            <input type="text" class="input__field input__field--kuro" name="subject" id="subject" v-model="fields.subject" />
                            <label class="input__label input__label--kuro" for="subject" v-bind:class="{'red-outline': (errors && errors.subject)}">
                                <span class="input__label-content input__label-content--kuro">Subject</span>
                            </label>
                        </span>
                    </div>
                    <div class="col-12">
                        <span class="input input--kuro">
                            <textarea id="message" placeholder="Message" name="message" rows="5" v-bind:class="{'red-outline': (errors && errors.message)}" v-model="fields.message"></textarea>
                        </span>
                    </div>
                    <div class="col-12 text-center">
                        <button class="submit" type="submit" v-bind:class="{ onclic: this.startSubmit, validate: this.success }"></button>
                    </div>
                </div>

            </form>
        </div>
    </div>
</template>

<script>
import classie from 'classie'
export default {
    data() {
        return {
            fields: {},
            errors: {},
            success: false,
            loaded: true,
            startSubmit: false,
        }
    },
    methods: {
        submit() {
            if (this.loaded) {
                this.loaded = false;
                this.success = false;
                this.startSubmit = true;
                this.errors = {};
                axios.post('/submit', this.fields).then(response => {
                    this.fields = {};
                    this.loaded = true;
                    this.startSubmit = false;
                    this.success = true;
                    let toast = this.$toasted.show("I will get back to you soon.", { 
                        theme: "toasted-primary", 
                        position: "top-right",
                        type : 'success',
                        iconPack: 'fontawesome',
                        icon : 'fa-check-circle-o'
                    });
                    $('.input--kuro').removeClass('input--filled');
                    setTimeout(() => this.success = false, 2000);
                }).catch(error => {
                    this.loaded = true;
                    this.startSubmit = false;
                    if (error.response.status === 422) {
                        let toast = this.$toasted.show("All fields are required!", { 
                            theme: "toasted-primary", 
                            position: "top-right",
                            duration : 5000,
                            type : 'error',
                            iconPack: 'fontawesome',
                            icon : 'fa-exclamation-circle'
                        });
                        this.errors = error.response.data.errors || {};
                    }
                });
            }
        },
    },
    mounted() {
        (function() {
            // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
            if (!String.prototype.trim) {
                (function() {
                    // Make sure we trim BOM and NBSP
                    var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                    String.prototype.trim = function() {
                        return this.replace(rtrim, '');
                    };
                })();
            }
            [].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
                // in case the input is already filled..
                if( inputEl.value.trim() !== '' ) {
                    classie.add( inputEl.parentNode, 'input--filled' );
                }
                // events:
                inputEl.addEventListener( 'focus', onInputFocus );
                inputEl.addEventListener( 'blur', onInputBlur );
            } );
            function onInputFocus( ev ) {
                classie.add( ev.target.parentNode, 'input--filled' );
            }
            function onInputBlur( ev ) {
                if( ev.target.value.trim() === '' ) {
                    classie.remove( ev.target.parentNode, 'input--filled' );
                }
            }

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

        })();
    }
}
</script>
