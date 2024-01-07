<script lang="ts">

    import mySelf from '$lib/assets/webp/myGreyPicture.webp'

    $: moreAbout = false;

</script>

<section>

    <div class=perso-box>
        <div>
            <div class=detail>NOM <span>JOURDAN</span></div>
            <div class=detail>PRENOM <span>Vincent</span></div>
            <div class=detail>AGE <span>40 ans</span></div>
            <div class=detail>VILLE <span>AMIENS</span></div>
            <div class=detail>POSTE <span>Développeur JAVA / ANGULAR</span></div>
        </div>
        <div>
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img src={mySelf} alt="photo de vincent jourdan"/>
        </div>
    </div>

    <p>
        Pour commencer, je suis issu du monde de l'<strong>Automatisme</strong>, donc déjà passionné par la 
        programmation.
    </p>
    <p>
        J'ai travaillé pas mal d'années comme intervenant en industrie (dépannage en électricitré & automatisme) puis technicien SAV pour finir technico-commercial.
    </p>
    <p>
        Cette dernière expérience m'a étonnement permis de travailler sur les <strong>objets connectés</strong>. Et surtout m'a amené me remettre en question {moreAbout ? '.' : ' [...]'}
    </p>
    
    {#if moreAbout}
        
        <p>
            Je me suis dit que c'était maintenant qu'il fallait tout changer et j'ai de ce fait décidé de changer de vie et me suis 
            lancé dans une <strong>reconversion professionnelle</strong> afin de devenir développeur.
        </p>
        <p>
            Commencé par suivre une formation <strong>Développeur Web & Web Mobile</strong>
            dans le centre de formation <strong>La MANU AMIENS</strong>.
            Ensuite poursuivi par une formation 100% mobile <strong>React Native</strong>.
        </p>
        <p>
            En attendant de trouver mon premier emploi, j'ai réalisé quelques petits projets <strong>React Native</strong> dont une application 
            pour ma compagne lui permettant de gérer l'allaitement de notre petite fille. 
        </p>
        <p>
            J'ai pris le temps de m'intéresser à quelques frameworks tels que <strong>Vue JS</strong> ou encore <strong>Express JS </strong> 
            mais plus particulièrement à <strong>Svelte JS</strong> avec lequel je vous présente mon <strong>porte-folio</strong>.
        </p>
        <p>
            Aujourd'hui, et depuis janvier 2022, j'ai le plaisir d'exercer ce métier passionnant de <strong>développeur</strong> 
            au sein de l'entreprise <strong>CGI Amiens</strong>.
        </p>
        <p>
            Mon projet actuel est basé principalement sur les techno <strong>Java</strong> & <strong>Angular</strong>.
            <!-- Tout cela en suivant les <strong>méthodes agiles</strong>. -->
        </p>
        
    {/if}

</section>

{#if !moreAbout}
    <button on:click={() => moreAbout = true} class="moreAbout" aria-label="affiche le reste du text about" >
        en savoir plus <span>+</span>
    </button>
{/if}

<style lang="css">

    section {
        max-width: 700px;
    }

    .perso-box {
        /* background-color: #0004;
        padding: 24px; */
        margin-bottom: 24px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: flex-end;

        padding-bottom: 12px;
        border-bottom: 1px solid #444;

        & .detail {
            color: #aaa;
            font-size: 1.2rem;
            font-weight: bold;

            & span {
                color: #fff;
            }
        }

        & img { 
            width: 100%;
            border-radius: 3px;
        }
    }

    .moreAbout {
        height: 30px;
        background-color: transparent;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding:  0;
        padding-left: 12px;
        margin-top: 12px;
        outline: none;
        border-radius: 15px;
        border: 1px solid #e14242;
        color: #fff;
        font-size: 1rem;
        box-sizing: content-box;

        & span {
            height: 100%;
            width: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #e14242;
            color: #000;
            font-size: 2rem;
            line-height: 2rem;
            border-radius: 15px;
            border: 1px solid #e14242;
            margin-left: 12px;
        }
    }

</style>
