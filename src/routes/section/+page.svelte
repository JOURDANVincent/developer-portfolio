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
      /* box-sizing: border-box; */

      /* &:first-of-type {
         padding-top: 108px;
      } */
      &:last-of-type {
         padding-bottom: 72px;
      }
   }

</style>