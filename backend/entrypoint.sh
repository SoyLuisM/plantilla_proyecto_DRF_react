#!/bin/sh


python manage.py makemigrations
python manage.py migrate
python manage.py init_super_user ${SUPER_USER_NAME} ${SUPER_USER_EMAIL} ${SUPER_USER_PASSWORD}
python manage.py collectstatic
python manage.py runserver 0.0.0.0:${EXPOSE_PORT}