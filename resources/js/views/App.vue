<template>
    <div class="main-container">
        <nav class="navbar fixed-top navbar-expand-md">
            <router-link :to="{ name: 'home'}" class="navbar-brand"><img src="/images/logo.svg"></router-link>
            <button 
                class="hamburger navbar-toggler hamburger--stand" 
                v-bind:class="{ 'is-active': isActive }" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarMobile"
                @click="toggleMenu">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarMobile">
                <!-- <router-link :to="{ name: 'home'}"><i class="fa fa-home" aria-hidden="true"></i> Home</router-link> -->
                <router-link :to="{ name: 'about'}"><i class="fa fa-user" aria-hidden="true"></i> About</router-link>
                <router-link :to="{ name: 'resume'}"><i class="fa fa-file-code-o" aria-hidden="true"></i> Resume</router-link>
                <router-link :to="{ name: 'portfolio'}"><i class="fa fa-code" aria-hidden="true"></i> Portfolio</router-link>
                <router-link :to="{ name: 'contact'}"><i class="fa fa-envelope" aria-hidden="true"></i> Contact</router-link>
            </div>
        </nav>
        <router-view class="view-container" v-bind:class="route"></router-view>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                isActive: false,
                route: this.$route.name
            }
        },
        watch: {
            '$route' () {
                this.isActive = false;
                this.route = this.$route.name;
                $('#navbarMobile').collapse('hide');
            }
        },
        methods: {
            toggleMenu(){
                this.isActive = this.isActive ? false : true;
            }
        }
    }
</script>