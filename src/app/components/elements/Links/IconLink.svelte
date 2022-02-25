<script>
    import Icon from '@iconify/svelte'
    export let icon;
    export let size;
    export let href;
</script>

<a class='wrapper' href={href} >
    <Icon {icon} width={size}/>
</a>

<style>
    .wrapper{
        transition: ease-in-out 150ms;
    }

    .wrapper:hover{
        color: var(--primary-500);
        transition: ease-in-out 150ms;
    }


</style>

