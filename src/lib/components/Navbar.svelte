<script lang="ts">

   // REACTIVE
   import { page } from '$app/stores';
   import { expandNav, platform, orientation } from '$lib/stores/store'

   // SVG MENU ICONS
   import HomeSvg from '$lib/svg/menu/Home.svelte';
   import TagSvg from '$lib/svg/menu/Tag.svg.svelte';
	import AboutSvg from '$lib/svg/menu/About.svg.svelte';
   import ComputerSvg from '$lib/svg/menu/Computer.svg.svelte';
   import ExperienceSvg from '$lib/svg/menu/Experience.svg.svelte';
   import StudySvg from '$lib/svg/menu/Study.svg.svelte';
   import SkillSvg from '$lib/svg/menu/Skill.svg.svelte';
   import ContactSvg from '$lib/svg/menu/Contact.svg.svelte';
   
   // SVG FOOTER ICONS
   import GithubSvg from "$lib/svg/github.svg.svelte";
   import LinkedinSvg from "$lib/svg/linkedin.svg.svelte";

   // PATH
   import { base } from '$app/paths';
   
   // ROUTES & PATH
   const allRoutes = [
      { name: 'HOME', path: `/`, svg: HomeSvg},
      { name: 'ABOUT', path: `/section`, svg: AboutSvg},
      { name: 'SKILLS', path: `/section#skill`, svg: SkillSvg},
      { name: $platform === 'mobile' ? 'EXP.' : 'EXPERIENCES', path: `/section#experience`, svg: ExperienceSvg},
      { name: 'STUDIES', path: `/section#study`, svg: StudySvg},
      { name: 'PORTFOLIO', path: `/portfolio`, svg: ComputerSvg},
      { name: 'CONTACT', path: `/contact`, svg: ContactSvg},
      // { name: 'Accueil', path: `/`, svg: HomeSvg},
      // { name: 'A Propos', path: `/section`, svg: AboutSvg},
      // { name: 'Compétences', path: `/section#skill`, svg: SkillSvg},
      // { name: 'Expériences', path: `/section#experience`, svg: ExperienceSvg},
      // { name: 'Formations', path: `/section#study`, svg: StudySvg},
      // { name: 'Porte-folio', path: `/portfolio`, svg: ComputerSvg},
      // { name: 'Contact', path: `/contact`, svg: ContactSvg},
   ]

   // CURRENT ROUTE -> ACTIVE
   $: currentRoute = base + $page.url.pathname + $page.url.hash

   // HANDLE NAVBAR FUNCTION PLATFORM


</script>

<nav style="display: {currentRoute === base + '/' ? 'none' : 'flex'}">  

   <div class="home">
      <button type="button"
         class="item"
         title={`ouvre menu`}
         on:click={() =>expandNav.set(!$expandNav)}
      >
         <span class="icon"><TagSvg size={22} color={'#E14242'}/></span>
         {#if ($expandNav && $platform != 'mobile') || $orientation === 'portrait' || $platform === 'mobile'}
            <span class="link" >MENU</span>
         {/if}
      </button>
   </div>

   {#if ($expandNav && $platform != 'desktop') || ($platform === 'tablet' && $orientation === 'landscape')}
      <div class="menu">

         {#each allRoutes as route}
            <a href={base + route.path} 
               class="item"
               class:active={currentRoute === base + route.path}
               title={`dirige vers page ${route.path}`}
            >
               <span class="icon"><svelte:component this={route.svg} size={22} color={currentRoute === base + route.path ? '#E14242' : '#ccc'}/></span>
               {#if ($expandNav && $platform != 'mobile') || $orientation === 'portrait' || $platform === 'mobile'}
                  <span class="link">{route.name}</span>
               {/if}
            </a>
         {/each}
         
      </div>
   {/if}

   {#if $platform === 'desktop' || ($platform === 'tablet' && $orientation === 'landscape')}
      <div class="footer" >
         <a 
            href='https://github.com/JOURDANVincent' 
            target="_blank" rel="noreferrer"
            title="lien vers mon compte Github"
            class="item" 
         >
            <span class="icon"><GithubSvg size={22} color={'#777'} /></span>
            {#if ($expandNav && $platform === 'tablet')}
               <span class="link">GITHUB</span>
            {/if}
         </a>
         <a 
            href='https://www.linkedin.com/in/VincentJourdan' 
            target="_blank" rel="noreferrer"
            title="lien vers mon profil Linkedin"
            class="item" 
         >
            <span class="icon"><LinkedinSvg size={22} color={'#777'} /></span>
            {#if ($expandNav && $platform === 'tablet')}
               <span class="link">LINKEDIN</span>
            {/if}
         </a>
      </div>
   {/if}

</nav>

<style>

   nav {
      z-index: 10;
      position: fixed;
      bottom: 12px;
      right: 12px;
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      justify-content: space-between;
      padding: 4px 0;
      -webkit-backdrop-filter: blur(12px);
      backdrop-filter: blur(12px);
      background-color: #0007;
      box-sizing: border-box;
      border: 1px solid #222;
      border-radius: 20px;
      box-shadow: 3px 0px 10px 2px #0009;
      transition: 0.3s;
   }

   .home {
      width: 100%;
      background-color: initial;
      box-sizing: border-box;
      /* background-color: #0009; */
   }

   button {
      background-color: initial;
      outline: none;
      border: none;
   }

   .menu {
      width: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
   }

   .item {
      z-index: 11;
      width: 54px;
      /* height: 48px; */
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      padding: 4px;
      padding-bottom: 10px;
      box-sizing: border-box;
      /* border-bottom: 1px solid #fff4; */
      transition: 0.2s;
   }
   .item:last-of-type {
      /* border-bottom: 1px solid transparent; */
   }

   .icon {
      display: flex;
      justify-self: center;
      margin-bottom: 8px;
   }

   button .link, .link {
      font-size: 0.6rem;
      line-height: 0.6rem;
      color: #fff;
      /* margin-left: 12px; */
   }

   .footer {
      width: 100%;
      /* display: flex;
      flex-direction: column; */
      /* align-items: flex-start; */
      /* padding-left: 8px;
      padding-bottom: 6px; */
      box-sizing: border-box;
   }

   @media (min-width: 768px ) { 

      nav {
         bottom: 24px;
         right: 24px;
      }

      button .link, .link {
         font-size: 0.7rem;
      }

      .item {
         width: 76px;
         padding: 10px;
      }

   }

   @media (min-width: 992px ) { 

      nav {
         bottom: 0;
         left: 0;
         right: inherit;
         height: 100%;
         max-width: 214px;
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: space-between;
         padding: initial;
         background-color: transparent;
         -webkit-backdrop-filter: blur(12px);
         backdrop-filter: blur(12px);
         box-sizing: border-box;
         border-radius: 0;
         border: 1px solid #000;
         box-shadow: 3px 0px 10px 2px #0009;
         transition: 0.3s;
      }

      .home {
         width: 100%;
         padding-inline: 8px;
         padding-top: 12px;
         box-sizing: border-box;
      }

      .menu {
         width: 100%;
         box-sizing: border-box;
         padding-inline: 8px;
         display: flex;
         flex-direction: column;
         align-items: flex-start;
      }

      .item {
         z-index: 11;
         height: 48px;
         width: 100%;
         display: flex;
         flex-direction: row;
         align-items: center;
         justify-content: flex-start;
         text-decoration: none;
         padding: 10px;
         box-sizing: border-box;
         border-bottom: 2px solid #000;
         transition: 0.2s;
      }
      .item:last-of-type {
         border-bottom: 1px solid transparent;
      }

      .icon {
         display: flex;
         justify-self: center;
         margin-bottom: 0;
      }

      button .link, .link {
         font-size: 1.2rem;
         /* line-height: 1.6rem; */
         margin-left: 12px;
         padding-top: 4px;
      }

      .footer {
         width: 100%;
         display: flex;
         flex-direction: column;
         align-items: flex-start;
         padding-inline: 8px;
         padding-bottom: 6px;
         box-sizing: border-box;
      }

   }

</style>
