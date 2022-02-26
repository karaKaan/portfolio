<script>
    import Icon from '@iconify/svelte'
    import {SkillsIn, SkillsOut} from '../../../utils/stores/SkillsStore'
    export let src

    let left = "40%"
    let top = "-10%"
</script>

<div class="wrapper">
    <div class="outer-ring">
        {#each $SkillsOut as skill (skill.id)}
            <span class="icon" class:circle={skill.needCircle} style="left: {skill.left}; top:{skill.top}; ">
                <Icon icon={skill.icon} width={60}/>
            </span>
        {/each}
    </div>
    <div class="inner-ring">
        {#each $SkillsIn as skill (skill.id) }
            <span class="inner-icon " class:circle={skill.needCircle} style="left: {skill.left}; top:{skill.top};">
                <Icon icon={skill.icon} width={60} />
            </span>
        {/each}
    </div>
    <img class="image" src={src} alt="">
</div>

<style>

    .wrapper {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        left: 25%;
        bottom: 50px;
    }

    .icon,
    .inner-icon{
        position: absolute;
        color: var(--primary-700);
        opacity: .4;
    }

    .icon {
        animation: icon-rotate 50s linear infinite;
    }
    .inner-icon {
        animation: icon-rotate 50s linear infinite reverse;
    }
    .outer-ring{
        position: absolute;
        width: 500px;
        height: 500px;
        border-radius:300px;
        animation: orbit 50s linear infinite reverse;
    }
    .inner-ring{
        position: absolute;
        width: 400px;
        height: 400px;
        border-radius:300px;
        animation: orbit 50s linear infinite;
    }
    .image{
        position: absolute;
        width: 250px;
    }

    @keyframes icon-rotate{
        from{
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    @keyframes orbit {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }


</style>