from django.shortcuts import render
from django.http import JsonResponse
from .models import Video

def home(request):
    return render(request, 'home.html')

def load_videos(request):
    videos = list(Video.objects.values())
    return JsonResponse({'videos': videos})

def index(request):
    return render(request, 'baseball/index.html')

def home(request):
    return render(request, 'baseball/home.html')

def science(request):
    return render(request, 'baseball/science.html')

def videos(request):
    return render(request, 'baseball/videos.html')

def performance(request):
    return render(request, 'baseball/performance.html')

def testimonials(request):
    return render(request, 'baseball/testimonials.html')

def contact(request):
    return render(request, 'baseball/contact.html')

