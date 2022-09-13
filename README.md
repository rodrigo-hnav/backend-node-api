# backend-node
## API - Node - MySQL

###### Este API se dearrollo en Node framework con peticiones al motor de base de datos MySQL 

**Las peticiones GET obtienen un arreglo en formato JSON con la siguiente estructura:**

Tabla product  

- id(int): identificador unico del producto
- name(varchar): nombre del producto
- url_image(varchar): url de la imagen del producto
- proce(float): valor del producto 
- discount(int): descuento del producto
- category(int): id de la categoria a la que pertenece el producto

Tabla category


- id(int): Identificador único de la categoría 
- name(varchar): Nombre de la categoría 

Ejemplo de registro de respuesta a peticiones GET en formato JSON tabla product

```
[
    {
    "id": 104,
    "name": "ABSOLUT",
    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/absolut21381.png",
    "price": 8990,
    "discount": 30,
    "category": 7
    },
]
```

Ejemplo de registro de respuesta a peticiones GET en formato JSON tabla category

```
[
  {
    "id": 4,
    "name": "bebida"
  },
]
```

## GET Listar productos 
Las peticiones GET /api/products se obtiene un arreglo de todos los productos  


## GET Listar productos por nombre 
Las peticiones GET /api/productsbyname/{name} se obtienen todas las coicidencias del campo name

**Parametros**
* name: texto a comparar


## GET Listar productos de una categoria
Las peticiones GET /api/productbycategory/{category} se obtienen los productos de una categoria

**Parametros**
* category: id de la categoria 


## GET Listar productos ordenados por precio
Las peticiones GET /api/productbyorderprice/{order} se obtienen los productos ordenados por precio 

**Parametros**
* order: keyword asc o desc 


## GET Listar productos de una categoria ordenados por precio
Las peticiones GET /api/productbyorderpricecategory/{id}&{order} se obtienen los productos de una categoria ordenados porpprecio

**Parametros**
* category: id de la categoria 
* order: keyword asc o desc 


## GET Listar productos filtrdos por nombre y ordenados por precio
Las peticiones GET /api/productsbynamepriceorder/{name}&{order} se obtienen los productos filtrados por nombre ordenados por precio

**Parametros**
* order: keyword asc o desc 
* name: texto a comparar


## GET Listar categorias
Las peticiones GET /api/categorys se obtienen todas las categorias




