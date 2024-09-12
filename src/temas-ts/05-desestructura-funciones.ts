export interface Producto{
    desc:string;
    precio : number;
}

const telefono : Producto={
    desc:'Sony Ericsson',
    precio:500
}
const tablet:Producto={
    desc:'Samsung',
    precio:724
}
function calcularIva(productos:Producto[]):number {
    let total=0;
    productos.forEach((producto)=>{
        total+=producto.precio;
    })
    return total*0.16;
}

const articulo1=[telefono,tablet];
const iva1=calcularIva(articulo1);

console.log(`IVA: ${iva1}`);

export function calcularIva2(productos:Producto[]):[number,number] {
    let total=0;
    productos.forEach(({precio})=>{
        total+=precio
    })
    return [total,total*0.16];
}

const articulo2=[telefono,tablet];
const [total,iva2]=calcularIva2(articulo2);
console.log('PRODUCTO 2 IVA 2');
console.log(`dTotal: ${total}`);
console.log(`IVA: ${iva2}`);