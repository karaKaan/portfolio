<script>
export let text


</script>

<li class="link-wrapper">
    <a href="/">{text}</a>
</li>

<style>
    .link-wrapper{
        transition: ease-in-out 150ms;
    }
.link-wrapper:hover{
    color: var(--primary-500);
    transition: ease-in-out 150ms;
}
</style>