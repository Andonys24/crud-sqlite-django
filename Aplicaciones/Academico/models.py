from django.db import models


# Create your models here.
class Curso(models.Model):
    codigo = models.CharField(primary_key=True, max_length=6)
    nombre = models.CharField(max_length=60)
    creditos = models.PositiveSmallIntegerField()

    def __str__(self) -> str:
        return f"{self.nombre} ({self.creditos})"
