from django.contrib import admin
from .models import University, Contact, PointOfContact, FoundingMember, UniversityChapter


@admin.register(University)
class UniversityAdmin(admin.ModelAdmin):
    list_display = ("name", "district", "state", "website")
    search_fields = ("name", "district", "state")


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "phone_number", "linkedin")
    search_fields = ("name", "email")


@admin.register(PointOfContact)
class PointOfContactAdmin(admin.ModelAdmin):
    list_display = ("contact",)


@admin.register(FoundingMember)
class FoundingMemberAdmin(admin.ModelAdmin):
    list_display = ("contact", "role", "current_level_of_study", "discipline")
    list_filter = ("role", "current_level_of_study")
    search_fields = ("contact__name",)


@admin.register(UniversityChapter)
class UniversityChapterAdmin(admin.ModelAdmin):
    list_display = ("university", "point_of_contact")
    filter_horizontal = ("founding_members",)  # Nice UI for ManyToMany fields
