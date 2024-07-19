from django.db import models
from django.contrib.auth.models import AbstractUser

def uploaded_to(int, filename):
    return ("images/profiles/" + int.first_name + "_" + int.last_name + filename)

class User(AbstractUser):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    phone_number = models.CharField(max_length=200, unique=True)
    age = models.IntegerField()
    username = None
    email = None

    GEND = (("Male", "Male"), ("Female", "Female"))
    gender = models.CharField(max_length=200, choices=GEND)

    profile_picture = models.ImageField(upload_to=uploaded_to, null=True, blank=True)

    USERNAME_FIELD = "phone_number"
    REQUIRED_FIELDS = []
