from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .models import Issue
from .serializers import IssueSerializer

class IssueApiView(APIView):

    def get(self, request, *args, **kwargs):
        issues = Issue.objects.filter(user = request.user.id)
        serializer = IssueSerializer(issues, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        data = {
            'issue_id': request.data.get('issue_id'), 
            'title': request.data.get('title'), 
            'description': request.data.get('description'), 
        }
        serializer = IssueSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
