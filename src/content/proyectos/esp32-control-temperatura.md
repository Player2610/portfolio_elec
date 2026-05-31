---
titulo: "Control de temperatura con ESP32"
descripcion: "Sistema de monitoreo y control de temperatura usando un ESP32, sensor DHT22 y un relay para activar/apagar una resistencia calefactora. Los datos se envían por MQTT a un broker local."
categoria: electronica
fecha: 2025-11-10
destacado: true
tags: ["ESP32", "IoT", "MQTT", "C++", "DHT22"]
imagenPortada: "../../assets/proyectos/esp32-temp.svg"
enlaces:
  repo: "https://github.com"
---

## Descripción

Este proyecto implementa un termostato inteligente basado en ESP32. El microcontrolador
lee la temperatura y humedad con un sensor DHT22 cada 5 segundos, los publica en un
broker MQTT local (Mosquitto) y activa un relay cuando la temperatura cae por debajo del
umbral configurado.

## Hardware utilizado

- ESP32 DevKit v1
- Sensor DHT22 (temperatura y humedad)
- Módulo relay de 5 V
- Resistencia calefactora de 220 V / 500 W
- Caja de distribución IP65

## Funcionamiento

1. El ESP32 se conecta a la red Wi-Fi en el arranque.
2. Cada 5 s publica `{ "temp": 28.4, "hum": 62 }` en el topic `sensores/sala`.
3. Si la temperatura baja del setpoint, activa el relay (GPIO 26) y publica el estado.
4. Un dashboard en Node-RED permite cambiar el setpoint remotamente.

## Lo que aprendí

Gestionar la reconexión automática de Wi-Fi y MQTT fue el principal desafío. Terminé
usando una máquina de estados simple que reintenta con backoff exponencial en lugar de
un simple `while (!connected)`.
