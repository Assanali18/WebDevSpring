from django.http import JsonResponse

from api.models import Product, ProductCategory


def list_products(request):
    products = Product.objects.all().values()
    return JsonResponse(list(products), safe=False)


def get_product(request, product_id):
    product = Product.objects.values().get(id=product_id)
    return JsonResponse(product)


def list_categories(request):
    categories = ProductCategory.objects.all().values()
    return JsonResponse(list(categories), safe=False)


def get_category(request, category_id):
    category = ProductCategory.objects.values().get(id=category_id)
    return JsonResponse(category)


def list_products_by_category(request, category_id):
    category = Product.objects.filter(category_id=category_id) if category_id else Product.objects.all()
    return JsonResponse(list(category), safe=False)
