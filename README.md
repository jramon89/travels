<h1>
    Prueba tecnica - ForEach
</h1>
<small>
    <strong>Tecnologías:</strong>
    React, NodeJS, ExpressJS, ES6, MongoDB & mLab
</small>
<h4>
A continuación se presentan los pasos para levantar el proyecto
</h4>

<ul>
    <li>Clonar el el repositorio desde terminal con Git</li>
    <li>Acceder desde Consola de comando o terminal a raiza del proyecto</li>
    <li>Ejecutar comando => npm install</li>
</ul>

Para este proyecto es necesario ejecutar dos servicios uno que servirá para correr el Front-End y 
otro para correr el servidor en NodeJS, asi que aquí los pasos siguientes: 

<ul>
    <li>Levantar servidor mediante comando => npm run server</li>
    <li>Para el servidor ingreser a <a target="_blank" href="http://localhost:4000/api/travels">http://localhost:4000/api/travels</a></li>
    <li>Desde otra terminal Levantar Front-End mediante comando => npm start</li>
    <li>Para el cliente se abrirá en automatico explorador <a target="_blank" href="http://localhost:9000">http://localhost:9000</a>, por el contrario
        ingresarlo manualmente
    </li>
</ul>

La base de datos se encuentra configurada desde un dominio poblico por lo que no es necesario 
crearse una nueva en local, pero si se desea crear, solo hay que modificar las variables de entorno
desde el package.json que serian PORT_DB y HOST_DB por los valores respectivos a su configuración, ademas de
crear la BD con las siguientes propiedades. 

<strong>Datos de la Base de Datos</strong>

Nombre: c02 <br/>
Usuario: c02-user <br/>
Password: c02-890319 <br/>


