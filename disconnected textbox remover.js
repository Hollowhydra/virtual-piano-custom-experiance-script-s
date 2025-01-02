 //  by Anzaz

function removeIdlePop() { const idlePop = document.getElementById('idlePop'); if (idlePop) { idlePop.remove(); console.log('Idle pop-up removed'); } } setInterval(removeIdlePop, 1000);
