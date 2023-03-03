from rest_framework.decorators import api_view
from django.http import JsonResponse
from .models import AuthorModel, PostModel
from .serializers import AuthorSerializer, PostSerializer
import json

@api_view(['GET', 'POST'])
def AuthorView(request, uid):
    """
    API endpoint that allows users to be viewed or edited.
    """
    if request.method == 'GET':
        author_object = AuthorModel.objects.get(id=uid)
        serialized_object = AuthorSerializer(author_object)
        return JsonResponse(serialized_object.data, status = 200)

    elif request.method == 'POST':
        author_object = AuthorModel.objects.get(id=uid)
        serialized_object = AuthorSerializer(author_object)
        parameters = json.loads(request.body)
        serialized_object.update(author_object, parameters)
        return JsonResponse(serialized_object.data, status = 200)
    
    
@api_view(['GET', 'POST', 'DELETE', 'PUT'])     # TODO: Figure out how to restrict DELETE and POST (and friend only GETs) to authenticated users (I assume it involves these decorator things.)
def post_view(request, pid):
    if request.method == 'GET':
        # TODO: if request host/url is some other node's, do a remote request
        post = PostModel.objects.get(id=pid)
        # TODO: Ensure that the author requesting the post has permission to view it (friend/public)
        serialized_post = PostSerializer(post)
        return JsonResponse(serialized_post.data, status=200)
    
    elif request.method == 'POST':
        # TODO: Authentication stuff
        post = PostModel.objects.get(id=pid)
        deserializer = PostSerializer(post)
        deserializer.update(post, json.loads(request.body))   # deserialize and yeet in db
        
        # serialize the updated post and send it back (can use to validate result is expected)
        return JsonResponse(deserializer.data, status=200)
    
    elif request.method == 'DELETE':
        # TODO: Authentication stuff
        # Delete the thing, and if it succeeds, respond with a 200 TODO: verify 200 is the right code for a succesful delete.
        if PostModel.objects.get(id=pid).delete()[0]:
            return JsonResponse({}, status=200)     # Could (if we want) instead return the result of the delete at index 1, which has info about what was deleted.
        else:
            return JsonResponse({}, status=404)     # TODO: 404 may not be the right code.
    
    elif request.method == 'PUT':
        #TODO: Prolly need to authenticate this too. Just imagine all the people who will think they've been hacked when trolls post tot their account. Verify if we need to auth here.
        deserializer = PostSerializer()
        deserializer.create(json.loads(request.body))
        return JsonResponse(deserializer.data, status=200)  #TODO: Fix the test for this, it only expects to receive the new id, and not the whole json object.
    
    
# @api_view(['GET', 'POST'])
# def posts_view(request, pid):
#     if request.method == 'GET':
#         # TODO: if request host/url is some other node's, do a remote request
#         # post = PostModel.objects.get(id=pid)
#         # TODO: Ensure that only the posts that the requestor has permission to view are returned (friend/public)
#         # serialized_post = PostSerializer(post)
#         # return JsonResponse(serialized_post.data, status=200)
        
        