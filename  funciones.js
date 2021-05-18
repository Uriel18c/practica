function  calcularSalario()  {
  const  salario=parseFloat(document.getElementById('salario').value);
  const  diasTrabajados=parseFloat(document.getElementById ('diasTrabajados').valor);
  if  (salario>0 && diasTrabajados>=0){
    const  Total= salario*diasTrabajados
    document.getElementById('Total').valor=Número.parseFloat(Total);
  }
}
