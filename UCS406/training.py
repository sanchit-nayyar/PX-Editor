import MySQLdb

db = MySQLdb.connect('localhost', 'root', 'password', 'UCS406')
cursor = db.cursor()

f = open('train_file.txt')
content = f.read()
f.close()

content = content.replace('\n', ' ')
content = content.split(' ')

for word in content:
	cursor.execute('UPDATE WordList SET Frequency = Frequency + 1 WHERE Word = \'' + word + '\';')
	db.commit()
	print word + ' ',

print ''