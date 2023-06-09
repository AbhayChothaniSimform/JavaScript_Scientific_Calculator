let dis = document.getElementById("result");
let upper = document.getElementById("subtext");
let marr = [];
let op = ['+', '-', '*', '/', '%', '.'];

function display(val) {
    let oldop = dis.value.slice(-1);
    if(op.includes(val) && op.includes(oldop)) {
            dis.value = dis.value.slice(0, -1);
            dis.value += val;
    } else {
        dis.value += val;
    }
}

function textChange() {
    let btntxt = document.getElementById("btntxt").innerHTML;
    if(btntxt == 'DEG')
        document.getElementById("btntxt").innerHTML = 'RAD';
    else
        document.getElementById("btntxt").innerHTML = 'DEG';
}

function fe() {
    var cb = document.getElementById('btn-check');
    if(cb.checked == true) {
        if(dis.value!='') {
            const fE = parseFloat(dis.value);
            dis.value = fE.toExponential();
        } else {
            const fE = 0;
            dis.value = fE.toExponential();
        }
    }
}

function ms() {
    if(dis.value == '') {
        marr.push(0);
    }
    if(marr[marr.length-1] != dis.value) {
        marr.push(parseFloat(dis.value));
    }
    document.querySelector('#mc').disabled = false;
    document.querySelector('#mr').disabled = false;
    document.querySelector('#m').disabled = false;
    console.log(marr);
}

function mr() {
    dis.value = marr[marr.length-1];
    console.log(marr);
}

function mc() {
    marr.splice(0, marr.length);
    document.querySelector('#mc').disabled = true;
    document.querySelector('#mr').disabled = true;
    document.querySelector('#m').disabled = true;
    console.log(marr);
}

function mplus() {
    marr[marr.length-1] += parseFloat(dis.value);
    console.log(marr);
}

function mminus() {
    marr[marr.length-1] -= parseFloat(dis.value);
    console.log(marr);
}

function m() {
    let html = "<table>";
    for (var i = marr.length-1; i >= 0; i--) {
        html+="<tr>";
        html+="<td>"+marr[i]+"</td>";
        html+="</tr>";
    }
    html+="</table>";
    document.getElementById('memory').innerHTML = html;
}


//CE
function dlt() {
    if(dis.value == '') {
        upper.value = '';
    }
    dis.value = '';
}
//Backspace
function pop() {
    if(dis.value=='Error!' || dis.value=='Infinity' || dis.value=='NaN') {
        dis.value = '';
    } else {
        dis.value = dis.value.slice(0, dis.value.length-1);
    }
}
function sqr() {
    if(document.getElementById('sqr').innerHTML == 'x<sup>3</sup>') {
        upper.value = 'cube('+ dis.value + ')';
        dis.value = Math.pow(dis.value, 3);
    } else {
        upper.value = 'sqr('+ dis.value + ')';
        dis.value = Math.pow(dis.value, 2);   
    }
}



function sin() {
    let mode = document.getElementById("btntxt").innerHTML;
    upper.value = 'sin('+ dis.value + ')';
    if(mode == 'RAD') {
        dis.value = Math.sin(dis.value);
    } else {
        dis.value = Math.sin(dis.value*(Math.PI/180));
    }
}
function cos() {
    let mode = document.getElementById("btntxt").innerHTML;
    upper.value = 'cos('+ dis.value + ')';
    if(mode == 'RAD') {
        dis.value = Math.cos(dis.value);
    } else {
        dis.value = Math.cos(dis.value*(Math.PI/180));
    }
}

function tan() {
    let mode = document.getElementById("btntxt").innerHTML;
    upper.value = 'tan('+ dis.value + ')';
    if(mode == 'RAD') {
        dis.value = Math.tan(dis.value);
    } else {
        dis.value = Math.tan(dis.value*(Math.PI/180));
    }
}

function sec() {
    let mode = document.getElementById("btntxt").innerHTML;
    upper.value = 'sec('+ dis.value + ')';
    if(mode == 'RAD') {
        dis.value = 1 / Math.cos(dis.value);
    } else {
        dis.value = 1 / Math.cos(dis.value*(Math.PI/180));   
    }
}

function cosec() {
    let mode = document.getElementById("btntxt").innerHTML;
    upper.value = 'cosec('+ dis.value + ')';
    if(mode == 'RAD') {
        dis.value = 1 / Math.sin(dis.value);
    } else {
        dis.value = 1 / Math.sin(dis.value*(Math.PI/180));   
    }
}

function cot() {
    let mode = document.getElementById("btntxt").innerHTML;
    upper.value = 'cot('+ dis.value + ')';
    if(mode == 'RAD') {
        dis.value = 1 / Math.tan(dis.value);
    } else {
        dis.value = 1 / Math.tan(dis.value*(Math.PI/180));   
    }
}
//Mod
function absolute() {
    upper.value = 'abs('+ dis.value + ')';
    dis.value = Math.abs(dis.value);
}
function floor() {
    upper.value = 'floor('+ dis.value + ')';
    dis.value = Math.floor(dis.value);
}
function ceil() {
    upper.value = 'ceil('+ dis.value + ')';
    dis.value = Math.ceil(dis.value);
}
function rand() {
    dis.value = Math.random(dis.value);
}

function dms() {
    upper.value = "dms("+ dis.value +")";
    let degree = Math.floor(dis.value);
    let minutes = ((dis.value - Math.floor(dis.value)) * 60.0);
    let seconds = (minutes - Math.floor(minutes)) * 60.0;
    dis.value = degree + "." + Math.floor(minutes) + seconds.toFixed(0);
}

function deg() {}

function inverse() {
    upper.value = '1/('+ dis.value + ')';
    dis.value = 1 / dis.value;   
}
let btnCount = 1;
function changeBtn() {
    if(btnCount%2==0) {
        document.getElementById('sqr').innerHTML = 'x<sup>2</sup>';
        document.getElementById('root').innerHTML = '2&#x221A;x';
        document.getElementById('expo').innerHTML = 'x<sup>y</sup>';
        document.getElementById('tenpow').innerHTML = '10<sup>x</sup>';
        document.getElementById('log').innerHTML = 'log';
        document.getElementById('ln').innerHTML = 'ln';
        btnCount++;
    } else {
        document.getElementById('sqr').innerHTML = 'x<sup>3</sup>';
        document.getElementById('root').innerHTML = '3&#x221A;x';
        document.getElementById('expo').innerHTML = 'y&#x221A;x';
        document.getElementById('tenpow').innerHTML = '2<sup>x</sup>';
        document.getElementById('log').innerHTML = 'log<sub>y</sub>x';
        document.getElementById('ln').innerHTML = 'e<sup>x</sup>';
        btnCount++;
    }
}
function expo() {
    if(dis.value!='') {
        const fE = parseFloat(dis.value);
        dis.value = fE.toExponential();
    } else {
        const fE = 0;
        dis.value = fE.toExponential();
    }
}

function sqroot() {
    if(document.getElementById('root').innerHTML == '2√x') {
        upper.value = '√('+ dis.value + ')';
        dis.value = Math.sqrt(dis.value);
    } else {
        upper.value = 'cuberoot('+ dis.value + ')';
        dis.value = Math.pow(dis.value, 1/3);
    }
}
function xtoy() {
    if(document.getElementById('expo').innerHTML == 'x<sup>y</sup>') {
        dis.value += '**';
    } else {
        dis.value = dis.value + "**(1/";
    }
}
function tentox() {
    if(document.getElementById('tenpow').innerHTML == '10<sup>x</sup>') {
        upper.value = '10^('+ dis.value + ')';
        dis.value = Math.pow(10, dis.value);
    } else {
        upper.value = '2^('+ dis.value + ')';
        dis.value = Math.pow(2, dis.value);
    }

}
function ln() {
    if(document.getElementById('ln').innerHTML == 'ln') {
        upper.value = 'ln('+ dis.value + ')';
        dis.value = Math.log(dis.value);
    } else {
        upper.value = 'e^(' + dis.value + ')';
        dis.value = Math.pow(Math.E, dis.value);
    }
}
function plusminus() {
    if(dis.value>0)
        dis.value = 0-dis.value;
    else
        dis.value = Math.abs(dis.value);
}

function log() {
    upper.value = 'log('+ dis.value + ')';
    dis.value = Math.log10(dis.value);
}

function factorial() {
    upper.value = 'fact('+ dis.value + ')';
    let fact = 1;
    if(dis.value == 0 || dis.value == 1) {
        fact = 1;
    } else {
        for (let i = 1; i <= dis.value; i++) {
            fact *= i;
        }
    }
    dis.value = fact;
}


function answer() {
    try {
        upper.value = dis.value + '=';
        dis.value = '';
        let x = upper.value.slice(0,-1);
        var y = eval(x);
    } catch {
        y = 'Error!';
    }

    let cb = document.getElementById('btn-check');
    if(cb.checked == true) {
        dis.value = y.toExponential();
    } else {
        dis.value = y;
    }
}