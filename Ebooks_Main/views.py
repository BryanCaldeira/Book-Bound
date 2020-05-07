from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from Login_app import views as login_views


class Next_Val:
	Next=0
	def Inc(self):
		if self.Next<1:
			self.Next=self.Next+1
		return self.Next

	def Dec(self):
		if self.Next>1:
			self.Next=self.Next-1
		return self.Next

	def Reset(self):
		self.Next=0


obj=Next_Val()

def Main(request):
	if request.user.is_authenticated:
		Next = obj.Inc()
		print(Next)
		return render(request,'main.html',{'Next':Next})
	else:
		return login_views.Login(request)


def Logout(request):
	logout(request)
	obj.Reset()
	return login_views.Login(request)



def Next(request):
	return Main(request)

def Back(request):
	if request.user.is_authenticated:
		Next=obj.Dec()
		print(Next)
		return render(request,'main.html',{'Next':Next})
	else:
		return login_views.Login(request)
