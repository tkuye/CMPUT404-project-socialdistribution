from django.contrib import admin
from .models import AuthorModel, Post, Comment, Like

# Register your models here.
admin.site.register(AuthorModel)
admin.site.register(Post)
admin.site.register(Comment)
admin.site.register(Like)
