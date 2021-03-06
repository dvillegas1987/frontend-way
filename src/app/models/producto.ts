export interface IProducto
{
    id_producto?:number;
    codigo:string;
    descripcion:string;
    precio_compra:number;
    precio_way:number;
    precio_final:number;
    categoria:number;
    estado:number;
    descuento:number;
    categoria_sexo:number;
    fecha_carga:any;
    descripcion_categoria:string;
    fecha_carga_formateada:any;
    year?:number;
    month?:number;
    day?:number;
    stock:number;
}