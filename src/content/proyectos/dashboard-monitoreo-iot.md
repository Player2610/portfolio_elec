---
titulo: "Dashboard de monitoreo IoT"
descripcion: "Aplicación web en tiempo real que visualiza datos de sensores (temperatura, humedad, presión) publicados por dispositivos ESP32 via MQTT. Historial de 24 h con gráficos interactivos."
categoria: software
fecha: 2025-12-05
destacado: true
tags: ["Node.js", "WebSocket", "MQTT", "Chart.js", "SQLite"]
imagenPortada: "../../assets/proyectos/dashboard-iot.svg"
enlaces:
  repo: "https://github.com"
  demo: "https://github.com"
---

## Descripción

Panel web ligero que corre en una Raspberry Pi Zero 2W dentro de la red local. Los
sensores publican en MQTT; el servidor Node.js los consume y los transmite al navegador
por WebSocket. Los datos se guardan en SQLite para consultas históricas.

## Stack técnico

- **Backend:** Node.js + Express + `mqtt.js` + `ws`
- **Base de datos:** SQLite (via `better-sqlite3`) con retención de 7 días
- **Frontend:** HTML/CSS/JS vanilla + Chart.js para las gráficas
- **Hosting:** PM2 en Raspberry Pi Zero 2W

## Funcionalidades

- Vista en tiempo real con actualización cada 5 s
- Historial de 1 h / 6 h / 24 h seleccionable
- Alertas visuales cuando un sensor sale del rango normal
- Lista de dispositivos conectados con estado (online/offline)

## Lo que aprendí

SQLite es más que suficiente para este caso de uso. El reto fue el manejo de
reconexiones en el WebSocket del cliente: al volver a un tab, el socket puede estar
muerto, así que implementé reconexión automática con un exponential backoff en el lado
del navegador.
