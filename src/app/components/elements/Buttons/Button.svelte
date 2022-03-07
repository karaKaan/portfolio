<script>
    export let text
    export let href
    export let primary
</script>

<button class="wrapper" class:primary={primary}>
    <a class="btn" href={href}>{text}</a>
</button>

<style>
    .wrapper{
        padding: 1em 2em;
        border-radius: 4px;
        font-size: 1.125rem;
    }

    .primary{
        background: var(--primary-500);
        color: var(--neutral-white);
        transition: all ease-in-out 150ms;
    }

    .primary:hover{
        background: var(--primary-600);
        transition: all ease-in-out 150ms;
    }
</style>