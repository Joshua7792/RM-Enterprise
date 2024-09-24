from django.shortcuts import render
from django.http import JsonResponse
from .models import Video

def home(request):
    return render(request, 'home.html')

def load_videos(request):
    videos = list(Video.objects.values())
    return JsonResponse({'videos': videos})
