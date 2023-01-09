from django.contrib import admin

# Register your models here.
from .models import Project, Message

class ProjectModelAdmin(admin.ModelAdmin):
    list_display=('name', 'description', 'image', 'link', 'created_at', 'updated_at')
    search_fields=('name',)
    list_per_page=10

class MessageModelAdmin(admin.ModelAdmin):
    list_display=('fullName', 'email','description', 'created_at', 'updated_at')
    search_fields=('fullName', 'email')
    list_per_page=10

    

admin.site.register(Project, ProjectModelAdmin)
admin.site.register(Message, MessageModelAdmin)