<script lang="ts">

   import LinkedinSvg from "$lib/svg/linkedin.svg.svelte";
   import GithubSvg from "$lib/svg/github.svg.svelte";
   import AmiensBlackMap from "$lib/assets/png/Amiens_black_map.png"

</script>

<section>

   <div class="contact">

      <h1>Contact</h1>

      <p>Si tu souhaites me contacter c'est par ici..</p>
   
      <a href='https://www.linkedin.com/in/VincentJourdan' 
         target="_blank" rel="noreferrer"
         title="lien vers mon profil Linkedin"
      >
         <span class="iconSvg"><LinkedinSvg size={36} color={'#444'} /></span>
         <span class="linkName">Linkedin</span>
      </a>

      <p>Tu peux aussi voir mes projets GitHub ici..</p>
   
      <a href='https://www.linkedin.com/in/VincentJourdan' 
         target="_blank" rel="noreferrer"
         title="lien vers mon dépôt github" 
      >
         <span class="iconSvg"><GithubSvg size={36} color={'#777'} /></span>
         <span class="linkName">GitHub</span>
      </a>

   </div>

   <div class="map">
      <img src={AmiensBlackMap} alt="carte amiens" />
   </div>

</section>

<style lang="css">

   section {
      width: 700px;
      display: grid;
      grid-template-columns: 1fr 280px;
      column-gap: 48px;
      align-items: flex-end;
   }

   .contact {

      & h1 {
         margin-bottom: 24px;
      }

      & p {
         margin-bottom: 0;
      }

      & a {
         display: inline-flex;
         align-items: center;
         text-decoration: none;

         &:first-of-type {
            margin-bottom: 24px;
         }

         &:hover {
            color: #E14242;
         }

         & .iconSvg {
            display: flex;
            justify-self: center;
         }

         & .linkName {
            font-size: 2.6rem;
            line-height: 2.6rem;
            margin-left: 12px;
            padding-top: 6px;
         }
      }
   }

   .map {
      height: 100%;

      & img {
         height: 400px;
      }
   }

</style>