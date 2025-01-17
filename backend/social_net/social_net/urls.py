from django.urls import include, path, re_path
from rest_framework import routers
from API import views
from django.contrib import admin

from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
   openapi.Info(
      title="CMPUT404-project-socialdistribution API",
      default_version='v1.0.0',
      description="CMPUT404-project-socialdistribution See project.org (plain-text/org-mode) for a description of the project. Make a distributed social network!",
      terms_of_service="https://github.com/Sean-Meyers/CMPUT404-project-socialdistribution/blob/master/README.md",
      contact=openapi.Contact(email="qg@ualberta.ca"),
      license=openapi.License(name="MIT License"),
   ),
   public=True,
   permission_classes=[permissions.AllowAny],
)


urlpatterns = [
    # path('', include(router.urls)),
    path('service/', include('API.urls')),     # CHANGED: "services/" to "service/" (singular, not plural)
    path('admin/', admin.site.urls),
    # path('^activity/', include('actstream.urls')),
    re_path(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    re_path(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    re_path(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]