FROM python:3.11.9-alpine3.20

WORKDIR /app

COPY . .

RUN pip install -r requirements.txt

EXPOSE ${EXPOSE_PORT}

CMD ["sh", "-c", "python manage.py runserver 0.0.0.0:${EXPOSE_PORT}"]
