<script lang="ts">

   import LinkedinSvg from "$lib/svg/linkedin.svg.svelte";
   import GithubSvg from "$lib/svg/github.svg.svelte";
   import AmiensBlackMap from "$lib/assets/png/Amiens_black_map.png"

</script>

<section>

   <div class="contact-box">

      <h1>Contact</h1>

      <div class="identity">
         <div class=detail>Nom <span>JOURDAN</span></div>
         <div class=detail>Prénom <span>Vincent</span></div>
         <div class=detail>Age <span>40 ans</span></div>
         <div class=detail>Ville <span>AMIENS</span></div>
      </div>

      <div>
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

   </div>

   <div class="map">
      <img src={AmiensBlackMap} alt="carte amiens" />
   </div>

</section>

<style lang="css">

   section {
      width: 100%;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      padding-inline: 18px;
      padding-top: 72px;
      padding-bottom: 80px;
   }

   .contact-box {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
   }

   .identity {
      margin-bottom: 24px;
      font-size: 1.4rem;
   }

   .detail {
      color: #777;
   }

   .detail span {
      color: #fff;
      margin-left: 6px;
   }

   p {
      margin-bottom: 0;
   }

   a {
      display: inline-flex;
      align-items: center;
      text-decoration: none;
   }
   a:first-of-type {
      margin-bottom: 24px;
   }
   a:hover {
      color: #E14242;
   }

   .iconSvg {
      display: flex;
      justify-self: center;
   }

   .linkName {
      font-size: 2rem;
      line-height: 2.4rem;
      margin-left: 12px;
      padding-top: 6px;
   }

   .map {
      height: 100%;
      width: 100%;
   }

   .map img {
      height: 100%;
      width: 100%;
      object-fit: contain;
   }

   @media(max-width: 819px) {

      .map {
         margin-top: 24px;
      }
   }

   @media(min-width: 820px) {

      section {
         max-width: 740px;
         display: grid;
         grid-template-columns: 1fr 300px;
         column-gap: 48px;
         padding-top: 36px;
         padding-bottom: 96px;
         padding-inline: 42px;
      }

      h1 {
         margin-bottom: 32px;
      }

      .map {
         height: 100%;
         width: 100%;
      }
   
   }

   @media(min-width: 992px) {

      section {
         max-width: 800px;
         border-bottom: 1px solid #444;
         border-top: 1px solid #444;
         border-radius: 5px;
         padding-bottom: 40px;
      }
   }

</style>