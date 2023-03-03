from django.contrib.auth.models import User, Group
from .models import AuthorModel, PostModel
from rest_framework import serializers

class AuthorSerializer(serializers.ModelSerializer):
    type = serializers.CharField(max_length=100, default='')
    id = serializers.CharField(max_length=150, default='')
    url = serializers.CharField(max_length=100, default='')
    host = serializers.CharField(max_length=150,default='')
    displayName = serializers.CharField(max_length=150, default='')
    github = serializers.CharField(max_length=150, default='')
    profileImage = serializers.CharField(max_length=500, default='')

    def update(self, instance, validated_data):
        instance.type = validated_data.get('type', instance.type)
        instance.id = validated_data.get('id', instance.id)
        instance.url = validated_data.get('url', instance.url)
        instance.host = validated_data.get('host', instance.host)
        instance.displayName = validated_data.get('displayName', instance.displayName)
        instance.github = validated_data.get('github', instance.github)
        instance.profileImage = validated_data.get('profileImage', instance.profileImage)
        
        return instance

    class Meta:
        model = AuthorModel
        # Tuple of serialized model fields (see link [2])
        fields = ('type', 'id', 'host', 'displayName', 'github', 'url', 'profileImage')
        
        
class PostSerializer(serializers.ModelSerializer):
    # TODO: Find a way to yeet comments into the serialized output
    # Guess: can prolly do this by declaring an additional
    # serializer.PrimaryKeyRelatedField as a class attribute and then doing some
    # processing to fill it somehow.
    class Meta:
        model = PostModel
        fields = ['title', 'origin', 'source', 'description',
                  'contentType', 'content', 'author', 'categories',
                  'count', 'comments', 'published', 'visibility', 'unlisted']
        extra_kwargs = {
            'title': {'required': True},
            'origin': {'required': False},
            'source': {'required': False},
            'description': {'required': True},
            'contentType': {'required': True},
            'content': {'required': True},
            'author': {'required': True},
            'categories': {'required': True, 'allow_empty':True},
            'count': {'required': True},
            'comments': {'required': True},
            'published': {'required': True},
            'visibility': {'required': True},
            'unlisted': {'required': True}
        }