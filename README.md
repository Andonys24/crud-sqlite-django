# CRUD Básico de Cursos en Django

Este proyecto Django es un CRUD básico para la gestión de cursos en una universidad. Permite realizar operaciones de Crear, Leer, Actualizar y Eliminar cursos utilizando SQLite como base de datos.

## Estructura del Proyecto

```
Universidad/
│
├── Aplicaciones/
│   ├── Academico/
│   │   ├── migrations/
│   │   │   ├── 0001_initial.py
│   │   │   └── __init__.py
│   │   ├── static/
│   │   │   ├── css/
│   │   │   │   └── gestionCursos.css
│   │   │   ├── img/
│   │   │   └── js/
│   │   │       └── alertas.js
│   │   ├── templates/
│   │   │   ├── base.html
│   │   │   ├── edicionCurso.html
│   │   │   └── gestionCursos.html
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── models.py
│   │   ├── tests.py
│   │   ├── urls.py
│   │   ├── views.py
│   │   └── __init__.py
│   │
│   ├── Universidad/
│   │   ├── asgi.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   ├── wsgi.py
│   │   └── __init__.py
│   │
│   └── manage.py
│
├── README.md
├── requirements.txt
└── Universidad.db
```

## Funcionalidades

- **Agregar Curso**: Permite registrar un nuevo curso con un nombre y número de créditos.
- **Editar Curso**: Permite modificar el nombre y número de créditos de un curso existente.
- **Eliminar Curso**: Permite eliminar un curso de la base de datos.
- **Listado de Cursos**: Muestra todos los cursos registrados en una tabla paginada.

## Tecnologías Utilizadas

- **Django**: Framework de desarrollo web en Python.
- **SQLite3**: Base de datos utilizada para almacenar los cursos.
- **Bootstrap**: Utilizado para el diseño y estilos de la interfaz de usuario.

## Configuración y Uso

1. **Clonar el Repositorio**

   ```bash
   git clone https://github.com/Andonys24/crud-sqlite-django.git
   cd crud-sqlite-django
   ```

2. **Configuración del Entorno Virtual y Dependencias**

   ```bash
   python -m venv venv
   source venv/bin/activate  # En Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

3. **Aplicar Migraciones**

   ```bash
   python manage.py migrate
   ```

4. **Ejecutar el Servidor de Desarrollo**

   ```bash
   python manage.py runserver
   ```

5. **Acceder al Sitio**

   Abre tu navegador web y visita `http://localhost:8000/` para ver la aplicación.

