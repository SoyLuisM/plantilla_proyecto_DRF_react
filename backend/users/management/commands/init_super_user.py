from django.core.management import BaseCommand, CommandError
from users.models import User
from django.utils import timezone


class Command(BaseCommand):
    help = "Este escript crea un nuevo usuario adminstrador: python manage.py init_super_user username email password"

    def add_arguments(self, parser):
        parser.add_argument("username", type=str)
        parser.add_argument("email", type=str)
        parser.add_argument("password", type=str)


    def handle(self, *args, **options):
        username = options.get('username')
        email = options.get('email')
        password = options.get('password')

        try:
            if not User.objects.filter(is_superuser=True):
                super_user= User.objects.create_superuser(
                    username=username,
                    email= email,
                    password=password,
                    is_superuser=True,
                    is_staff= True,
                    is_active=True,
                    date_joined= timezone.now()
                )
                super_user.save()
            else:
                raise Exception('superuser is already exist')
        except Exception as e:
            raise CommandError(f"User not created: {e}")

        self.stdout.write(self.style.SUCCESS('Successfully created superuser'))