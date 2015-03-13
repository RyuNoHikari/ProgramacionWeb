
function Calcula(){

var monto=document.getElementById('monto').value;
var meses=document.getElementById('meses').value;
var resultado;
var intereses;
var mensualidades;
var prestar;



if (meses>=1 && meses<=3) {
	intereses =eval(monto*.01);
	prestar=eval(monto + '+' + intereses)
};

if (meses>=4 && meses<=7) {
	intereses =eval(monto*.02);
	alert(intereses);
	alert(monto);
	prestar=eval(monto + '+' + intereses)
	alert(prestar);
};

if (meses>=8) {
	intereses =eval(monto*.03);
	prestar=eval(monto + '+' + intereses)
};

mensualidades= eval(prestar/meses);

document.Prestamos.prestamo.value=prestar;
document.Prestamos.mensualidad.value=mensualidades;

}