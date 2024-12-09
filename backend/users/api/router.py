from django.urls import path
from users.api.views import RegisterView,UserView
from rest_framework_simplejwt.views import TokenRefreshView
from users.api.login import CustomTokenObtainPairView

urlpatterns = [
    path('auth/register', RegisterView.as_view()),
    path('auth/login', CustomTokenObtainPairView.as_view(), name= 'token_obtain_pair'),
    path('auth/refresh', TokenRefreshView.as_view()),
    path('auth/data',UserView.as_view())

]