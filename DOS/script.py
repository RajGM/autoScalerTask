
from locust import HttpUser, task, between
import random
import json
import requests

url = 'localhost:3000'

getTokenReqArray = []

getTokenHeaders = {
    'Content-Type': 'application/json'
    }

def getRequestBody():
    return {
    "name": 'John Doe',
    "email": 'john_doe@example.com'
    }

class WebsiteUser(HttpUser):
    wait_time = between(1, 3)
    i = -1
    @task
    def tokenizationAddApi(self):
        self.i = self.i + 1
        # print(self.i)
        self.client.post(url = '/data', json = getRequestBody(), headers = getTokenHeaders)

    # @task
    # def getTokenApi(self):
    #     self.i = self.i + 1
    #     print(self.i)
    #     self.client.post(url = '/network/getToken', json = getTokenReq(), headers = getTokenHeaders)

# locust -f script.py host=http://localhost:3000