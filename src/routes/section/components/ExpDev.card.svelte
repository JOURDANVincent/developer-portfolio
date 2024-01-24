<script lang="ts">

    export let date:string;
    export let post:string;
    export let place:string;
    export let desc:string[];
    export let techno:any;

</script>

<div class="card">
    
    <div class="card-header">
        <div>
            <h2>
                {post}
            </h2>
            <h3>
                {place}
            </h3>
        </div>
        <div class="date">
            {date}
        </div>
    </div>

    <div class="desc">
        {#each desc as desc}
            <p>{desc}</p>
        {/each}
    </div>

    <div class="techno-block">
        <p class="techno">
            <span>WEB</span>
            <strong>{techno.web}</strong>
        </p>
        <p class="techno">
            <span>MOBILE</span>
            <strong>{techno.mobile}</strong>
        </p>
        <p class="techno">
            <span>DESKTOP</span>
            <strong>{techno.desktop}</strong>
        </p>
    </div>

</div>

<style lang="css">

    .card {
        width: 100%;
        background-color: #fff2;
        -webkit-backdrop-filter: blur(8px);
        backdrop-filter: blur(8px);
        color: #fff; 
        text-align: initial;
        padding-inline: 24px;
        padding-top: 24px;
        padding-bottom: 12px;
        margin-bottom: 24px;
        box-sizing: border-box;
        border-radius: 3px;
    }

    .card-header {
        /* z-index: 1; */
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        font-size: 2rem;
    }

    .date {
        z-index: 0;
        position: absolute;
        /* top: 102px; */
        bottom: 20px;
        left: 0;
        right: 0;
        text-align: center;
        font-size: 9rem;
        line-height: 4.5rem;
        font-weight: bold;
        color: #444;
    }

    h2 {
        font-size: 1.5rem; 
        color: #fff;
    }

    h3 {
        color: #E14242;
        font-size: 1.4rem; 
        font-weight: bold; 
    }
    
    p {
        z-index: 2;
        position: relative;
        color: #aaa;
        font-weight: bold;
        font-size: 1.3rem;
    }

    .desc p {
        font-size: 1rem;
        color: #ddd;
        font-weight: initial;
        margin-bottom: 0px;
    }

    .techno-block {
        margin-top: 12px;
    }

    .techno {
        width: 100%;
        font-size: 1rem;
        font-style: italic;
        display: inline-flex; 
        justify-content: center;
    }

    .techno > span {
        width: 70px;
        font-style: normal; 
        font-weight: bold;
        text-align: right;
        padding-right: 10px;
        color: #eee;
        border-right: 1px solid #444;
    }

    .techno > strong {
        flex: 1;
        color: #000; 
        font-weight: bold;
        padding-left: 10px;
    }

    @media(min-width: 768px) {

        .card {
            max-width: 640px;
        }

        .card-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
        }

        .date {
            position: inherit;
            display: flex;
            font-size: 4.6rem;
            line-height: 4.5rem;
            color: #000;
        }

        h2 {
            font-size: 2.1rem; 
        }

        h3 {
            font-size: 2rem; 
        }
        
        p {
            font-size: 1.3rem;
        }

        .desc p {
            font-size: 1rem;
        }

        .techno {
            font-size: 1.2rem;
        }

        .techno > span {
            width: 70px;
        }
    }

</style>