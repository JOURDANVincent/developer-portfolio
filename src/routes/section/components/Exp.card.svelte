<script lang="ts">

    export let date:string;
    export let title:string;
    export let place:string;
    export let desc:string[];
    export let techno:any;

</script>

<div class="card">
    
    <div class="card-header">
        <div>
            <h2>
                {title}
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
        width: 695px;
        background-color: #fff2;
        -webkit-backdrop-filter: blur(8px);
        backdrop-filter: blur(8px);
        color: #fff; 
        text-align: initial;
        padding: 24px;
        padding-inline: 36px;
        margin-bottom: 10px;
        box-sizing: border-box;
        /* box-shadow: 2px 2px 5px 2px #000; */
        border-radius: 3px;
    }

    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        font-size: 2rem;
    }

    .date {
        /* height: 200px; */
        font-size: 4.5rem;
        line-height: 4.5rem;
        font-weight: bold;
        color: #000;
        vertical-align: text-top;
    }

    h2 {
        font-size: 2.2rem; 
        color: #fff;
    }

    h3 {
        font-size: 2rem; font-weight: normal; 
    }
    
    p {
        color: #aaa;
        font-weight: bold;
        /* margin-bottom: 4px; */
        font-size: 1.3rem;
    }

    .desc p {
        font-size: 1rem;
        color: #ddd;
        font-weight: initial;
    }

    .techno-block {
        margin-top: 12px;
    }

    .techno {
        width: 100%;
        font-size: 1.1rem;
        font-style: italic;
        display: inline-flex; justify-content: center;
    }

    .techno > span {
        width: 60px;
        font-style: normal; font-weight: bold;
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

</style>