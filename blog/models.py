from django.db import models


# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=250)
    author = models.CharField(max_length=100, blank=True)
    entry = models.TextField()
    date = models.DateField()

    def __str__(self):
        return f"({self.date}) {self.trunc()} "

    def trunc(self):
        if len(self.title) > 30:
            return (self.title)[0:15] + "..."

    def search_post(self, key):
        return key.lower() in self.title.lower() or key.lower() in self.author.lower() or key.lower() in self.entry.lower() or key.lower() in str(self.date).lower()