<script lang="ts">
    let currentNumStr: string = "0";
    let prevNumber: number | undefined = undefined;
    let operationSelected: string = "";
    let isInsertNewNumberActive: boolean = false;

    $: currentNumStrFormatted = formatNum(currentNumStr);
    $: currentNum = parseFloat(currentNumStr);

    function formatNum(num: string): string {
        return num;
    }

    function onNumberPress(num: string) {
        console.log("num", num);
        if (isInsertNewNumberActive) {
            if (num === ".") {
                currentNumStr = "0.";
            } else {
                currentNumStr = num;
            }
            isInsertNewNumberActive = false;
        } else if (currentNumStr === "0") {
            if (num === ".") {
                currentNumStr += num;
            } else {
                currentNumStr = num;
            }
        } else {
            currentNumStr += num;
        }
    }

    function onOperationPress(op: string) {
        if (operationSelected && prevNumber !== undefined) {
            onCalculate();
        }
        isInsertNewNumberActive = true;
        prevNumber = parseFloat(currentNumStr);
        if (op !== "=") {
            operationSelected = op;
        }
    }

    function onCalculate() {
        if (!operationSelected || !prevNumber) {
            return;
        }
        let ans = 0;
        switch (operationSelected) {
            case "+":
                ans = (prevNumber + currentNum);
                break;
            case "/":
                ans = (prevNumber / currentNum);
                break;
            case "x":
                ans = (prevNumber * currentNum);
                break;
            case "-":
                ans = (prevNumber - currentNum);
                break;
            default:
                break;
        }
        currentNumStr = ans.toString();
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
    let operations = ["/", "x", "-", "+", "="].map((op) => ({
        label: op,
        onclick: () => onOperationPress(op),
    }));
    let nums = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0", "."].map(
        (num) => ({ label: num, onclick: () => onNumberPress(num) }),
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
                {currentNumStrFormatted}
            </p>
        </div>
        <div class="calc__buttons_grid">
            {#each actions as action (action.label)}
                <button class="action" on:click={action.onclick}
                    >{action.label}</button
                >
            {/each}
            {#each operations as operation (operation.label)}
                <button
                    class="operation"
                    class:isActive={operation.label === operationSelected && isInsertNewNumberActive}
                    on:click={operation.onclick}>{operation.label}</button
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
    button.operation.isActive {
        color: #ff9500;
        background-color: #fbfbfd;
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
