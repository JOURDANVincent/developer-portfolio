<script lang="ts">

    import Linkedin from "$lib/svg/linkedin.svg.svelte";
    import Github from "$lib/svg/github.svg.svelte";
    import me2 from "$lib/assets/png/me.png";
 
</script>

<main>
    
    <div class="hero">
        
        <div class="hero-box">
            <p class="hero-hey">Hey ! Moi c'est</p>
            <h1>Vincent JOURDAN</h1>
            <h2>Développeur d'applications web & mobiles</h2>
        </div>
    
        <div class="link-box">
            <p>Suivez-moi ou découvrez mes projets</p>
            <span><Linkedin size={34} color={'#fff'} /></span><span><Github size={34} color={'#fff'} /></span>
        </div>
        
        <div class="button-box">
            <a class="contact" aria-label="Contactez-moi" href='https://www.linkedin.com/in/vincent-jourdan' target="_blank" rel="noreferrer">Contact</a>
            <a aria-label="en savoir +" href='about'>En savoir +</a>
        </div>
    
    </div>

    <div class="resume">

        <div class="me">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img src={me2} alt="photo de vincent jourdan" />
        </div>
    
        <div class="resume-box">
            <p><span class="resume-title">A PROPOS </span> Je travaille actuellement chez CGI Amiens sur une application utilisant comme techno <strong>JavaScript</strong> & <strong>Java</strong> pour la partie web et <strong>Ionic</strong> & <strong>Angular</strong> pour le mobile</p>
            <p><span class="resume-title">ETUDES</span> Niveau Bac +2 - <strong>Développeur Web & Web Mobile</strong></p>
            <p><span class="resume-title">FORMATION</span> <strong>React Native</strong></p>
        </div>

    </div>

</main>

<style>

    main {
		/* height: auto; */
		width: 100%;
		display: grid;
        /* grid-template-areas: "hero resume"; */
        grid-template-columns: 2fr 1fr;
        column-gap: 8px;
        align-items: center;
	}

    /* section {
        height: 100%;
        width: 100%;
        display: grid;
        grid-template-areas: "hero resume";
        grid-template-columns: 2fr 1fr;
        column-gap: 8px;
        align-items: center;
   } */
    
    .hero-box {
        margin-bottom: 32px;
    }

    .hero-hey {
        color: #fff;
        font-size: 1.8rem;
    }

    h1 {
        color: #fff;
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

    .button-box {
        min-height: 35px;
    }

    a {
        text-decoration: none;
        color: #fff;
        font-size: 1.2rem;
        padding-inline: 16px;
        padding-top: 4px; 
        padding-bottom: 2px;
        border-radius: 10px;
        border: 1px solid #e14242;
    }

    .contact {
        background-color: #E14242;
        border: 1px solid #000;
        margin-right: 8px;
    }

    /* .resume-box {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 380px;
        padding: 6px 0 6px 0;
        border-bottom: 1px solid #777;
        border-top: 1px solid #777;
    } */

    /* .me {
        z-index: -1;
        position: absolute;
        top: 0;
        bottom: 150px;
        right: 0;
        display: flex;
        align-items: center;
    } */

    .me {
        /* z-index: -1;
        position: absolute;
        top: 0;
        bottom: 150px;
        right: 0; */
        /* display: flex;
        align-items: flex-end; */
    }

    .resume {
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
    }

    .me img {
        height: 400px;
        opacity: 0.2;
        filter: grayscale(80%);
        border-radius: 50px;
        margin-bottom: 12px;
    }

    .resume-box {
        width: 380px;
        padding: 6px 0 6px 0;
        border-bottom: 1px solid #777;
        border-top: 1px solid #777;
        text-align: justify;
    }

    .resume-title {
        color: #eee;
        font-size: 1.2rem;
        font-family: rajdhani-bold;
    }

    .resume-box strong {
        color: #888;
    }

</style>
