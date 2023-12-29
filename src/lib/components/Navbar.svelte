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
      { name: 'A Propos', path: `${base}/about`, svg: AboutSvg},
      { name: 'Porte-folio', path: `${base}/portfolio`, svg: ComputerSvg},
      { name: 'Formations', path: `${base}/study`, svg: ExperienceSvg},
      { name: 'Expériences', path: `${base}/experience`, svg: ExperienceSvg},
      { name: 'Compétences', path: `${base}/skill`, svg: SkillSvg},
   ]
   $: currentPathName = $page.url.pathname

   // NAVBAR GESTURE
   export let isMenuOpen: boolean;
   export let toggleMenu: any;

   // DYNAMIC STYLE
   $: elementDisplay = isMenuOpen ? 'flex' : 'none';

</script>

<nav 
   class="menu" 
>

   <div 
      class="menu-list" 
      style:z-index={isMenuOpen ? '10' : '-1'}
      style:display={elementDisplay}
   >
      {#each allRoutes as route}
         <a 
            href={route.path} 
            class="menu-item"
            class:active={currentPathName === route.path}
            
            on:click={toggleMenu}
         >
            <span class="icon"><svelte:component this={route.svg} size={26} color={'#E14242'}/></span>
            <!-- <span class="link">{route.name}</span> -->
         </a>
      {/each}
      <a 
         href='https://www.linkedin.com/in/VincentJourdan' target="_blank" rel="noreferrer"
         class="menu-item contact"
      >
         <span class="icon"><ContactSvg size={26} color={'#E14242'}/></span>
         <!-- <span class="link">Contact</span> -->
      </a>
   </div>

   <!-- <div class="footer" style:display={elementDisplay}>
      <div>
         <a href='https://github.com/JOURDANVincent' target="_blank" rel="noreferrer">
            <GithubSvg size={20} color={'#777'} />
         </a>
         <a href='https://www.linkedin.com/in/VincentJourdan' target="_blank" rel="noreferrer">
            <LinkedinSvg size={20} color={'#777'} />
         </a>
      </div>
      <div>développé avec <span class="svelte">Svelte JS</span></div>
   </div> -->

</nav>

<style>

   nav {
      z-index: 10;
      position: absolute;
      height: 100%;
      /* background-color: #0003; */
      /* max-width: calc(100% - 36px); */
      /* width: calc(100% -200 px); */
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(12px);
      box-sizing: border-box;
      border: 1px solid #000;
      box-shadow: 3px 0px 10px 2px #0009;
      transition: 0.3s;
   }

   .menu-list {
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
      padding-bottom: 10px;
      box-sizing: border-box;
      border-bottom: 1px solid #fff2;
      transition: 0.3s;
   }
   .menu-item:last-of-type {
      border-bottom: 1px solid transparent;
   }
   .menu-item:hover {
      background-color: #fff1;
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
