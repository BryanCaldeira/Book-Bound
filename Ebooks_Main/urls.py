from django.contrib import admin
from django.urls import path, include
from Ebooks_Main import views

urlpatterns = [
	path('ebooks/',views.Main,name='ebooks'),
	path('ebooks/',views.Next,name='Next'),
	path('ebooks/back',views.Back,name='Back'),
	path('logout/',views.Logout,name="lout"),
]
