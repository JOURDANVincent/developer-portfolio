<script lang="ts">

   // STORE & DATA
	import { page } from '$app/stores';
   
   // COMPONENTS
   import ExpDevCard from "../components/ExpDev.card.svelte";
   import ExpMainCard from '../components/ExpMain.card.svelte';

   // HANDLE EXP CARROUSEL
   const experiences = $page.data.experiences;
   const devExperience = experiences[0];
   experiences.shift() // supprime exp dev -> exp[0]
   const dates = experiences.map((exp: any) => exp.date.replace('-', '\n')) // liste date à afficher dans carrousel

   let scrollDateBox: any;
   $: activeExp = 0;

   const parseScroll = () => { // 200 -> hauteur en pixel /!\ valeur liée au css /!\
      if(scrollDateBox.scrollTop % 200 == 0) {
         activeExp = scrollDateBox.scrollTop / 200
      }
   }


</script>

<div class="resume-section">

   <p>
      Depuis janvier 2022, j'exerce le métier de <strong>Développeur Java / Angular</strong> au sein de 
      l'entreprise <strong>CGI Amiens</strong>
   </p>
   <p>
      Je travaille sur une des nombreuses applications du Ministère au sein d'une petite équipe suivant les <strong>méthodes agiles</strong>
   </p>
   <p>
      Elle est composée d'un <strong>site web</strong>, d'un <strong>CMS</strong>, d'une <strong>webapp</strong> qu'on retrouve sur 
      les stores <strong>Android</strong> et <strong>iOS</strong> et une application <strong>desktop</strong>
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

<div class="exp-section">

   <div class="dev-exp">
      <h2>Développeur</h2>
      <ExpDevCard {...devExperience} />
   </div>

   <h2>Toutes mes expériences</h2>
   <div class="full-exp">
      <div class="date-scroll-box" bind:this={scrollDateBox} on:scroll={parseScroll} >
         {#each dates as date}
            <div class="date-box">
               <div class="date" >{date}</div>
            </div>
         {/each}
      </div>
      <div class="content">
         <ExpMainCard {...experiences[activeExp]} />
      </div>
   </div>

</div>

<style lang="css">

   .resume-section {
      max-width: 700px;
      text-align: justify;
      margin-bottom: 24px;
   }

   .dev-exp {
      margin-bottom: 18px;
   }

   .full-exp {
      height: 200px;
      display: flex;
      flex-direction: row;
      padding: 12px 0;
      border-top: 1px solid #777;
      border-bottom: 1px solid #777;

      & .date-scroll-box {
         width: 240px;
         overflow-y: scroll;
         scroll-snap-type: y mandatory;
      }

      & .date-box {
         scroll-snap-align: start;
         box-sizing: border-box;
         height: 200px;
         padding: 12px 0;
         padding-right: 36px;
         display: flex;
         justify-content: flex-end;
         align-items: center;
      }

      & .date {
         width: 100%;
         background-color: #fff2;
         font-size: 5rem;
         line-height: 5rem;
         font-weight: bold;
         text-align: center;
         color: #000;
         border-radius: 30px;
         border: 1px solid #444;
         padding: 10px;
      }
   }

</style>