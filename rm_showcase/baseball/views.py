from django.shortcuts import render
from .models import Video, Article
from django.http import JsonResponse

def home(request):
    videos = Video.objects.all()
    articles = Article.objects.all()
    return render(request, 'home.html', {'videos': videos, 'articles': articles})

def load_videos(request):
    videos = list(Video.objects.values())
    return JsonResponse({'videos': videos})
