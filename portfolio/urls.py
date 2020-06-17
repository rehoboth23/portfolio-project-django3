from django.urls import path
from .views import home_view, Project_List_View, Project_Detail_View

app_name = 'project'

urlpatterns = [
    path('', home_view, name='home'),
    path('projects/', Project_List_View.as_view(), name='projects'),
    path('project/<int:pk>', Project_Detail_View.as_view(), name='view'),
]
