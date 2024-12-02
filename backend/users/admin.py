from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from users.models import User

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ['email', 'username', 'is_staff', 'is_active', 'is_superuser']