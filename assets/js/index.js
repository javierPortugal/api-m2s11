console.log("Entro index.js");

//antes se usaban liberarias como axios
//ahora javascript tiene la libreria "fetch"

fetch('https://dev4humans.com.mx/api/clases/productos', {method: "GET"})
    .then(response =>response.json())
 //   .then(data => console.log(data));
     .then(data => {
        console.log("La promesa se resolvioo");
        const rawData = data;
        console.log(rawData);
        console.log(rawData.data.products[0]);


      }).catch(error => console.log(error))


