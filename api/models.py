from django.db import models
# Create your models here.

class Project(models.Model):
    name=models.CharField(max_length=100)
    description=models.CharField(max_length=300)
    image=models.ImageField(upload_to='images')
    link=models.CharField(max_length=200)
    updated_at=models.DateTimeField(auto_now=True)
    created_at=models.DateTimeField('project',auto_now_add=True, null=True)


    class Meta():
        ordering=['-updated_at','-created_at']

    def __str__(self):
        return self.name


class Message(models.Model):
    fullName=models.CharField(max_length=30)
    email=models.EmailField(max_length=100)
    description=models.TextField(null=True)
    updated_at=models.DateTimeField(auto_now=True)
    created_at=models.DateTimeField('message',auto_now_add=True, null=True)


    class Meta():
        ordering=['-updated_at','-created_at']


    def __str__(self):
        return self.description[0:50]