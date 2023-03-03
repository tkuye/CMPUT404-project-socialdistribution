from django.contrib import admin
from .models import AuthorModel, PostModel, CategoriesModel

# Register your models here.
admin.site.register(AuthorModel)
admin.site.register(PostModel)
admin.site.register(CategoriesModel)
