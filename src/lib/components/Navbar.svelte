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
      { name: 'A Propos', path: `/section#about`, svg: AboutSvg},
      { name: 'Porte-folio', path: `/portfolio`, svg: ComputerSvg},
      { name: 'Compétences', path: `/section#skill`, svg: SkillSvg},
      { name: 'Expériences', path: `/section#experience`, svg: ExperienceSvg},
      { name: 'Formations', path: `/section#study`, svg: ExperienceSvg},
      { name: 'Contact', path: `/contact`, svg: ContactSvg},
   ]

   // CURRENT ROUTE -> ACTIVE
   $: currentRoute = base + $page.url.pathname + $page.url.hash

</script>

<nav>  

   <div class="home">
      <a href={base + '/'} 
         class="item"
         class:active={currentRoute === base + '/'}
         title={`dirige vers page accueil`}
      >
         <span class="icon"><TagSvg size={26} color={currentRoute === base + '/' ? '#E14242' : '#ccc'}/></span>
         <!-- <span class="link">{route.name}</span> -->
      </a>
   </div>

   <div class="menu">

      {#each allRoutes as route}
         <a href={base + route.path} 
            class="item"
            class:active={currentRoute === base + route.path}
            title={`dirige vers page ${route.path}`}
         >
            <span class="icon"><svelte:component this={route.svg} size={26} color={currentRoute === base + route.path ? '#E14242' : '#ccc'}/></span>
            <!-- <span class="link">{route.name}</span> -->
         </a>
      {/each}
      
   </div>

   <div class="footer" >
      <a 
         href='https://github.com/JOURDANVincent' 
         target="_blank" rel="noreferrer"
         title="lien vers mon compte Github"
         class="item" 
      >
         <span class="icon"><GithubSvg size={26} color={'#777'} /></span>
      </a>
      <a 
         href='https://www.linkedin.com/in/VincentJourdan' 
         target="_blank" rel="noreferrer"
         title="lien vers mon profil Linkedin"
         class="item" 
      >
         <span class="icon"><LinkedinSvg size={26} color={'#777'} /></span>
      </a>
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

   .home {
      min-height: 150px;
      padding-top: 12px;
   }

   .menu {
      width: 100%;
      box-sizing: border-box;
      padding-inline: 8px;
      margin-inline: auto;
      flex-direction: column;
      overflow: hidden;
   }

   .item {
      z-index: 11;
      display: flex;
      flex-direction: row;
      align-items: center;
      text-decoration: none;
      padding: 10px;
      padding-bottom:4px;
      box-sizing: border-box;
      border-bottom: 2px solid #000;
      transition: 0.2s;

      &:last-of-type {
         border-bottom: 1px solid transparent;
      }

      &:hover {
         background-color: #fff1;
         box-shadow: inset 2px 2px 5px 2px #0005;
         border-radius: 5px;
      }
   }

   .footer {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 6px;
   }

   @media (min-width: 768px ) { 

      .item {
         padding-inline: 8px;
      }

   }

</style>
