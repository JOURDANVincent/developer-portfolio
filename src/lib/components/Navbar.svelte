<script lang="ts">

   // REACTIVE
   import { page } from '$app/stores';

   // SVG MENU ICONS
   import TagSvg from '$lib/svg/menu/Tag.svg.svelte';
	import AboutSvg from '$lib/svg/menu/About.svg.svelte';
   import ComputerSvg from '$lib/svg/menu/Computer.svg.svelte';
   import ExperienceSvg from '$lib/svg/menu/Experience.svg.svelte';
   import SkillSvg from '$lib/svg/menu/Skill.svg.svelte';
   import ContactSvg from '$lib/svg/menu/Contact.svg.svelte';
   
   // SVG FOOTER ICONS
   import GithubSvg from "$lib/svg/github.svg.svelte";
   import LinkedinSvg from "$lib/svg/linkedin.svg.svelte";

   // PATH
   import { base } from '$app/paths';
   
   // ROUTES & PATH
   const allRoutes = [
      { name: 'Accueil', path: `${base}/`, svg: TagSvg}, 
      // { name: 'A Propos', path: `${base}/about`, svg: AboutSvg},
      // { name: 'Porte-folio', path: `${base}/portfolio`, svg: ComputerSvg},
      // { name: 'Formations', path: `${base}/study`, svg: ExperienceSvg},
      // { name: 'Expériences', path: `${base}/experience`, svg: ExperienceSvg},
      // { name: 'Compétences', path: `${base}/skill`, svg: SkillSvg},
      { name: 'A Propos', path: `${base}/section/#about`, svg: AboutSvg},
      { name: 'Porte-folio', path: `${base}/portfolio`, svg: ComputerSvg},
      { name: 'Formations', path: `${base}/section/#study`, svg: ExperienceSvg},
      { name: 'Expériences', path: `${base}/section/#experience`, svg: ExperienceSvg},
      { name: 'Techno', path: `${base}/section/#skill`, svg: SkillSvg},
   ]
   $: currentPathName = $page.url.pathname
   $: console.log('curent path: ', $page.url)

</script>

<nav>  

   <div class="hero">
      <h1>VJ</h1>
   </div>

   <div 
      class="menu" 
   >
      {#each allRoutes as route}
         <a 
            href={route.path} 
            class="menu-item"
            class:active={currentPathName === route.path}
            title={`dirige vers page ${route.path}`}
         >
            <span class="icon"><svelte:component this={route.svg} size={26} color={currentPathName === route.path ? '#E14242' : '#ccc'}/></span>
            <!-- <span class="link">{route.name}</span> -->
         </a>
      {/each}
      
   </div>

   <div class="footer" >
      <a 
         href='https://www.linkedin.com/in/VincentJourdan' 
         target="_blank" rel="noreferrer"
         title="lien vers mon profil Linkedin"
         class="menu-item contact"
      >
         <span class="icon"><ContactSvg size={26} color={'#E14242'}/></span>
         <!-- <span class="link">Contact</span> -->
      </a>
      <a 
         href='https://github.com/JOURDANVincent' 
         target="_blank" rel="noreferrer"
         title="lien vers mon compte Github"
         class="menu-item" 
      >
         <span class="icon"><GithubSvg size={26} color={'#777'} /></span>
      </a>
      <a 
         href='https://www.linkedin.com/in/VincentJourdan' 
         target="_blank" rel="noreferrer"
         title="lien vers mon profil Linkedin"
         class="menu-item" 
      >
         <span class="icon"><LinkedinSvg size={26} color={'#777'} /></span>
      </a>
      <!-- <div>développé avec <span class="svelte">Svelte JS</span></div> -->
   </div>

</nav>

<style>

   nav {
      z-index: 10;
      position: fixed;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      -webkit-backdrop-filter: blur(12px);
      backdrop-filter: blur(12px);
      box-sizing: border-box;
      border: 1px solid #000;
      box-shadow: 3px 0px 10px 2px #0009;
      transition: 0.3s;
   }

   h1 {
      font-size: 2rem;
      font-family: rajdhani-bold;
      color: #E14242;
   }

   .hero {
      min-height: 150px;
      padding-top: 12px;
   }

   .menu {
      width: 100%;
      /* max-width: 800px; */
      box-sizing: border-box;
      padding-inline: 8px;
      margin-inline: auto;
      flex-direction: column;
      overflow: hidden;
   }

   .menu-item {
      display: flex;
      flex-direction: row;
      align-items: center;
      text-decoration: none;
      padding: 10px;
      padding-bottom: 6px;
      box-sizing: border-box;
      border-bottom: 1px solid #000;
      /* border-radius: 5px; */
      transition: 0.2s;
   }
   .menu-item:last-of-type {
      border-bottom: 1px solid transparent;
   }
   .menu-item:hover {
      background-color: #fff1;
      box-shadow: inset 2px 2px 5px 2px #0005;
      border-radius: 5px;
   }
/* 
   .menu-item span {
      padding: 0;
   } */

   /* .active {
      background-color: #fff2;
      padding-left: 16px;
      border-bottom: 1px solid transparent;
   } */

   .footer {
      min-height: 150px;
      display: flex;
      flex-direction: column;
      align-items: center;
      /* padding-bottom: 6px; */
   }

   .icon {
      /* padding-right: 16px; */
   }

   .link {
      color: #eee;
      font-size: 1.4rem;
      padding-bottom: 2px;
   }

   @media (min-width: 768px ) { 

      .menu-item {
         padding-inline: 8px;
      }

      .link {
         font-size: 1.6rem;
         padding-left: 12px;
      }

      .icon {
         /* padding-right: 12px; */
      }

   }

</style>
