<script lang="ts">

   import LinkedinSvg from "$lib/svg/linkedin.svg.svelte";
   import GithubSvg from "$lib/svg/github.svg.svelte";
   import AmiensBlackMap from "$lib/assets/png/Amiens_black_map.png"

</script>

<section>

   <div class="box">

      <div class="contact">

         <h1>
            Contact
         </h1>

         <p>Si tu souhaites me contacter c'est par ici..</p>
      
         <a 
            href='https://www.linkedin.com/in/VincentJourdan' 
            target="_blank" rel="noreferrer"
            title="lien vers mon profil Linkedin"
            class="item" 
         >
            <span class="icon"><LinkedinSvg size={36} color={'#444'} /></span>
            <span class="link">Linkedin</span>
         </a>

         <p>Tu peux aussi voir mes projets GitHub ici..</p>
      
         <a 
            href='https://www.linkedin.com/in/VincentJourdan' 
            target="_blank" rel="noreferrer"
            title="lien vers mon dépôt github"
            class="item" 
         >
            <span class="icon"><GithubSvg size={36} color={'#777'} /></span>
            <span class="link">GitHub</span>
         </a>
   
      </div>
   
      <div class="map">
         <img src={AmiensBlackMap} alt="carte amiens" />
      </div>

   </div>

</section>

<style lang="css">
   
   section {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
   }

   .box {
      height: 400px;
      width: 700px;
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: space-between;
   }

   .contact {

      /* border-bottom: 1px solid #fff; */

      & h1 {
         margin-bottom: 24px;
      }

      & .item {
         display: inline-flex;
         align-items: center;
         text-decoration: none;
         box-sizing: border-box;

         &:first-of-type {
            margin-bottom: 24px;
         }

         &:hover {
            background-color: #fff1;
            box-shadow: inset 2px 2px 5px 2px #0005;
            border-radius: 5px;
         }
      }

      & .icon {
         display: flex;
         justify-self: center;
      }

      & .link {
         font-size: 2.6rem;
         line-height: 2.6rem;
         margin-left: 12px;
         padding-top: 6px;
      }
   }

   .map {
      height: 100%;

      & img {
         height: 100%;
      }
   }

</style>