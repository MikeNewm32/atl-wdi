1. SELECT name, population  FROM country WHERE region = 'Southern Europe' ORDER BY population ASC;
Holy See (Vatican City State) |       1000
2. SELECT * FROM country WHERE name = 'Holy See (Vatican City State)';
   SELECT language FROM countrylanguage WHERE countrycode = 'VAT';
Italian
3. SELECT * FROM countrylanguage WHERE language = 'Italian';
 ITA         | Italian  | t          |       94.1
 SMR         | Italian  | t          |        100
 VAT         | Italian  | t          |          0
 ARG         | Italian  | f          |        1.7
 AUS         | Italian  | f          |        2.2
 LIE         | Italian  | f          |        2.5
 BEL         | Italian  | f          |        2.4
 BRA         | Italian  | f          |        0.4
 LUX         | Italian  | f          |        4.6
 MCO         | Italian  | f          |       16.1
 CHE         | Italian  | t          |        7.7
 CAN         | Italian  | f          |        1.7
 FRA         | Italian  | f          |        0.4
 DEU         | Italian  | f          |        0.7
 USA         | Italian  | f          |        0.6
 SELECT * FROM country WHERE code = 'SMR';
 San Marino
4.SELECT * FROM city WHERE  countrycode = 'SMR';
  id  |    name    | countrycode |     district      | population
------+------------+-------------+-------------------+------------
 3170 | Serravalle | SMR         | Serravalle/Dogano |       4802
 3171 | San Marino | SMR         | San Marino        |       2294

6.SELECT * FROM city WHERE name ILIKE '%serr%';
  265 | Serra                    | BRA         | Esp�rito Santo    |     302666
  310 | Tabo�o da Serra        | BRA         | S�o Paulo         |     197550
  370 | Itapecerica da Serra     | BRA         | S�o Paulo         |     126672
5.SELECT capital FROM country WHERE code = 'BRA';
  211
  SELECT * FROM city WHERE id = 211;
 id  |    name    | countrycode |     district     | population
-----+------------+-------------+------------------+------------
 211 | Bras�lia | BRA         | Distrito Federal |    1969868
6.SELECT name, district FROM city WHERE population = 91084;
     name     |  district
--------------+------------
 Santa Monica | California