FROM python:3.9

WORKDIR /api

COPY . .

RUN pip install -r requirements.txt

EXPOSE 5002

CMD [ "python", "-u", "app.py" ]