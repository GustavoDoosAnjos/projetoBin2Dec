let botaoConverter = document.querySelector('.botaoConverter');
let botaoResetar = document.querySelector('.botaoResetar');


function dec2bin() {
    let bin = document.querySelector('.txtBinario').value
    let dec = document.querySelector('.txtDecimal').value

    if (bin === null || bin === '') {
        bin = (dec >>> 0).toString(2);
        document.querySelector('.txtBinario').value = bin
    }

    if (dec === null || dec === '') {
        dec = parseInt(bin, '2')
        document.querySelector('.txtDecimal').value = dec
    }
}

function resetar() {
    document.querySelector('.txtDecimal').value = ''
    document.querySelector('.txtBinario').value = ''
}

resetar()

botaoConverter.addEventListener('click', dec2bin)
botaoResetar.addEventListener('click', resetar)