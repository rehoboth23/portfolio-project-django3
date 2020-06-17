from django.shortcuts import render
from django.views import generic
from .models import Post


def blog_search_view(request):
    search = str(request.GET.get('search'))

    posts = [x for x in Post.objects.all() if x.search_post(search)]
    context = {
        'object_list':posts
    }

    return render(request, 'blog/blog_list.html', context)


# Create your views here.
class List_View(generic.ListView):
    template_name = 'blog/blog_list.html'
    queryset = Post.objects.all()


class Post_Detail_View(generic.DetailView):
    template_name = 'blog/view_post.html'
    queryset = Post.objects.all()
