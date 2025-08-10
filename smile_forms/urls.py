from django.urls import path
from . import views

urlpatterns = [
    path("create", views.create_university_chapter_nested, name="create_chapter_nested"),
]
