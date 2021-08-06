# AI_1709526_Voice_Recognition_DoThanhCong
# Web : Voice chatbot
    + index.html
    + Run rasa 
# App.js file setting from expo
    - HotAcess : link server 
    - Use : ngrok port 5005
# Chatbot 
    - Create environment env + conda
*    - Acess environment conda 
    - 2 cmd: 
        + rasa run --model models --enable-api --cors "*"
        + rasa run actions
    - Database form report.sql on DataOfBot
# Docker
* docker build /actions app
* docker-compose up
* ngrok http 5005

