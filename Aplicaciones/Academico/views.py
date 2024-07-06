from django.shortcuts import render, redirect
from .models import Curso
import random


# Create your views here.
def home(request):
    cursos = Curso.objects.all()
    return render(request, "gestionCursos.html", {"cursos": cursos})


def registrarCurso(request):
    if request.method == "POST":
        # Obtener los datos del formulario
        nombre = request.POST.get("txtNombre")
        creditos = request.POST.get("numCreditos")

        # Generar el código aleatorio de 6 dígitos
        random_codigo = "".join(random.choices("0123456789", k=6))

        # Crear el curso con el código aleatorio y otros datos del formulario
        curso = Curso.objects.create(
            codigo=random_codigo, nombre=nombre, creditos=creditos
        )
        return redirect("/")
    else:
        # Generar número aleatorio de 6 dígitos
        random_codigo = "".join(random.choices("0123456789", k=6))

        # Renderizar el formulario con el número aleatorio prellenado
        return render(request, "gestionCursos.html", {"random_codigo": random_codigo})


def edicionCurso(request, codigo):
    curso = Curso.objects.get(codigo=codigo)
    return render(request, "edicionCurso.html", {"curso": curso})


def editarCurso(request):
    codigo = request.POST["txtCodigo"]
    nombre = request.POST["txtNombre"]
    creditos = request.POST["numCreditos"]

    curso = Curso.objects.get(codigo=codigo)
    curso.nombre = nombre
    curso.creditos = creditos
    curso.save()
    return redirect("/")


def eliminarCurso(request, codigo):
    curso = Curso.objects.get(codigo=codigo)
    curso.delete()
    return redirect("/")
