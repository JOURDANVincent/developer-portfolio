<script lang="ts">

   /** @type {import('./$types').PageData} */
   export let data: any;

   // SECTIONS
   import AboutSection from "./block/About.section.svelte";
   import SkillSection from "./block/Skill.section.svelte";
   import ExperienceSection from "./block/Experience.section.svelte";
   import StudySection from "./block/Study.section.svelte";

</script>

<main>

   <section id="about">
      <h1>A propos</h1>
      <AboutSection />
   </section>

   <section id="skill">
      <!-- <h1>Languages & Frameworks</h1> -->
      <h1>Compétences</h1>
      <SkillSection data={data.skills} />
   </section>

   <section id="experience">
      <h1>Expériences</h1>
      <ExperienceSection data={data.experiences} />
   </section>

   <section id="study">
      <h1>Formations</h1>
      <StudySection data={data.studies} />
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