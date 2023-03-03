from django.db import models
from django.contrib.postgres.fields import ArrayField
import uuid

# Create your models here.

class AuthorModel(models.Model):
    type = models.CharField(max_length=100, blank=False, default='author')
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    url = models.CharField(max_length=100, default=id)
    host = models.CharField(max_length=100, blank=False, default='')
    displayName = models.CharField(max_length=100, blank=False, default='')
    github = models.CharField(max_length=100, blank=False, default='')
    profileImage = models.CharField(max_length=500, blank=False, default='')
    followers = ArrayField(models.CharField(max_length=100, blank=True, default=''), blank=True, default=list)
    
    class Meta:
        ordering = ['type', 'id', 'host', 'displayName', 'profileImage']


class Post(models.Model):
    post = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    content = models.TextField()
    published = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(AuthorModel, on_delete=models.CASCADE)
    categories = models.CharField(max_length=255, blank=True, null=True)
    visibility = models.CharField(max_length=255, default="PUBLIC")
    unlisted = models.BooleanField(default=False)

    def __str__(self):
        return self.title

class Comment(models.Model):
    comment = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    content = models.TextField()
    published = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(AuthorModel, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    
    
    def __str__(self):
        return self.content

class Like(models.Model):
    like = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    author = models.ForeignKey(AuthorModel, on_delete=models.CASCADE)
    object = models.URLField(max_length=255)
    published = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.author.displayName} likes {self.object}"
