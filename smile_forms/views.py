from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import UniversityChapterSerializer

@api_view(["POST"])
def create_university_chapter_nested(request):
    serializer = UniversityChapterSerializer(data=request.data)
    if serializer.is_valid():
        chapter = serializer.save()
        return Response(UniversityChapterSerializer(chapter).data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
