### TC2005B CONSTRUCCION DE SOFTWARE Y TOMA DE DESICIONES (TC2005B) 
 
# ACTIVIDAD 1 
# Emilia Salazar Leipen
## TORNEO INTERNACIONAL: Algebra relacional  
 
<div style="text-align: justify">
Se dispone de una Base de Datos RELACIONAL para un torneo internacional compuesto de diversas 
competencias. El esquema de la base de datos es el siguiente:  
 
- COMPETENCIA (NombreCompetencia: STRING, NumPtos: INTEGER, Tipo: STRING) 

| NombreCompetencia | NumPtos | Tipo      |
|------------------|---------|-----------|
| Valor1           | Valor2  | Valor3    |
| Valor4           | Valor5  | Valor6    |
| ...              | ...     | ...       |

 
Una competencia de un cierto TIPO, se identifica por su nombre NOMBRECOMPETENCIA y aporta un cierto 
número de puntos NUMPTOS. 
 
-  PARTICIPANTE (  Número: INTEGER, 
 Apellidos: STRING, Nombre: STRING, Nacionalidad: STRING) 

 | Número | Apellidos | Nombre | Nacionalidad |
|--------|-----------|--------|--------------|
| Valor1 | Valor2    | Valor3 | Valor4       |
| Valor5 | Valor6    | Valor7 | Valor8       |
| ...    | ...       | ...    | ...          |

 

 
Una persona que participa en el torneo es identificada por un número de participante NUMERO y se registra con sus 
APELLIDOS, su NOMBRE y su NACIONALIDAD.  
 
- PUNTOSACUMULADOS(Número: INTEGER, Puntos: INTEGER ) 

| Número | Puntos |
|--------|--------|
| Valor1 | Valor2 |
| Valor3 | Valor4 |
| ...    | ...    |

 
Todo participante identificado por NUMERO acumula un número de puntos PUNTOS durante el torneo.  
 
- CLASIFICACION(NombreCompetencia: STRING, Número: INTEGER, Lugar: INTEGER) 

| NombreCompetencia | Número | Lugar |
|-------------------|--------|-------|
| Valor1            | Valor2 | Valor3|
| Valor4            | Valor5 | Valor6|
| ...               | ...    | ...   |

 
Para la competencia de nombre NOMBRECOMPETENCIA, el participante identificado con el número NUMERO fue 
clasificado en el lugar LUGAR.  
 
### Operaciones de álgebra relacional:

$\Pi$ Proyección

$\sigma$ Selección

$\bowtie$ Producto cartesiano

$\rho$ Renombramiento

$\times$ Producto cartesiano natural

$\div$ División

$-$ Diferencia

$+$ Unión

$\cap$ Intersección

$\cup$ Unión



Tomando en cuenta lo anterior, escriba en álgebra relacional las siguientes consultas: 

**1. Apellidos y nombre de los participantes de nacionalidad mexicana.** 

Para obtener los apellidos y nombre de los participantes de nacionalidad mexicana, se debe seleccionar los participantes que tengan nacionalidad mexicana, y luego proyectar los apellidos y nombre de los participantes.

$$\Pi _{Apellidos, Nombre}(\sigma Nacionalidad = 'mexicana' (PARTICIPANTE))$$


 
**2. Apellidos, nombre y puntos acumulados de los participantes de USA.** 

Para obtener los apellidos, nombre y puntos acumulados de los participantes de USA, se debe seleccionar los participantes que tengan nacionalidad USA, y luego proyectar los apellidos, nombre y puntos acumulados de los participantes.
$$\Pi _{Apellidos, Nombre, Puntos}(\sigma Nacionalidad = 'USA' (PARTICIPANTE \bowtie PUNTOSACUMULADOS))$$
 
**3. Apellidos y nombre de los participantes que se clasificaron en primer lugar en al menos una 
competencia.**

Para obtener los apellidos y nombre de los participantes que se clasificaron en primer lugar en al menos una competencia, se debe seleccionar los participantes que se clasificaron en primer lugar en al menos una competencia, y luego proyectar los apellidos y nombre de los participantes. Para hacer esto se debe hacer una unión de los participantes con las clasificaciones.
$$\Pi _{Apellidos, Nombre}(\sigma Lugar = 'primer' (CLASIFICACION\bowtie PARTICIPANTE))$$
 
**4. Nombre de las competencias en las que intervinieron los participantes mexicanos.** 

Para obtener el nombre de las competencias en las que intervinieron los participantes mexicanos, se debe seleccionar los participantes mexicanos, y luego proyectar el nombre de las competencias en las que intervinieron los participantes mexicanos. Para hacer esto se debe hacer una unión de los participantes mexicanos con las clasificaciones, y luego con las competencias.
$$\Pi _{NombreCompetencia}(\sigma Nacionalidad = 'mexicana' (PARTICIPANTE\bowtie CLASIFICACION \bowtie COMPETENCIA))$$
 
 
**5. Apellidos y nombre de los participantes que nunca se clasificaron en primer lugar en alguna 
competencia.**  
Para obtener los apellidos y nombre de los participantes que nunca se clasificaron en primer lugar en alguna competencia, se debe seleccionar los participantes que nunca se clasificaron en primer lugar en alguna competencia, y luego proyectar los apellidos y nombre de los participantes. Para hacer esto se debe hacer una diferencia de los participantes con los participantes que se clasificaron en primer lugar en alguna competencia.

 $$R1=\Pi _{Apellidos, Nombre}(PARTICIPANTE)  $$
 $$R2=\Pi _{Apellidos, Nombre}(\sigma Lugar=1(PARTICIPANTE \bowtie CLASIFICACION))$$
 $$R3=R1-R2$$

**6. Apellidos y nombre de los participantes siempre se clasificaron en alguna competencia.**
Para obtener los apellidos y nombre de los participantes siempre se clasificaron en alguna competencia, se debe seleccionar los participantes que siempre se clasificaron en alguna competencia, y luego proyectar los apellidos y nombre de los participantes. Para hacer esto se debe hacer una división de los participantes con las clasificaciones ya que la división define una relación sobre los atributos C que consiste en el conjunto de tuplas de A que coinciden con la combinación de cada tupla en B. Por esto mismo, al dividir PARTICIPANTE entre CLASIFICACION obtenemos como resultado los participantes que siempre se clasificaron en alguna competencia.

$$\Pi _{Nombre, Apellido, Numero}(PARTICIPANTE) \div \Pi _{Numero}(CLASIFICACION)$$
 
**7. Nombre de la competencia que aporta el máximo de puntos.** 
Para obtener el nombre de la competencia que aporta el máximo numero de puntos debemos primero crear dos copias de la columna de Numero de Puntos de la tabla competencia, posteriormente renombramos una de las tablas y sacamos el producto cartesiano. Finalmente seleccionamos el valor menor de nuestro producto cartesiano y proyectamos los puntos. Finalmente hacemos una diferencia de R! con R8 y lo unimos con la tabla competencia, proyectando el nombre de la competencia con el mayor numero de puntos.
$$R1= \Pi _{NumPtos}(COMPETENCIA)$$
$$R2= \Pi _{NumPtos}(COMPETENCIA)$$
$$R3= \rho _{tabla1}(R1)$$
$$R4= \rho _{tabla2}(R2)$$
$$R5= \rho _{NumPtos/NumPtos2}(R4)$$
$$R6= R3 \times R5$$
$$R7=\sigma _{NumPtos\lt NumPtos2}(R6)$$
$$R8=\Pi _{NumPtos}(R7)$$
$$R9=R1-R8$$
$$\Pi _{NombreCompetencia(COMPETENCIA \bowtie R9)}$$

 
**8. Países (nacionalidades) que participaron en todas las competencias.** 
Como mencionamos anteriormente la división define una relación sobre los atributos C que consiste en el conjunto de tuplas de A que coinciden con la combinación de cada tupla en B. Por esto mismo al hacer una unión entre clasificación y participante y dividirlo entre competencia obtenemos las nacionalidades que participaron en todas las competencias.

$$\Pi _{Nacionalidad, NombreCompetencia}(PARTICIPANTE \bowtie CLASIFICACION) \div \Pi _{NombreCompetencia}(COMPETENCIA)$$


