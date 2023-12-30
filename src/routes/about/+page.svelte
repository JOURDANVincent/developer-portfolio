<script lang="ts">

   /** @type {import('./$types').PageData} */
   export let data: any;

   // COMPONENTS
   import SkillItem from "./Skill.item.svelte"

</script>

<section>

   <div id="aboutSection">

      <!-- <h1>
         <strong>A propos</strong>
      </h1> -->
      <p class="hello">
         Salut ! C'est encore moi...
      </p>
      <p>
         Pour commencer, je suis issu du monde de l'<strong>Automatisme</strong>, donc déjà passionné par la 
         programmation.
      </p>
      <p>
         J'ai travaillé pas mal d'années comme intervenant en industrie (dépannage en électricitré & automatisme) puis technicien SAV pour finir technico-commercial.
      </p>
      <p>
         Cette dernière expérience m'a étonnement permis de travailler sur les <strong>objets connectés</strong>. Et surtout m'a amené me remettre en question.
      </p>
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

   </div>

   <div id="skillSection">
      
      <div>
         <h2>
            <strong>Front-end</strong>
         </h2>
         <div class="skill-box">
            {#each data.frontend as front}
               <SkillItem {...front} />
            {/each}   
         </div>
      </div>
   
      <div>
         <h2>
            <strong>Back-end</strong>
         </h2>
         <div class="skill-box">
            {#each data.backend as back}
               <SkillItem {...back} />
            {/each}   
         </div>
      </div>
   
      <div>
         <h2>
            <strong>Mobile</strong>
         </h2>
         <div class="skill-box">
            {#each data.mobile as mobile}
               <SkillItem {...mobile} />
            {/each}   
         </div>
      </div>
   
      <div>   
         <h2>
            <strong>Database</strong>
         </h2>
         <div class="skill-box">
            {#each data.database as database}
               <SkillItem {...database} />
            {/each}   
         </div>
      </div>

   </div>

   <!-- <Footer /> -->

</section>



<style lang="css">

   section {
      height: 100%;
      width: 100%;
      /* display: grid;
      grid-template-areas: "about skill";
      grid-template-columns: 1fr 420px;
      column-gap: 8px;
      align-items: center; */
   }

   #aboutSection {
      text-align: justify;
      max-width: 600px;
      margin-bottom: 48px;
   }

   h1 {
      font-size: 2.4rem;
      color: #E14242;
      margin-bottom: 12px;
   }

   h2 {
      font-size: 1.6rem;
      color: #777;
   }

   .hello {
      font-size: 3rem;
      color: #E14242;
   }

   p {
      font-size: 1rem;
      margin-bottom: 8px;
   }

   p strong {
      color: #777;
   }

   #skillSection {
      /* float: right; */
      /* text-align: right; */
   }

   .skill-box {
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      background-color: #000;
      /* justify-content: flex-end; */
      border-radius: 10px;
      border-bottom: 1px solid #7770;
      border-top: 1px solid #7770;
      box-shadow: 2px 2px 5px 2px #0005;
      padding: 18px;
      padding-bottom: 12px;
      margin-bottom: 12px;
   }
   
</style>