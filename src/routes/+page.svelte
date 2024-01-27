<script lang="ts">

    import Linkedin from "$lib/svg/linkedin.svg.svelte";
    import Github from "$lib/svg/github.svg.svelte";
    import myself from "$lib/assets/png/me.png";
 
</script>

<div class="home-section">
    
    <div class="hero">
        
        <div class="titles">
            <p>Hey ! Moi c'est</p>
            <h1>Vincent JOURDAN</h1>
            <h2>Développeur d'applications web & mobiles</h2>
        </div>
    
        <div class="links">
            <p>Suivez-moi ou découvrez mes projets</p>
            <span><Linkedin size={34} color={'#fff'} /></span><span><Github size={34} color={'#fff'} /></span>
        </div>
        
        <div class="buttons">
            <a class="contact" aria-label="vers page contact" href='/contact'>contact</a>
            <a class="moreAbout" aria-label="vers page profile" href='/section'>en savoir <span class="plus">+</span></a>
        </div>
    
    </div>

    <div class="resume">

        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img src={myself} alt="photo de vincent jourdan" />
    
        <div class="overview">
            <p><span class="title">A PROPOS</span> Je travaille actuellement chez CGI Amiens sur un site web et une application mobile. Les techno sont <strong>JavaScript</strong> & <strong>Java</strong> pour la partie web et <strong>Ionic</strong> & <strong>Angular</strong> pour le mobile</p>
            <p><span class="title">ETUDES</span> Niveau Bac +2 - <strong>Développeur Web & Web Mobile</strong></p>
            <p><span class="title">FORMATION</span> <strong>React Native</strong></p>
        </div>

    </div>

</div>

<style>

    .home-section {
        height: 100%;
        display: grid;
        padding-inline: 12px;
        align-items: center;
    }

    .titles {
        margin-bottom: 32px;
    }

    .titles p {
        color: #fff;
        font-size: 1.4rem;
        margin-bottom: 12px;
    }

    h1 {
        color: #fff;
        font-size: 4.2rem;
        line-height: 3.8rem;
        margin: 0; padding: 0;
        margin-bottom: 12px;
    }

    h2 {
        max-width: 400px;
        color: #E14242;
        font-size: 1.8rem;
    }

    .links {
        margin-bottom: 24px;
    }

    .links p {
        font-size: 1.2rem;
        margin-bottom: 8px;
    }

    .links span:first-of-type {
        margin-right: 12px;
    }

    a {
        height: 30px;
        background-color: #0002;
        display: inline-flex;
        align-items: center;
        padding-left: 18px;
        margin-top: 12px;
        outline: none;
        border-radius: 15px;
        border: 1px solid #e14242;
        color: #fff;
        font-size: 1.2rem;
        box-sizing: border-box;
    }

    a .plus {
        height: 24px;
        width: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #e14242;
        color: #000;
        font-size: 2.2rem;
        border-radius: 15px;
        border: 1px solid #e14242;
        margin-left: 12px;
        margin-right: 2px;
    }

    .contact {
        background-color: #E14242;
        border: 1px solid #000;
        padding-right: 16px;
        margin-right: 8px;
    }

    .resume {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
        margin-top: 24px;
    }

    .resume img {
        display: none;
        object-fit: contain;
        opacity: 0.2;
        filter: grayscale(80%);
        border-radius: 50px;
        margin-bottom: 12px;
    }

    .overview {
        width: 100%;
        padding: 8px 0 0px 0;
        border-bottom: 1px solid #777;
        border-top: 1px solid #777;
        text-align: justify;
    }

    .overview p {
        font-size: 0.8rem;
        color: #ccc;
        margin-bottom: 0;
    }

    .overview .title {
        color: #eee;
        font-size: 1rem;
        font-family: rajdhani-bold;
        margin-right: 4px;
    }

    @media (min-width: 768px) {

        .home-section {
            align-items: flex-end;
            padding-inline: initial;
        }

        .titles p {
            font-size: 1.8rem;
        }

        h1 {
            max-width: 2rem;
            font-size: 6rem;
            line-height: 5rem;
        }

        h2 {
            font-size: 2.6rem;
            max-width: 500px;
            margin-bottom: 18px;
            margin-top: 18px;
        }

        .resume img {
            height: 380px;
        }

        .overview p {
            font-size: 1rem;
        }

        .resume img {
            display: block;
        }
    }

    @media (max-width: 991px) {

        .overview {
            max-width: 700px;
        }

        img {
            position: absolute;
            height: 400px;
        }
    }

    @media (min-width: 992px) {

        .home-section {
            display: grid;
            grid-template-columns: 1fr 410px;
            column-gap: 8px;
        }
    }

</style>
