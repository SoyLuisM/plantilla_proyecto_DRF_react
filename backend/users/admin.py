from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from users.models import User,UserProfile

@admin.register(User)
class UserAdmin(BaseUserAdmin):
    list_display = ['email', 'username', 'is_staff', 'is_active', 'is_superuser']
    fieldsets = (
        ('datos de usuario', {'fields': ('email','username','password')}),
        ('Persmisos',  {'fields': ('is_active','is_staff', 'is_superuser','groups', 'user_permissions')})
    )

@admin.register(UserProfile)
class UserAdmin(admin.ModelAdmin):
   list_display = ['nombres', 'a_paterno', 'a_materno', 'is_student']