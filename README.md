# Proyecto Interaccion Humano Computador

En la actualidad no se fomenta el aprendizaje de un instrumento y las personas no generan un gusto por la música instrumental. Muchas veces se intenta pero se presentan adversidades o no se tiene una orientación adecuada. Por esta misma razón no existe un hábito firmemente fundamentado para continuar el proceso de aprendizaje, por ende esto evita que más gente se relacione con un instrumento musical. ¿Qué se puede hacer para que las personas tengan iniciativa de aprender a tocar un instrumento no se queden en el proceso?

## Creado por:

<ul>
    <li>Juan Fernando De León Quezada</li>
    <li>Maria Jose Castro Lemus</li>
</ul>

Para poder ejecutar esta aplicacion es necesario tener instalado lo siguiente:<br/>

- [Nodejs](https://nodejs.org/es/).
- [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable).

Al tener instalado lo anterior es necesario estar dentro de cada una de las carpetas

- [app](./app)

Al estar dentro de app debes ejecutar los siguentes comandos:

```
yarn install
yarn start

```

Esto ejecutara la aplicacion en modo desarrollador [http://localhost:3000](http://localhost:3000).

- [rest_api](./rest_api)

Al estar dentro de rest_api debes ejecutar el siguiente comando:

```
pip install -r requirements.txt
```

Esto instala todas los modulos necesarios para correr nuestra REST API

- [rest_api](./rest_api/src/music_project)

Al estar dentro de rest_api debes ejecutar el siguiente comando:

```
python manage.py runserver 0.0.0.0:8080
```

Esto ejecutara la API en el puerto 8080 [http://localhost:8080](http://localhost:8080).
