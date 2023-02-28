### TC2005B CONSTRUCCION DE SOFTWARE Y TOMA DE DESICIONES (TC2005B) 
 
# ACTIVIDAD 1 
# Emilia Salazar Leipen
## TORNEO INTERNACIONAL: Algebra relacional  
 
<div style="text-align: justify">
Se dispone de una Base de Datos RELACIONAL para un torneo internacional compuesto de diversas 
competencias. El esquema de la base de datos es el siguiente:  
 
- COMPETENCIA (NombreCompetencia: STRING, NumPtos: INTEGER, Tipo: STRING) 
 
Una competencia de un cierto TIPO, se identifica por su nombre NOMBRECOMPETENCIA y aporta un cierto 
número de puntos NUMPTOS. 
 
-  PARTICIPANTE (  Número: INTEGER, 
 Apellidos: STRING, Nombre: STRING, Nacionalidad: STRING) 
| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |
 
Una persona que participa en el torneo es identificada por un número de participante NUMERO y se registra con sus 
APELLIDOS, su NOMBRE y su NACIONALIDAD.  
 
- PUNTOSACUMULADOS(Número: INTEGER, Puntos: INTEGER ) 
 
Todo participante identificado por NUMERO acumula un número de puntos PUNTOS durante el torneo.  
 
- CLASIFICACION(NombreCompetencia: STRING, Número: INTEGER, Lugar: INTEGER) 
 
Para la competencia de nombre NOMBRECOMPETENCIA, el participante identificado con el número NUMERO fue 
clasificado en el lugar LUGAR.  
 
 
Tomando en cuenta lo anterior, escriba en álgebra relacional las siguientes consultas: 
 
**1. Apellidos y nombre de los participantes de nacionalidad mexicana.** 
 
**2. Apellidos, nombre y puntos acumulados de los participantes de USA.** 
 
**3. Apellidos y nombre de los participantes que se clasificaron en primer lugar en al menos una 
competencia.**
 
**4. Nombre de las competencias en las que intervinieron los participantes mexicanos.** 
 
**5. Apellidos y nombre de los participantes que nunca se clasificaron en primer lugar en alguna 
competencia.**  
 
**6. Apellidos y nombre de los participantes siempre se clasificaron en alguna competencia.**
 
**7. Nombre de la competencia que aporta el máximo de puntos.** 
 
**8. Países (nacionalidades) que participaron en todas las competencias.** 

</div>
 