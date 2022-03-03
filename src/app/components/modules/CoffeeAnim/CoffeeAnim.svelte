<script>

</script>

<div class="move-bottom">
    <div class="coffee-cup ">
        <div class="handle" />
    </div>
</div>

<style>
    .coffee-cup{
        position: relative;
        border: 10px solid var(--neutral-white);
        width:  300px;
        height: 250px;
        border-bottom-left-radius: 100px;
        border-bottom-right-radius: 100px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        box-shadow: 0px 0px 0px 10px var(--primary-700);
        background-image: url('/images/coffee-brown.png');
        background-repeat: repeat-x;
        background-position: 0px 250px;
        animation: fill 5s linear infinite;
        animation-play-state: paused;
        animation-delay: calc(var(--coffee-scroll) * -4s);
        animation-iteration-count: 1;
        animation-fill-mode: both;
    }
    .move-bottom{
                
        animation: moveBottom 1.5s infinite;
        animation-play-state: paused;
        animation-delay: calc(var(--coffee-scroll) * -1s);
        animation-iteration-count: 1;
        animation-fill-mode: both;
    }
    @keyframes fill {
        0% {
            background-position: 0px 250px;
        }
        20% {
            background-position: -450px 100px;
        }
        40% {
            background-position: -900px 50px;
        }
        80% {
            background-position: -1350px -40px;
        }
        100% {
            background-position: 0px -200px;
        }

    }
    @keyframes moveBottom {
        from {
            transform: translateY(0px);
        }

        to {
            transform: translateY(600px);
        }

    }

    .handle{
        position: absolute;
        right: -30%;
        top: 10px;
        width: 60px;
        height: 70px;
        border: 10px solid var(--primary-800);
        border-top-right-radius: 100px;
        border-bottom-right-radius: 200px;
        background: transparent;
    }
    @keyframes rotate{
        to {
            transform: rotate(360deg);
        }
    }
</style>