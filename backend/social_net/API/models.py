from django.db import models

# Create your models here.

class AuthorModel(models.Model):
    type = models.CharField(max_length=100, blank=False, default='author')
    id = models.CharField(max_length=100, primary_key=True)
    url = models.CharField(max_length=100, default=id)
    host = models.CharField(max_length=100, blank=False, default='')
    displayName = models.CharField(max_length=100, blank=False, default='')
    github = models.CharField(max_length=100, blank=False, default='')
    profileImage = models.CharField(max_length=500, blank=False, default='')

    class Meta:
        ordering = ['type', 'id', 'host', 'displayName', 'profileImage']        # XXX: Why do we need our first ordering argument to be by a field that will always be the same value. For that matter why do we need such a field? Also, isn't everything to the right of id useless because id is unique and thus will not tie-break with any other rows?


class CategoriesModel(models.Model):
    category = models.CharField(max_length=50)
    class Meta:
        ordering = ['id']  
        
# TODO: Put some effort into making sure these max_lengths make sense
class PostModel(models.Model):
    # type = models.CharField(max_length=4, blank=False, default='post')  # TODO: Why bother with this? We know what it is and can just put it in the json without storing it in the db no?
    title = models.CharField(max_length=100, default='')
    #id = models.CharField(max_length=100, primary_key=True) # TODO: May want to use an auto field (better yet UUIDField) for this imstead (same with author)? https://docs.djangoproject.com/en/4.1/ref/models/fields/#autofield
    origin = models.URLField(default='')
    source = models.URLField(default=origin)
    description = models.CharField(max_length=500, default='')
    contentType = models.CharField(max_length=50, default='text/plain')
    content = models.TextField(default='')    # TODO: This needs to be able to accomodate binary data (base64) as well as text so that images can be stored.
    author = models.ForeignKey(AuthorModel, on_delete=models.CASCADE)   # XXX: Might be better to use set_null or something else, if we want to keep the posts with "deleted user" or something. May be a good idea, consider what might happen to comments on a deleted users post.
    categories = models.ManyToManyField(CategoriesModel)
    count = models.PositiveIntegerField(default=0)     #TODO: there's probably a way to make this autamatically update and default to the size of the comments table where the post field of the comment is equal to the id of this post
    comments = models.URLField()
    published = models.DateTimeField(auto_now=True, auto_now_add=True)
    visibility = models.CharField(max_length=7, default='PUBLIC')       # Can save space in the db by using a boolean field instead, can prolly make this work by using validators, maybe.
    unlisted = models.BooleanField()
    # TODO: Make sure not missing any fields, nor have unnecessary fields, also do the ordering thing (if it makes sense): Lookup what that Meta thing is in AuthorModel
    
