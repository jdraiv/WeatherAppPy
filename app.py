import requests
import helpers

from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def homepage(data = None):

	url =  requests.get('http://ipinfo.io/json')

	data = url.json()
	city = data['city']

	weather_api_url = requests.get('http://api.apixu.com/v1/current.json?key=86e3223b387d4a92825190205172106&q=%s' % (city))

	weather_data = weather_api_url.json()
	d = helpers.get_weather_data(weather_data)

	return render_template('home.html', data = d)



