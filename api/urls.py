from django.urls import path
from . import views

urlpatterns = [
	path('project-list', views.projectList, name="project-list"),
	path('project-details/<int:pk>/', views.projectDetails, name="project-details"),
	path('contact', views.sendMessage, name='contact')
]