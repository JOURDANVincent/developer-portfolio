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
        /* height: auto; */
        /* width: auto; */
        /* min-width: 360px; */
        background-color: #0005;
        -webkit-backdrop-filter: blur(8px);
        backdrop-filter: blur(8px);
        padding: 24px; 
        padding-bottom: 12px;
        /* margin-bottom: 8px; */
        box-sizing: border-box;
        /* box-shadow:  2px 2px 10px 2px #fff1; */
        border: 1px solid #000;
        border-radius: 3px;

        &:first-of-type {
            margin-right: 8px;
        }
    }

    h2 {
        width: 100%; 
        font-size: 1.6rem; 
        color: #fff; 
        margin-bottom: 8px;
    }

    h3 {
        font-size: 1.2rem; 
        font-weight: bold; 
        /* color: #E14242;  */
        color: #e37070;
        margin: 2px 0 2px 0;
    }
    .h3-span {
        padding-left: 10px;
        font-weight: initial; 
        color: #fff; 
    }

    .date {
        /* border-right: 1px solid #fff; */
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
        /* border-right: 2px solid #000; */
    }

    .techno > strong {
        color: #777; 
        font-weight: bold;
        font-style: italic;  
        padding-left: 10px;
    }

    @media (max-width: 768px) {
        .card {
            padding: 12px 16px 6px 16px; 
        }
        h2 {
            font-size: 1.5rem;
        }
    }

</style>