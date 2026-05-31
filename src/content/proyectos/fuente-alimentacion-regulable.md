---
titulo: "Fuente de alimentación regulable"
descripcion: "Fuente DC regulable de 1.25 V a 30 V con corriente máxima de 3 A, basada en el CI LM338. Display de 7 segmentos para voltaje y amperaje. Protección contra cortocircuito."
categoria: electronica
fecha: 2025-08-20
destacado: true
tags: ["Analógico", "PCB", "LM338", "Alimentación"]
imagenPortada: "../../assets/proyectos/fuente-dc.svg"
enlaces:
  repo: "https://github.com"
---

## Descripción

Fuente de banco diseñada para el taller. Regulación mediante un potenciómetro de 10 vueltas
para precisión, con lectura de voltaje y corriente en display de 7 segmentos multiplexado
controlado por un ATtiny85.

## Características principales

- Rango: 1.25 V – 30 V
- Corriente máxima: 3 A continuos
- Regulación de línea: < 0.05 %
- Protección por sobrecorriente (fusible + crowbar con SCR)
- Disipador de aluminio con ventilador controlado por temperatura

## Diseño del PCB

El PCB se diseñó en KiCad, con separación de la sección de potencia y la sección de
medición para evitar interferencias. Se usaron pistas de 2 mm de ancho en la zona de
alta corriente.

## Lo que aprendí

El disipador térmico era insuficiente en la primera versión; el LM338 entraba en
protección térmica a 2.5 A. La solución fue añadir un ventilador de 40 mm activado por
un transistor cuando el disipador supera los 50 °C.
