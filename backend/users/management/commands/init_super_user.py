from django.core.management import BaseCommand, CommandError
from users.models import User
from django.utils import timezone


class Command(BaseCommand):
    help = "my help XD"

    def add_arguments(self, parser):
        parser.add_argument("username", type=str)
        parser.add_argument("email", type=str)
        parser.add_argument("password", type=str)


    def handle(self, *args, **options):
        username = options.get('username')
        email = options.get('email')
        password = options.get('password')

        try:
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
        except Exception as e:
            raise CommandError(f"User not created: {e}")

        self.stdout.write(self.style.SUCCESS('Successfully created superuser'))