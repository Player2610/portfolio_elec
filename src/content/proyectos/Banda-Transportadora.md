---
titulo: "Banda transportadora con detección de objetos"
descripcion: "Banda transportadora construida en MDF cortado a láser, controlada por Arduino Due. Un motor DC accionado mediante puente H mueve la banda, mientras sensores infrarrojos detectan y cuentan los objetos que pasan por la línea, deteniendo o regulando el transporte según la detección."
categoria: electronica
fecha: 2026-01-15
destacado: false
tags: ["Arduino Due", "Banda transportadora", "Infrarrojo", "Puente H", "Motor DC", "MDF", "Control"]
imagenPortada: "../../assets/proyectos/banda-transportadora.jpg"
enlaces:
  repo: "https://github.com"
---

# Descripción

Banda transportadora automatizada con estructura en MDF cortado a láser y controlada
por un Arduino Due. El sistema mueve la banda mediante un motor DC y utiliza sensores
infrarrojos para detectar el paso de objetos a lo largo de la línea, permitiendo
contarlos y reaccionar ante su presencia (por ejemplo, detener o continuar el
transporte según la detección).
# Hardware

- Arduino Due (unidad de control)
- Estructura de banda transportadora en MDF cortado a láser
- Motor DC con caja reductora para el accionamiento de la banda
- Puente H (L298N) para el control de dirección y velocidad del motor
- Sensores infrarrojos para la detección de objetos
- Protoboard y cableado

# Detección de objetos

Los sensores infrarrojos, ubicados a lo largo de la banda, detectan cuando un objeto
pasa frente a ellos. Con esta información el sistema puede contar las piezas
transportadas y tomar decisiones sobre el funcionamiento de la banda, como detenerla
al detectar un objeto en un punto específico o reanudar el movimiento una vez
despejada la línea.

# Control del motor

El movimiento de la banda lo genera un motor DC gobernado por un puente H, que permite
controlar el sentido de giro y la velocidad. El Arduino Due ajusta el funcionamiento
del motor en función de las lecturas de los sensores infrarrojos.

# Lo que aprendí

La precisión de la detección dependía mucho de la ubicación y calibración de los
sensores infrarrojos frente a la velocidad de la banda. Ajustar la posición de los
sensores y la velocidad del motor mediante el puente H fue clave para lograr una
detección confiable de cada objeto sin lecturas falsas ni objetos sin contar.
