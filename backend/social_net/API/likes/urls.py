from django.urls import path
from . import views


urlpatterns = [
  path('authors/<slug:author_id>/inbox/', views.InboxView, name='InboxView'),
  path('authors/<slug:author_id>/posts/<slug:post_id>/likes/', views.PostLikeView, name='PostLikeView'),    # FIXME: "/likes" (no slash at end of)
  path('authors/<slug:author_id>/posts/<slug:post_id>/comments/<slug:comment_id>/likes/', views.CommentLikeView, name='CommentLikeView'), # FIXME: "/likes" (no slash at end of)
]