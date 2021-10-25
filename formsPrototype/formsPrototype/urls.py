from django.contrib import admin
from django.urls import path, include
from forms import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'form', views.FormViewSet)
router.register(r'response', views.ResponseViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
]
