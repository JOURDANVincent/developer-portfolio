<script lang="ts">

   export let data: any;

   // COMPONENTS
   import ExpCard from "../components/Exp.card.svelte";

   // ICONS
   

   //
   let showExp = false

</script>

<div class="resume_section">

   <p>
      Depuis janvier 2022, j'exerce le métier de <strong>Développeur Java / Angular</strong> au sein de 
      l'entreprise <strong>CGI Amiens</strong>
   </p>
   <p>
      Je travaille sur une des nombreuses applications du Ministère au sein d'une petite équipe suivant les <strong>méthodes agiles</strong>
   </p>
   <p>
      Elle est composée d'un <strong>site web</strong>, d'un <strong>CMS</strong>, d'une <strong>webapp</strong> qu'on retrouve sur 
      les stores <strong>Android</strong> et <strong>iOS</strong> et même une application <strong>desktop</strong>
   </p>
   <!-- <p>
      Les principales techno utilisées sont <strong>Java</strong> & <strong>Angular</strong>
      On y trouve aussi <strong>Spring Boot</strong> & <strong>Hibernate</strong>, <strong>Typescript</strong>, <strong>Javascript</strong> et même <strong>Electron JS</strong>
   </p> -->
   <!-- <p>
      Je travaille au sein d'une petite équipe suivant les <strong>méthodes agiles</strong> dans des sprints d'environ 4 
      semaines...
   </p> -->

</div>

<div class="exp_section">

   <div class="dev-box">
      <h2>Développeur</h2>
      {#each data as exp}
         <ExpCard {...exp} />
      {/each}
   </div>

   {#if !showExp}
      <button id="showExp" on:click={() => { showExp = !showExp }} aria-roledescription="affiche les toute sles expériences" >
         <!-- <img src={} alt="icône eye"/> -->
         Mes autres expériences
      </button>
   {/if}

   {#if showExp}
      <div class="pro-box">
         <h2>Mes autres expériences</h2>
         {#each data as exp}
            <ExpCard {...exp} />
         {/each}
      </div>
   {/if}

</div>

<style lang="css">

   .resume_section {
      max-width: 700px;
      text-align: justify;
      margin-bottom: 24px;
   }

   .dev-box {
      margin-bottom: 18px;
   }

   #showExp {
      background-color: transparent;
      color: #fff;
      font-size: 1rem;
      padding-inline: 16px;
      padding-top: 4px; 
      padding-bottom: 2px;
      border: none;

      border-radius: 10px;
      border: 1px solid #E14242;
      /* box-shadow: 2px 2px 5px 2px #000; */
      margin-top: 12px;
   }

</style>