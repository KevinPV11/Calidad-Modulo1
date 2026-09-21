# 2026-II-CS-UNI-SoftwareQuality

- [Video de referencia:](https://www.linkedin.com/posts/carlosfloreslopez_excelente-exposici%C3%B3n-que-todo-especialista-activity-7184935465374879744-MAFX?utm_source=share&utm_medium=member_android)

- [Página de material del curso:](https://ecuadros.github.io/SoftwareQuality/)

## Módulo 1 — Fundamentos de Calidad y Costo de la No-Calidad

En este módulo se establecen las primeras prácticas de calidad que se utilizarán durante el desarrollo del curso.

El objetivo de esta configuración inicial es establecer convenciones comunes, mejorar la trazabilidad de los cambios y preparar el repositorio para que los cambios puedan ser revisados antes de ser integrados.

La configuración implementada sigue el laboratorio oficial del curso:

> **Setup del Repo en GitHub — Módulo 1**

Fuente principal:

* [Material del curso — Setup del Repo en GitHub](https://ecuadros.github.io/SoftwareQuality/modulo-01-fundamentos-calidad/setup-repo-github.html)

La estructura incorporada es:

```text id="dtzlkq"
.
├── README.md
├── .editorconfig
└── .github/
    ├── ISSUE_TEMPLATE/
    │   └── bug_report.md
    └── pull_request_template.md
```

Además, se utilizan **Issues de GitHub** para registrar problemas, tareas y deuda técnica.

---

### 1. Issues de GitHub

Un **Issue** permite registrar y hacer seguimiento de trabajo relacionado con un proyecto.

Dentro del contexto de este módulo puede utilizarse para registrar:

* Bugs.
* Mejoras.
* Tareas pendientes.
* Decisiones técnicas.
* Deuda técnica.

Esto permite que los problemas y decisiones pendientes queden visibles y puedan ser discutidos, asignados y posteriormente resueltos.

#### Issues y deuda técnica

El laboratorio solicita mantener al menos un Issue etiquetado como deuda técnica.

La finalidad es hacer visible una decisión técnica que tendrá un costo o trabajo futuro asociado.

En lugar de dejar una decisión únicamente como un comentario dentro del código o depender de que un integrante la recuerde, puede registrarse mediante un Issue indicando:

* qué decisión se tomó;
* por qué se tomó;
* qué limitación genera;
* cuál podría ser su impacto;
* y cuándo debería revisarse.

Esto permite que la deuda técnica sea **visible y trazable**.

#### Fuente

* [Material del curso — Setup del Repo en GitHub](https://ecuadros.github.io/SoftwareQuality/modulo-01-fundamentos-calidad/setup-repo-github.html)
* [GitHub Docs — About Issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues)

---

### 2. Plantilla para reportar Bugs

El laboratorio solicita crear:

```text id="7vzmgq"
.github/ISSUE_TEMPLATE/bug_report.md
```

El contenido utilizado es el indicado en el material del curso:

```markdown id="k8ly6v"
---
name: Reporte de bug
about: Algo no funciona como debería
labels: bug
---

**Comportamiento esperado**

**Comportamiento actual**

**Pasos para reproducir**
1.
2.

**Entorno** (SO, versión de Python/C++/Flutter, commit)
```

#### ¿Para qué sirve?

Esta plantilla proporciona una estructura común para reportar errores.

En lugar de crear un Issue poco descriptivo como:

```text id="ekzxdm"
No funciona.
```

se solicita información que ayude a comprender y reproducir el problema.

La plantilla solicita cuatro elementos principales.

**Comportamiento esperado**

Describe qué debería haber ocurrido.

**Comportamiento actual**

Describe qué ocurrió realmente.

**Pasos para reproducir**

Permite indicar la secuencia necesaria para volver a producir el problema.

**Entorno**

Permite registrar información relevante como:

```text id="h6vy1x"
Sistema operativo
Versión de Python / C++ / Flutter
Commit
```

Esta información puede ser importante porque un mismo error puede depender del entorno o de una versión determinada del proyecto.

---

#### ¿Qué significa la parte inicial del archivo?

El archivo comienza con:

```yaml id="q4cniz"
---
name: Reporte de bug
about: Algo no funciona como debería
labels: bug
---
```

Esta sección contiene metadatos utilizados por GitHub para describir la plantilla.

`name` establece el nombre de la plantilla:

```yaml id="r6x0s8"
name: Reporte de bug
```

`about` proporciona una descripción breve:

```yaml id="i4dzkw"
about: Algo no funciona como debería
```

`labels` indica la etiqueta que se asociará al reporte:

```yaml id="rb4vpl"
labels: bug
```

---

#### ¿Por qué se guarda en `.github/ISSUE_TEMPLATE/`?

GitHub utiliza el directorio:

```text id="yt77hd"
.github/ISSUE_TEMPLATE/
```

como una de las ubicaciones destinadas a las plantillas de Issues.

De esta forma, la configuración también queda almacenada y versionada junto con el proyecto.

#### Fuentes

* [Material del curso — Setup del Repo en GitHub](https://ecuadros.github.io/SoftwareQuality/modulo-01-fundamentos-calidad/setup-repo-github.html)
* [GitHub Docs — Configuring Issue Templates](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository)

---

### 3. Plantilla para Pull Requests

El laboratorio también solicita crear:

```text id="a0r3s1"
.github/pull_request_template.md
```

Se utiliza el template proporcionado por el curso:

```markdown id="jowu37"
## Qué cambia y por qué

## Cómo se probó
- [ ] Tests unitarios agregados/actualizados
- [ ] Probado manualmente localmente

## Checklist
- [ ] El código sigue las convenciones del proyecto
- [ ] No quedan `TODO` sin issue asociado
- [ ] La descripción del PR es suficiente para revisar sin contexto adicional
```

---

#### ¿Para qué sirve?

Un **Pull Request (PR)** permite proponer cambios realizados en una rama para que puedan ser revisados antes de integrarlos en otra.

La plantilla establece la información mínima que debe proporcionar quien crea el Pull Request.

##### `Qué cambia y por qué`

```markdown id="3jv49p"
## Qué cambia y por qué
```

Permite explicar:

* qué se modificó;
* por qué fue necesario modificarlo.

Esto proporciona contexto a la persona encargada de revisar los cambios.

##### `Cómo se probó`

```markdown id="ffkq8l"
## Cómo se probó
- [ ] Tests unitarios agregados/actualizados
- [ ] Probado manualmente localmente
```

Permite indicar cómo fueron verificados los cambios.

Los elementos:

```text id="h0r2c6"
[ ]
```

funcionan como casillas de verificación de Markdown.

Cuando una condición se cumple puede marcarse como:

```text id="d1fl1f"
[x]
```

##### Checklist

Finalmente, el template solicita comprobar:

```markdown id="vyujm4"
- [ ] El código sigue las convenciones del proyecto
- [ ] No quedan `TODO` sin issue asociado
- [ ] La descripción del PR es suficiente para revisar sin contexto adicional
```

Esto funciona como una revisión previa antes de solicitar que los cambios sean integrados.

---

### 4. Flujo de ramas utilizado por el Grupo 1

El material del laboratorio explica el uso de Pull Requests y protección de ramas utilizando un repositorio individual.

En el repositorio utilizado durante las clases, el profesor ha organizado el trabajo mediante ramas para los diferentes grupos y módulos.

Por ello, nuestro flujo concreto adapta el concepto del laboratorio a la organización del repositorio del curso.

Para el **Módulo 1 del Grupo 1**, la rama de trabajo es:

```text id="zgrc8u"
G1-M1
```

Una vez finalizado el trabajo del módulo, se realizará un Pull Request hacia:

```text id="tvv4or"
G1
```

Por lo tanto, nuestro flujo es:

```text id="3aj5ho"
           Pull Request
G1-M1  ──────────────────>  G1
  │                          │
  │                          │
Módulo 1                 Grupo 1
```

O de manera secuencial:

```text id="jn2qxz"
Trabajo del Módulo 1
        │
        ▼
      G1-M1
        │
        │ commits
        │ push
        ▼
Trabajo terminado
        │
        │ Pull Request
        ▼
       G1
        │
        ▼
Revisión e integración
```

Por tanto:

```text id="fvwj9m"
G1-M1 = rama de trabajo del Módulo 1
G1    = rama de integración del Grupo 1
```

Esta organización de ramas corresponde al repositorio utilizado en clase y no a una estructura definida por el laboratorio publicado en la página del curso.

---

### 5. ¿Por qué utilizar Pull Requests?

El objetivo es evitar integrar los cambios directamente sin una instancia previa de revisión.

En nuestro caso:

```text id="lvqrlb"
G1-M1
  │
  ├── desarrollo
  ├── documentación
  ├── configuración
  └── commits
        │
        ▼
   Pull Request
        │
        ▼
      revisión
        │
        ▼
       G1
```

Esto crea un punto en el flujo donde los cambios pueden ser explicados y revisados antes de incorporarlos a la rama del grupo.

#### ¿Por qué `.github/pull_request_template.md`?

GitHub permite utilizar un archivo denominado:

```text id="4izfrn"
pull_request_template.md
```

para proporcionar automáticamente contenido inicial al crear un Pull Request.

`.github/` es una de las ubicaciones soportadas para esta plantilla.

#### Fuentes

* [Material del curso — Setup del Repo en GitHub](https://ecuadros.github.io/SoftwareQuality/modulo-01-fundamentos-calidad/setup-repo-github.html)
* [GitHub Docs — About Pull Requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
* [GitHub Docs — Creating a Pull Request Template](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/creating-a-pull-request-template-for-your-repository)

---

### 6. EditorConfig

En la raíz del repositorio se utiliza:

```text id="9t8ujp"
.editorconfig
```

La configuración corresponde a la proporcionada en el laboratorio del curso:

```ini id="6e92mg"
root = true

[*]
charset = utf-8
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
indent_style = space
indent_size = 4

[*.{yml,yaml,json}]
indent_size = 2

[*.md]
trim_trailing_whitespace = false
```

EditorConfig permite establecer convenciones de formato que pueden ser interpretadas por diferentes editores e IDEs.

Su objetivo es reducir diferencias de formato entre los integrantes del proyecto.

---

### 7. Explicación de `.editorconfig`

#### `root = true`

```ini id="36r49k"
root = true
```

Indica que este archivo representa la raíz de la configuración EditorConfig.

EditorConfig puede buscar configuraciones `.editorconfig` en directorios superiores. `root = true` indica que la búsqueda debe detenerse en este archivo.

---

#### `[*]`

```ini id="cfq3w6"
[*]
```

El `*` representa de forma general los archivos sobre los cuales se aplicarán las propiedades de esta sección.

Por tanto, las siguientes reglas funcionan como configuración general del proyecto.

---

#### `charset = utf-8`

```ini id="7jizt5"
charset = utf-8
```

Establece **UTF-8** como codificación.

Esto permite establecer una codificación consistente para los archivos independientemente del entorno utilizado por cada integrante.

---

#### `end_of_line = lf`

```ini id="b7kzjz"
end_of_line = lf
```

Establece **LF (Line Feed)** como convención para los finales de línea.

Los sistemas operativos pueden utilizar diferentes convenciones para representar los saltos de línea. Establecer `LF` ayuda a mantener una representación consistente dentro del repositorio.

---

#### `insert_final_newline = true`

```ini id="ue2qmx"
insert_final_newline = true
```

Indica que debe existir una nueva línea al final de los archivos.

Esto mantiene una convención consistente para los archivos de texto.

---

#### `trim_trailing_whitespace = true`

```ini id="b7o86k"
trim_trailing_whitespace = true
```

Indica que deben eliminarse espacios innecesarios existentes al final de las líneas.

Esto ayuda a evitar diferencias de formato que no representan cambios reales en el contenido.

---

#### `indent_style = space`

```ini id="22z8gn"
indent_style = space
```

Establece que la indentación general del proyecto utilizará **espacios**.

La finalidad es evitar que diferentes integrantes mezclen tabulaciones y espacios.

---

#### `indent_size = 4`

```ini id="1mvjsa"
indent_size = 4
```

La configuración general proporcionada por el curso establece una indentación de **4 espacios**.

Por tanto:

```text id="9wcs93"
Archivos generales
       ↓
indent_style = space
indent_size = 4
```

---

### 8. Configuración especial para YAML, YML y JSON

El archivo contiene una regla más específica:

```ini id="ttmvaf"
[*.{yml,yaml,json}]
indent_size = 2
```

Esta regla afecta a:

```text id="u61mbf"
*.yml
*.yaml
*.json
```

Para estos archivos se cambia únicamente el tamaño de indentación a:

```text id="y9ep89"
2 espacios
```

Las demás propiedades generales continúan aplicándose.

Por ejemplo:

```text id="iy3v5e"
Archivo Python, Java, etc.
        ↓
4 espacios

Archivo .yml
        ↓
2 espacios

Archivo .yaml
        ↓
2 espacios

Archivo .json
        ↓
2 espacios
```

Esta excepción forma parte de la configuración proporcionada por el laboratorio.

---

### 9. Configuración especial para Markdown

También se define:

```ini id="ipdy1f"
[*.md]
trim_trailing_whitespace = false
```

La configuración general establece:

```ini id="cawub3"
trim_trailing_whitespace = true
```

pero para los archivos Markdown (`.md`) se cambia a:

```ini id="6dfqz0"
trim_trailing_whitespace = false
```

Esto significa que en Markdown no se eliminarán automáticamente todos los espacios ubicados al final de las líneas.

Markdown puede utilizar espacios finales en determinados casos para representar saltos de línea, por lo que esta excepción evita eliminarlos automáticamente.

---

### 10. ¿De dónde proviene esta configuración?

La configuración concreta utilizada en este repositorio proviene del laboratorio:

**Setup del Repo en GitHub — Módulo 1**

del material oficial del curso.

Por tanto, valores concretos como:

```text id="dnb59m"
indentación general       → 4 espacios
YAML / YML / JSON         → 2 espacios
finales de línea          → LF
codificación              → UTF-8
indentación               → espacios
```

se mantienen de acuerdo con la configuración proporcionada para el laboratorio.

Las propiedades utilizadas (`charset`, `end_of_line`, `indent_style`, `indent_size`, etc.) forman parte del estándar EditorConfig.

#### Fuentes

* [Material del curso — Setup del Repo en GitHub](https://ecuadros.github.io/SoftwareQuality/modulo-01-fundamentos-calidad/setup-repo-github.html)
* [EditorConfig — Sitio oficial](https://editorconfig.org/)
* [EditorConfig Specification](https://spec.editorconfig.org/)

---

### 11. EditorConfig y los entornos de desarrollo

La existencia de `.editorconfig` no significa necesariamente que todos los integrantes tengan que instalar una extensión.

Esto depende del editor o IDE utilizado.

Algunos entornos incorporan soporte para EditorConfig directamente o mediante componentes incluidos con el propio IDE. Otros pueden requerir un plugin o extensión.

Por ello, antes de instalar una extensión debe comprobarse el soporte del entorno utilizado.

#### IntelliJ IDEA y otros IDEs de JetBrains

IntelliJ IDEA dispone de soporte para EditorConfig mediante un plugin incluido con el IDE y habilitado por defecto.

Por ello, en una instalación habitual de IntelliJ IDEA no es necesario buscar e instalar manualmente una extensión externa únicamente para interpretar `.editorconfig`.

Fuente:

* [JetBrains — EditorConfig](https://www.jetbrains.com/help/idea/editorconfig.html)

#### Visual Studio Code

El soporte efectivo puede depender del lenguaje y de las extensiones utilizadas.

Por ello, debe comprobarse si las propiedades necesarias del archivo `.editorconfig` están siendo interpretadas en el entorno concreto antes de instalar herramientas adicionales.

#### Otros editores

El proyecto oficial de EditorConfig mantiene información sobre los editores que incorporan soporte y aquellos que disponen de plugins.

Fuentes:

* [EditorConfig — Pre-installed](https://editorconfig.org/#pre-installed)
* [EditorConfig — Download a Plugin](https://editorconfig.org/#download)

---

### 12. Relación con la calidad de software

Ninguno de estos archivos garantiza por sí solo que el software esté libre de errores.

Su función es establecer prácticas y controles desde las primeras etapas del desarrollo.

```text id="xahdhn"
.editorconfig
      │
      ▼
Consistencia de formato

bug_report.md
      │
      ▼
Reportes de errores estructurados

pull_request_template.md
      │
      ▼
Cambios mejor documentados

Issues de deuda técnica
      │
      ▼
Deuda visible y trazable

G1-M1
      │
      │ Pull Request
      ▼
     G1
      │
      ▼
Revisión antes de integración
```

Estas prácticas proporcionan una base sobre la cual posteriormente pueden incorporarse otros mecanismos de calidad, como pruebas automatizadas, integración continua y análisis estático.

---

### 13. Checklist del laboratorio

De acuerdo con el laboratorio del Módulo 1, los principales elementos a verificar son:

```text id="kkcshy"
[ ] Repositorio configurado
[ ] Flujo mediante Pull Request
[ ] Templates de Issue y PR en .github/
[ ] .editorconfig en la raíz
[ ] Al menos un Issue identificado como deuda técnica
```

En el repositorio utilizado para las clases, las configuraciones que requieren permisos administrativos dependen de los permisos proporcionados por el propietario o administrador del repositorio.

Nuestro flujo de integración para este módulo es:

```text id="fjn2j9"
G1-M1 ── Pull Request ──> G1
```

---

## Referencias

1. [Software Quality — Material del curso](https://ecuadros.github.io/SoftwareQuality/)
2. [Módulo 1 — Setup del Repo en GitHub](https://ecuadros.github.io/SoftwareQuality/modulo-01-fundamentos-calidad/setup-repo-github.html)
3. [GitHub Docs — About Issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues)
4. [GitHub Docs — Configuring Issue Templates](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository)
5. [GitHub Docs — About Pull Requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
6. [GitHub Docs — Creating a Pull Request Template](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/creating-a-pull-request-template-for-your-repository)
7. [EditorConfig — Sitio oficial](https://editorconfig.org/)
8. [EditorConfig Specification](https://spec.editorconfig.org/)
9. [JetBrains — EditorConfig](https://www.jetbrains.com/help/idea/editorconfig.html)
