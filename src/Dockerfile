FROM python:3.12-alpine
RUN pip3 install flask
RUN pip3 install flask-login
RUN pip3 install flask-SQLAlchemy
RUN pip3 install werkzeug
WORKDIR /opt/app
COPY . /opt/app
CMD [ "python", "./app.py" ]