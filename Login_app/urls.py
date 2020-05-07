from django.urls import path
from Login_app import views
from django.contrib.auth import views as auth_views

urlpatterns = [
	path('',views.Login ,name="lin"),
	path('developer/',views.Developer, name="devop"),
]

