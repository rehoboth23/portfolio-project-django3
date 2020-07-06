from django.urls import path
from shorter.views import home, make


app_name = 'shorten'
urlpatterns = [
    path('', make, name='make'),
]