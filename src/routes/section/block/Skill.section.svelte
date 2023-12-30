<script lang="ts">

    // COMPONENTS
    import SkillItem from "../components/Skill.item.svelte";

    // DATA
    export let data: any;
 
</script>

    
<div>
   <h2>Professionnelles</h2>
   <div class="skill-box">
      {#each data.professional as pro}
         <SkillItem {...pro} />
      {/each}   
   </div>
</div>

<div>
   <h2>Personnelles</h2>
   <div class="skill-box">
      {#each data.mancraft as mancraft}
         <SkillItem {...mancraft} />
      {/each}   
   </div>
</div>

<style lang="css">
  
    .skill-box {
       height: 100%;
       display: flex;
       flex-wrap: wrap;
       /* background-color: #0005; */
       /* justify-content: flex-end; */
       border-radius: 10px;
       /* border-bottom: 1px solid #7770;
       border-top: 1px solid #7770; */
       /* box-shadow: 2px 2px 5px 2px #0005; */
       /* padding: 18px; */
       /* padding-bottom: 12px; */
       margin-bottom: 12px;
       /* border-top: 1px solid #777;
       border-bottom: 1px solid #777; */
       /* border: 1px solid #000; */
       /* padding-left: 6px; */
    }
    
 </style>