# Subir el proyecto a GitHub

## Paso 1: Crear el repositorio en GitHub

1. Abre en el navegador: **https://github.com/new**
2. En **Repository name** escribe, por ejemplo: `encuesta-brief` (o `weaves-brief`).
3. Elige **Public**.
4. **No** marques "Add a README file" (ya tienes uno en el proyecto).
5. Pulsa **Create repository**.

## Paso 2: Conectar y subir desde tu PC

En la terminal, desde la carpeta del proyecto, ejecuta (sustituye `TU_USUARIO` y `encuesta-brief` por tu usuario de GitHub y el nombre del repo que hayas creado):

```bash
cd /home/hector/Documentos/Proyectos/Weaves/Encuestas

git remote add origin https://github.com/TU_USUARIO/encuesta-brief.git
git push -u origin main
```

Si GitHub te pide autenticación, usa tu usuario y un **Personal Access Token** (no la contraseña de la cuenta). Para crear un token: GitHub → Settings → Developer settings → Personal access tokens.

---

**Ejemplo** si tu usuario es `hector-weaves` y el repo se llama `encuesta-brief`:

```bash
git remote add origin https://github.com/hector-weaves/encuesta-brief.git
git push -u origin main
```
