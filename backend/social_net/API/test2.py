"""
Provides tests for the endpoints.

These tests verify that the endpoints return the expected JSON data.

Example:
To run these tests, execute the following command from the command line:
    $ python manage.py test
"""

# TODO: Add license, more endpoints.
from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient
from django.contrib.auth.models import User
import json
# Use the User class here



# from .models import Post, Comment, Like , Author

from django.test import TestCase, Client
from . import models
import datetime
import uuid
import random


class AuthorEndpointTest(TestCase):
    """
    Contains tests for the Post endpoint. The Post endpoint enables the
    creation, updating and fetching of posts.

    These tests verify that the Post endpoint returns the expected JSON data,
    and that the creation and updating of posts works as expected.
    """

    # maxDiff = None

    LOCAL_NODE_ADDR = "http://127.0.0.1:8000/"

    SAMPLE_AUTHORS = []
    SAMPLE_AUTHOR_NAMES = ["John", "Jane", "Bob", "Alice", "Joe", "Mary", "Tom", "Sally", "Jack", "Jill"]
    SAMPLE_PROFILE_IMAGE_URLs = ["https://www.google.com", "https://www.facebook.com", "https://www.twitter.com"]

    @classmethod
    def convertBytesResponseToJson(cls, bytes):
        return json.dumps(json.loads(bytes.decode('utf-8')))

    @classmethod
    def convertDictToJson(cls, dict):
        return json.dumps(dict)

    @classmethod
    def convertDictToBytes(cls, dict):
        return json.dumps(dict).encode('utf-8')

    @classmethod
    def createAuthor(cls):
        id = str(uuid.uuid4())
        displayName = f"{random.choice(cls.SAMPLE_AUTHOR_NAMES)} {random.choice(cls.SAMPLE_AUTHOR_NAMES)}"
        author = {
            "type": "author",
            # "id": f"{cls.LOCAL_NODE_ADDR}authors/{id}",
            "id": id,
            "host": cls.LOCAL_NODE_ADDR,
            "displayName": displayName,
            "url": f"{cls.LOCAL_NODE_ADDR}authors/{id}",
            "github": f"http://github.com/{displayName}",
            "profileImage": random.choice(cls.SAMPLE_PROFILE_IMAGE_URLs)

        }

        return author

    @classmethod
    def createAuthorJson(cls, author):
        return json.dumps(author)

    @classmethod
    def addAuthorToDatabase(cls, author):
        return models.AuthorModel.objects.create(
            type=author["type"],
            id=author["id"],
            host=author["host"],
            displayName=author["displayName"],
            url=author["url"],
            github=author["github"],
            profileImage=author["profileImage"]
        )

    @classmethod
    def pushAuthorsToDatabase(cls, num=3):
        for i in range(num):
            author = cls.createAuthor()
            # authorJson = cls.createAuthorJson(author)
            cls.addAuthorToDatabase(author)
            cls.SAMPLE_AUTHORS.append(author)

    def setUp(self):
        self.client = APIClient()

    def test_get_all_authors(self):
        self.pushAuthorsToDatabase()
        expected = {
            "type": "authors",
            "items": self.SAMPLE_AUTHORS
        }
        response = self.client.get("/services/authors")
        res = self.convertBytesResponseToJson(response.content)
        exp = self.convertDictToJson(expected)
        # print("\n\n\nresponse.content:", res, res.__class__)
        # print("\n\n\nexpected:", exp, exp.__class__)
        self.assertEqual(response.status_code, 200)
        self.assertJSONEqual(res, exp)
        # self.SAMPLE_AUTHORS = []

    def test_get_author_by_id(self):
        # print(self.SAMPLE_AUTHORS)
        self.pushAuthorsToDatabase()
        # print(self.SAMPLE_AUTHORS)
        author = self.SAMPLE_AUTHORS[0]
        author_id = author['id'].split('/')[-1]
        print("\n\n\nauthor_id:", author_id, author_id.__class__)
        response = self.client.get("/services/authors/" + author_id)
        self.assertEqual(response.status_code, 200)
        res = response.content
        exp = self.convertDictToJson(author)
        print("\n\n\nresponse.content:", res, res.__class__)
        print("\n\n\nexpected:", exp, exp.__class__)
        self.assertJSONEqual(res, exp)

    def test_put_new_author(self):
        author = self.createAuthor()
        authorJson = self.createAuthorJson(author)
        print("\n\n\nauthorJson:", authorJson, authorJson.__class__)
        response = self.client.put("/services/authors/" + author["id"], authorJson, content_type="application/json")
        self.assertEqual(response.status_code, 200)
        res = response.content
        exp = self.convertDictToJson({"success": True})
        print("\n\n\nresponse.content:", res, res.__class__)
        print("\n\n\nexpected:", exp, exp.__class__)
        self.assertJSONEqual(res, exp)



class PostEndpointTest(TestCase):
    """
    Contains tests for the Post endpoint. The Post endpoint enables the
    creation, updating and fetching of posts.

    These tests verify that the Post endpoint returns the expected JSON data,
    and that the creation and updating of posts works as expected.
    """

    maxDiff = None

    LOCAL_NODE_ADDR = "http://127.0.0.1:8000/"

    SAMPLE_AUTHOR_ID = str(uuid.uuid4())
    SAMPLE_AUTHOR = {
        "type": "author",
        "id": SAMPLE_AUTHOR_ID,
        "host": LOCAL_NODE_ADDR,
        "displayName": "John Doe",
        "url": f"http://{  LOCAL_NODE_ADDR  }/authors/{  SAMPLE_AUTHOR_ID  }",
        "github": f"http://github.com/johndoe",
        "profileImage": "https://www.google.com"
    }
    SAMPLE_POSTS = []
    SAMPLE_TITLES = ["Title 1", "Title 2", "Title 3", "Title 4", "Title 5", "Title 6", "Title 7", "Title 8", "Title 9", "Title 10"]
    SAMPLE_DESCRIPTIONS = ["Description 1", "Description 2", "Description 3", "Description 4", "Description 5", "Description 6", "Description 7", "Description 8", "Description 9", "Description 10"]
    SAMPLE_CATEGORIES = ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5", "Category 6", "Category 7", "Category 8", "Category 9", "Category 10"]
    SAMPLE_CONTENT = ["Content 1", "Content 2", "Content 3", "Content 4", "Content 5", "Content 6", "Content 7", "Content 8", "Content 9", "Content 10"]

    @classmethod
    def convertDictToJson(cls, dict):
        return json.dumps(dict)

    @classmethod
    def convertBytesToDict(cls, bytes):
        return bytes.decode("utf-8")

    @classmethod
    def createPost(cls):
        id = str(uuid.uuid4())
        title = random.choice(cls.SAMPLE_TITLES)
        description = random.choice(cls.SAMPLE_DESCRIPTIONS)
        categories = random.sample(cls.SAMPLE_CATEGORIES, 2)
        content = random.choice(cls.SAMPLE_CONTENT)
        post = {
            "type": "post",
            "id": id,
            "title": title,
            "description": description,
            "categories": categories,
            "content": content,
            "author": cls.SAMPLE_AUTHOR_ID,
            "contentType": "text/plain",
            "visibility": True,
            "unlisted": False,
            "origin": "http://127.0.0.1:8000/origin",
            "source": "http://127.0.0.1:8000/source",
            "count": 0,
            # "published": "2015-03-09T13:07:04+00:00",
            # "comments": f"{cls.LOCAL_NODE_ADDR}authors/{cls.SAMPLE_AUTHOR_ID}/posts/{id}/comments",
            # "commentsSrc": {
            #     "type": "comments",
            #     "page": 1,
            #     "size": 1,
            #     "post": f"{cls.LOCAL_NODE_ADDR}authors/{cls.SAMPLE_AUTHOR_ID}/posts/{id}",
            #     "id": f"{cls.LOCAL_NODE_ADDR}authors/{cls.SAMPLE_AUTHOR_ID}/posts/{id}/comments",
            #     "comments": [
            #         {
            #             "type": "comment",
            #             "author": cls.SAMPLE_AUTHOR,
            #             "comment": "This is a comment",
            #             "contentType": "text/plain",
            #             "published": "2015-03-09T13:07:04+00:00",
            #             "id": f"{cls.LOCAL_NODE_ADDR}authors/{cls.SAMPLE_AUTHOR_ID}/posts/{id}/comments/{str(uuid.uuid4())}",
            #         }
            #     ]
            }
        # }
        return post

    @classmethod
    def addPostToDatabase(cls, post):
        # print("post:", post)
        # print("post:", len(post["id"]))
        return models.PostsModel.objects.create(
            type=post["type"],
            id=post["id"],
            title=post["title"],
            description=post["description"],
            categories=post["categories"],
            content=post["content"],
            author=post["author"],
            contentType=post["contentType"],
            # published=post["published"],
            visibility=post["visibility"],
            unlisted=post["unlisted"],
            origin=post["origin"],
            source=post["source"],
            # count=post["count"],
            # comments=post["comments"],
            # commentsSrc=post["commentsSrc"],
        )

    @classmethod
    def pushPostsToDatabase(cls, num=3):
        for i in range(num):
            post = cls.createPost()
            cls.addPostToDatabase(post)
            # models.PostsModel.objects.create(post)
            cls.SAMPLE_POSTS.append(post)

    def setUp(self):
        self.client = APIClient()
        # self.author_id = str(uuid.uuid4())
        models.AuthorModel.objects.create(
            type=self.SAMPLE_AUTHOR["type"],
            id=self.SAMPLE_AUTHOR["id"],
            host=self.SAMPLE_AUTHOR["host"],
            displayName=self.SAMPLE_AUTHOR["displayName"],
            url=self.SAMPLE_AUTHOR["url"],
            github=self.SAMPLE_AUTHOR["github"],
            profileImage=self.SAMPLE_AUTHOR["profileImage"],
        )

    def test_get_all_posts(self):
        # self.pushPostsToDatabase()
        response = self.client.get(reverse("PostsView", kwargs={"author_id": self.SAMPLE_AUTHOR_ID}))
        self.assertEqual(response.status_code, 200)
        res = response.content
        exp = self.convertDictToJson({"posts": self.SAMPLE_POSTS})
        self.assertJSONEqual(res, exp)

    def test_get_post_by_id(self):
        print(self.SAMPLE_AUTHOR_ID, self.SAMPLE_AUTHOR)
        self.pushPostsToDatabase()
        response = self.client.get(reverse("PostsRetriveView", kwargs={"author_id": self.SAMPLE_AUTHOR_ID, "post_id": self.SAMPLE_POSTS[0]["id"].split("/")[-1]}))
        self.assertEqual(response.status_code, 200)
        res = response.content
        res = bytes.decode(res, "utf-8")
        res = json.loads(res)
        del res["published"]
        res = json.dumps(res).encode('utf-8')
        exp = self.SAMPLE_POSTS[0]
        exp["author"] = self.SAMPLE_AUTHOR
        exp["count"] = 0
        exp["comments"] = ""
        exp["commentsSrc"] = []
        exp = self.convertDictToJson(exp)
        # print("\n\n\nres:", res, res.__class__)
        # print("\n\n\nexp:", exp, exp.__class__)
        self.assertJSONEqual(res, exp)

    def test_get_comments_for_post(self):
        self.pushPostsToDatabase()
        response = self.client.get(reverse("CommentsView", kwargs={"author_id": self.SAMPLE_AUTHOR_ID, "post_id": self.SAMPLE_POSTS[0]["id"].split("/")[-1]}))
        self.assertEqual(response.status_code, 200)
        res = response.content
        exp = self.convertDictToJson({"type": "comments", "page": 1, "size": 5, "post": self.SAMPLE_POSTS[0]["id"], "id": self.SAMPLE_POSTS[0]["id"], "comments": []})
        # print("\n\n\nres:", res, res.__class__)
        # print("\n\n\nexp:", exp, exp.__class__)
        self.assertJSONEqual(res, exp)





