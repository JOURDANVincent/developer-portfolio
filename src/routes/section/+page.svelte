<script lang="ts">

   // SECTIONS
   import AboutSection from "./blocks/About.section.svelte";
   import SkillSection from "./blocks/Skill.section.svelte";
   import ExperienceSection from "./blocks/Experience.section.svelte";
   import StudySection from "./blocks/Study.section.svelte";

</script>

<section id="about">
   <!-- <h1>A propos</h1> -->
   <AboutSection />
</section>

<section id="skill">
   <h1>Compétences</h1>
   <SkillSection />
</section>

<section id="experience">
   <h1>Expériences</h1>
   <ExperienceSection />
</section>

<section id="study">
   <h1>Formations</h1>
   <StudySection />
</section>

<style lang="css">

   section {
      width: 100%;
      text-align: justify;
      padding-top: 72px;
      box-sizing: border-box;
   }

   section:last-of-type {
      padding-bottom: 96px;
   }

   #skill, #study, #experience {
      padding-inline: 16px;
   }

   @media (min-width: 768px) {

      section {
         max-width: 700px;
      }

      #skill, #study, #experience {
         padding-inline: initial;
      }
   }

   @media (min-width: 1180px) {

      section {
         max-width: 800px;
         padding-top: 120px;
      }
   }

   @media (min-width: 1400px) {

      section {
         max-width: 900px;
      }
   }

</style>