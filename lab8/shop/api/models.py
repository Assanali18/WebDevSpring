from django.db import models


class ProductCategory(models.Model):
    name = models.CharField(max_length=256)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    # photo = models.ImageField(upload_to='products_images')
    likes = models.IntegerField(default=0)
    link = models.URLField()
    category = models.ForeignKey(ProductCategory, on_delete=models.CASCADE)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name



