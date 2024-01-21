<script lang="ts">

   // STORE & DATA
	import { page } from '$app/stores';
   const { professional, personal } = $page.data.skills

   // COMPONENTS
   import SkillItem from "../components/Skill.item.svelte";
 
</script>

    
<div class="skill-section">
   <h2>Professionnelles</h2>
   <div class="skill-box">
      {#each professional as pro}
         <SkillItem {...pro} />
      {/each}   
   </div>
</div>

<div>
   <h2>Personnelles</h2>
   <div class="skill-box">
      {#each personal as perso}
         <SkillItem {...perso} />
      {/each}   
   </div>
</div>

<style lang="css">
  
   .skill-box {
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      border-radius: 10px;
      margin-bottom: 12px;
   }
    
 </style>