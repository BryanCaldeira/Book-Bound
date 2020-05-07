from django.db import models

class User_Data(models.Model):
    u_email = models.CharField(max_length=30)
    u_name = models.CharField(max_length=15)
    u_pass = models.CharField(max_length=15)
    g_pass = models.CharField(max_length=15)

    def __str__(self):
    	l=[]
    	l.append(self.u_name)
    	l.append(self.u_email)
    	l.append(self.u_pass)
    	l.append(self.g_pass)
    	q = ' '.join(l)
    	return q
		