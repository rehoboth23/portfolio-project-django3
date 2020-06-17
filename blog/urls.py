from django.urls import path
from blog.views import List_View, Post_Detail_View, blog_search_view

app_name = 'blog'
urlpatterns = [
    path('blogs/', List_View.as_view(), name='list'),
    path('<int:pk>/', Post_Detail_View.as_view(), name='view'),
    path('', blog_search_view, name='search'),
]