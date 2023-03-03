from django.urls import path
from . import views

urlpatterns = [
  path('authors/<slug:uid>', views.AuthorView, name='AuthorView'),
  path('authors/<slug:uid>/posts', views.post_view, name='post_view'),
  path('authors/<slug:uid>/posts/<slug:pid>', views.posts_view, name='posts_view'),
]