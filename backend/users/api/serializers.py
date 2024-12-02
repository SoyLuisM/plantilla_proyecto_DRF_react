from rest_framework import serializers
from users.models import User, UserProfile

class UserRegisterSerializer(serializers.ModelSerializer):
    is_active = serializers.BooleanField(default=False)
    
    class Meta:
        model = User
        fields = ['id', 'email','username', 'password','is_active']

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)

        if password is not None:
            instance.set_password(password)

        instance.save()

        return instance
    

class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required = False)
    username = serializers.CharField(required = False)
    password = serializers.CharField(write_only=True, required = False)

    class Meta:
        model = User
        fields = ['id', 'email', 'username','password']
    
    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)

        for attr, value in validated_data.items():
            setattr(instance, attr, value)

        if password:
            instance.set_password(password)

        instance.save()

        return instance

class UpdateProfileUserSerializer(serializers.ModelSerializer):
    user = UserSerializer()  
    nombres = serializers.CharField(max_length=100, required=False)
    a_paterno = serializers.CharField(max_length=100, required=False)
    a_materno = serializers.CharField(max_length=100, required=False)
    date_of_birth = serializers.DateField(required=False)

    class Meta:
        model = UserProfile
        fields = ['user', 'nombres', 'a_paterno', 'a_materno', 'date_of_birth']

    def update(self, instance, validated_data):
        user_data = validated_data.pop('user', None)

        if user_data:
            user_instance = instance.user  

            for attr, value in user_data.items():
                setattr(user_instance, attr, value)

            user_instance.save()

        for attr, value in validated_data.items():
            setattr(instance, attr, value)

        instance.save()

        return instance