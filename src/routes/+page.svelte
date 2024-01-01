<script lang="ts">

    import Linkedin from "$lib/svg/linkedin.svg.svelte";
    import Github from "$lib/svg/github.svg.svelte";
    import myself from "$lib/assets/png/me.png";
 
</script>

<main>
    
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
            <a class="linkedin" aria-label="contactez-moi" href='https://www.linkedin.com/in/vincent-jourdan' target="_blank" rel="noreferrer">Contact</a>
            <a class="about" aria-label="en savoir +" href='about'>En savoir +</a>
        </div>
    
    </div>

    <div class="resume">

        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img src={myself} alt="photo de vincent jourdan" />
    
        <div class="overview">
            <p><span>A PROPOS</span> Je travaille actuellement chez CGI Amiens sur un site et une application mobile. Les techno sont <strong>JavaScript</strong> & <strong>Java</strong> pour la partie web et <strong>Ionic</strong> & <strong>Angular</strong> pour le mobile</p>
            <p><span>ETUDES</span> Niveau Bac +2 - <strong>Développeur Web & Web Mobile</strong></p>
            <p><span>FORMATION</span> <strong>React Native</strong></p>
        </div>

    </div>

</main>

<style>

    main {
		display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 8px;
        align-items: center;
	}

    p {

        font-size: 1rem;
        max-width: 470px;
        color: #ccc;

        & strong {
            color: #fff;
        }
    }

    .hero{

        & .titles {
            margin-bottom: 32px;

            & p {
                color: #fff;
                font-size: 1.8rem;
            }

            & h1 {
                color: #fff;
                max-width: 2rem;
                font-size: 6rem;
                line-height: 5rem;
                margin: 0; padding: 0;
            }

            & h2 {
                font-size: 3rem;
                color: #E14242;
                max-width: 600px;
                margin-bottom: 18px;
                margin-top: 18px;
            }
        }

        & .links {
            margin-bottom: 48px;

            & p {
                font-size: 1.2rem;
                margin-bottom: 8px;
            }

            & span:first-of-type {
                margin-right: 12px;
            }
        }

        & .buttons {
            min-height: 35px;

            & a {
                padding: 4px 16px 2px 16px;
                border-radius: 10px;
                border: 1px solid #e14242;
            }

            & .linkedin {
                background-color: #E14242;
                border: 1px solid #000;
                margin-right: 8px;
            }
        }
    }

    .resume {

        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;

        & img {
            height: 400px;
            opacity: 0.2;
            filter: grayscale(80%);
            border-radius: 50px;
            margin-bottom: 12px;
        }

        & .overview {
            width: 420px;
            padding: 8px 0 0px 0;
            border-bottom: 1px solid #777;
            border-top: 1px solid #777;
            text-align: justify;

            & p {
                margin-bottom: 0;
            }

            & span {
                color: #eee;
                font-size: 1.2rem;
                font-family: rajdhani-bold;
                margin-right: 4px;
            }

            & strong {
                color: #888;
            }
        }
    }

</style>
