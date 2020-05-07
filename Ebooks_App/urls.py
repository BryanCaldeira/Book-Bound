from django.contrib import admin
from django.urls import path, include


urlpatterns = [
	path('', include('Login_app.urls')),
	path('', include('Ebooks_Main.urls')),
    path('admin/', admin.site.urls),
]
