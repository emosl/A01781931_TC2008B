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
 
 
Tomando en cuenta lo anterior, escriba en álgebra relacional las siguientes consultas: 

**1. Apellidos y nombre de los participantes de nacionalidad mexicana.** 

$$\Pi _{Apellidos, Nombre}(\sigma Nacionalidad = 'mexicana' (PARTICIPANTE))$$


 
**2. Apellidos, nombre y puntos acumulados de los participantes de USA.** 
$$\Pi _{Apellidos, Nombre, Puntos}(\sigma Nacionalidad = 'USA' (PARTICIPANTE \bowtie PUNTOSACUMULADOS))$$
 
**3. Apellidos y nombre de los participantes que se clasificaron en primer lugar en al menos una 
competencia.**
$$\Pi _{Apellidos, Nombre}(\sigma Lugar = 'primer' (CLASIFICACION\bowtie PARTICIPANTE))$$
 
**4. Nombre de las competencias en las que intervinieron los participantes mexicanos.** 
$$\Pi _{NombreCompetencia}(\sigma Nacionalidad = 'mexicana' (PARTICIPANTE\bowtie CLASIFICACION \bowtie COMPETENCIA))$$
 
 
**5. Apellidos y nombre de los participantes que nunca se clasificaron en primer lugar en alguna 
competencia.**  
$$R1=\Pi _{Apellidos, Nombre}(PARTICIPANTE) $$
$$R2=\Pi _{Apellidos, Nombre}(\sigma Lugar=1(PARTICIPANTE \bowtie CLASIFICACION)) $$
$$R3=R1-R2$$
 
**6. Apellidos y nombre de los participantes siempre se clasificaron en alguna competencia.**

 
**7. Nombre de la competencia que aporta el máximo de puntos.** 
$$R1= \Pi _{NumPtos}(COMPETENCIA)$$
$$R2= \Pi _{NumPtos}(COMPETENCIA)$$
$$R3= \rho _{tabla1}(R1)$$
$$R4= \rho _{tabla2}(R2)$$
$$R5= \rho _{NumPtos/NumPtos2}(R4)$$
$$R6= R3 \times R5$$
$$R7= \sigma _{NumPtos<NumPtos2}(R6)$$
$$R8= \Pi _{NumPtos}(R7)$$
$$R9= R1-R2$$
$$\Pi_{NombreCompetencia(COMPETENCIA \bowtie R9)}$$ 
 
**8. Países (nacionalidades) que participaron en todas las competencias.** 


</div>
 