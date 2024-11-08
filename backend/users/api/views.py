from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from users.models import User
from users.api.serializers import UserRegisterSerializer

class RegisterView(APIView):

    
    def post(self, request):
        data = request.data
        serializer = UserRegisterSerializer(data = data)
        
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
        
        return Response(serializer.errors, serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
