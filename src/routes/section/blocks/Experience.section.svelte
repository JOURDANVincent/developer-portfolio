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
         <div class="dot-box">
            {#each dates as date, i}
               <div class="dot" class:active={i == activeExp}></div>
            {/each}
         </div>
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
      height: 240px;
      display: grid;
      grid-template-columns: 260px 1fr;
      border-top: 1px solid #777;
      border-bottom: 1px solid #777;

      & .date-scroll-box {
         width: 240px;
         overflow-y: scroll;
         scroll-snap-type: y mandatory;
         padding-left: 24px;

         /* SCROLL BAR */
         &::-webkit-scrollbar {
            display: none;
         }
      }

      & .date-box {
         scroll-snap-align: center;
         box-sizing: border-box;
         height: 200px;
         padding: 4px 0;
         padding-right: 36px;
         display: flex;
         justify-content: center;
         align-items: center;

         &:first-of-type {
            margin-top: 20px;
         }

         &:last-of-type {
            margin-bottom: 20px;
         }
      }

      & .date {
         height: 100%;
         width: 100%;
         display: flex;
         justify-content: center;
         align-items: center;
         box-sizing: border-box;
         background-color: #0002;
         box-shadow: inset 2px 2px 10px 1px #000;   

         font-size: 5rem;
         line-height: 5rem;
         font-weight: bold;
         text-align: center;
         color: #7777;
         text-shadow: 3px 3px #000;

         border-radius: 5px;
         border-right: 1px solid #444;
         border-left: 1px solid #444;     
      }

      & .content {
         position: relative;
         height: 100%;

         & .dot-box {
            position: relative;
            bottom: 30px;
            left: 34px;
            height: 100%;
            width: 240px;
            box-sizing: border-box;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding-top: 6px;
            padding-bottom: 6px;

            & .dot {
               height: 4px;
               width: 16px;
               margin-bottom: 1px;
               background-color: #fff2;

               &.active {
                  background-color: #fff;
               }
            }
         }
      }
   }

</style>