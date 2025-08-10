from rest_framework import serializers
from .models import University, Contact, PointOfContact, FoundingMember, UniversityChapter


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = "__all__"


class UniversitySerializer(serializers.ModelSerializer):
    class Meta:
        model = University
        fields = "__all__"


class PointOfContactSerializer(serializers.ModelSerializer):
    contact = ContactSerializer()

    class Meta:
        model = PointOfContact
        fields = ["contact"]


class FoundingMemberSerializer(serializers.ModelSerializer):
    contact = ContactSerializer()

    class Meta:
        model = FoundingMember
        fields = ["contact", "role", "current_level_of_study", "discipline"]


class UniversityChapterSerializer(serializers.ModelSerializer):
    university = UniversitySerializer()
    point_of_contact = PointOfContactSerializer()
    founding_members = FoundingMemberSerializer(many=True)

    class Meta:
        model = UniversityChapter
        fields = ["university", "point_of_contact", "founding_members"]

    def create(self, validated_data):
        # Extract nested data
        university_data = validated_data.pop("university")
        poc_data = validated_data.pop("point_of_contact")
        founding_members_data = validated_data.pop("founding_members")

        # Create University
        university = University.objects.create(**university_data)

        # Create PointOfContact and its Contact
        poc_contact_data = poc_data.pop("contact")
        poc_contact = Contact.objects.create(**poc_contact_data)
        point_of_contact = PointOfContact.objects.create(contact=poc_contact)

        # Create FoundingMembers
        founding_members = []
        for member_data in founding_members_data:
            contact_data = member_data.pop("contact")
            contact = Contact.objects.create(**contact_data)
            member = FoundingMember.objects.create(contact=contact, **member_data)
            founding_members.append(member)

        # Create UniversityChapter and link everything
        chapter = UniversityChapter.objects.create(
            university=university,
            point_of_contact=point_of_contact
        )
        chapter.founding_members.set(founding_members)

        return chapter
