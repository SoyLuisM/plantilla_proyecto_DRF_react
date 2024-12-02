from rest_framework.permissions import BasePermission

class IsOwner(BasePermission):
    """
    Permite acceso solo si el usuario autenticado es el propietario del objeto.
    """

    def has_object_permission(self, request, view, obj):
        return obj.user == request.user
    

class IsSuperUser(BasePermission):
    """
    Permiso personalizado para permitir solo a superusuarios acceder a una vista.
    """

    def has_permission(self, request, view):
        return request.user and request.user.is_superuser