# Pillmind

Pillmind es una plataforma innovadora diseñada para validar la factibilidad de propuestas electorales. A través de un bot de Telegram, los usuarios pueden enviar una URL con una propuesta, y el bot analiza su contenido utilizando tecnologías como **Beautiful Soup** para el web scraping y **Gemini** para el procesamiento de lenguaje natural. Luego, devuelve un informe de factibilidad.

## Características principales

- **Bot de Telegram**: Los usuarios envían una URL y reciben un análisis de factibilidad de la propuesta.
- **Tecnologías utilizadas**:
  - **Beautiful Soup**: Para extraer y analizar el contenido de la URL.
  - **Gemini**: Para procesar el lenguaje natural y generar el informe de factibilidad.
- **Base de datos**: Los datos se almacenan en una base de datos **SQLite** para su gestión y consulta eficiente.
- **API en FastAPI**: Una API desarrollada en FastAPI permite la integración con una aplicación web.
- **Aplicación web**: Muestra tanto las respuestas generadas por los usuarios como las respuestas curadas y validadas por investigadores y expertos.

## Funcionamiento

1. **Envío de URL**: Los usuarios envían una URL con una propuesta al bot de Telegram.
2. **Análisis**: El bot utiliza Beautiful Soup y Gemini para analizar la propuesta y generar un informe de factibilidad.
3. **Almacenamiento**: Los datos se guardan en una base de datos SQLite.
4. **Consulta y visualización**: A través de la API en FastAPI, una aplicación web consume la base de datos y muestra las respuestas generadas y curadas.

## Beneficios

- **Transparencia**: Proporciona un análisis claro y detallado de la factibilidad de las propuestas.
- **Accesibilidad**: Fácil de usar a través de Telegram y una aplicación web.
- **Confiabilidad**: Combina respuestas automáticas con validaciones de expertos para ofrecer un análisis más completo.

Pillmind es una herramienta robusta y transparente para la evaluación de propuestas electorales, combinando inteligencia artificial, bases de datos y una interfaz accesible.
