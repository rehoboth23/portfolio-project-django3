from django.urls import path
from shorter.views import home, make


app_name = 'shorten'
urlpatterns = [
    path('<str:token>', home, name='home'),
    path('<str:token>/<int:copy>', home, name='copy'),
    path('', make, name='make'),
]