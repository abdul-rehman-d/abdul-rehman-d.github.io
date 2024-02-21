<script lang="ts">
    let currentNumStr: string = "0";

    $: currentNumStrFormatted = formatNum(currentNumStr);
    $: currentNum = parseInt(currentNumStr);

    function formatNum(num: string): string {
        return num;
    }

    function onNumberPress(num: string) {
        console.log("num", num);
        if (currentNumStr === "0") {
            if (num === ".") {
                currentNumStr += num;
            } else {
                currentNumStr = num;
            }
        } else {
            currentNumStr += num;
        }
    }

    let actions = [
        {
            label: "AC",
            onclick: () => {},
        },
        {
            label: "+/-",
            onclick: () => {},
        },
        {
            label: "%",
            onclick: () => {},
        },
    ];
    let operations = [
        {
            label: "/",
            onclick: () => {},
        },
        {
            label: "x",
            onclick: () => {},
        },
        {
            label: "-",
            onclick: () => {},
        },
        {
            label: "+",
            onclick: () => {},
        },
        {
            label: "=",
            onclick: () => {},
        },
    ];
    let nums = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0", "."].map(
        (op) => ({ label: op, onclick: () => onNumberPress(op) }),
    );

    function getStyleFromIdx(idx: number, item: (typeof nums)[0]) {
        let col = (idx + 1) % 3;
        let row = Math.floor(idx / 3) + 2;

        if (item.label === ".") {
            col += 1;
        }

        let out = `grid-column-start: ${col}; grid-row-start: ${row};`;

        return out;
    }
</script>

<div class="calc__wrapper">
    <div class="topbarspacer"></div>
    <div class="calc__main">
        <!-- <p>Calculator</p> -->
        <div class="calc__display">
            <p class="calc__main_ans">
                {currentNumStr}
            </p>
        </div>
        <div class="calc__buttons_grid">
            {#each actions as action (action.label)}
                <button class="action" on:click={action.onclick}
                    >{action.label}</button
                >
            {/each}
            {#each operations as operation (operation.label)}
                <button class="operation" on:click={operation.onclick}
                    >{operation.label}</button
                >
            {/each}
            {#each nums as num, idx (num.label)}
                <button
                    class="num"
                    class:isZero={num.label === "0"}
                    style={getStyleFromIdx(idx, num)}
                    on:click={num.onclick}
                >
                    {num.label}
                </button>
            {/each}
        </div>
    </div>
</div>

<style>
    .calc__wrapper {
        flex-grow: 1;
        max-width: 100%;

        display: flex;
        flex-direction: column;

        background-color: #000;
        color: #fff;
    }

    .topbarspacer {
        flex-basis: 40px;
    }

    .calc__main {
        flex-grow: 1;

        display: flex;
        flex-direction: column;
        gap: 20px;

        padding: 0 20px 20px;
    }
    .calc__display {
        flex-grow: 1;

        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: flex-end;
        justify-content: flex-end;
    }
    .calc__main_ans {
        font-size: 3rem;
        color: #bcbdbb;
        word-wrap: break-word;
        max-width: 100%;
        text-align: right;
    }
    .calc__buttons_grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(autofill, 1fr);
        gap: 20px 10px;
    }
    .calc__buttons_grid button {
        border: none;
        box-shadow: none;
        outline: none;
        width: 100%;
        aspect-ratio: 1;
        border-radius: 50%;
        overflow: hidden;

        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 125%;
        font-weight: 700;
    }
    button.action {
        background: #d4d4d2;
        color: #1c1c1c;
    }
    button.operation {
        background: #ff9500;
        color: #fbfbfd;

        grid-column-start: 4;
    }
    button.num {
        background: #505050;
        color: #d4d4d2;
    }
    button.num.isZero {
        grid-column-end: span 2;
        border-radius: 25px;
        aspect-ratio: unset;
    }
</style>
