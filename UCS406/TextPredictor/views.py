# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
import os

# Create your views here.

def home(request):
	os.system('g++ -o word_build.out TextPredictor/word_build.cpp -I/usr/include/mysql -lmysqlclient')
	os.system('./word_build.out TextPredictor/static/res/js/trie_words.js')
	return render(request, 'TextPredictor/index.html', {})