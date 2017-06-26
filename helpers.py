
def time_conversion(h):
	import time
	import datetime

	weekday = time.strftime("%A")
	h = h[::-1]
	
	if h[0] != ' ':

		hour = datetime.datetime.strptime(h,'%H:%M').strftime('%I:%M %p')
		return weekday + ', ' + hour
	else:
		return weekday + ', ' + h

def get_weather_data(data):

	keys = ['name', 'country', 'temp_c', 'temp_f', 'text', 'is_day','wind_kph', 'localtime']

	location = data['location']
	current  = data['current']
	condition = current['condition']

	humidity = current['humidity']

	results = {'humidity': humidity}

	for (key,value) in condition.items():
		if key in keys:
			results[key] = value

	
	for (key,value), (key2,value2) in zip(location.items(), current.items()):
		if key in keys:
			if key == 'localtime':
				hour = value[::-1]
				value = time_conversion(hour[0:5])
			results[key] = value

		if key2 in keys:
			if key2 == 'temp_c' or key2 == 'temp_f':
				value2 = round(int(value2))
			results[key2] = value2
	return results

