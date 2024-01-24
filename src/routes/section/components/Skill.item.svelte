<script lang="ts">

    import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

    // PATH
    import { base } from '$app/paths';

    export let title:string;
    export let src:string;
    export let level: number;

    const progress = tweened(0, {
		duration: 1000,
		easing: cubicOut
	});

</script>

<button class="item" on:click={() => progress.set(level)} aria-roledescription="show level">

    <img src={base + src} alt={src}>
    
    <div class="content">

        <div class="text-block">
            <h3>{title}</h3>
            <!-- <p>{$progress != 0 ? Math.round($progress) + ' %': ''}</p> -->
        </div>

        <div class="progress-item">
            <div class="progress-bar" style="width: {$progress}%"></div>
            <div class="progress-track" ></div>
        </div>  
    </div>
    
</button>

<style lang="css">

    .item {
        background-color: #fff1;
        min-height: 46px;
        width: auto;
        -webkit-backdrop-filter: blur(8px);
        backdrop-filter: blur(8px);
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 6px;
        margin-right: 6px;
        padding-inline: 4px;
        padding-bottom: 2px;
        border: 1px solid #333;
        box-sizing: border-box;
        border-radius: 10px;
    }

    img {
        margin-left: 6px;
        filter: grayscale();
    }

    .content {
        min-width: 60px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
    }

    img {
        height: 28px;
        width: 28px;
        margin-right: 6px;
    }

    .text-block {
        display: inline-flex;
        align-items: flex-end;
        justify-content: space-between;
    }

    h3 {
        font-size: 1rem; 
        color: #fff;
        font-weight: normal; 
        margin: 0;
    }

    .progress-item {
        width: 100%;
        z-index: 0;
    }

    .progress-bar {
        z-index: 1;
        position: relative;
        bottom: 0px;
        height: 3px;
        width: 0;
        background-color: #E14242;
        border-radius: 1px;
        box-sizing: border-box;
    }
    .progress-bar:last-of-type {
        border-right: none;
    }

    .progress-track {
        z-index: 0;
        position: relative;
        bottom: 2px;
        height: 1px;
        width: 100%;
        background-color: #aaa5;
        border-radius: 1px;
        box-sizing: border-box;
    }

    @media (max-width: 768px) {

        .item {
            padding: 6px;
            border: none;
            box-shadow: 1px 1px 3px 1px #0004;
        }

        .content {
            min-width: initial;
            width: 100%;
            margin-top: 8px;
        }

        h3 {
            font-size: 0.6rem;
        }
    }

    @media (min-width: 768px) {

        .item {
            display: flex;
            flex-direction: row;
            align-items: center;
        }
        
        img {
            height: 100%;
            width: 28px;
        }

        .content {
            padding: 5px 6px 5px 6px;
        }

        h3 {
            font-size: 1.2rem; 
        }
    }

    @media (min-width: 768px) and (max-width: 991px) {

        .item {
            margin-right: 3px;
        }
    }  

</style>