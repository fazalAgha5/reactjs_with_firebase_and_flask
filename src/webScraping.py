import requests
from bs4 import BeautifulSoup
from flask import Flask,jsonify
from flask_cors import CORS
app=Flask(__name__)
CORS(app)

@app.route('/',methods=['GET'])
def test():
  data = {"the_west":getTheWestNews(),"The_Courier_Mail_News":getTheCourierMailNews(),"the_age_news": getTheAgeNews(),"the_austrailian_news":getTheAustralianNews()}
  print(data)
  return jsonify(data)



def getTheAgeNews():
  url="https://www.theage.com.au"
  page = requests.get(url) 
  soup = BeautifulSoup(page.content, 'html.parser')
  section=soup.find(class_="DF6D8")
  topNews=section.find_all(class_="_1YzQk")
  heading=[item.find("h3").get_text() for item in topNews]
  news=[item.find(class_="_3XEsE").get_text() for item in topNews]
  value={"headlines":heading,"news":news}
  return value


def getTheAustralianNews():
  url="https://www.theaustralian.com.au/"
  page = requests.get(url) 
  soup = BeautifulSoup(page.content, 'html.parser')
  heading=[]
  news=[]
  for x in range(8):
    post=soup.find(class_="pos pos"+str(x+2))
    heading.append(post.find(class_="story-block__heading").get_text())
    try:
      news.append(post.find(class_="story-block__standfirst").get_text())  
    except:
      print("")
      heading.pop()
    value={"headlines":heading,"news":news}
  return value

def getTheWestNews():
  url="https://thewest.com.au/"
  page = requests.get(url) 
  soup = BeautifulSoup(page.content, 'html.parser')
  heading=[]
  news=[]
  section=soup.find_all(class_="PortraitCard css-2dzcl1")
  counter=0
  for x in section:
    if(counter==10):
      break
    counter+=1
    heading.append(x.find(class_="Card-HeadlineText css-opujcp").get_text())
    try:
      news.append(x.find(class_="Card-Teaser css-1o3aiti").get_text())
    except:
      if(len(heading)>0):
        heading.pop()
  value={"headlines":heading,"news":news}
  return value

def getTheCourierMailNews():
  url="https://www.couriermail.com.au/"
  page = requests.get(url) 
  soup = BeautifulSoup(page.content, 'html.parser')
  heading=[]
  news=[]
  section=soup.find_all(class_="tge-cardv2")
  counter=0
  for x in section:
    if(counter==8):
      break
    counter+=1
    h=x.find("h2").get_text()
    h=h.replace("premium_icon","")
    heading.append(h)
    news.append(x.find(class_="tge-cardv2_standfirst").get_text())
  value={"headlines":heading,"news":news}
  return value






  if __name__ == '__main__':
    app.run(host='0.0.0.0',port=5000)
