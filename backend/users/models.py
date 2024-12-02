from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(AbstractUser):
    email = models.EmailField(unique=True)
    last_name = None
    first_name = None
    

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS=[]

    def __str__(self):
        return self.username

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.SET_NULL, null=True, blank=True, related_name="profile")
    nombres = models.CharField(max_length=100)
    a_paterno = models.CharField(max_length=100)
    a_materno = models.CharField(max_length=100)
    date_of_birth = models.DateField(null=True, blank=True)
    is_student = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.nombres} {self.a_paterno} {self.a_materno}"
    
class StudentRecord(models.Model):
    profile = models.OneToOneField(UserProfile, on_delete=models.CASCADE, related_name="student_record")
    average = models.DecimalField(max_digits=4, decimal_places=2, null=True, blank=True)

    def __str__(self):
        return f"Academic Record of {self.profile}"