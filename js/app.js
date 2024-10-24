//App tipo inventario
const productos=[
    {
        id:1,
        nombre:"Labial liquido",
        precio: 129,
        imagen: "https://www.bing.com/images/search?view=detailV2&ccid=PfK42dwn&id=7C088DAC3E1AF254AB1F7F2064998651F2B4FFE5&thid=OIP.PfK42dwnpROAwQ6qG7pryAHaFj&mediaurl=https%3A%2F%2Fallskinsbeauty.com%2Fwp-content%2Fuploads%2F2018%2F09%2Fyuya-labiales-velvet-review6-1440x1080.jpg&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.3df2b8d9dc27a51380c10eaa1bba6bc8%3Frik%3D5f%252b08lGGmWQgfw%26pid%3DImgRaw%26r%3D0&exph=1080&expw=1440&q=labial+yuya&simid=608018476371020050&FORM=IRPRST&ck=56D989E78147CAE12C1445784C55513A&selectedIndex=14&itb=0&cw=1145&ch=535&ajaxhist=0&ajaxserp=0",
        stock: 50,
    },
    {
        id:2,
        nombre:"Mascara de pestañas",
        precio: 189,
        imagen: "https://www.bing.com/images/search?view=detailV2&ccid=ecxIg5h9&id=6CA57C5A123492AF06636BCB5FE57DCDBFEE9042&thid=OIP.ecxIg5h92oXgimNqEmaVEQHaGk&mediaurl=https%3A%2F%2Fcdnx.jumpseller.com%2Fauratienda%2Fimage%2F21392145%2FScreenshot_20211227-194055_Google.jpg%3F1641355732&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.79cc4883987dda85e08a636a12669511%3Frik%3DQpDuv8195V%252fLaw%26pid%3DImgRaw%26r%3D0&exph=959&expw=1080&q=mascara+de+pesta%C3%B1as+yuya&simid=608020228761856701&FORM=IRPRST&ck=D1F2D5336197F8E5BE414CC1AABBD7EB&selectedIndex=2&itb=0&cw=1145&ch=535&ajaxhist=0&ajaxserp=0",
        stock: 30,
    },
    {
        id:3,
        nombre:"Paleta de sombras",
        precio: 230,
        imagen: "https://www.bing.com/images/search?view=detailV2&ccid=J8t1pNDf&id=1156373E6BAF3542FEBED9E7E5AE3893C55FFBB5&thid=OIP.J8t1pNDfvHoWKg0NvcwLAgHaFj&mediaurl=https%3A%2F%2Fallskinsbeauty.com%2Fwp-content%2Fuploads%2F2017%2F10%2F6551D352-3224-49F0-A0CE-520EDBFE45B0.jpg&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.27cb75a4d0dfbc7a162a0d0dbdcc0b02%3Frik%3DtftfxZM4ruXn2Q%26pid%3DImgRaw%26r%3D0&exph=2448&expw=3264&q=paleta+de+sombras+yuya&simid=608015439843384825&FORM=IRPRST&ck=2BAD3991F74702BDF8DD5E5BD2D8C9C5&selectedIndex=2&itb=0&cw=1145&ch=535&ajaxhist=0&ajaxserp=0",
        stock: 120,
    },
    {
        id:4,
        nombre:"Maquillaje liquido",
        precio: 239,
        imagen: "https://www.bing.com/images/search?view=detailV2&ccid=kiprcOpT&id=FAEF2797F8D1C243EC2D0F5EC8C64A141751A159&thid=OIP.kiprcOpT5WL2y8oTZKWmOwHaHa&mediaurl=https%3A%2F%2Fhttp2.mlstatic.com%2FD_NQ_NP_832931-MLM45552055040_042021-F.jpg&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.922a6b70ea53e562f6cbca1364a5a63b%3Frik%3DWaFRFxRKxsheDw%26pid%3DImgRaw%26r%3D0&exph=1080&expw=1080&q=maquillaje+liquido+yuya&simid=608053991480647081&FORM=IRPRST&ck=27DE771FCBB65F92E89695E944D64AA3&selectedIndex=0&itb=0&cw=1145&ch=535&ajaxhist=0&ajaxserp=0",
        stock: 30,
    },
    {
        id:5,
        nombre:"Polvo compacto",
        precio: 195,
        imagen: "https://www.bing.com/images/search?view=detailV2&ccid=7qYwdFTT&id=D483B3FD6A06382323A5652C4504609C3A1AC40E&thid=OIP.7qYwdFTTQtwm4Nhg4JZoYQHaGe&mediaurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F512iMANCjLL._AC_SL1200_.jpg&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.eea6307454d342dc26e0d860e0966861%3Frik%3DDsQaOpxgBEUsZQ%26pid%3DImgRaw%26r%3D0&exph=806&expw=922&q=polvo+compacto+yuya&simid=608029471518504624&FORM=IRPRST&ck=507946F0DE4733CAA5029F3E3319B630&selectedIndex=9&itb=0&cw=1145&ch=535&ajaxhist=0&ajaxserp=0",
        stock: 90,
    },
];
//PROFE O TUTOR: Disculpen si hay tantas notas, es para recordarme a mi misma que estoy haciendo en cada parte del programa.Saludos.

/* En esta primera funcion es para que se puedan agregar nuevos productos al array y como es un array de objetos los parametros van entre llaves {} */
const agregarProductos=({nombre,precio,imagen,stock})=>{
    productos.push({id:4, nombre,precio,imagen,stock})
}

/* Esta funcion me ayuda a recorrer los productos de mi array "productos" */
const verProductos=()=>{
    let mensajeDeProductosAgregados= " ";
    for(let producto of productos){
        mensajeDeProductosAgregados+= `ID : ${producto.id}
        Nombre : ${producto.nombre}
        Precio : ${producto.precio}
        Imagen : ${producto.imagen}
        Stock : ${producto.stock}
        `;
    }
    console.log(mensajeDeProductosAgregados);
};

//si se desea agregar un nuevo producto al inventario debo guardar cada propiedad del objeto en una variable para que el usuario puedo ingresar los datos de este nuevo producto
const solicitarDatosDelProducto=()=>{
    let nombreDelProducto= prompt("Ingresa el nombre del producto");
    let precioProducto= parseFloat(prompt("Ingresa precio del producto"));
    let imagenProducto= prompt("Ingresa URL de la imagen");
    let stockProducto=parseInt(prompt("Ingresa el stock disponible"));

    if(nombreDelProducto && !isNaN(precioProducto) && imagenProducto && !isNaN(stockProducto)){
        return { nombre:nombreDelProducto, precio:precioProducto, imagen:imagenProducto,stock:stockProducto};
    } else {
        alert("Por favor ingresa datos validos");
    }
};


const funcionPrincipal=()=>{
    
    let opcion=" ";
    while(opcion !=="3"){
        opcion=prompt(
            "¿Qué deseas realizar?\n 1. Agregar productos\n 2.Ver productos\n 3.Salir");
            switch(opcion){
                case "1":
                    const nuevoProducto= solicitarDatosDelProducto();
                    if(nuevoProducto){
                        agregarProductos(nuevoProducto);
                    }
                    break;
                case "2":
                    verProductos();
                    break;
                case "3":
                    console.log("Ha salido del programa");
                    break;
                default:
                    alert("Favor de seleccionar una opcion correcta");
            }

    }
};
funcionPrincipal();


