from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Project
from .serializers import ProjectSerializer, MessageSerializer
# Create your views here.


#getting project list
@api_view(['GET'])
def projectList(request):
    project = Project.objects.all()
    serializer = ProjectSerializer(project, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def projectDetails(request, pk):
    project=get_object_or_404(Project, id=pk)
    serializer=ProjectSerializer(project, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def sendMessage(request):
    serializer = MessageSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)