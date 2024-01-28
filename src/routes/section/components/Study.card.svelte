<script lang="ts">

    export let date:string;
    export let title:string;
    export let place:string;
    export let desc:string;
    export let techno:string;

</script>

<div class="card">
    
    <h2>
        {title}
    </h2>
    <h3>
        <span class="date">{date}</span><span class="h3-span">{place}</span>
    </h3>
    <p class="desc">
        {desc}
    </p>
    <p class="techno">
        <span>TECHNO</span><strong>{techno}</strong>
    </p>

</div>

<style lang="css">

    .card {
        width: auto;
        /* max-width: 320px; */
        background-color: #0005;
        -webkit-backdrop-filter: blur(8px);
        backdrop-filter: blur(8px);
        padding: 18px; 
        padding-bottom: 12px;
        border: 1px solid #000;
        border-radius: 3px;
        margin-bottom: 8px;
    }

    h2 {
        font-size: 1.4rem; 
        color: #fff; 
        margin-bottom: 8px;
    }

    h3 {
        font-size: 1rem; 
        font-weight: bold; 
        color: #e37070;
        color: #777;
        margin: 2px 0 2px 0;
    }
    .h3-span {
        padding-left: 10px;
        font-weight: initial; 
        color: #fff; 
    }

    .date {
        font-size: 2rem;
        padding-right: 10px;
    }
    
    .desc {
        margin-bottom: 4px;
        color: #ddd;
        font-size: 0.9rem;
    }

    .techno > span {
        color: #fff; 
        font-style: normal;
        font-weight: bold;
        padding-right: 10px;
    }

    .techno > strong {
        color: #777; 
        font-weight: bold;
        font-style: italic;  
        padding-left: 10px;
    }

    @media (min-width: 768px) {

        .card {
            width: 300px;
            margin-right: 8px;
        }
    }

    @media (min-width: 820px) {

        .card {
            width: 340px;
            margin-right: initial;
            margin-right: 8px;
            margin-bottom: 8px;
            padding: 24px; 
            padding-bottom: 12px;
        }
    }

    @media (min-width: 1024px) {

        h2 {
            font-size: 1.5rem;
        }

        h3 {
            font-size: 1.1rem; 
        }
    }

    @media (min-width: 1180px) {

        h2 {
            font-size: 1.6rem;
        }

        h3 {
            font-size: 1.2rem; 
        }
    }

</style>