---
titulo: "Cargador solar con MPPT"
descripcion: "Controlador de carga solar con algoritmo MPPT (Perturbar y Observar) implementado en STM32. Eficiencia medida del 98.2 % en condiciones óptimas. Carga una batería de 12 V / 40 Ah desde un panel de 50 W."
categoria: electronica
fecha: 2026-01-15
destacado: false
tags: ["STM32", "MPPT", "Energía solar", "C", "Control"]
imagenPortada: "../../assets/proyectos/cargador-solar.svg"
enlaces:
  repo: "https://github.com"
---

## Descripción

Controlador MPPT de bajo costo basado en STM32F103 (Blue Pill). El algoritmo
Perturbar y Observar ajusta el ciclo de trabajo del convertidor buck cada 100 ms para
mantener el punto de máxima potencia del panel solar.

## Hardware

- STM32F103C8T6 (Blue Pill)
- Convertidor buck con MOSFET IRF3205 + diodo Schottky MBR2045
- Sensor de corriente INA226 (I²C)
- Inductancia de 100 µH / 5 A (bobinada a mano)
- LCD 16×2 para voltaje, corriente y potencia en tiempo real

## Algoritmo MPPT

El algoritmo P&O mide voltaje e intensidad del panel, calcula la potencia y la compara
con el valor anterior. Si aumentó al incrementar el duty cycle, sigue en esa dirección;
si bajó, invierte. Paso de perturbación: 0.5 % del duty cycle.

## Resultados

| Condición          | Eficiencia |
|--------------------|-----------|
| Irradiancia plena  | 98.2 %    |
| Irradiancia parcial| 94.5 %    |
| Temperatura 45 °C  | 97.1 %    |

## Lo que aprendí

El ruido en las mediciones de corriente (INA226) producía oscilaciones en el algoritmo.
Añadir un filtro de media móvil de 8 muestras estabilizó el punto de operación sin
penalizar la velocidad de seguimiento.
