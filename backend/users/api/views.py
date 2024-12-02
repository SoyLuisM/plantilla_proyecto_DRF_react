from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from users.api.serializers import UserRegisterSerializer, UserSerializer, UpdateProfileUserSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from users.models import UserProfile
from .permissions import IsOwner

class RegisterView(APIView):
    permission_classes =[AllowAny]

    def post(self, request):
        data = request.data
        serializer = UserRegisterSerializer(data = data)
        
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    

class UserView(APIView):
    permission_classes =[IsAuthenticated,IsOwner]

    def get(self, request):
        serializer= UserSerializer(request.user)
        return Response(serializer.data)
        
    def put(self, request):
        
        user_profile, _ = UserProfile.objects.get_or_create(user=request.user)
        user_profile = request.user.profile  

        serializer = UpdateProfileUserSerializer(instance=user_profile, data=request.data, partial=True)

        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)