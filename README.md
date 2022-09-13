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
* name: cadena de texto a comparar









