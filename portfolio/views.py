from django.shortcuts import render
from django.views import generic
from .models import Project, Education, Experience, activity


# Create your views here.
def home_view(request):
    projects = list(Project.objects.filter(featured=True).order_by('-date'))
    first_proj = projects[0]
    educations = []
    first_ed = {'self': Education.objects.first(), 'acts': Education.objects.first().activities.all()}
    for education in list(Education.objects.all())[1:]:
        acts = list(education.activities.all())
        ed = {'self': education, 'acts': acts}
        educations.append(ed)
    experiences = []
    first_exp = Experience.objects.first()
    for exp in list(Experience.objects.all())[1:]:
        experiences.append(exp)
    context = {
        'projects': projects,
        'first_proj': first_proj,
        'educations': educations,
        'first_ed': first_ed,
        'first_exp': first_exp,
        'experiences': experiences
    }
    return render(request, 'portfolio/index.html', context)


class Project_Detail_View(generic.DetailView):
    template_name = 'portfolio/project_detail.html'
    queryset = Project.objects.all()


class Project_List_View(generic.ListView):
    queryset = Project.objects.all()
    template_name = 'portfolio/base.html'




