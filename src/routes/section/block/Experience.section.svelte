<script lang="ts">

   export let data: any;

   // COMPONENTS
   import ExpCard from "../components/Exp.card.svelte";

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
   <p>
      Les principales techno utilisées sont <strong>Java</strong> & <strong>Angular</strong> 
      <!-- On y trouve aussi <strong>Spring Boot</strong> & <strong>Hibernate</strong>, <strong>Typescript</strong>, <strong>Javascript</strong> et même <strong>Electron JS</strong> -->
   </p>
   <!-- <p>
      Je travaille au sein d'une petite équipe suivant les <strong>méthodes agiles</strong> dans des sprints d'environ 4 
      semaines...
   </p> -->

</div>

<div class="exp_section">
   {#each data as exp}
      <ExpCard {...exp} />
   {/each}
</div>

<style lang="css">

   h2 {
      font-size: 1.6rem;
      color: #777;
   }

   .resume_section {
      margin-bottom: 24px;
   }
   .exp_section {
      grid-area: exp;
   }

</style>