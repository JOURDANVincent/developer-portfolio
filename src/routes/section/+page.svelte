<script lang="ts">

   // SECTIONS
   import AboutSection from "./blocks/About.section.svelte";
   import SkillSection from "./blocks/Skill.section.svelte";
   import ExperienceSection from "./blocks/Experience.section.svelte";
   import StudySection from "./blocks/Study.section.svelte";

</script>

<main>

   <section id="about">
      <h1>A propos</h1>
      <AboutSection />
   </section>

   <section id="skill">
      <!-- <h1>Languages & Frameworks</h1> -->
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

</main>

<style lang="css">

   main {
		height: auto;
		width: 100%;
      padding-top: 72px;
	}

   section {
      padding-bottom: 72px;
   }

   #about {
      text-align: justify;
      max-width: 700px;
   }
   
</style>