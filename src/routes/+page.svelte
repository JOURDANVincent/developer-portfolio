<script lang="ts">

    import Linkedin from "$lib/svg/linkedin.svg.svelte";
    import Github from "$lib/svg/github.svg.svelte";
    import LinkedinPng from "$lib/png/linkedin.png";
    import GithubPng from "$lib/png/github.png";
    import me from "$lib/webp/me.webp";
    import me2 from "$lib/png/me.png";
 
</script>

<section>
    
    <div class="main-section">
        
        <div class="hero-box">
            <p class="hello">Hey ! Moi c'est</p>
            <h1><strong class="first-name">Vincent JOURDAN</strong></h1>
            <h2><strong>Développeur</strong> d'applications web & mobiles</h2>
            <!-- <h4><strong>Java</strong> / <strong>Angular</strong></h4> -->
            <!-- <p>Je travail actuellement sur une application web avec <strong>JavaScript</strong> & <strong>Java</strong> et une application mobile <strong>Ionic</strong> & <strong>Angular</strong></p> -->
        </div>
    
        <div class="link-box">
            <p>Suivez-moi ou découvrez mes projets</p>
            <span><Linkedin size={34} color={'#fff'} /></span><span><Github size={34} color={'#fff'} /></span>
        </div>
        
        <div class="button-box">
            <a class="contact" aria-label="Contactez-moi" href='https://www.linkedin.com/in/VincentJourdan' target="_blank" rel="noreferrer">Contact</a>
            <a aria-label="en savoir +" href='about'>En savoir +</a>
        </div>
    
    </div>

    <div class="second-section">

        <div class="me">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img src={me2} alt="photo de moi" />
        </div>
    
        <div class="overview-box">
            <p><span class="title">A PROPOS </span> Je travaille actuellement chez CGI Amiens sur une application utilisant comme techno <strong>JavaScript</strong> & <strong>Java</strong> pour la partie web et <strong>Ionic</strong> & <strong>Angular</strong> pour le mobile</p>
            <p><span class="title">ETUDES</span> Niveau Bac +2 | <strong>Développeur Web & Web Mobile</strong></p>
            <p><span class="title">FORMATION</span> <strong>React Native</strong></p>
        </div>

    </div>

</section>

<style>

    section {
        position: relative;
        width: 100%;
    }
    
    .hero-box {
        margin-bottom: 32px;
    }

    .hello {
        color: #fff;
        font-size: 1.8rem;
    }

    h1 {
        color: #fff;
        /* font-weight: bold; */
        /* font-family: rajdhani-bold; */
        max-width: 2rem;
        font-size: 6rem;
        line-height: 5.6rem;
        margin: 0; padding: 0;
    }

    h2 {
        font-size: 3rem;
        color: #E14242;
        max-width: 600px;
        margin-bottom: 18px;
        margin-top: 18px;
    }

    p {
        font-size: 1rem;
        max-width: 470px;
        color: #ccc;
    }

    p strong {
        color: #fff;
    }

    .overview-box {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 370px;
    }

    .overview-box .title {
        color: #444;
        font-size: 1.2rem;
        font-family: rajdhani-bold;
    }

    .overview-box strong {
        color: #777;
    }

    .me {
        z-index: -1;
        position: absolute;
        top: 0;
        bottom: 130px;
        right: 0;
        display: flex;
        align-items: center;
    }

    .me img {
        height: 400px;
        opacity: 0.2;
        filter: grayscale(80%);
        border-radius: 50px;
    }

    .link-box {
        margin-bottom: 48px;
    }

    .link-box p {
        font-size: 1.2rem;
        margin-bottom: 8px;
    }

    .link-box span:first-of-type {
        margin-right: 12px;
    }

    .link-box img {
        /* background-color: #E14242;
        border: 2px solid #000; */
        border-radius: 5px;
    }

    .button-box {
        min-height: 35px;
    }

    a {
        text-decoration: none;
        color: #fff;
        font-size: 1.2rem;
        /* font-family: rajdhani-bold; */
        padding-inline: 16px;
        padding-top: 4px; 
        padding-bottom: 2px;
        border-radius: 10px;
        border: 1px solid #E14242;
    }

    .contact {
        background-color: #E14242;
        border: 1px solid #000;
        margin-right: 8px;
    }

</style>
