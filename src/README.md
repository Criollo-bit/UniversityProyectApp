# APP Universidad

Este proyecto es una APP completa desarrollada con **NestJS** y **Prisma** para gestionar entidades universitarias. El código y las pruebas cumplen con todos los criterios de la rubrica presentada en el eva.

## Requisitos Previos

Asegúrate de tener instalado:
* **Node.js** (versión LTS)
* **npm**
* **PostgreSQL**
* **Git**

---

## ⚙️ Configuración e Instalación (Pasos Sencillos)

Para iniciar la APP, sigue estos **5 pasos** en tu terminal:

1.  **Traer el Código (Clonar):**
    ```bash
    git clone [LinkDelRepositorio]
    cd university-app
    ```

2.  **Instalar Piezas (Dependencias):**
    ```bash
    npm install
    ```

3.  **Conectar a la Base de Datos:**
    Crea un archivo llamado **`.env`** y pon tu clave de conexión:
    ```
    # Reemplaza con tus credenciales
    DATABASE_URL="postgresql:........"
    ```

4.  **Crear las Tablas (Migraciones CRÍTICO):**
    Este paso **crea todas las tablas** en la base de datos usando las migraciones de Prisma.
    ```bash
    npx prisma migrate deploy
    ```

5.  **Encender la API:**
    ```bash
    npm run start:dev
    ```
    La API estará lista para las pruebas en `http://localhost:3000`.

---

## 🧪 Pruebas de Postman

Todas las pruebas funcionales están organizadas en la colección de Postman **`University_APP.postman_collection.json`** adjunta en este repositorio.

* Asegúrate de que la variable **`BASE_URL`** de Postman esté configurada a `http://localhost:3000`.
* La prueba **C5 (Consulta Compleja)** demuestra el filtro anidado (`where`) para cargar solo las inscripciones con `status: 'CURRENT'`.

---