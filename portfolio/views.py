from django.shortcuts import render
from django.views import generic
from .models import Project


# Create your views here.
def home_view(request):
    query_set = Project.objects.filter(featured=True).order_by('-date')
    context = {
        'query': query_set
    }
    return render(request, 'portfolio/home.html', context)


class Project_Detail_View(generic.DetailView):
    template_name = 'portfolio/project_detail.html'
    queryset = Project.objects.all()


class Project_List_View(generic.ListView):
    queryset = Project.objects.all()
    template_name = 'portfolio/projects.html'




