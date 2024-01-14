<script lang="ts">

   import { margWidth } from '$lib/stores/store'

   /** @type {import('./$types').PageData} */
   export let data: any;
   const projects = data.projects

   // GESTION CURRENT PROJECT DISPLAYING
   $: activeProject = 0;  
   // $: title = `#${activeProject + 1} ${projects[activeProject].title}`


</script>

<section>

   <div class="project-box">
      {#each projects as project}
         
         <div class="card">
            <img src={project.desktop_path} alt={project.title} />
            <div class="overview">
               <button on:click={() => {}} class="more" aria-label="affiche le reste du text" >
                  INFO <span>+</span>
               </button>
               <h2>{project.title}</h2>
               <h3>{project.subject}</h3>
               <div class="inner">
                  {#each project.inner as inner, i}
                     <p>{inner}</p>
                  {/each}
               </div>
            </div>
         </div>

      {/each}
   </div>

</section>

<style lang="css">

   section {
      height: 100%;
      width: 100%;
      box-sizing: border-box;
   }

   @media (max-width: 797px) {

   }

   @media (min-width: 798px) {

      .project-box {
         display: grid;
         flex-wrap: wrap;
         grid-template-columns: 1fr 1fr;
         gap: 12px;
      }
   }

   .project-box {
      box-sizing: border-box;
      padding-top: 96px;
      padding-bottom: 42px;

      & .card {
         height: auto;
         /* width: 50%; */
         /* padding: 0 12pxpx; */
         box-sizing: border-box;
         background-color: #0001;
         border-radius: 6px;
         overflow: hidden;
         margin-right: 6px;
         /* padding: 6px; */
         /* margin-inline: 2px; */
         margin-bottom: 24px;
         border-bottom: 1px solid #444;
         box-shadow: 2px 2px 5px 2px #0002;

         & img {
            /* height: 100%; */
            /* padding: 24px;
            padding-top: 2px; */
            width: 100%;
            object-fit: contain;
            box-sizing: border-box;
         }

         & .overview {

            position: relative;
            padding: 12px 18px 12px 18px;

            & .more {
               z-index: 2;
               position: absolute;
               top: 8px;
               right: 12px;
               height: 30px;
               background-color: transparent;
               display: inline-flex;
               align-items: center;
               justify-content: center;
               padding:  0;
               padding-left: 12px;
               margin-top: 12px;
               outline: none;
               border-radius: 10px;
               border: 1px solid #777;
               color: #fff;
               font-size: 0.8rem;
               box-sizing: border-box;

               & span {
                  z-index: 3;
                  height: 100%;
                  width: 30px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  background-color: #333;
                  color: #fff;
                  font-size: 2rem;
                  line-height: 2rem;
                  border-radius: 10px;
                  /* border: 1px solid #e14242; */
                  margin-left: 12px;
            }
            }

            & h2 {
               color: #fff;
               line-height: 3rem;
               font-size: 2.4rem;
            }

            & h3 {
               color: #777;
               /* height: 1.6rem; */
               font-size: 1.3rem;
               /* border-bottom: 4px solid #000;
               margin-bottom: 12px; */
            }

            & .inner {
               color: #ddd;
               height: 47px;
               overflow: hidden;

               & p {
                  padding: 0;
                  margin:  0;
               }
            }
         }

         
      }
   }
   
</style>