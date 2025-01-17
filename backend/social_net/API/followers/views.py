from rest_framework.decorators import api_view
from django.http import JsonResponse
from ..models import AuthorModel, PostsModel, CommentsModel, LikeModel
from ..serializers import PostsSerializer, AuthorSerializer, CommentsSerializer, LikeSerializer
import json
import uuid
@api_view(['GET'])
def AuthorFollowersView(request, uid):
    """
    API endpoint that allows users to be viewed or edited.
    """
    
    author_object = AuthorModel.objects.get(id=uid).followers
    # serialized_object = AuthorSerializer(author_object)
    # output = serialized_object.data
    return JsonResponse({uid:author_object}, status = 200)

@api_view(['DELETE', 'PUT', 'GET'])
def AuthorFollowersOperationsView(request, uid, foreign_uid):
    """
    API endpoint that allows users to be viewed or edited.
    """

    if request.method == 'GET':
        author_object = AuthorModel.objects.get(id=uid).followers
        if foreign_uid in author_object:
            return JsonResponse({"status": "success"}, status = 200)
        else:
            return JsonResponse({"status": "failure"}, status = 200)

    elif request.method == 'PUT':
        author_object = AuthorModel.objects.get(id=uid)
        author_object.followers.append(foreign_uid)
        serialized_object = AuthorSerializer(author_object)
        parameters = json.loads(request.body)
        output = serialized_object.data
        author_object.save()
        return JsonResponse(output, status = 200)
    
    elif request.method == 'DELETE':
        author_object = AuthorModel.objects.get(id=uid)
        author_object.followers.remove(foreign_uid)
        serialized_object = AuthorSerializer(author_object)
        parameters = json.loads(request.body)
        output = serialized_object.data
        author_object.save()
        return JsonResponse(output, status = 200)
    

@api_view(['GET', 'PUT'])
def FollowView(request, uid, uid2):
    """
    API endpoint that allows users to be viewed or edited.
    """
    #checks friendship
    if request.method == 'GET':
        author_object = AuthorModel.objects.get(id=uid).followers
        if uid2 in author_object:
            author_object_2 = AuthorModel.objects.get(id=uid2).followers
            if uid in author_object_2:
                return JsonResponse({"status": "true_friends"}, status = 200)
            else:
                return JsonResponse({"status": "friends"}, status = 200)
        else:
            author_object_2 = AuthorModel.objects.get(id=uid2).followers
            if uid in author_object_2:
                return JsonResponse({"status": "friends"}, status = 200)
            else:
                return JsonResponse({"status": "not friends"}, status = 200)
    elif request.method == 'PUT':
        author_object = AuthorModel.objects.get(id=uid)
        author_object2 = AuthorModel.objects.get(id=uid2)
        author_object.followers.append(uid2)
        serialized_object = AuthorSerializer(author_object)
        serialized_object2 = AuthorSerializer(author_object2)
        parameters = json.loads(request.body)
        output = serialized_object.data
        output2 = serialized_object2.data

        author_object.save()
        follow_output = {
            "type": "Follow",
            "type": serialized_object.displayName + " wants to follow " + serialized_object2.displayName,      
            "actor": output,
            "object": output2,
        }

        return JsonResponse(follow_output, status = 200)
    