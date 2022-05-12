from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

# using a template to render a html file
# prefix templates with directory name for namespace
def index(request):
	return render(request, "hello/index.html")

# def brian(request):
# 	return HttpResponse("Hello, Brian!")

def greet(request, name):
	return render(request, "hello/greet.html", {
		"name": name.capitalize()
	})