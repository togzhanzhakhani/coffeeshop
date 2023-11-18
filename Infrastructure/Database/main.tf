provider "local" {
}

resource "null_resource" "database_migration" {
  provisioner "local-exec" {
    command = <<-EOT
      cd ../Backend_py
      python manage.py migrate
    EOT
  }
}