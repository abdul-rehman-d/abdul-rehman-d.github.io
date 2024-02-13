<script lang="ts">
    import history from "../data/history";
</script>

<div class="container">
    <div class="work_experience__container">
        <p class="work_experience__heading">Work History</p>
        <div class="work_experience__items">
            {#each history as item}
                <div class="work_experience__item">
                    <div class="work_experience__item_head">
                        <div>
                            <span>{item.title}</span>
                            <span class="work_experience__item_comp">{item.company}</span>
                        </div>
                        <div>
                            <span>{item.start_date}</span>
                            <span>{item.end_date}</span>
                        </div>
                    </div>
                    <ul>
                        {#each item.responsibilities as responsibility}
                            <li>{responsibility}</li>
                        {/each}
                    </ul>
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
    .container {
        flex-grow: 1;
        align-self: stretch;

        padding: 0 10px 20px;
    }
    .work_experience__container {
        padding: 0.7rem;
        border-radius: 1rem;
        background-color: #000000c9;
        color: #fff;
        font-size: 0.75rem;
        line-height: 1.2;
    }
    .work_experience__heading {
        font-size: 0.85rem;
        font-weight: 600;
        color: #f9ca0b;
    }
    .work_experience__items {
        padding-left: 10px;
        position: relative;
    }
    .work_experience__items::before {
        content: "";
        display: block;
        width: 2px;
        top: 0;
        bottom: 0;
        left: 0;
        background-color: #f9ca0b;
        position: absolute;
    }
    .work_experience__item {
        margin-top: 0.5rem;
    }
    .work_experience__item_head {
        display: flex;
        justify-content: space-between;
    }
    .work_experience__item_head > * {
        display: flex;
        flex-direction: column;
        gap: 0.125rem;
    }
    .work_experience__item_head > *:nth-child(2) {
        align-items: flex-end;
        color: #ffffffc0;
        font-size: .7rem;
    }
    .work_experience__item_comp {
        color: #f9ca0b;
    }
    .work_experience__item ul {
        list-style: disc;
        padding: .5rem 0 .25rem .5rem;
    }
</style>
