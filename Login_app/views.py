from django.shortcuts import render,redirect
from .models import User_Data 
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
import random
import string



def Login(request):
	if request.user.is_anonymous:
		if request.method == 'POST':
			u_name = request.POST.get('user_name')
			u_pass = request.POST.get('user_pass')
			sup_name = request.POST.get('sup_user_name')
			email = request.POST.get('sup_emailid')
			sup_pass = request.POST.get('sup_pass')
			sup_cpass = request.POST.get('sup_cpass')

			if sup_name != None:
				email = email.lower()
				user = User.objects.filter(username=email)

				if user:
					return render(request,'login.html',{'user':1})
				else:
					try:
						r_pass = randomString(10)
						User_Data.objects.create(u_name=sup_name, u_email=email, u_pass=sup_pass, g_pass=r_pass)
						User.objects.create_user(username=email, password=r_pass)
						return render(request,'login.html',{'user':2})
					except:
						pass

			if u_name != None:
				try:
					u_name = u_name.lower()
					user = str(User_Data.objects.filter(u_email=u_name, u_pass=u_pass).get()).split()
					user_auth = authenticate(username=u_name, password=user[3])
					login(request,user_auth)
					return redirect('ebooks')
				except:
					pass


	elif request.user.is_authenticated:
		return redirect('ebooks')


	return render(request,'login.html')


def Developer(request):
	return render(request,'devop.html')


def randomString(stringLength):
    letters = string.ascii_lowercase
    return ''.join(random.choice(letters) for i in range(stringLength))
