const checkCashRegister = (price, cash, cid) => {
    const totalCid = cid.map(arr => arr[1]).reduce((prev, curr) => prev + curr);
    let changeDue = cash - price;
    const detailedCid = cid.map(
        arr => {
            return arr[0] == "PENNY" ? [arr[0], arr[1], 0.01] :
                arr[0] == "NICKEL" ? [arr[0], arr[1], 0.05] :
                arr[0] == "DIME" ? [arr[0], arr[1], 0.1] :
                arr[0] == "QUARTER" ? [arr[0], arr[1], 0.25] :
                arr[0] == "ONE" ? [arr[0], arr[1], 1] :
                arr[0] == "FIVE" ? [arr[0], arr[1], 5] :
                arr[0] == "TEN" ? [arr[0], arr[1], 10] :
                arr[0] == "TWENTY" ? [arr[0], arr[1], 20] : [arr[0], arr[1], 100]
        }
    );
    const changeCalc = cid => {
        let change = [
            ["PENNY", 0],
            ["NICKEL", 0],
            ["DIME", 0],
            ["QUARTER", 0],
            ["ONE", 0],
            ["FIVE", 0],
            ["TEN", 0],
            ["TWENTY", 0],
            ["ONE HUNDRED", 0]
        ];
        for (let i = cid.length - 1; i >= 0; i--) {
            for (let j = changeDue; j >= cid[i][2] && cid[i][1] > 0; j -= cid[i][2]) {
                change[i][1] += cid[i][2];
                cid[i][1] -= cid[i][2];

                changeDue = parseFloat(changeDue).toFixed(2) - cid[i][2];
            }
        }
        return changeDue == 0 ? {
            status: "OPEN",
            change: change.filter(arr => arr[1] != 0).reverse(),
        } : { status: "INSUFFICIENT_FUNDS", change: [] }
    };

    return totalCid < changeDue ? { status: "INSUFFICIENT_FUNDS", change: [] } :
        totalCid == changeDue ? { status: "CLOSED", change: cid } : changeCalc(detailedCid)
}

console.log(
    checkCashRegister(3.26, 100, [
        ["PENNY", 1.01],
        ["NICKEL", 2.05],
        ["DIME", 3.1],
        ["QUARTER", 4.25],
        ["ONE", 90],
        ["FIVE", 55],
        ["TEN", 20],
        ["TWENTY", 60],
        ["ONE HUNDRED", 100]
    ]));