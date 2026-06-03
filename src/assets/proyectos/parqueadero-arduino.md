---
titulo: "Contador de parqueadero con Arduino Nano"
descripcion: "Sistema de conteo de vehículos para un parqueadero basado en Arduino Nano. Dos sensores ultrasónicos detectan la entrada y salida de carros para llevar el conteo de ocupación, un servo controla la barrera y una pantalla LCD muestra la disponibilidad en tiempo real."
categoria: electronica
fecha: 2026-01-15
destacado: false
tags: ["Arduino Nano", "Ultrasónico", "Servo", "LCD", "C++", "Control"]
imagenPortada: "../../assets/proyectos/parqueadero-arduino.jpg"
enlaces:
  repo: "https://github.com"
---

# Descripción

Sistema de gestión de parqueadero basado en Arduino Nano que lleva el conteo de
cuántos carros han entrado y salido. Usando dos sensores ultrasónicos para detectar
el paso de los vehículos, el sistema actualiza la ocupación del parqueadero, acciona
la barrera con un servomotor y muestra la información en una pantalla LCD.

# Hardware

- Arduino Nano (unidad de control)
- 2 sensores ultrasónicos HC-SR04 (detección de entrada y salida)
- Servomotor para el control de la barrera
- Pantalla LCD 16×2 para mostrar el conteo y la disponibilidad
- Protoboard y cableado

# Conteo de vehículos

Los dos sensores ultrasónicos detectan el paso de los carros. Según el orden en que
se activan, el sistema distingue entre una entrada y una salida y actualiza el contador
de ocupación del parqueadero. Cuando se detecta un vehículo en la entrada, el servo
acciona la barrera para permitir el paso.

# Visualización (LCD)

La pantalla LCD 16×2 muestra en tiempo real la cantidad de carros dentro del
parqueadero y los espacios disponibles, de modo que la información sea visible
de un vistazo.

# Lo que aprendí

El reto principal fue interpretar correctamente la secuencia de activación de los dos
sensores ultrasónicos para diferenciar una entrada de una salida y evitar conteos
dobles. Ordenar la lógica en función del orden de detección permitió mantener un
conteo confiable de la ocupación.
