from django.db import models


# Create your models here.
class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='portfolio/logo')
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


class activity(models.Model):
    name = models.CharField(max_length=250)
    position = models.CharField(max_length=250, blank=True, null=True)
    start = models.DateField()
    end = models.DateField(null=True)
    role_desc = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.name


class Education(models.Model):
    institution = models.CharField(max_length=250)
    location = models.CharField(max_length=250, blank=True, null=True)
    degree = models.CharField(max_length=250)
    gpa = models.DecimalField(decimal_places=2, max_digits=3)
    logo = models.ImageField(upload_to="portfolio/logo")
    start = models.DateField()
    end = models.DateField(null=True, blank=True)
    activities = models.ManyToManyField(activity, blank=True)

    def __str__(self):
        return self.institution


class Experience(models.Model):
    institution = models.CharField(max_length=250)
    logo = models.ImageField(upload_to="portfolio/logo", null=True)
    start = models.DateField()
    end = models.DateField(null=True, blank=True)
    position = models.CharField(max_length=500)
    role_description = models.TextField()

    def __str__(self):
        return self.institution
