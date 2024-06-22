from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .models import Issue
from .serializers import IssueSerializer

class IssueApiView(APIView):

    def get(self, request, *args, **kwargs):
        issues = Issue.objects.filter(issue_id = kwargs.get('issue_id'))
        serializer = IssueSerializer(issues, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        data = {
            'issue_id': request.data.get('issue_id'), 
            'title': request.data.get('title'), 
            'description': request.data.get('description'), 
        }
        
        exists = Issue.objects.filter(issue_id=request.data.get('issue_id'))
        if exists.count() > 0:
            return Response(
                {"res": "Object with issue id already exists"}, 
                status=status.HTTP_400_BAD_REQUEST
            )

        serializer = IssueSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def put(self, request, *args, **kwargs):

        issue_instance = Issue.objects.get(issue_id=request.data.get('issue_id'))
        if not issue_instance:
            return Response(
                {"res": "Object with issue id does not exists"}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        data = {
            'issue_id': request.data.get('issue_id'), 
            'title': request.data.get('title'), 
            'description': request.data.get('description'), 
        }
        serializer = IssueSerializer(instance = issue_instance, data=data, partial = True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, *args, **kwargs):
        issue_instance = Issue.objects.get(issue_id = kwargs.get('issue_id'))
        if not issue_instance:
            return Response(
                {"res": "Object with issue id does not exists"}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        issue_instance.delete()
        return Response(
            {"res": "Object deleted!"},
            status=status.HTTP_200_OK
        )
