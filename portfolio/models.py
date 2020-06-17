from django.db import models

# Create your models here.
class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='portfolio/images')
    url = models.URLField(blank=True)
    featured = models.BooleanField(default=False)
    date = models.DateField()


    def __str__(self):
        return f"{self.trunc()} ({self.date})"

    def trunc(self):
        if len(self.title) < 2:
            return self.title
        elif len(self.title) < 5:
            return self.title
        elif len(self.title) < 10:
            return self.title
        else:
            return self.title[0:15] + "..."

