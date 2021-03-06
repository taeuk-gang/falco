# Generated by Django 2.1.7 on 2019-04-10 10:32

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    dependencies = [("projects", "0007_project_screenshot_url")]

    operations = [
        migrations.CreateModel(
            name="Script",
            fields=[
                (
                    "uuid",
                    models.UUIDField(
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                    ),
                ),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
                ("name", models.CharField(max_length=100)),
                ("script", models.TextField()),
            ],
            options={
                "ordering": ("-created_at",),
                "get_latest_by": "created_at",
                "abstract": False,
            },
        ),
        migrations.AlterField(
            model_name="project",
            name="screenshot_url",
            field=models.CharField(blank=True, max_length=1000, null=True),
        ),
        migrations.AddField(
            model_name="script",
            name="project",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="scripts",
                to="projects.Project",
            ),
        ),
    ]
