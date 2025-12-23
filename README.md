# API Security Case Study – Health Sector (Anonymized)

![Category](https://img.shields.io/badge/Category-AppSec%20%2F%20Defensive%20Security-red)
![Status](https://img.shields.io/badge/Status-Anonymized%20Report-green)
![Context](https://img.shields.io/badge/Context-Responsible%20Disclosure-blue)

[Versión en Español abajo](#versión-en-español)

This repository contains an anonymized technical case study focused on the security and resilience analysis of a REST API within a digital health record platform.

## 1. Executive Summary
A technical security analysis was conducted on a digital health record platform to evaluate API resilience against scenarios affecting service availability and unintended information exposure. The analysis focused on a second-generation REST API, reviewing input handling, error management, and authentication consistency.

## 2. Key Findings
* **A. Denial of Service (DoS) via Resource Exhaustion:** Integration endpoints accepted large POST payloads (tens of MBs) without validation, leading to main-thread blocking during JSON parsing.
* **B. Metadata Exposure in Production:** Verbose error responses revealed absolute file paths and specific framework versions, aiding technological enumeration.
* **C. HTTP Verb Tampering:** Inconsistencies in the authentication middleware allowed certain methods (e.g., HEAD) to bypass filters that were correctly applied to others (e.g., GET).

## 3. Methodology & Ethics
* **Black-box analysis** focused on observable API behavior and business logic.
* **Responsible Disclosure:** All findings were privately communicated to the organization.
* **Data Integrity:** No real user data was accessed, modified, or compromised.

## 4. Mitigation Strategies
* **Payload Constraints:** Explicit middleware configuration to limit request size.
* **Rate Limiting:** IP-based and identity-based throttling.
* **Error Sanitization:** Generic production messages; technical details restricted to internal logs.
* **Schema Validation:** Implementation of typed validators (e.g., Zod, Joi).

## 5. Scope & Limitations
This case study reflects a defensive security analysis based on publicly exposed API behavior.  
No internal access, credentials, or privileged information were used, and no intrusive testing techniques were performed.

### Example Mitigations
This repository includes minimal code examples illustrating defensive mitigation patterns related to the findings (payload limits, error sanitization). These examples are not exploit PoCs and do not reproduce the original issues.

- Example mitigation (payload limits & error sanitization):  
  [`mitigations/payload-and-error-handling.example.js`](mitigations/payload-and-error-handling.example.js)

---

# Versión en Español

## Auditoría de Seguridad y Resiliencia en una API de Salud

## 1. Resumen Ejecutivo
Se realizó un análisis técnico de seguridad sobre una plataforma de historia clínica digital con el objetivo de evaluar la resiliencia de su API frente a escenarios que afectan la disponibilidad del servicio y la exposición no deseada de información.

## 2. Hallazgos Técnicos
* **A. Denegación de Servicio (DoS):** Endpoints de integración aceptaban peticiones de gran tamaño sin validación previa, provocando el bloqueo del hilo principal de ejecución.
* **B. Exposición de Metadatos:** Las respuestas ante errores revelaban rutas absolutas del sistema de archivos y versiones de librerías.
* **C. Inconsistencia en Control de Acceso (Verb Tampering):** El middleware de autenticación no filtraba correctamente métodos semánticamente equivalentes (como HEAD), permitiendo eludir controles previstos.

## 3. Mitigación Propuesta
* Límites de tamaño en *payloads*.
* Implementación de *rate limiting*.
* Sanitización de errores en entornos de producción.
* Validación de esquemas de entrada.

## 4. Estrategias de Mitigación
* **Restricción de Payloads:** Configuración explícita de middlewares para limitar el tamaño de las peticiones.
* **Rate Limiting:** Aplicación de límites por IP y por identidad.
* **Sanitización de Errores:** Mensajes genéricos en producción; detalles técnicos restringidos a logs internos.
* **Validación de Esquemas:** Implementación de validadores tipados (por ejemplo, Zod, Joi).

## 5. Alcance y Limitaciones
Este caso de estudio refleja un análisis de seguridad defensivo basado en el comportamiento público de la API.  
No se utilizó acceso interno, credenciales ni información privilegiada, ni se aplicaron técnicas de prueba intrusivas.

### Ejemplos de Mitigación
Este repositorio incluye ejemplos mínimos de código que ilustran patrones defensivos de mitigación relacionados con los hallazgos (restricción de payloads, sanitización de errores). Estos ejemplos no constituyen PoC de explotación ni reproducen las vulnerabilidades originales.

- Ejemplo de mitigación (restricción de payloads y sanitización de errores):  
  [`mitigations/payload-and-error-handling.example.js`](mitigations/payload-and-error-handling.example.js)

---

## Ethical Notice / Nota Ética
All sensitive identifiers, company names, and infrastructure details have been removed or anonymized. Shared exclusively for educational and defensive purposes.  
Todos los identificadores sensibles han sido omitidos o anonimizados. Compartido exclusivamente con fines educativos y defensivos.
