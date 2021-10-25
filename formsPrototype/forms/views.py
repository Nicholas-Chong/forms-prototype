from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response as RestResponse
from .serializers import FormSerializer, ResponseSerializer
from .models import Form, Response
import json

# Create your views here.

class FormViewSet(viewsets.ModelViewSet):
    queryset = Form.objects.all()
    serializer_class = FormSerializer


class ResponseViewSet(viewsets.ModelViewSet):
    queryset = Response.objects.all()
    serializer_class = ResponseSerializer

    def get_queryset(self):
        queryset = Response.objects.all()
        form = self.request.query_params.get("form")
        respondent = self.request.query_params.get("respondent")

        if form is not None:
            queryset = queryset.filter(form=form)

        if respondent is not None:
            queryset = queryset.filter(respondant=respondent)

        return queryset
    
    @action(detail=False, methods=["post"])
    def save_form_responses(self, request):
        print(json.loads(request.body))
        serializer = ResponseSerializer(data=json.loads(request.body), many=True)

        if serializer.is_valid():
            serializer.save()
            return RestResponse({"status": "success", "data": serializer.data})
        else:
            print(serializer.errors)
            return RestResponse({"status": "error", "data": serializer.errors})
