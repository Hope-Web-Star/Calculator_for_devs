function vw_calc() {
    let px = parseFloat(document.getElementById("vw-pixel-input").value);
    let vw = parseFloat(document.getElementById("vw-size-input").value);
    let res = (px / vw * 100).toFixed(2);

    document.getElementById("vw-result").innerHTML = res.toString();
}

function vh_calc() {
    let px = parseFloat(document.getElementById("vh-pixel-input").value);
    let vh = parseFloat(document.getElementById("vh-size-input").value);
    let res = (px / vh * 100).toFixed(2);

    document.getElementById("vh-result").innerHTML = res.toString();
}

function rem_calc() {
    const fontSize = parseFloat(window.getComputedStyle(document.documentElement).fontSize);

    let px = parseFloat(document.getElementById("rem-pixel-input").value);
    // let vw = parseFloat(document.getElementById("rem-size-input").value);
    let res = (px / fontSize).toFixed(2);

    document.getElementById("rem-result").innerHTML = res.toString();
}